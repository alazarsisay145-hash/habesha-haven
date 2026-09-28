(() => {
  document.documentElement.classList.add('js');

  const BRAND = {
    name: 'BEREKET JUICE',
    subName: 'Juice & Fruit Salad',
    tagline: 'Bereket Juice & Fruit Salad in Hawassa serves fresh juices, colorful fruit salads, burgers, and pizza with a warm fruity feel.',
    phone: '0916 39 90 15',
    tiktok: '@bereketjuice',
    address: 'Hawassa, Ethiopia',
    city: 'Hawassa, Ethiopia',
    hotelHours: 'Daily',
    cafeHours: '8:00–22:00'
  };

  const ROOMS = [
    {
      id: 'haven-deluxe',
      nameKey: 'room_haven_deluxe_name',
      descriptionKey: 'room_haven_deluxe_desc',
      price: 120,
      maxGuests: 1,
      features: ['feature_king_bed', 'feature_wifi', 'feature_smart_tv', 'feature_breakfast', 'feature_private_bathroom'],
      image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=1200&q=80',
      altKey: 'room_haven_deluxe_alt'
    },
    {
      id: 'garden-suite',
      nameKey: 'room_garden_suite_name',
      descriptionKey: 'room_garden_suite_desc',
      price: 220,
      maxGuests: 2,
      features: ['feature_garden_view', 'feature_lounge_area', 'feature_breakfast', 'feature_wifi', 'feature_private_bathroom'],
      image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1200&q=80',
      altKey: 'room_garden_suite_alt'
    },
    {
      id: 'executive-room',
      nameKey: 'room_executive_name',
      descriptionKey: 'room_executive_desc',
      price: 480,
      maxGuests: 4,
      features: ['feature_premium_king_bed', 'feature_city_view', 'feature_workspace', 'feature_breakfast', 'feature_premium_bathroom'],
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=80',
      altKey: 'room_executive_alt'
    }
  ];

  const translations = {
    en: {
      nav_home: 'Home', nav_rooms: 'Specials', nav_menu: 'Menu', nav_booking: 'Pre-Order', nav_contact: 'Contact', nav_book: 'Order Now',
      brand_tagline_short: 'Juice & Fruit Salad', brand_tagline_footer: 'Fresh juices, fruit salads, burgers, and pizza served daily in Hawassa.',
      footer_quick_links: 'Quick Links', footer_contact: 'Contact', footer_hours: 'Hours', footer_hotel_hours: 'Orders · Daily', footer_cafe_hours: 'Shop · 8:00–22:00', footer_rights: 'All rights reserved.',
      hero_eyebrow: 'Fresh in Hawassa', hero_title: 'Fresh Juice, Fruit Salad & Fast Bites', hero_subtitle: 'Bereket Juice & Fruit Salad serves layered spris, creamy avocado juice, colorful fruit bowls, and quick bites with a warm Hawassa welcome.',
      hero_book: 'Request an Order', hero_menu: 'Explore Menu', hero_stat_1: '120 birr spris promo', hero_stat_2: 'Avocado · Mango · Papaya', hero_stat_3: 'Hawassa favorite',
      hero_note_1_title: 'Layered spris', hero_note_1_text: 'Avocado, mango, and papaya stacked fresh to order.',
      hero_note_2_title: 'Fruit salad daily', hero_note_2_text: 'Watermelon, mango, avocado, and banana bowls made fresh.',
      hero_note_3_title: 'Call 0916 39 90 15', hero_note_3_text: 'Reserve trays, family bowls, or burger and pizza add-ons.',
      more_eyebrow: 'Made for fresh cravings', more_title: 'Warm, fruity, and full of flavor', more_text: 'From bright juice layers to colorful salad bowls and quick bites, every order is prepared fresh with the lively spirit of Hawassa.',
      feature_rooms_title: 'Signature specials', feature_rooms_text: 'Layered spris, fruit bowls, and shareable trays for every appetite.',
      feature_hospitality_title: 'Fresh every day', feature_hospitality_text: 'Ripe fruit, chilled juice, and made-to-order bowls served with care.',
      feature_cafe_title: 'Burger & pizza bites', feature_cafe_text: 'Pair your juice with quick burgers, pizza, and café-style snacks.',
      feature_location_title: 'Hawassa location', feature_location_text: 'Visit us in Hawassa, Ethiopia, or call ahead for pickup orders.',
      rooms_eyebrow: 'Signature cups & trays', rooms_title: 'Bereket favorites made fresh to order', rooms_text: 'Browse our featured specials, compare prices, and choose the right option for solo cravings or group sharing.',
      rooms_view: 'View Details', rooms_book: 'Request This Special', rooms_view_all: 'See all specials', rooms_price_suffix: '/ person', rooms_for_guests: 'Best for up to {count} people',
      coffee_eyebrow: 'Fresh blends & fruit bowls', coffee_title: 'A juice bar menu built around Hawassa favorites', coffee_text: 'Enjoy avocado, mango, papaya, layered spris juices, fruit salads, burgers, and pizza from one colorful café menu.', coffee_cta: 'See the full menu',
      testimonial_eyebrow: 'Customer favorites', testimonial_title: 'What people love ordering',
      testimonial_1_quote: 'The spris comes beautifully layered and tastes as fresh as it looks.', testimonial_1_name: 'Meseret A.', testimonial_1_meta: 'Regular customer',
      testimonial_2_quote: 'The fruit salad is generous, colorful, and perfect with the avocado juice.', testimonial_2_name: 'Henok T.', testimonial_2_meta: 'Afternoon visitor',
      testimonial_3_quote: 'Great stop in Hawassa for quick burgers, pizza, and cold fresh juice.', testimonial_3_name: 'Rahel K.', testimonial_3_meta: 'Family order',
      cta_title: 'Plan your next juice stop with Bereket Juice', cta_text: 'Browse our specials, build an order, or send a pre-order request for pickup in Hawassa.', cta_button: 'Start your order request',
      rooms_page_title: 'Signature specials for cups, bowls, and sharing trays', rooms_page_text: 'Use the dates to plan pickup and serving timing, then compare per-person pricing for the right special.',
      rooms_search_title: 'Find the right special', rooms_search_button: 'Show Specials', rooms_checkin: 'Pickup date', rooms_checkout: 'Serve by', rooms_guests: 'People to serve', rooms_type: 'Special type', room_type_all: 'All specials',
      rooms_nights: 'Service window: {count} day(s)', rooms_matches: '{count} specials', rooms_none: 'No specials match that serving size right now. Try fewer people or another special.',
      rooms_estimate: 'Estimated total by serving size', rooms_modal_guests: 'Best for up to {count} people', modal_close: 'Close',
      menu_page_title: 'Fresh juices, fruit salads & quick bites', menu_page_text: 'Filter the menu, search favorites, and build an order request for Bereket Juice.',
      menu_search_label: 'Search menu', menu_search_placeholder: 'Search spris, mango, burger…', menu_results: '{count} menu items', menu_empty: 'No menu items match your current filters.',
      menu_category_all: 'All', menu_category_breakfast: 'Fruit Salad', menu_category_ethiopian: 'Signature Mixes', menu_category_main_course: 'Fast Bites', menu_category_coffee: 'Fresh Juices', menu_category_drinks: 'Chilled Drinks', menu_category_dessert: 'Sweet Extras',
      menu_add: 'Add to Order', cart_title: 'Your order request', cart_empty: 'Your cart is empty. Add a few Bereket favorites to get started.', cart_subtotal: 'Subtotal', cart_service: 'Service charge (10%)', cart_total: 'Total', cart_place: 'Place Order', cart_remove: 'Remove', cart_qty_minus: 'Decrease quantity', cart_qty_plus: 'Increase quantity', cart_open: 'Open order cart', cart_count: '{count} items', cart_confirm_title: 'Order request noted', cart_confirm_text: 'Your order request has been noted — this is a demo, so please confirm it directly by phone or on TikTok with Bereket Juice.', cart_reference: 'Reference', cart_close: 'Continue browsing',
      booking_page_title: 'Send a Bereket Juice pre-order request', booking_page_text: 'Share your pickup window, serving size, and selected special and we will follow up to confirm your order.',
      booking_form_title: 'Pre-order request', booking_submit: 'Send Order Request', booking_summary_title: 'Order estimate', booking_summary_room: 'Special', booking_summary_nights: 'Serving size & lead time', booking_summary_servings_lead: '{servings} people · {days} day service window', booking_summary_rate: 'Price per person', booking_summary_subtotal: 'Subtotal', booking_summary_taxes: 'Service fee (15%)', booking_summary_total: 'Estimated total', booking_summary_note: 'This estimate is for guidance only. Final pickup details and totals will be confirmed directly by Bereket Juice.', booking_requests_label: 'Order notes', booking_room_type: 'Special', booking_name: 'Full Name', booking_email: 'Email', booking_phone: 'Phone', booking_guest_count: 'People to serve',
      booking_request_saved_title: 'Pre-order request received', booking_request_saved_text: 'Thank you. This is a pre-order request only — Bereket Juice will contact you to confirm the final order.', booking_reference: 'Reference number', booking_back_to_rooms: 'Browse specials again',
      contact_page_title: 'Contact Bereket Juice & Fruit Salad', contact_page_text: 'Reach out for pickup orders, fruit salad trays, layered spris juices, and Hawassa location details.',
      contact_phone_title: 'Phone', contact_email_title: 'TikTok', contact_location_title: 'Location', contact_hours_title: 'Opening Hours', contact_form_title: 'Send us a message', contact_message: 'Message', contact_submit: 'Send Message', contact_success_title: 'Message saved', contact_success_text: 'Thanks for reaching out. This demo stores your message locally and can later connect to Bereket Juice directly.', contact_map_title: 'Find Bereket Juice in Hawassa', contact_map_text: 'Near the heart of Hawassa, ready with fresh juices, fruit salads, burgers, and pizza for pickup.', contact_map_link: 'Open the Hawassa map',
      form_required: 'Required', guests_option_1: '1 person', guests_option_2: '2 people', guests_option_3: '3 people', guests_option_4: '4 people',
      error_name: 'Please enter your full name.', error_email: 'Please enter a valid email address.', error_phone: 'Please enter a valid phone number.', error_checkin: 'Please choose a valid pickup date.', error_checkout: 'Serve-by date must be after the pickup date.', error_guests: 'Please choose a valid number of people to serve.', error_room: 'Please choose a special.', error_message: 'Please enter a message before submitting.',
      placeholder_summary_room: 'Choose a special', toast_added: '{item} added to your order.', toast_language: 'Language updated.', toast_message_saved: 'Message saved locally.', toast_booking_saved: 'Order request saved locally.',
      room_haven_deluxe_name: 'Hawassa 120 Birr Spris', room_haven_deluxe_desc: 'Layered avocado, mango, and papaya juice built for a quick fresh boost.', room_haven_deluxe_alt: 'Layered spris juice with avocado, mango, and papaya in a tall glass.',
      room_garden_suite_name: 'Bereket Fruit Salad Bowl', room_garden_suite_desc: 'Watermelon, mango, avocado, and banana tossed into a chilled fruit bowl.', room_garden_suite_alt: 'Fresh fruit salad bowl with watermelon, mango, avocado, and banana.',
      room_executive_name: 'Burger & Juice Combo', room_executive_desc: 'A juicy burger paired with fresh mango or avocado juice for a filling café order.', room_executive_alt: 'Burger plate served beside a cold fresh juice.',
      feature_king_bed: 'Layered avocado, mango & papaya', feature_wifi: 'Freshly blended', feature_smart_tv: '120 birr promo', feature_breakfast: 'Made to order', feature_private_bathroom: 'Takeaway ready', feature_garden_view: 'Watermelon & mango', feature_lounge_area: 'Banana & avocado', feature_premium_king_bed: 'Burger or pizza add-on', feature_city_view: 'Hawassa favorite', feature_workspace: 'Great for sharing', feature_premium_bathroom: 'Perfect for groups',
      menu_ceremony_name: 'Hawassa Spris', menu_ceremony_desc: 'Signature layered avocado, mango, and papaya juice.',
      menu_macchiato_name: 'Avocado Juice', menu_macchiato_desc: 'Thick avocado juice blended smooth and chilled.',
      menu_chechebsa_name: 'Fruit Salad Cup', menu_chechebsa_desc: 'Watermelon, mango, avocado, and banana in a single cup.',
      menu_tibs_name: 'Burger Combo', menu_tibs_desc: 'Fresh burger served with a cold juice of your choice.',
      menu_shiro_name: 'Papaya Juice', menu_shiro_desc: 'Ripe papaya juice blended fresh to order.',
      menu_firfir_name: 'Mango Juice', menu_firfir_desc: 'Sweet chilled mango juice with a bright tropical finish.',
      menu_doro_name: 'Pizza Slice Combo', menu_doro_desc: 'Cheesy pizza served with a refreshing seasonal drink.',
      menu_beyaynetu_name: 'Family Fruit Salad Bowl', menu_beyaynetu_desc: 'A larger shared bowl packed with mixed fresh fruit.',
      menu_kitfo_name: 'Avocado-Mango Spris', menu_kitfo_desc: 'Creamy avocado and sweet mango layered for Bereket’s signature taste.',
      menu_ful_name: 'Banana Juice', menu_ful_desc: 'Smooth banana juice with a creamy café-style texture.',
      menu_enkulal_name: 'Watermelon Juice', menu_enkulal_desc: 'Cooling watermelon juice served ice cold.',
      menu_perch_name: 'Special Spris Bowl', menu_perch_desc: 'A rich layered blend finished with fruit pieces on top.',
      menu_club_name: 'Chicken Burger', menu_club_desc: 'Grilled chicken burger prepared fresh for a quick bite.',
      menu_pasta_name: 'Veggie Pizza', menu_pasta_desc: 'Garden-style pizza with melty cheese and a crisp crust.',
      menu_spris_name: 'Layered Spris', menu_spris_desc: 'Fresh avocado, mango, and papaya stacked in colorful layers.',
      menu_mango_name: 'Fresh Mango Juice', menu_mango_desc: 'Bright mango juice served chilled.',
      menu_ambo_name: 'Bottled Water', menu_ambo_desc: 'Cold bottled water to pair with any order.',
      menu_shai_name: 'Lemon Mint Cooler', menu_shai_desc: 'Chilled lemon and mint drink for a refreshing finish.',
      menu_cappuccino_name: 'Avocado Banana Mix', menu_cappuccino_desc: 'Creamy avocado and banana juice blended smooth.',
      menu_tiramisu_name: 'Yogurt Fruit Cup', menu_tiramisu_desc: 'Chilled yogurt topped with mango and seasonal fruit.',
      menu_honey_cake_name: 'Honey Fruit Bowl', menu_honey_cake_desc: 'Fresh fruit finished with a light honey drizzle.',
      menu_fruit_name: 'Bereket Fruit Salad', menu_fruit_desc: 'Seasonal fruit bowl with watermelon, mango, avocado, and banana.',
      order_item: 'Item', order_quantity: 'Qty', order_line_total: 'Line total',
      not_found_title: 'That page is not on the menu today.', not_found_text: 'Return to Bereket Juice’s homepage to keep exploring fresh specials, menu favorites, and contact details.', not_found_button: 'Return Home'
    },
    am: {}
  };



  const AM_TRANSLATION_OVERRIDES = {
    nav_home: 'መነሻ',
    nav_rooms: 'ልዩ ኦርደሮች',
    nav_menu: 'ሜኑ',
    nav_booking: 'ቅድሚያ ትዕዛዝ',
    nav_contact: 'ያግኙን',
    nav_book: 'አሁን ይዘዙ',
    brand_tagline_short: 'ጁስ እና ፍራፍሬ ሳላድ',
    brand_tagline_footer: 'በሀዋሳ በየቀኑ የሚቀርቡ ትኩስ ጁሶች፣ ፍራፍሬ ሳላዶች፣ በርገሮች እና ፒዛ።',
    footer_quick_links: 'ፈጣን አገናኞች',
    footer_contact: 'መገኛ',
    footer_hours: 'ሰዓታት',
    footer_hotel_hours: 'ትዕዛዝ · በየቀኑ',
    footer_cafe_hours: 'ሱቅ · 8:00–22:00',
    footer_rights: 'መብቶች ሁሉ የተጠበቁ ናቸው።',
    hero_eyebrow: 'ትኩስ በሀዋሳ',
    hero_title: 'ትኩስ ጁስ፣ ፍራፍሬ ሳላድ እና ፈጣን ቅመም',
    hero_subtitle: 'በረከት ፍሬሽ ጁስ እና ሳላድ የተደራረቡ ስፕሪሶችን፣ አቮካዶ ጁስን፣ ፍራፍሬ ሳላዶችን እና ፈጣን ቅመሞችን በሀዋሳ ያቀርባል።',
    hero_book: 'ትዕዛዝ ይጠይቁ',
    hero_menu: 'ሜኑን ይመልከቱ',
    hero_stat_1: '120 ብር ስፕሪስ',
    hero_stat_2: 'አቮካዶ · ማንጎ · ፓፓያ',
    hero_stat_3: 'የሀዋሳ ተወዳጅ',
    hero_note_1_title: 'የተደራረበ ስፕሪስ',
    hero_note_1_text: 'አቮካዶ፣ ማንጎ እና ፓፓያ በትኩስነት ይዘጋጃሉ።',
    hero_note_2_title: 'ዕለታዊ ፍራፍሬ ሳላድ',
    hero_note_2_text: 'ውሃ ሐብሐብ፣ ማንጎ፣ አቮካዶ እና ሙዝ በየቀኑ ይቀርባሉ።',
    hero_note_3_title: '0916 39 90 15 ይደውሉ',
    hero_note_3_text: 'ትራዮችን፣ ቤተሰብ ሳላዶችን ወይም በርገርና ፒዛ ተጨማሪዎችን ያስያዙ።',
    more_eyebrow: 'ለትኩስ ፍላጎት',
    more_title: 'ሙቅ ስሜት፣ ፍራፍሬ ቀለም እና ሙሉ ጣዕም',
    more_text: 'ከብሩህ ጁስ እስከ ቀለማቸው ያማሩ ሳላድ ሳህኖች እና ፈጣን ምግቦች ድረስ ሁሉም ትዕዛዝ በትኩስነት ይዘጋጃል።',
    feature_rooms_title: 'ልዩ ኦርደሮች',
    feature_rooms_text: 'የተደራረበ ስፕሪስ፣ ፍራፍሬ ሳላድ እና ለመካፈል የሚሆኑ ትራዮች።',
    feature_hospitality_title: 'ሁልጊዜ ትኩስ',
    feature_hospitality_text: 'የበሰሉ ፍራፍሬዎች፣ ቀዝቃዛ ጁሶች እና በትዕዛዝ የሚዘጋጁ ሳላዶች።',
    feature_cafe_title: 'በርገር እና ፒዛ',
    feature_cafe_text: 'ጁስዎን ከፈጣን በርገር፣ ፒዛ እና ቀላል ካፌ ምግቦች ጋር ያጣጥሙ።',
    feature_location_title: 'የሀዋሳ ቦታ',
    feature_location_text: 'በሀዋሳ ይጎብኙን ወይም ለመውሰጃ ትዕዛዝ ቀድመው ይደውሉ።',
    rooms_eyebrow: 'ልዩ ኩባያዎች እና ትራዮች',
    rooms_title: 'የበረከት ተወዳጅ ኦርደሮች',
    rooms_text: 'የተለያዩ ልዩ ኦርደሮቻችንን ይመልከቱ እና ለእርስዎ ወይም ለቡድን የሚስማማውን ይምረጡ።',
    rooms_view: 'ዝርዝር ይመልከቱ',
    rooms_book: 'ይህን ይጠይቁ',
    rooms_view_all: 'ሁሉንም ልዩ ኦርደሮች ይመልከቱ',
    rooms_price_suffix: '/ ሰው',
    rooms_for_guests: 'እስከ {count} ሰዎች ድረስ',
    coffee_eyebrow: 'ትኩስ ቅልቅሎች እና ፍራፍሬ ሳላዶች',
    coffee_title: 'በሀዋሳ ተወዳጆች የተሞላ የጁስ ሜኑ',
    coffee_text: 'አቮካዶ፣ ማንጎ፣ ፓፓያ፣ የተደራረቡ ስፕሪሶች፣ ፍራፍሬ ሳላዶች፣ በርገሮች እና ፒዛ በአንድ ቀለማቸው ያማረ ሜኑ ውስጥ ያግኙ።',
    coffee_cta: 'ሙሉ ሜኑን ይመልከቱ',
    testimonial_eyebrow: 'የደንበኞች ተወዳጅ',
    testimonial_title: 'ሰዎች የሚወዱት',
    testimonial_1_quote: 'ስፕሪሱ በጣም ቆንጆ ነው እና በጣም ትኩስ ይመስላል።',
    testimonial_1_name: 'መሰረት አ.',
    testimonial_1_meta: 'መደበኛ ደንበኛ',
    testimonial_2_quote: 'ፍራፍሬ ሳላዱ ብዙ ነው እና ከአቮካዶ ጁስ ጋር በጣም ይጣፍጣል።',
    testimonial_2_name: 'ሄኖክ ተ.',
    testimonial_2_meta: 'የከሰዓት ጎብኚ',
    testimonial_3_quote: 'በሀዋሳ ለፈጣን በርገር፣ ፒዛ እና ቀዝቃዛ ጁስ ጥሩ ቦታ ነው።',
    testimonial_3_name: 'ራሄል ከ.',
    testimonial_3_meta: 'የቤተሰብ ትዕዛዝ',
    cta_title: 'ቀጣዩን የጁስ ማቆሚያዎን ከበረከት ጋር ያቅዱ',
    cta_text: 'ልዩ ኦርደሮችን ይመልከቱ፣ ትዕዛዝ ያዘጋጁ ወይም ለመውሰጃ ቅድሚያ ጥያቄ ይላኩ።',
    cta_button: 'የትዕዛዝ ጥያቄዎን ይጀምሩ',
    rooms_page_title: 'ለኩባያ፣ ሳህን እና መካፈል የሚሆኑ ልዩ ኦርደሮች',
    rooms_page_text: 'ቀኖቹን ለመውሰጃ እና ለማቅረብ ጊዜ ያቅዱ፣ ከዚያም በሰው ዋጋ የሚስማማውን ይወዳድሩ።',
    rooms_search_title: 'ትክክለኛውን ይፈልጉ',
    rooms_search_button: 'ልዩ ኦርደሮችን አሳይ',
    rooms_checkin: 'የመውሰጃ ቀን',
    rooms_checkout: 'የሚፈለግበት ቀን',
    rooms_guests: 'የሚያገለግሉት ሰዎች',
    rooms_type: 'የልዩ ኦርደር አይነት',
    room_type_all: 'ሁሉም ልዩ ኦርደሮች',
    rooms_nights: 'የአገልግሎት ጊዜ: {count} ቀን',
    rooms_matches: '{count} ልዩ ኦርደሮች',
    rooms_none: 'ለዚህ ብዛት የሚስማማ ኦርደር አልተገኘም። ያነሱ ወይም ሌላ ይምረጡ።',
    rooms_estimate: 'በሚያገለግሉት ብዛት የሚለዋወጥ ግምት',
    rooms_modal_guests: 'እስከ {count} ሰዎች ድረስ ተስማሚ',
    modal_close: 'ዝጋ',
    menu_page_title: 'ትኩስ ጁሶች፣ ፍራፍሬ ሳላዶች እና ፈጣን ምግቦች',
    menu_page_text: 'ሜኑን ይጣሩ፣ ተወዳጆችን ይፈልጉ እና ለበረከት የትዕዛዝ ጥያቄ ያዘጋጁ።',
    menu_search_label: 'ሜኑ ይፈልጉ',
    menu_search_placeholder: 'ስፕሪስ፣ ማንጎ፣ በርገር…',
    menu_results: '{count} የሜኑ እቃዎች',
    menu_empty: 'ከአሁኑ ማጣሪያዎች ጋር የሚስማሙ እቃዎች የሉም።',
    menu_category_all: 'ሁሉም',
    menu_category_breakfast: 'ፍራፍሬ ሳላድ',
    menu_category_ethiopian: 'የፊርማ ቅልቅሎች',
    menu_category_main_course: 'ፈጣን ምግቦች',
    menu_category_coffee: 'ትኩስ ጁሶች',
    menu_category_drinks: 'ቀዝቃዛ መጠጦች',
    menu_category_dessert: 'ጣፋጭ ተጨማሪዎች',
    menu_add: 'ወደ ትዕዛዝ ጨምር',
    cart_title: 'የትዕዛዝ ጥያቄዎ',
    cart_empty: 'ቅርጫቱ ባዶ ነው። የበረከት ተወዳጆችን ይጨምሩ።',
    cart_subtotal: 'ንዑስ ጠቅላላ',
    cart_service: 'የአገልግሎት ክፍያ (10%)',
    cart_total: 'ጠቅላላ',
    cart_place: 'ትዕዛዝ ይላኩ',
    cart_remove: 'አስወግድ',
    cart_qty_minus: 'ቁጥር አንስ',
    cart_qty_plus: 'ቁጥር ጨምር',
    cart_open: 'የትዕዛዝ ቅርጫት ክፈት',
    cart_count: '{count} እቃዎች',
    cart_confirm_title: 'የትዕዛዝ ጥያቄዎ ተመዝግቧል',
    cart_confirm_text: 'ይህ ማሳያ ብቻ ነው፤ እባክዎ ትዕዛዝዎን በስልክ ወይም በTikTok ያረጋግጡ።',
    cart_reference: 'መለያ ቁጥር',
    cart_close: 'ቀጥል',
    booking_page_title: 'የበረከት ቅድሚያ ትዕዛዝ ይላኩ',
    booking_page_text: 'የመውሰጃ ጊዜዎን፣ የሚያገለግሉትን ብዛት እና የመረጡትን ኦርደር ያጋሩ፤ ለማረጋገጥ እንከታተላለን።',
    booking_form_title: 'የቅድሚያ ትዕዛዝ ጥያቄ',
    booking_submit: 'ትዕዛዝ ይላኩ',
    booking_summary_title: 'የትዕዛዝ ግምት',
    booking_summary_room: 'ልዩ ኦርደር',
    booking_summary_nights: 'የሚያገለግሉት ብዛት እና ቅድሚያ',
    booking_summary_servings_lead: '{servings} ሰዎች · {days} ቀን የአገልግሎት ጊዜ',
    booking_summary_rate: 'የአንድ ሰው ዋጋ',
    booking_summary_subtotal: 'ንዑስ ጠቅላላ',
    booking_summary_taxes: 'የአገልግሎት ክፍያ (15%)',
    booking_summary_total: 'የጠቅላላ ግምት',
    booking_summary_note: 'ይህ ግምት መመሪያ ብቻ ነው። የመውሰጃ ዝርዝሮች እና ጠቅላላ ዋጋ በበረከት በቀጥታ ይረጋገጣሉ።',
    booking_requests_label: 'የትዕዛዝ ማስታወሻ',
    booking_room_type: 'ልዩ ኦርደር',
    booking_name: 'ሙሉ ስም',
    booking_email: 'ኢሜይል',
    booking_phone: 'ስልክ',
    booking_guest_count: 'የሚያገለግሉት ሰዎች',
    booking_request_saved_title: 'የቅድሚያ ትዕዛዝ ተቀብሏል',
    booking_request_saved_text: 'እናመሰግናለን። ይህ የቅድሚያ ጥያቄ ብቻ ነው — በረከት ጁስ የመጨረሻውን ትዕዛዝ ለማረጋገጥ ይገናኛል።',
    booking_reference: 'መለያ ቁጥር',
    booking_back_to_rooms: 'ልዩ ኦርደሮችን እንደገና ይመልከቱ',
    contact_page_title: 'በረከት ፍሬሽ ጁስ እና ሳላድን ያግኙ',
    contact_page_text: 'ለመውሰጃ ትዕዛዞች፣ ለፍራፍሬ ሳላድ ትራዮች፣ ለስፕሪስ ጁሶች እና ለሀዋሳ መገኛ ይደውሉ።',
    contact_phone_title: 'ስልክ',
    contact_email_title: 'ቲክቶክ',
    contact_location_title: 'ቦታ',
    contact_hours_title: 'የስራ ሰዓታት',
    contact_form_title: 'መልእክት ይላኩልን',
    contact_message: 'መልእክት',
    contact_submit: 'መልእክት ላክ',
    contact_success_title: 'መልእክት ተቀምጧል',
    contact_success_text: 'ስለተገናኙን እናመሰግናለን። ይህ ማሳያ መልእክትዎን በአካባቢ ያስቀምጣል።',
    contact_map_title: 'በሀዋሳ ያግኙን',
    contact_map_text: 'በሀዋሳ ልብ ላይ የሚገኝ፣ ትኩስ ጁሶች፣ ፍራፍሬ ሳላዶች፣ በርገሮች እና ፒዛ ለመውሰጃ ዝግጁ።',
    contact_map_link: 'የሀዋሳ ካርታን ክፈት',
    form_required: 'ያስፈልጋል',
    guests_option_1: '1 ሰው',
    guests_option_2: '2 ሰዎች',
    guests_option_3: '3 ሰዎች',
    guests_option_4: '4 ሰዎች',
    error_name: 'እባክዎ ሙሉ ስምዎን ያስገቡ።',
    error_email: 'እባክዎ ትክክለኛ ኢሜይል ያስገቡ።',
    error_phone: 'እባክዎ ትክክለኛ ስልክ ቁጥር ያስገቡ።',
    error_checkin: 'እባክዎ ትክክለኛ የመውሰጃ ቀን ይምረጡ።',
    error_checkout: 'የሚፈለግበት ቀን ከመውሰጃው ቀን በኋላ መሆን አለበት።',
    error_guests: 'እባክዎ ትክክለኛ የሚያገለግሉትን ብዛት ይምረጡ።',
    error_room: 'እባክዎ ልዩ ኦርደር ይምረጡ።',
    error_message: 'እባክዎ ከመላክዎ በፊት መልእክት ያስገቡ።',
    placeholder_summary_room: 'ልዩ ኦርደር ይምረጡ',
    toast_added: '{item} ወደ ትዕዛዝ ተጨምሯል።',
    toast_language: 'ቋንቋው ተቀይሯል።',
    toast_message_saved: 'መልእክት በአካባቢ ተቀምጧል።',
    toast_booking_saved: 'የትዕዛዝ ጥያቄ ተቀምጧል።',
    room_haven_deluxe_name: 'የሀዋሳ 120 ብር ስፕሪስ',
    room_haven_deluxe_desc: 'አቮካዶ፣ ማንጎ እና ፓፓያ የተደራረቡ ትኩስ ጁሶች።',
    room_haven_deluxe_alt: 'የተደራረበ ስፕሪስ ጁስ በረጅም ብርጭቆ ውስጥ።',
    room_garden_suite_name: 'የበረከት ፍራፍሬ ሳላድ',
    room_garden_suite_desc: 'ውሃ ሐብሐብ፣ ማንጎ፣ አቮካዶ እና ሙዝ የተሞላ ቀዝቃዛ ሳላድ።',
    room_garden_suite_alt: 'በማንጎ፣ በሙዝ እና በውሃ ሐብሐብ የተሞላ ፍራፍሬ ሳላድ።',
    room_executive_name: 'በርገር እና ጁስ ኮምቦ',
    room_executive_desc: 'ከትኩስ ማንጎ ወይም አቮካዶ ጁስ ጋር የሚቀርብ በርገር።',
    room_executive_alt: 'ከቀዝቃዛ ጁስ ጋር የቀረበ በርገር።',
    feature_king_bed: 'አቮካዶ፣ ማንጎ እና ፓፓያ',
    feature_wifi: 'አዲስ የተቀላቀለ',
    feature_smart_tv: '120 ብር ማስታወቂያ',
    feature_breakfast: 'በትዕዛዝ የሚዘጋጅ',
    feature_private_bathroom: 'ለመውሰጃ ዝግጁ',
    feature_garden_view: 'ውሃ ሐብሐብ እና ማንጎ',
    feature_lounge_area: 'ሙዝ እና አቮካዶ',
    feature_premium_king_bed: 'በርገር ወይም ፒዛ ተጨማሪ',
    feature_city_view: 'የሀዋሳ ተወዳጅ',
    feature_workspace: 'ለመካፈል ተስማሚ',
    feature_premium_bathroom: 'ለቡድን ተስማሚ',
    menu_ceremony_name: 'የሀዋሳ ስፕሪስ',
    menu_ceremony_desc: 'የአቮካዶ፣ ማንጎ እና ፓፓያ የፊርማ ስፕሪስ።',
    menu_macchiato_name: 'አቮካዶ ጁስ',
    menu_macchiato_desc: 'ቀዝቃዛ እና ለስላሳ የተቀላቀለ አቮካዶ ጁስ።',
    menu_chechebsa_name: 'የፍራፍሬ ኩባያ',
    menu_chechebsa_desc: 'ውሃ ሐብሐብ፣ ማንጎ፣ አቮካዶ እና ሙዝ በአንድ ኩባያ።',
    menu_tibs_name: 'በርገር ኮምቦ',
    menu_tibs_desc: 'ትኩስ በርገር ከቀዝቃዛ ጁስ ጋር።',
    menu_shiro_name: 'ፓፓያ ጁስ',
    menu_shiro_desc: 'በትኩስነት የተቀላቀለ የበሰለ ፓፓያ ጁስ።',
    menu_firfir_name: 'ማንጎ ጁስ',
    menu_firfir_desc: 'ጣፋጭ እና ቀዝቃዛ የማንጎ ጁስ።',
    menu_doro_name: 'ፒዛ ኮምቦ',
    menu_doro_desc: 'ቺዚ ፒዛ ከቀዝቃዛ መጠጥ ጋር።',
    menu_beyaynetu_name: 'የቤተሰብ ፍራፍሬ ሳላድ',
    menu_beyaynetu_desc: 'ብዙ ፍራፍሬ ያለው የመካፈል ሳላድ።',
    menu_kitfo_name: 'አቮካዶ-ማንጎ ስፕሪስ',
    menu_kitfo_desc: 'የበረከት ፊርማ የአቮካዶ እና የማንጎ ቅልቅል።',
    menu_ful_name: 'ሙዝ ጁስ',
    menu_ful_desc: 'ለስላሳ የሙዝ ጁስ በካፌ ስሜት።',
    menu_enkulal_name: 'ውሃ ሐብሐብ ጁስ',
    menu_enkulal_desc: 'በጣም ቀዝቃዛ የውሃ ሐብሐብ ጁስ።',
    menu_perch_name: 'ልዩ ስፕሪስ ሳህን',
    menu_perch_desc: 'ከፍራፍሬ ቁራጮች ጋር የተጠናቀቀ ቅልቅል።',
    menu_club_name: 'ዶሮ በርገር',
    menu_club_desc: 'ትኩስ የተዘጋጀ የዶሮ በርገር።',
    menu_pasta_name: 'ቬጂ ፒዛ',
    menu_pasta_desc: 'በአትክልት የተሞላ ቺዚ ፒዛ።',
    menu_spris_name: 'የተደራረበ ስፕሪስ',
    menu_spris_desc: 'አቮካዶ፣ ማንጎ እና ፓፓያ በቀለማቸው የተደራረቡ።',
    menu_mango_name: 'ትኩስ ማንጎ ጁስ',
    menu_mango_desc: 'ቀዝቃዛ የተቀረበ ብሩህ የማንጎ ጁስ።',
    menu_ambo_name: 'የታሸገ ውሃ',
    menu_ambo_desc: 'ከማንኛውም ትዕዛዝ ጋር የሚሄድ ቀዝቃዛ ውሃ።',
    menu_shai_name: 'ሎሚ እና ሚንት ቀዝቃዛ',
    menu_shai_desc: 'በጣም የሚያዝናና ቀዝቃዛ ሎሚ እና ሚንት መጠጥ።',
    menu_cappuccino_name: 'አቮካዶ ሙዝ ቅልቅል',
    menu_cappuccino_desc: 'ለስላሳ የአቮካዶ እና የሙዝ ጁስ።',
    menu_tiramisu_name: 'ዮገርት ፍራፍሬ ኩባያ',
    menu_tiramisu_desc: 'በማንጎ እና በወቅታዊ ፍራፍሬ የተሞላ ዮገርት።',
    menu_honey_cake_name: 'ማር ፍራፍሬ ሳህን',
    menu_honey_cake_desc: 'ቀላል የማር ቅባት ያለው ፍራፍሬ ሳህን።',
    menu_fruit_name: 'የበረከት ፍራፍሬ ሳላድ',
    menu_fruit_desc: 'ውሃ ሐብሐብ፣ ማንጎ፣ አቮካዶ እና ሙዝ ያለው የወቅቱ ሳላድ።',
    order_item: 'እቃ',
    order_quantity: 'ብዛት',
    order_line_total: 'የመስመር ጠቅላላ',
    not_found_title: 'ይህ ገጽ ዛሬ በሜኑ ላይ የለም።',
    not_found_text: 'ወደ በረከት ጁስ መነሻ ገጽ ተመልሰው ልዩ ኦርደሮችን፣ ሜኑን እና መገኛ ዝርዝሮችን ይመልከቱ።',
    not_found_button: 'ወደ መነሻ ተመለስ'
  };
  translations.am = { ...translations.en, ...AM_TRANSLATION_OVERRIDES };

  const state = { lang: safeStorageGet('bj_lang') || 'en' };
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const toastRegionId = 'toast-region';
  const languageEventName = 'bj:languagechange';

  function safeStorageGet(key) {
    try { return localStorage.getItem(key); } catch (error) { return null; }
  }

  function safeStorageSet(key, value) {
    try { localStorage.setItem(key, value); } catch (error) { /* ignore */ }
  }

  function t(key, vars = {}) {
    const dictionary = translations[state.lang] || translations.en;
    let value = dictionary[key] ?? translations.en[key] ?? key;
    Object.entries(vars).forEach(([token, replacement]) => {
      value = value.replace(new RegExp(`\\{${token}\\}`, 'g'), replacement);
    });
    return value;
  }

  function formatCurrency(amount) {
    return `ETB ${Number(amount || 0).toLocaleString('en-US')}`;
  }

  function formatLocalDate(date) {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function todayISO() {
    return formatLocalDate(new Date());
  }

  function addDaysISO(isoDate, days) {
    const date = new Date(`${isoDate}T00:00:00`);
    date.setDate(date.getDate() + days);
    return formatLocalDate(date);
  }

  function differenceInNights(checkIn, checkOut) {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(`${checkIn}T00:00:00`);
    const end = new Date(`${checkOut}T00:00:00`);
    const diff = Math.round((end - start) / 86400000);
    return Number.isFinite(diff) && diff > 0 ? diff : 0;
  }

  function updateLanguageButtons() {
    document.querySelectorAll('[data-lang-switch]').forEach((button) => {
      const active = button.getAttribute('data-lang-switch') === state.lang;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function applyBrand() {
    document.querySelectorAll('[data-brand]').forEach((node) => {
      const token = node.getAttribute('data-brand');
      node.textContent = BRAND[token] ?? '';
    });
    document.querySelectorAll('[data-brand-href]').forEach((node) => {
      const token = node.getAttribute('data-brand-href');
      if (token === 'phone') node.setAttribute('href', `tel:${BRAND.phone.replace(/\s+/g, '')}`);
      if (token === 'email' && BRAND.email) node.setAttribute('href', `mailto:${BRAND.email}`);
      if (token === 'tiktok') node.setAttribute('href', `https://www.tiktok.com/${BRAND.tiktok}`);
    });
  }

  function translatePage(root = document) {
    root.querySelectorAll('[data-i18n]').forEach((node) => {
      node.textContent = t(node.getAttribute('data-i18n'));
    });
    root.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
      node.setAttribute('placeholder', t(node.getAttribute('data-i18n-placeholder')));
    });
    root.querySelectorAll('[data-i18n-aria]').forEach((node) => {
      node.setAttribute('aria-label', t(node.getAttribute('data-i18n-aria')));
    });
    root.querySelectorAll('[data-i18n-title]').forEach((node) => {
      node.setAttribute('title', t(node.getAttribute('data-i18n-title')));
    });
  }

  function placeholderSvg(label) {
    const safeLabel = label || BRAND.name;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#2f9e44"/><stop offset="100%" stop-color="#f97316"/></linearGradient></defs><rect width="1200" height="900" fill="url(#g)"/><circle cx="920" cy="160" r="190" fill="rgba(255,255,255,.08)"/><circle cx="200" cy="720" r="220" fill="rgba(255,255,255,.08)"/><text x="600" y="440" fill="#f8f4eb" font-family="Georgia, serif" font-size="62" text-anchor="middle">${safeLabel}</text></svg>`)}`;
  }

  function initImageFallbacks() {
    document.addEventListener('error', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLImageElement)) return;
      if (target.dataset.fallbackApplied === 'true') return;
      target.dataset.fallbackApplied = 'true';
      target.src = placeholderSvg(target.dataset.fallbackLabel || target.alt || BRAND.name);
    }, true);
  }

  function revealVisible(elements) {
    elements.forEach((element, index) => {
      element.style.setProperty('--reveal-order', index);
      if (reducedMotion || !('IntersectionObserver' in window)) {
        element.classList.add('is-visible');
      }
    });
  }

  function renderHomeRoomsPreview() {
    const container = document.querySelector('[data-home-rooms]');
    if (!container) return;
    container.innerHTML = ROOMS.map((room) => `
      <article class="room-card glass-card" data-reveal>
        <div class="card-media">
          <img src="${room.image}" alt="${t(room.altKey)}" width="1200" height="900" loading="lazy" decoding="async" data-fallback-label="${t(room.nameKey)}">
        </div>
        <div class="card-body">
          <div class="card-header">
            <div>
              <h3>${t(room.nameKey)}</h3>
              <p>${t(room.descriptionKey)}</p>
            </div>
            <span class="price-pill">${formatCurrency(room.price)} ${t('rooms_price_suffix')}</span>
          </div>
          <ul class="feature-list">${room.features.slice(0, 4).map((feature) => `<li>${t(feature)}</li>`).join('')}</ul>
          <div class="card-actions">
            <a class="secondary-button" href="rooms.html#${room.id}">${t('rooms_view')}</a>
            <a class="primary-button" href="booking.html?room=${encodeURIComponent(room.id)}">${t('rooms_book')}</a>
          </div>
        </div>
      </article>`).join('');
    revealVisible(container.querySelectorAll('[data-reveal]'));
  }

  function setLanguage(lang, announce = true) {
    state.lang = lang === 'am' ? 'am' : 'en';
    document.documentElement.lang = state.lang;
    safeStorageSet('bj_lang', state.lang);
    updateLanguageButtons();
    applyBrand();
    translatePage();
    renderHomeRoomsPreview();
    document.dispatchEvent(new CustomEvent(languageEventName, { detail: { lang: state.lang } }));
    if (announce) showToast(t('toast_language'));
  }

  function trapFocus(container) {
    const selector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const handle = (event) => {
      if (event.key !== 'Tab') return;
      const nodes = Array.from(container.querySelectorAll(selector)).filter((el) => el.offsetParent !== null || el === document.activeElement);
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    container.addEventListener('keydown', handle);
    return () => container.removeEventListener('keydown', handle);
  }

  function initReveal() {
    const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));
    revealVisible(revealItems);
    if (reducedMotion || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });
    revealItems.forEach((item, index) => {
      item.style.setProperty('--reveal-order', index % 6);
      observer.observe(item);
    });
  }

  function initNavbar() {
    const header = document.querySelector('.site-header');
    const toggle = document.querySelector('[data-menu-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    if (!header) return;

    const markScrolled = () => header.classList.toggle('is-scrolled', window.scrollY > 16);
    markScrolled();
    window.addEventListener('scroll', markScrolled, { passive: true });

    const current = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('[data-nav-link]').forEach((link) => {
      const href = link.getAttribute('href');
      if (href === current || (!current && href === 'index.html')) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });

    if (!toggle || !mobileMenu) return;
    let releaseTrap = null;
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      if (releaseTrap) releaseTrap();
      releaseTrap = null;
    };
    const openMenu = () => {
      toggle.setAttribute('aria-expanded', 'true');
      mobileMenu.classList.add('is-open');
      document.body.classList.add('menu-open');
      releaseTrap = trapFocus(mobileMenu);
      const firstLink = mobileMenu.querySelector('a, button');
      if (firstLink) firstLink.focus();
    };
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      if (expanded) closeMenu(); else openMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
    mobileMenu.querySelectorAll('a, button[data-lang-switch]').forEach((node) => {
      node.addEventListener('click', () => {
        if (node.matches('a')) closeMenu();
      });
    });
  }

  function initLanguageControls() {
    document.querySelectorAll('[data-lang-switch]').forEach((button) => {
      button.addEventListener('click', () => setLanguage(button.getAttribute('data-lang-switch')));
    });
    updateLanguageButtons();
  }

  function showToast(message) {
    let region = document.getElementById(toastRegionId);
    if (!region) {
      region = document.createElement('div');
      region.id = toastRegionId;
      region.className = 'toast-region';
      region.setAttribute('aria-live', 'polite');
      region.setAttribute('aria-atomic', 'true');
      document.body.appendChild(region);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    region.appendChild(toast);
    window.setTimeout(() => toast.remove(), 3200);
  }

  function initContactForm() {
    const form = document.querySelector('[data-contact-form]');
    const success = document.querySelector('[data-contact-success]');
    if (!form) return;
    const fields = {
      name: form.querySelector('[name="name"]'),
      email: form.querySelector('[name="email"]'),
      message: form.querySelector('[name="message"]')
    };
    const setError = (field, messageKey = '') => {
      const input = fields[field];
      const errorNode = form.querySelector(`[data-error-for="${field}"]`);
      if (!input || !errorNode) return;
      errorNode.textContent = messageKey ? t(messageKey) : '';
      input.setAttribute('aria-invalid', String(Boolean(messageKey)));
    };
    const validate = () => {
      let valid = true;
      setError('name'); setError('email'); setError('message');
      if (!fields.name.value.trim()) { setError('name', 'error_name'); valid = false; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value.trim())) { setError('email', 'error_email'); valid = false; }
      if (!fields.message.value.trim()) { setError('message', 'error_message'); valid = false; }
      return valid;
    };
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!validate()) return;
      const payload = {
        id: `msg-${Date.now()}`,
        timestamp: new Date().toISOString(),
        name: fields.name.value.trim(),
        email: fields.email.value.trim(),
        message: fields.message.value.trim()
      };
      const existing = (() => {
        try {
          const data = JSON.parse(localStorage.getItem('bj_messages') || '[]');
          return Array.isArray(data) ? data : [];
        } catch (error) {
          return [];
        }
      })();
      existing.push(payload);
      safeStorageSet('bj_messages', JSON.stringify(existing));
      form.reset();
      if (success) {
        success.hidden = false;
        success.querySelector('[data-contact-success-title]').textContent = t('contact_success_title');
        success.querySelector('[data-contact-success-text]').textContent = t('contact_success_text');
      }
      showToast(t('toast_message_saved'));
    });
    document.addEventListener(languageEventName, () => {
      translatePage(form);
      if (success && !success.hidden) {
        success.querySelector('[data-contact-success-title]').textContent = t('contact_success_title');
        success.querySelector('[data-contact-success-text]').textContent = t('contact_success_text');
      }
    });
  }

  function initFooterYear() {
    document.querySelectorAll('[data-year]').forEach((node) => { node.textContent = String(new Date().getFullYear()); });
  }

  window.HHApp = {
    BRAND,
    ROOMS,
    translations,
    t,
    formatCurrency,
    todayISO,
    addDaysISO,
    differenceInNights,
    getLanguage: () => state.lang,
    languageEventName,
    setLanguage,
    safeStorageGet,
    safeStorageSet,
    showToast,
    trapFocus,
    placeholderSvg,
    renderHomeRoomsPreview
  };

  document.addEventListener('DOMContentLoaded', () => {
    applyBrand();
    initFooterYear();
    initNavbar();
    initLanguageControls();
    translatePage();
    renderHomeRoomsPreview();
    initReveal();
    initImageFallbacks();
    initContactForm();
    setLanguage(state.lang, false);
  });
})();
