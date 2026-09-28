(() => {
  const app = window.HHApp;
  if (!app) return;

  const MENU_ITEMS = [
    { id: 'coffee-ceremony', nameKey: 'menu_ceremony_name', descriptionKey: 'menu_ceremony_desc', categories: ['coffee'], price: 250, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80' },
    { id: 'macchiato', nameKey: 'menu_macchiato_name', descriptionKey: 'menu_macchiato_desc', categories: ['coffee'], price: 180, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80' },
    { id: 'chechebsa', nameKey: 'menu_chechebsa_name', descriptionKey: 'menu_chechebsa_desc', categories: ['breakfast'], price: 220, image: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&w=900&q=80' },
    { id: 'tibs', nameKey: 'menu_tibs_name', descriptionKey: 'menu_tibs_desc', categories: ['ethiopian', 'main_course'], price: 450, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80' },
    { id: 'shiro', nameKey: 'menu_shiro_name', descriptionKey: 'menu_shiro_desc', categories: ['ethiopian'], price: 280, image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80' },
    { id: 'firfir', nameKey: 'menu_firfir_name', descriptionKey: 'menu_firfir_desc', categories: ['breakfast', 'ethiopian'], price: 250, image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80' },
    { id: 'doro-wat', nameKey: 'menu_doro_name', descriptionKey: 'menu_doro_desc', categories: ['ethiopian', 'main_course'], price: 420, image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80' },
    { id: 'beyaynetu', nameKey: 'menu_beyaynetu_name', descriptionKey: 'menu_beyaynetu_desc', categories: ['ethiopian'], price: 360, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80' },
    { id: 'kitfo', nameKey: 'menu_kitfo_name', descriptionKey: 'menu_kitfo_desc', categories: ['ethiopian', 'main_course'], price: 520, image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80' },
    { id: 'ful', nameKey: 'menu_ful_name', descriptionKey: 'menu_ful_desc', categories: ['breakfast'], price: 200, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80' },
    { id: 'enkulal-firfir', nameKey: 'menu_enkulal_name', descriptionKey: 'menu_enkulal_desc', categories: ['breakfast'], price: 240, image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80' },
    { id: 'nile-perch', nameKey: 'menu_perch_name', descriptionKey: 'menu_perch_desc', categories: ['main_course'], price: 580, image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80' },
    { id: 'club-sandwich', nameKey: 'menu_club_name', descriptionKey: 'menu_club_desc', categories: ['main_course'], price: 390, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80' },
    { id: 'pasta', nameKey: 'menu_pasta_name', descriptionKey: 'menu_pasta_desc', categories: ['main_course'], price: 340, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80' },
    { id: 'spris', nameKey: 'menu_spris_name', descriptionKey: 'menu_spris_desc', categories: ['drinks'], price: 190, image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=900&q=80' },
    { id: 'mango-juice', nameKey: 'menu_mango_name', descriptionKey: 'menu_mango_desc', categories: ['drinks'], price: 170, image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=80' },
    { id: 'ambo-water', nameKey: 'menu_ambo_name', descriptionKey: 'menu_ambo_desc', categories: ['drinks'], price: 90, image: 'https://images.unsplash.com/photo-1564419436068-b9c0250f21e6?auto=format&fit=crop&w=900&q=80' },
    { id: 'shai', nameKey: 'menu_shai_name', descriptionKey: 'menu_shai_desc', categories: ['drinks'], price: 110, image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80' },
    { id: 'cappuccino', nameKey: 'menu_cappuccino_name', descriptionKey: 'menu_cappuccino_desc', categories: ['coffee'], price: 210, image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=80' },
    { id: 'tiramisu', nameKey: 'menu_tiramisu_name', descriptionKey: 'menu_tiramisu_desc', categories: ['dessert'], price: 240, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80' },
    { id: 'honey-cake', nameKey: 'menu_honey_cake_name', descriptionKey: 'menu_honey_cake_desc', categories: ['dessert'], price: 220, image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=900&q=80' },
    { id: 'fruit-salad', nameKey: 'menu_fruit_name', descriptionKey: 'menu_fruit_desc', categories: ['dessert'], price: 180, image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=80' }
  ];

  const page = document.querySelector('[data-menu-page]');
  if (!page) return;

  const els = {
    grid: document.querySelector('[data-menu-grid]'),
    chips: Array.from(document.querySelectorAll('[data-category]')),
    search: document.querySelector('[data-menu-search]'),
    results: document.querySelector('[data-results-live]'),
    empty: document.querySelector('[data-menu-empty]'),
    cartButton: document.querySelector('[data-cart-toggle]'),
    cartBadge: document.querySelector('[data-cart-badge]'),
    cartCountLabel: document.querySelector('[data-cart-count-label]'),
    cartPanel: document.querySelector('[data-cart-panel]'),
    cartDialog: document.querySelector('[data-cart-dialog]'),
    cartItems: document.querySelector('[data-cart-items]'),
    cartEmpty: document.querySelector('[data-cart-empty]'),
    subtotal: document.querySelector('[data-cart-subtotal]'),
    service: document.querySelector('[data-cart-service]'),
    total: document.querySelector('[data-cart-total]'),
    placeOrder: document.querySelector('[data-place-order]'),
    orderModal: document.querySelector('[data-order-modal]'),
    orderSummary: document.querySelector('[data-order-summary]'),
    orderReference: document.querySelector('[data-order-reference]')
  };

  const state = { category: 'all', query: '', cart: loadCart(), debounce: null, releaseTrap: null, releaseOrderTrap: null };

  function loadCart() {
    try {
      const parsed = JSON.parse(localStorage.getItem('hh_cart') || '[]');
      return Array.isArray(parsed) ? parsed.filter((item) => MENU_ITEMS.some((menuItem) => menuItem.id === item.id)) : [];
    } catch (error) {
      return [];
    }
  }

  function persistCart() {
    try { localStorage.setItem('hh_cart', JSON.stringify(state.cart)); } catch (error) { /* ignore */ }
  }

  function getFilteredItems() {
    const query = state.query.trim().toLowerCase();
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = state.category === 'all' || item.categories.includes(state.category);
      if (!matchesCategory) return false;
      if (!query) return true;
      const haystack = `${app.t(item.nameKey)} ${app.t(item.descriptionKey)}`.toLowerCase();
      return haystack.includes(query);
    });
  }

  function renderMenu() {
    const items = getFilteredItems();
    els.grid.innerHTML = items.map((item) => `
      <article class="menu-card glass-card" data-reveal>
        <div class="card-media">
          <img src="${item.image}" alt="${app.t(item.nameKey)}" width="900" height="675" loading="lazy" decoding="async" data-fallback-label="${app.t(item.nameKey)}">
        </div>
        <div class="card-body">
          <div class="card-header">
            <div>
              <h3>${app.t(item.nameKey)}</h3>
              <p>${app.t(item.descriptionKey)}</p>
            </div>
            <span class="price-pill">${app.formatCurrency(item.price)}</span>
          </div>
          <ul class="meta-list">${item.categories.map((category) => `<li>${app.t(`menu_category_${category}`)}</li>`).join('')}</ul>
          <div class="menu-actions"><button class="primary-button" type="button" data-add-order="${item.id}">${app.t('menu_add')}</button></div>
        </div>
      </article>`).join('');
    els.results.textContent = app.t('menu_results', { count: items.length });
    els.empty.hidden = items.length > 0;
  }

  function updateChipStates() {
    els.chips.forEach((chip) => {
      const active = chip.getAttribute('data-category') === state.category;
      chip.setAttribute('aria-pressed', String(active));
    });
  }

  function updateCartBadge(animate = false) {
    const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    els.cartBadge.textContent = String(count);
    els.cartCountLabel.textContent = app.t('cart_count', { count });
    if (animate) {
      els.cartBadge.classList.remove('is-bouncing');
      void els.cartBadge.offsetWidth;
      els.cartBadge.classList.add('is-bouncing');
    }
  }

  function cartLineItems() {
    return state.cart.map((item) => {
      const menuItem = MENU_ITEMS.find((entry) => entry.id === item.id);
      return menuItem ? { ...menuItem, quantity: item.quantity, lineTotal: item.quantity * menuItem.price } : null;
    }).filter(Boolean);
  }

  function renderCart() {
    const lines = cartLineItems();
    const subtotal = lines.reduce((sum, item) => sum + item.lineTotal, 0);
    const service = Math.round(subtotal * 0.1);
    const total = subtotal + service;
    els.cartItems.innerHTML = lines.map((item) => `
      <div class="cart-item">
        <div>
          <strong>${app.t(item.nameKey)}</strong>
          <div class="text-muted">${app.formatCurrency(item.price)}</div>
          <button class="remove-button" type="button" data-remove-id="${item.id}">${app.t('cart_remove')}</button>
        </div>
        <div>
          <div class="qty-controls">
            <button class="qty-button" type="button" data-adjust-id="${item.id}" data-adjust="-1" aria-label="${app.t('cart_qty_minus')}">−</button>
            <strong>${item.quantity}</strong>
            <button class="qty-button" type="button" data-adjust-id="${item.id}" data-adjust="1" aria-label="${app.t('cart_qty_plus')}">+</button>
          </div>
          <div class="text-muted">${app.formatCurrency(item.lineTotal)}</div>
        </div>
      </div>`).join('');
    els.cartEmpty.hidden = lines.length > 0;
    els.subtotal.textContent = app.formatCurrency(subtotal);
    els.service.textContent = app.formatCurrency(service);
    els.total.textContent = app.formatCurrency(total);
    els.placeOrder.disabled = lines.length === 0;
    updateCartBadge();
  }

  function addToCart(id) {
    const existing = state.cart.find((item) => item.id === id);
    if (existing) existing.quantity += 1;
    else state.cart.push({ id, quantity: 1 });
    persistCart();
    renderCart();
    updateCartBadge(true);
    const item = MENU_ITEMS.find((entry) => entry.id === id);
    app.showToast(app.t('toast_added', { item: app.t(item.nameKey) }));
  }

  function adjustQuantity(id, delta) {
    const entry = state.cart.find((item) => item.id === id);
    if (!entry) return;
    entry.quantity += delta;
    state.cart = state.cart.filter((item) => item.quantity > 0);
    persistCart();
    renderCart();
  }

  function openCart() {
    els.cartPanel.classList.add('is-open');
    document.body.classList.add('panel-open');
    state.releaseTrap = app.trapFocus(els.cartDialog);
    const focusTarget = els.cartDialog.querySelector('button, a');
    if (focusTarget) focusTarget.focus();
  }

  function closeCart() {
    els.cartPanel.classList.remove('is-open');
    document.body.classList.remove('panel-open');
    if (state.releaseTrap) state.releaseTrap();
    state.releaseTrap = null;
  }

  function openOrderModal() {
    const lines = cartLineItems();
    const reference = `HH-${Math.floor(Date.now() / 1000).toString(36).toUpperCase()}`;
    els.orderSummary.innerHTML = `<div class="order-summary">${lines.map((item) => `<div class="summary-row"><span>${item.quantity} × ${app.t(item.nameKey)}</span><span>${app.formatCurrency(item.lineTotal)}</span></div>`).join('')}</div>`;
    els.orderReference.textContent = reference;
    els.orderModal.classList.add('is-open');
    document.body.classList.add('modal-open');
    state.releaseOrderTrap = app.trapFocus(els.orderModal.querySelector('.modal-dialog'));
    const firstButton = els.orderModal.querySelector('button');
    if (firstButton) firstButton.focus();
    state.cart = [];
    persistCart();
    renderCart();
    closeCart();
  }

  function closeOrderModal() {
    els.orderModal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    if (state.releaseOrderTrap) state.releaseOrderTrap();
    state.releaseOrderTrap = null;
  }

  function attachEvents() {
    els.chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        state.category = chip.getAttribute('data-category');
        updateChipStates();
        renderMenu();
      });
    });
    els.search.addEventListener('input', () => {
      window.clearTimeout(state.debounce);
      state.debounce = window.setTimeout(() => {
        state.query = els.search.value;
        renderMenu();
      }, 180);
    });
    els.grid.addEventListener('click', (event) => {
      const target = event.target.closest('[data-add-order]');
      if (target) addToCart(target.getAttribute('data-add-order'));
    });
    els.cartItems.addEventListener('click', (event) => {
      const adjuster = event.target.closest('[data-adjust-id]');
      const remover = event.target.closest('[data-remove-id]');
      if (adjuster) adjustQuantity(adjuster.getAttribute('data-adjust-id'), Number(adjuster.getAttribute('data-adjust')));
      if (remover) adjustQuantity(remover.getAttribute('data-remove-id'), -999);
    });
    els.cartButton.addEventListener('click', openCart);
    els.cartPanel.addEventListener('click', (event) => {
      if (event.target === els.cartPanel || event.target.hasAttribute('data-close-cart')) closeCart();
    });
    els.placeOrder.addEventListener('click', openOrderModal);
    els.orderModal.addEventListener('click', (event) => {
      if (event.target === els.orderModal || event.target.hasAttribute('data-close-order')) closeOrderModal();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeCart();
        closeOrderModal();
      }
    });
    document.addEventListener('languagechange', () => {
      updateChipStates();
      renderMenu();
      renderCart();
    });
  }

  attachEvents();
  updateChipStates();
  renderMenu();
  renderCart();
})();
