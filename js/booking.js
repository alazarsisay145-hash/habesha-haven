(() => {
  const app = window.HHApp;
  if (!app) return;

  const BookingService = {
    API_ENDPOINT: '/api/bookings',
    submit(data) {
      return new Promise((resolve) => {
        const existing = (() => {
          try {
            const parsed = JSON.parse(localStorage.getItem('bj_bookings') || '[]');
            return Array.isArray(parsed) ? parsed : [];
          } catch (error) {
            return [];
          }
        })();
        const payload = { id: `booking-${Date.now()}`, timestamp: new Date().toISOString(), data };
        existing.push(payload);
        app.safeStorageSet('bj_bookings', JSON.stringify(existing));
        resolve(payload);
      });
    }
  };

  window.BookingService = BookingService;

  function renderRoomOptionList(select, includeAll = false) {
    if (!select) return;
    const current = select.value;
    select.innerHTML = `${includeAll ? `<option value="all">${app.t('room_type_all')}</option>` : `<option value="">${app.t('placeholder_summary_room')}</option>`}` + app.ROOMS.map((room) => `<option value="${room.id}">${app.t(room.nameKey)}</option>`).join('');
    if ([...select.options].some((option) => option.value === current)) select.value = current;
  }

  function initRoomsPage() {
    const roomsPage = document.querySelector('[data-rooms-page]');
    if (!roomsPage) return;
    const form = {
      checkin: document.querySelector('[data-room-checkin]'),
      checkout: document.querySelector('[data-room-checkout]'),
      guests: document.querySelector('[data-room-guests]'),
      type: document.querySelector('[data-room-type]')
    };
    const results = {
      grid: document.querySelector('[data-rooms-grid]'),
      nights: document.querySelector('[data-rooms-nights]'),
      count: document.querySelector('[data-rooms-count]'),
      empty: document.querySelector('[data-rooms-empty]'),
      modal: document.querySelector('[data-room-modal-shell]'),
      modalTitle: document.querySelector('[data-room-modal-title]'),
      modalText: document.querySelector('[data-room-modal-text]'),
      modalMeta: document.querySelector('[data-room-modal-meta]'),
      modalImage: document.querySelector('[data-room-modal-image]')
    };
    let releaseTrap = null;

    renderRoomOptionList(form.type, true);
    const today = app.todayISO();
    const tomorrow = app.addDaysISO(today, 1);
    form.checkin.min = today;
    form.checkout.min = tomorrow;
    form.checkin.value = form.checkin.value || today;
    form.checkout.value = form.checkout.value || tomorrow;

    const render = () => {
      form.checkout.min = app.addDaysISO(form.checkin.value || today, 1);
      if (!form.checkout.value || form.checkout.value <= form.checkin.value) {
        form.checkout.value = app.addDaysISO(form.checkin.value || today, 1);
      }
      const nights = app.differenceInNights(form.checkin.value, form.checkout.value) || 1;
      const guests = Number(form.guests.value || 1);
      const type = form.type.value || 'all';
      const filtered = app.ROOMS.filter((room) => room.maxGuests >= guests && (type === 'all' || room.id === type));
      results.grid.innerHTML = filtered.map((room) => `
        <article class="room-card glass-card" id="${room.id}" data-reveal>
          <div class="card-media">
            <img src="${room.image}" alt="${app.t(room.altKey)}" width="1200" height="900" loading="lazy" decoding="async" data-fallback-label="${app.t(room.nameKey)}">
          </div>
          <div class="card-body">
            <div class="card-header">
              <div>
                <h3>${app.t(room.nameKey)}</h3>
                <p>${app.t(room.descriptionKey)}</p>
              </div>
              <span class="price-pill">${app.formatCurrency(room.price)} ${app.t('rooms_price_suffix')}</span>
            </div>
            <ul class="feature-list">${room.features.map((feature) => `<li>${app.t(feature)}</li>`).join('')}<li>${app.t('rooms_for_guests', { count: room.maxGuests })}</li></ul>
            <div class="summary-row"><span>${app.t('rooms_estimate')}</span><strong>${app.formatCurrency(room.price * guests)}</strong></div>
            <div class="card-actions">
              <button class="secondary-button" type="button" data-view-room="${room.id}">${app.t('rooms_view')}</button>
              <a class="primary-button" href="booking.html?room=${encodeURIComponent(room.id)}&checkin=${encodeURIComponent(form.checkin.value)}&checkout=${encodeURIComponent(form.checkout.value)}&guests=${encodeURIComponent(String(guests))}">${app.t('rooms_book')}</a>
            </div>
          </div>
        </article>`).join('');
      results.grid.querySelectorAll('[data-reveal]').forEach((card) => card.classList.add('is-visible'));
      results.nights.textContent = app.t('rooms_nights', { count: nights });
      results.count.textContent = app.t('rooms_matches', { count: filtered.length });
      results.empty.hidden = filtered.length > 0;
    };

    const closeModal = () => {
      results.modal.classList.remove('is-open');
      results.modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      if (releaseTrap) releaseTrap();
      releaseTrap = null;
    };

    const openModal = (roomId) => {
      const room = app.ROOMS.find((entry) => entry.id === roomId);
      if (!room) return;
      results.modalTitle.textContent = app.t(room.nameKey);
      results.modalText.textContent = app.t(room.descriptionKey);
      results.modalMeta.innerHTML = room.features.map((feature) => `<li>${app.t(feature)}</li>`).join('') + `<li>${app.t('rooms_modal_guests', { count: room.maxGuests })}</li>`;
      results.modalImage.src = room.image;
      results.modalImage.alt = app.t(room.altKey);
      results.modalImage.dataset.fallbackLabel = app.t(room.nameKey);
      results.modal.classList.add('is-open');
      results.modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      releaseTrap = app.trapFocus(results.modal.querySelector('.modal-dialog'));
      const closeButton = results.modal.querySelector('[data-close-room-modal]');
      if (closeButton) closeButton.focus();
    };

    Object.values(form).forEach((field) => field.addEventListener('change', render));
    roomsPage.querySelector('[data-room-search]').addEventListener('click', render);
    roomsPage.addEventListener('click', (event) => {
      const view = event.target.closest('[data-view-room]');
      if (view) openModal(view.getAttribute('data-view-room'));
    });
    results.modal.addEventListener('click', (event) => {
      if (event.target === results.modal || event.target.hasAttribute('data-close-room-modal')) closeModal();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeModal();
    });
    document.addEventListener(app.languageEventName, () => {
      renderRoomOptionList(form.type, true);
      render();
    });
    render();
  }

  function initBookingPage() {
    const bookingPage = document.querySelector('[data-booking-page]');
    if (!bookingPage) return;
    const form = document.querySelector('[data-booking-form]');
    const confirmation = document.querySelector('[data-booking-confirmation]');
    const fields = {
      name: form.querySelector('[name="fullName"]'),
      email: form.querySelector('[name="email"]'),
      phone: form.querySelector('[name="phone"]'),
      checkin: form.querySelector('[name="checkin"]'),
      checkout: form.querySelector('[name="checkout"]'),
      guests: form.querySelector('[name="guests"]'),
      room: form.querySelector('[name="roomType"]'),
      requests: form.querySelector('[name="specialRequests"]')
    };
    const summary = {
      room: document.querySelector('[data-summary-room]'),
      nights: document.querySelector('[data-summary-nights]'),
      rate: document.querySelector('[data-summary-rate]'),
      subtotal: document.querySelector('[data-summary-subtotal]'),
      taxes: document.querySelector('[data-summary-taxes]'),
      total: document.querySelector('[data-summary-total]')
    };
    let lastConfirmation = null;

    renderRoomOptionList(fields.room, false);
    const params = new URLSearchParams(window.location.search);
    if (params.get('room')) fields.room.value = params.get('room');
    if (params.get('checkin')) fields.checkin.value = params.get('checkin');
    if (params.get('checkout')) fields.checkout.value = params.get('checkout');
    if (params.get('guests')) fields.guests.value = params.get('guests');
    const today = app.todayISO();
    fields.checkin.min = today;
    fields.checkin.value ||= today;
    fields.checkout.min = app.addDaysISO(fields.checkin.value, 1);
    fields.checkout.value ||= app.addDaysISO(fields.checkin.value, 1);

    function setError(fieldName, key = '') {
      const field = fields[fieldName];
      const errorNode = form.querySelector(`[data-error-for="${fieldName}"]`);
      if (!field || !errorNode) return;
      field.setAttribute('aria-invalid', String(Boolean(key)));
      errorNode.textContent = key ? app.t(key) : '';
    }

    function selectedRoom() {
      return app.ROOMS.find((room) => room.id === fields.room.value);
    }

    function updateSummary() {
      fields.checkout.min = app.addDaysISO(fields.checkin.value || today, 1);
      if (!fields.checkout.value || fields.checkout.value <= fields.checkin.value) {
        fields.checkout.value = app.addDaysISO(fields.checkin.value || today, 1);
      }
      const room = selectedRoom();
      const dateSpan = app.differenceInNights(fields.checkin.value, fields.checkout.value) || 1;
      const servings = Number(fields.guests.value || 0);
      const rate = room ? room.price : 0;
      const subtotal = rate * servings;
      const taxes = Math.round(subtotal * 0.15);
      const total = subtotal + taxes;
      summary.room.textContent = room ? app.t(room.nameKey) : app.t('placeholder_summary_room');
      summary.nights.textContent = servings ? app.t('booking_summary_servings_lead', { servings, days: dateSpan }) : '—';
      summary.rate.textContent = rate ? app.formatCurrency(rate) : '—';
      summary.subtotal.textContent = subtotal ? app.formatCurrency(subtotal) : '—';
      summary.taxes.textContent = taxes ? app.formatCurrency(taxes) : '—';
      summary.total.textContent = total ? app.formatCurrency(total) : '—';
    }

    function validate() {
      ['name', 'email', 'phone', 'checkin', 'checkout', 'guests', 'room'].forEach((field) => setError(field));
      let valid = true;
      const room = selectedRoom();
      const guests = Number(fields.guests.value || 0);
      if (!fields.name.value.trim()) { setError('name', 'error_name'); valid = false; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value.trim())) { setError('email', 'error_email'); valid = false; }
      if (!/^(?:\+?\d[\d\s-]{7,14})$/.test(fields.phone.value.trim())) { setError('phone', 'error_phone'); valid = false; }
      if (!fields.checkin.value) { setError('checkin', 'error_checkin'); valid = false; }
      if (app.differenceInNights(fields.checkin.value, fields.checkout.value) <= 0) { setError('checkout', 'error_checkout'); valid = false; }
      if (!guests || guests > 4) { setError('guests', 'error_guests'); valid = false; }
      if (!room) { setError('room', 'error_room'); valid = false; }
      else if (guests > room.maxGuests) { setError('guests', 'error_guests'); valid = false; }
      return valid;
    }

    async function handleSubmit(event) {
      event.preventDefault();
      if (!validate()) return;
      const room = selectedRoom();
      const dateSpan = app.differenceInNights(fields.checkin.value, fields.checkout.value);
      const payload = {
        fullName: fields.name.value.trim(),
        email: fields.email.value.trim(),
        phone: fields.phone.value.trim(),
        checkin: fields.checkin.value,
        checkout: fields.checkout.value,
        guests: Number(fields.guests.value),
        roomType: fields.room.value,
        specialRequests: fields.requests.value.trim(),
        estimate: {
          dateSpan,
          servings: Number(fields.guests.value),
          rate: room.price,
          subtotal: room.price * Number(fields.guests.value),
          taxes: Math.round(room.price * Number(fields.guests.value) * 0.15),
          total: room.price * Number(fields.guests.value) + Math.round(room.price * Number(fields.guests.value) * 0.15)
        }
      };
      const saved = await BookingService.submit(payload);
      lastConfirmation = { saved, room, payload };
      form.hidden = true;
      confirmation.hidden = false;
      renderConfirmation(lastConfirmation);
      app.showToast(app.t('toast_booking_saved'));
    }

    function renderConfirmation(data) {
      if (!data) return;
      const { saved, room, payload } = data;
      confirmation.querySelector('[data-booking-confirmation-title]').textContent = app.t('booking_request_saved_title');
      confirmation.querySelector('[data-booking-confirmation-text]').textContent = app.t('booking_request_saved_text');
      confirmation.querySelector('[data-booking-reference]').textContent = saved.id.toUpperCase();
      const summaryRoot = confirmation.querySelector('[data-booking-summary]');
      const summaryBlock = document.createElement('div');
      summaryBlock.className = 'order-summary';
      [
        [app.t('booking_summary_room'), app.t(room.nameKey), 'span'],
        [app.t('booking_summary_nights'), app.t('booking_summary_servings_lead', { servings: payload.estimate.servings, days: payload.estimate.dateSpan }), 'span'],
        [app.t('booking_summary_total'), app.formatCurrency(payload.estimate.total), 'strong']
      ].forEach(([label, value, valueTag]) => {
        const row = document.createElement('div');
        row.className = 'summary-row';
        const labelNode = document.createElement('span');
        labelNode.textContent = label;
        const valueNode = document.createElement(valueTag);
        valueNode.textContent = value;
        row.append(labelNode, valueNode);
        summaryBlock.appendChild(row);
      });
      summaryRoot.replaceChildren(summaryBlock);
    }

    Object.values(fields).forEach((field) => field.addEventListener('change', updateSummary));
    fields.room.addEventListener('change', updateSummary);
    form.addEventListener('submit', handleSubmit);
    document.addEventListener(app.languageEventName, () => {
      renderRoomOptionList(fields.room, false);
      updateSummary();
      if (!confirmation.hidden) renderConfirmation(lastConfirmation);
    });
    updateSummary();
  }

  initRoomsPage();
  initBookingPage();
})();
