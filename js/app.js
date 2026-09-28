(() => {
  document.documentElement.classList.add('js');

  const BRAND = {
    name: 'HABESHA HAVEN',
    subName: 'Hotel & Café',
    tagline: 'Premium Ethiopian hospitality with serene rooms, refined coffee, and a warm city welcome.',
    phone: '+251 11 555 0101',
    email: 'hello@habeshahaven.com',
    address: 'Bole Road, Addis Ababa, Ethiopia',
    city: 'Addis Ababa, Ethiopia',
    hotelHours: '24/7',
    cafeHours: '6:30–22:00'
  };

  const ROOMS = [
    {
      id: 'haven-deluxe',
      nameKey: 'room_haven_deluxe_name',
      descriptionKey: 'room_haven_deluxe_desc',
      price: 2450,
      maxGuests: 2,
      features: ['feature_king_bed', 'feature_wifi', 'feature_smart_tv', 'feature_breakfast', 'feature_private_bathroom'],
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      altKey: 'room_haven_deluxe_alt'
    },
    {
      id: 'garden-suite',
      nameKey: 'room_garden_suite_name',
      descriptionKey: 'room_garden_suite_desc',
      price: 3800,
      maxGuests: 3,
      features: ['feature_king_bed', 'feature_garden_view', 'feature_wifi', 'feature_breakfast', 'feature_lounge_area'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      altKey: 'room_garden_suite_alt'
    },
    {
      id: 'executive-room',
      nameKey: 'room_executive_name',
      descriptionKey: 'room_executive_desc',
      price: 4900,
      maxGuests: 2,
      features: ['feature_premium_king_bed', 'feature_city_view', 'feature_workspace', 'feature_breakfast', 'feature_premium_bathroom'],
      image: 'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&w=1200&q=80',
      altKey: 'room_executive_alt'
    }
  ];

  const translations = {
    en: {
      nav_home: 'Home', nav_rooms: 'Rooms', nav_menu: 'Café & Menu', nav_booking: 'Booking', nav_contact: 'Contact', nav_book: 'Book Now',
      brand_tagline_short: 'Hotel & Café', brand_tagline_footer: 'Elegant Ethiopian hotel and café experiences in the heart of Addis Ababa.',
      footer_quick_links: 'Quick Links', footer_contact: 'Contact', footer_hours: 'Hours', footer_hotel_hours: 'Hotel · 24/7', footer_cafe_hours: 'Café · 6:30–22:00', footer_rights: 'All rights reserved.',
      hero_eyebrow: 'Modern Ethiopian hospitality', hero_title: 'Stay. Taste. Experience Ethiopia.', hero_subtitle: 'An elegant hotel and café experience where Ethiopian hospitality meets modern comfort.',
      hero_book: 'Book a Room', hero_menu: 'Explore Menu', hero_stat_1: '★★★★★ Guest Experience', hero_stat_2: '10+ Rooms', hero_stat_3: '24/7 Hospitality',
      hero_note_1_title: 'Fresh Buna daily', hero_note_1_text: 'Coffee ceremony touches from dawn to evening.',
      hero_note_2_title: 'Check-in 2PM', hero_note_2_text: 'Seamless arrivals with attentive front-desk care.',
      hero_note_3_title: '4.9 / 5', hero_note_3_text: 'Loved for calm rooms, caring service, and warmth.',
      more_eyebrow: 'Designed for comfort', more_title: 'More Than a Stay', more_text: 'Every corner balances Ethiopian warmth, quiet luxury, and contemporary ease for city breaks, work trips, and slow coffee mornings.',
      feature_rooms_title: 'Comfortable Rooms', feature_rooms_text: 'Thoughtfully designed rooms for business and leisure travelers.',
      feature_hospitality_title: 'Ethiopian Hospitality', feature_hospitality_text: 'Warm, personal service inspired by Ethiopian culture.',
      feature_cafe_title: 'Café Experience', feature_cafe_text: 'Fresh coffee, Ethiopian flavors and modern café favorites.',
      feature_location_title: 'Perfect Location', feature_location_text: 'Conveniently located for exploring the city.',
      rooms_eyebrow: 'Rest with character', rooms_title: 'Rooms crafted for serene city stays', rooms_text: 'Soft linens, crafted details, and calm palettes create restful rooms with the essentials modern guests expect.',
      rooms_view: 'View Details', rooms_book: 'Book Now', rooms_view_all: 'See all rooms', rooms_price_suffix: '/ night', rooms_for_guests: 'Up to {count} guests',
      coffee_eyebrow: 'Coffee ceremony, elevated', coffee_title: 'A café experience rooted in Ethiopian ritual', coffee_text: 'From slow-roasted buna to elegant breakfasts and late-evening desserts, our café brings texture, aroma, and social warmth into every stay.', coffee_cta: 'Discover the café menu',
      testimonial_eyebrow: 'Guest impressions', testimonial_title: 'Moments guests remember',
      testimonial_1_quote: 'The coffee ceremony details and attentive team made the whole stay feel personal and refined.', testimonial_1_name: 'Liya M.', testimonial_1_meta: 'Weekend guest',
      testimonial_2_quote: 'A calm room, polished service, and one of the best macchiatos I have had in Addis.', testimonial_2_name: 'Daniel T.', testimonial_2_meta: 'Business traveler',
      testimonial_3_quote: 'Elegant without feeling cold — the blend of Ethiopian warmth and modern design is beautifully done.', testimonial_3_name: 'Sara K.', testimonial_3_meta: 'Café visitor',
      cta_title: 'Plan your next stay or café visit with Habesha Haven', cta_text: 'Send a booking request, browse the menu, or contact our team for tailored hospitality.', cta_button: 'Start your booking request',
      rooms_page_title: 'Refined rooms for rest, focus, and Ethiopian warmth', rooms_page_text: 'Search by stay dates, guests, and preferred room style to preview availability and your estimated stay total.',
      rooms_search_title: 'Search your stay', rooms_search_button: 'Search Rooms', rooms_checkin: 'Check-in', rooms_checkout: 'Check-out', rooms_guests: 'Guests', rooms_type: 'Room type', room_type_all: 'All room types',
      rooms_nights: 'Nights: {count}', rooms_matches: '{count} room options', rooms_none: 'No rooms match your dates and guest count. Try fewer guests or a different room type.',
      rooms_estimate: 'Estimated stay total', rooms_modal_guests: 'Best for {count} guests', modal_close: 'Close',
      menu_page_title: 'Signature Ethiopian flavors and café classics', menu_page_text: 'Filter by category, search the menu, and build an order request to share with our café team.',
      menu_search_label: 'Search menu', menu_search_placeholder: 'Search coffee, breakfast, dessert…', menu_results: '{count} menu items', menu_empty: 'No menu items match your current filters.',
      menu_category_all: 'All', menu_category_breakfast: 'Breakfast', menu_category_ethiopian: 'Ethiopian', menu_category_main_course: 'Main Course', menu_category_coffee: 'Coffee', menu_category_drinks: 'Drinks', menu_category_dessert: 'Dessert',
      menu_add: 'Add to Order', cart_title: 'Your order request', cart_empty: 'Your cart is empty. Add a few favorites from the café menu.', cart_subtotal: 'Subtotal', cart_service: 'Service charge (10%)', cart_total: 'Total', cart_place: 'Place Order', cart_remove: 'Remove', cart_qty_minus: 'Decrease quantity', cart_qty_plus: 'Increase quantity', cart_open: 'Open order cart', cart_count: '{count} items', cart_confirm_title: 'Order request noted', cart_confirm_text: 'Your order request has been noted — this is a demo, so please confirm it directly with our café staff.', cart_reference: 'Reference', cart_close: 'Continue browsing',
      booking_page_title: 'Request your Habesha Haven stay', booking_page_text: 'Share your stay details and we will follow up to confirm availability and the final reservation.',
      booking_form_title: 'Booking request', booking_submit: 'Confirm Booking Request', booking_summary_title: 'Stay estimate', booking_summary_room: 'Room', booking_summary_nights: 'Nights', booking_summary_rate: 'Nightly rate', booking_summary_subtotal: 'Subtotal', booking_summary_taxes: 'VAT (15%)', booking_summary_total: 'Estimated total', booking_summary_note: 'This estimate is for guidance only. Final confirmation will be shared by our team.', booking_requests_label: 'Special Requests', booking_room_type: 'Room Type', booking_name: 'Full Name', booking_email: 'Email', booking_phone: 'Phone', booking_guest_count: 'Guests',
      booking_request_saved_title: 'Booking request received', booking_request_saved_text: 'Thank you. This is a booking request only — our hotel team will contact you to confirm availability and finalize your stay.', booking_reference: 'Reference number', booking_back_to_rooms: 'Review rooms again',
      contact_page_title: 'Contact our hotel and café team', contact_page_text: 'Reach out for room questions, group stays, café reservations, or local recommendations in Addis Ababa.',
      contact_phone_title: 'Phone', contact_email_title: 'Email', contact_location_title: 'Location', contact_hours_title: 'Opening Hours', contact_form_title: 'Send us a message', contact_message: 'Message', contact_submit: 'Send Message', contact_success_title: 'Message saved', contact_success_text: 'Thank you for reaching out. This demo stores your message locally and would connect to a real inbox later.', contact_map_title: 'Find us in Addis Ababa', contact_map_text: 'Near the city’s business and café districts, with easy access to meetings, shopping, and evening strolls.', contact_map_link: 'Open in Maps',
      form_required: 'Required', guests_option_1: '1 guest', guests_option_2: '2 guests', guests_option_3: '3 guests', guests_option_4: '4 guests',
      error_name: 'Please enter your full name.', error_email: 'Please enter a valid email address.', error_phone: 'Please enter a valid phone number.', error_checkin: 'Please choose a valid check-in date.', error_checkout: 'Check-out must be after check-in.', error_guests: 'Please choose a valid number of guests.', error_room: 'Please choose a room type.', error_message: 'Please enter a message before submitting.',
      placeholder_summary_room: 'Choose a room', toast_added: '{item} added to your order.', toast_language: 'Language updated.', toast_message_saved: 'Message saved locally.', toast_booking_saved: 'Booking request saved locally.',
      room_haven_deluxe_name: 'Haven Deluxe', room_haven_deluxe_desc: 'A calm king room with soft textures, breakfast, and thoughtful comforts for two.', room_haven_deluxe_alt: 'Elegant deluxe hotel room with king bed and warm lighting.',
      room_garden_suite_name: 'Garden Suite', room_garden_suite_desc: 'A spacious suite with lounge seating and a leafy outlook for longer stays.', room_garden_suite_alt: 'Garden suite with lounge area and refined natural tones.',
      room_executive_name: 'Executive Room', room_executive_desc: 'A polished city-view room designed for focused work and premium rest.', room_executive_alt: 'Executive hotel room with city view and workspace.',
      feature_king_bed: 'King bed', feature_wifi: 'Wi‑Fi', feature_smart_tv: 'Smart TV', feature_breakfast: 'Breakfast', feature_private_bathroom: 'Private bathroom', feature_garden_view: 'Garden view', feature_lounge_area: 'Lounge area', feature_premium_king_bed: 'Premium king bed', feature_city_view: 'City view', feature_workspace: 'Workspace', feature_premium_bathroom: 'Premium bathroom',
      menu_ceremony_name: 'Ethiopian Coffee Ceremony', menu_ceremony_desc: 'Traditional Ethiopian coffee experience.',
      menu_macchiato_name: 'Macchiato', menu_macchiato_desc: 'Rich Ethiopian espresso with steamed milk.',
      menu_chechebsa_name: 'Chechebsa', menu_chechebsa_desc: 'Traditional Ethiopian breakfast with honey and butter.',
      menu_tibs_name: 'Tibs', menu_tibs_desc: 'Tender sautéed beef with Ethiopian spices.',
      menu_shiro_name: 'Shiro', menu_shiro_desc: 'Traditional chickpea stew served with injera.',
      menu_firfir_name: 'Firfir', menu_firfir_desc: 'Spiced injera pieces with Ethiopian berbere.',
      menu_doro_name: 'Doro Wat', menu_doro_desc: 'Slow-cooked chicken stew with egg and rich berbere sauce.',
      menu_beyaynetu_name: 'Beyaynetu', menu_beyaynetu_desc: 'Colorful fasting platter with vegetables, lentils, and greens.',
      menu_kitfo_name: 'Kitfo', menu_kitfo_desc: 'Finely minced beef seasoned with spiced butter and mitmita.',
      menu_ful_name: 'Ful', menu_ful_desc: 'Warm fava beans with olive oil, tomato, and fresh herbs.',
      menu_enkulal_name: 'Enkulal Firfir', menu_enkulal_desc: 'Egg and injera scramble brightened with Ethiopian spices.',
      menu_perch_name: 'Grilled Nile Perch', menu_perch_desc: 'Lake fish fillet served with lemon herb vegetables.',
      menu_club_name: 'Club Sandwich', menu_club_desc: 'Layered grilled chicken sandwich with crisp greens and fries.',
      menu_pasta_name: 'Roasted Tomato Pasta', menu_pasta_desc: 'Penne with roasted tomato sauce, basil, and parmesan.',
      menu_spris_name: 'Spris Juice', menu_spris_desc: 'Layered fresh avocado, mango, and papaya juice.',
      menu_mango_name: 'Fresh Mango Juice', menu_mango_desc: 'Bright mango juice served chilled.',
      menu_ambo_name: 'Ambo Mineral Water', menu_ambo_desc: 'Classic sparkling Ethiopian mineral water.',
      menu_shai_name: 'Spiced Tea (Shai)', menu_shai_desc: 'Black tea simmered with warming spices.',
      menu_cappuccino_name: 'Cappuccino', menu_cappuccino_desc: 'Silky espresso drink with generous milk foam.',
      menu_tiramisu_name: 'Tiramisu', menu_tiramisu_desc: 'Soft coffee-soaked dessert finished with cocoa.',
      menu_honey_cake_name: 'Honey Cake', menu_honey_cake_desc: 'Tender layered cake glazed with fragrant local honey.',
      menu_fruit_name: 'Fruit Salad', menu_fruit_desc: 'Seasonal fruit bowl with citrus and mint.',
      order_item: 'Item', order_quantity: 'Qty', order_line_total: 'Line total',
      not_found_title: 'The page you’re looking for feels just beyond the courtyard.', not_found_text: 'Return to Habesha Haven’s homepage to continue exploring rooms, café offerings, and contact details.', not_found_button: 'Return Home'
    },
    am: {
      nav_home: 'መነሻ', nav_rooms: 'ክፍሎች', nav_menu: 'ካፌ እና ሜኑ', nav_booking: 'ቦታ ያዝ', nav_contact: 'ያግኙን', nav_book: 'አሁን ይያዙ',
      brand_tagline_short: 'ሆቴል እና ካፌ', brand_tagline_footer: 'በአዲስ አበባ ልብ ውስጥ የሚገኝ ዘመናዊ ኢትዮጵያዊ ሆቴል እና ካፌ ተሞክሮ።',
      footer_quick_links: 'ፈጣን አገናኞች', footer_contact: 'መገኛ', footer_hours: 'ሰዓታት', footer_hotel_hours: 'ሆቴል · 24/7', footer_cafe_hours: 'ካፌ · 6:30–22:00', footer_rights: 'መብቶች ሁሉ የተጠበቁ ናቸው።',
      hero_eyebrow: 'ዘመናዊ ኢትዮጵያዊ እንግዳ ተቀባይነት', hero_title: 'ቆዩ። ቅመሱ። ኢትዮጵያን ተሞክሩ።', hero_subtitle: 'ኢትዮጵያዊ እንግዳ ተቀባይነት ከዘመናዊ ምቾት ጋር የተጣመረ ውብ የሆቴል እና ካፌ ተሞክሮ።',
      hero_book: 'ክፍል ይያዙ', hero_menu: 'ሜኑን ይመልከቱ', hero_stat_1: '★★★★★ የእንግዳ ተሞክሮ', hero_stat_2: '10+ ክፍሎች', hero_stat_3: '24/7 እንግዳ ተቀባይነት',
      hero_note_1_title: 'ትኩስ ቡና በየቀኑ', hero_note_1_text: 'ከጠዋት እስከ ማታ ድረስ የቡና ሥነ ሥርዓት የሚያስታውስ ስሜት።',
      hero_note_2_title: 'መግቢያ 2 ሰዓት', hero_note_2_text: 'በተንከባካቢ የመቀበያ አገልግሎት የተሟላ መድረስ።',
      hero_note_3_title: '4.9 / 5', hero_note_3_text: 'በጸጥ ክፍሎች፣ በአሳቢ አገልግሎት እና በሙቀት የተወደደ።',
      more_eyebrow: 'ለምቾት የተዘጋጀ', more_title: 'ከመቆየት በላይ', more_text: 'እያንዳንዱ ቦታ ኢትዮጵያዊ ሙቀትን፣ ጸጥ ያለ ልዩነትን እና ዘመናዊ ምቾትን ይዛ ነው።',
      feature_rooms_title: 'ምቹ ክፍሎች', feature_rooms_text: 'ለስራ እና ለመዝናኛ ተጓዦች በአስተዋይነት የተነደፉ ክፍሎች።',
      feature_hospitality_title: 'ኢትዮጵያዊ እንግዳ ተቀባይነት', feature_hospitality_text: 'ከኢትዮጵያ ባህል የተነሳ ሙቀት ያለው የግል አገልግሎት።',
      feature_cafe_title: 'የካፌ ተሞክሮ', feature_cafe_text: 'ትኩስ ቡና፣ ኢትዮጵያዊ ጣዕሞች እና ዘመናዊ የካፌ ተወዳጆች።',
      feature_location_title: 'ተስማሚ ስፍራ', feature_location_text: 'ከተማውን ለመቃኘት በሚያስችል ቦታ የሚገኝ።',
      rooms_eyebrow: 'በባህሪ የተሞላ እረፍት', rooms_title: 'ለተረጋጋ የከተማ ቆይታ የተሠሩ ክፍሎች', rooms_text: 'ለስላሳ የአልጋ ልብስ፣ የተገነቡ ዝርዝሮች እና የተረጋጉ ቀለሞች እረፍትን ይፈጥራሉ።',
      rooms_view: 'ዝርዝር ይመልከቱ', rooms_book: 'ክፍል ይያዙ', rooms_view_all: 'ሁሉንም ክፍሎች ይመልከቱ', rooms_price_suffix: '/ ሌሊት', rooms_for_guests: 'እስከ {count} እንግዶች',
      coffee_eyebrow: 'የተሻሻለ የቡና ሥነ ሥርዓት', coffee_title: 'በኢትዮጵያ ልማድ የተሠረተ የካፌ ተሞክሮ', coffee_text: 'ከቀስ ብሎ ከተጠበሰ ቡና እስከ የተዋበ ቁርስ እና ማታ ጣፋጭ ምግቦች ድረስ ካፌያችን ሞቅ ያለ ስሜት ያመጣል።', coffee_cta: 'የካፌ ሜኑን ያግኙ',
      testimonial_eyebrow: 'የእንግዶች አስተያየት', testimonial_title: 'እንግዶች የሚያስታውሱት ጊዜ',
      testimonial_1_quote: 'የቡና ሥነ ሥርዓቱ ዝርዝሮች እና አሳቢው ቡድን ቆይታዬን በጣም ልዩ አድርገውታል።', testimonial_1_name: 'ሊያ መ.', testimonial_1_meta: 'የሳምንት መጨረሻ እንግዳ',
      testimonial_2_quote: 'ጸጥ ያለ ክፍል፣ የተሟላ አገልግሎት እና በአዲስ ካገኘኋቸው ምርጥ ማኪያቶዎች አንዱ።', testimonial_2_name: 'ዳንኤል ተ.', testimonial_2_meta: 'የስራ ጉዞ ተጓዥ',
      testimonial_3_quote: 'ውብ ነው ነገር ግን ቀዝቃዛ አይሰማም — ኢትዮጵያዊ ሙቀት እና ዘመናዊ ንድፍ እጅግ ተመጣጥነዋል።', testimonial_3_name: 'ሳራ ከ.', testimonial_3_meta: 'የካፌ እንግዳ',
      cta_title: 'ቀጣዩን ቆይታዎን ወይም የካፌ ጉብኝትዎን ከHabesha Haven ጋር ያቅዱ', cta_text: 'የቦታ ይዞታ ጥያቄ ይላኩ፣ ሜኑን ይመልከቱ ወይም ከቡድናችን ጋር ይገናኙ።', cta_button: 'የቦታ ጥያቄዎን ይጀምሩ',
      rooms_page_title: 'ለእረፍት፣ ለትኩረት እና ለኢትዮጵያዊ ሙቀት የተዘጋጁ ክፍሎች', rooms_page_text: 'የቆይታ ቀናትዎን፣ እንግዶችን እና የክፍል ምርጫዎን በመምረጥ የቆይታ ግምትዎን ይመልከቱ።',
      rooms_search_title: 'ቆይታዎን ይፈልጉ', rooms_search_button: 'ክፍሎችን ፈልግ', rooms_checkin: 'መግቢያ', rooms_checkout: 'መውጫ', rooms_guests: 'እንግዶች', rooms_type: 'የክፍል አይነት', room_type_all: 'ሁሉም ክፍሎች',
      rooms_nights: 'ሌሊቶች: {count}', rooms_matches: '{count} የክፍል ምርጫዎች', rooms_none: 'ለእነዚህ ቀናት እና እንግዶች የሚስማማ ክፍል አልተገኘም። እንግዶችን ያነሱ ወይም ሌላ ክፍል ይምረጡ።',
      rooms_estimate: 'የቆይታ ግምት', rooms_modal_guests: 'ለ {count} እንግዶች ተስማሚ', modal_close: 'ዝጋ',
      menu_page_title: 'የኢትዮጵያ ልዩ ጣዕሞች እና የካፌ ክላሲኮች', menu_page_text: 'በምድብ ይጣሩ፣ ሜኑን ይፈልጉ፣ እና ለካፌያችን ቡድን የሚላክ የትዕዛዝ ጥያቄ ይሰብስቡ።',
      menu_search_label: 'ሜኑ ይፈልጉ', menu_search_placeholder: 'ቡና፣ ቁርስ፣ ጣፋጭ ይፈልጉ…', menu_results: '{count} የሜኑ እቃዎች', menu_empty: 'ከአሁኑ ማጣሪያዎች ጋር የሚገጥሙ እቃዎች የሉም።',
      menu_category_all: 'ሁሉም', menu_category_breakfast: 'ቁርስ', menu_category_ethiopian: 'ኢትዮጵያዊ', menu_category_main_course: 'ዋና ምግብ', menu_category_coffee: 'ቡና', menu_category_drinks: 'መጠጦች', menu_category_dessert: 'ጣፋጭ',
      menu_add: 'ወደ ትዕዛዝ ጨምር', cart_title: 'የትዕዛዝ ጥያቄዎ', cart_empty: 'ቅርጫቱ ባዶ ነው። ከካፌያችን ሜኑ ጥቂት ነገሮችን ይጨምሩ።', cart_subtotal: 'ንዑስ ጠቅላላ', cart_service: 'የአገልግሎት ክፍያ (10%)', cart_total: 'ጠቅላላ', cart_place: 'ትዕዛዝ ይላኩ', cart_remove: 'አስወግድ', cart_qty_minus: 'ቁጥር አንስ', cart_qty_plus: 'ቁጥር ጨምር', cart_open: 'የትዕዛዝ ቅርጫት ክፈት', cart_count: '{count} እቃዎች', cart_confirm_title: 'የትዕዛዝ ጥያቄዎ ተመዝግቧል', cart_confirm_text: 'ይህ ማሳያ ብቻ ነው፤ እባክዎ ትዕዛዝዎን ከካፌያችን ሰራተኞች ጋር በቀጥታ ያረጋግጡ።', cart_reference: 'መለያ ቁጥር', cart_close: 'መቀጠል',
      booking_page_title: 'በHabesha Haven የቆይታ ጥያቄዎን ያስገቡ', booking_page_text: 'የቆይታ ዝርዝሮችዎን ያጋሩ እና ለመጨረሻ ማረጋገጫ ቡድናችን ይነጋገራል።',
      booking_form_title: 'የቦታ ጥያቄ', booking_submit: 'የቦታ ጥያቄ ያረጋግጡ', booking_summary_title: 'የቆይታ ግምት', booking_summary_room: 'ክፍል', booking_summary_nights: 'ሌሊቶች', booking_summary_rate: 'የአንድ ሌሊት ዋጋ', booking_summary_subtotal: 'ንዑስ ጠቅላላ', booking_summary_taxes: 'ቫት (15%)', booking_summary_total: 'ግምት ጠቅላላ', booking_summary_note: 'ይህ ግምት ለመረጃ ብቻ ነው። የመጨረሻ ማረጋገጫ ከቡድናችን ይጋራል።', booking_requests_label: 'ልዩ ጥያቄዎች', booking_room_type: 'የክፍል አይነት', booking_name: 'ሙሉ ስም', booking_email: 'ኢሜይል', booking_phone: 'ስልክ', booking_guest_count: 'እንግዶች',
      booking_request_saved_title: 'የቦታ ጥያቄዎ ተቀብሏል', booking_request_saved_text: 'እናመሰግናለን። ይህ የቦታ ጥያቄ ብቻ ነው — ቦታ መኖሩን ለማረጋገጥ የሆቴላችን ቡድን ይገናኛል።', booking_reference: 'የማጣቀሻ ቁጥር', booking_back_to_rooms: 'ክፍሎችን እንደገና ይመልከቱ',
      contact_page_title: 'የሆቴላችንን እና የካፌያችንን ቡድን ያግኙ', contact_page_text: 'ስለ ክፍሎች፣ የቡድን ቆይታዎች፣ የካፌ ማስያዣ ወይም የአካባቢ ምክሮች ይጠይቁ።',
      contact_phone_title: 'ስልክ', contact_email_title: 'ኢሜይል', contact_location_title: 'አድራሻ', contact_hours_title: 'የክፍት ሰዓት', contact_form_title: 'መልዕክት ይላኩ', contact_message: 'መልዕክት', contact_submit: 'መልዕክት ላክ', contact_success_title: 'መልዕክት ተመዝግቧል', contact_success_text: 'ለመጻፍዎ እናመሰግናለን። ይህ ማሳያ መልዕክትዎን በአካባቢያዊ ማከማቻ ያስቀምጣል።', contact_map_title: 'በአዲስ አበባ ያግኙን', contact_map_text: 'ከከተማው የንግድ እና የካፌ አካባቢዎች አጠገብ በሚገኝ ቦታ።', contact_map_link: 'በካርታ ክፈት',
      form_required: 'አስፈላጊ', guests_option_1: '1 እንግዳ', guests_option_2: '2 እንግዶች', guests_option_3: '3 እንግዶች', guests_option_4: '4 እንግዶች',
      error_name: 'እባክዎ ሙሉ ስምዎን ያስገቡ።', error_email: 'እባክዎ ትክክለኛ ኢሜይል ያስገቡ።', error_phone: 'እባክዎ ትክክለኛ ስልክ ቁጥር ያስገቡ።', error_checkin: 'እባክዎ ትክክለኛ የመግቢያ ቀን ይምረጡ።', error_checkout: 'የመውጫ ቀን ከመግቢያ ቀን በኋላ መሆን አለበት።', error_guests: 'እባክዎ ትክክለኛ የእንግዶች ብዛት ይምረጡ።', error_room: 'እባክዎ የክፍል አይነት ይምረጡ።', error_message: 'እባክዎ ከመላክዎ በፊት መልዕክት ያስገቡ።',
      placeholder_summary_room: 'ክፍል ይምረጡ', toast_added: '{item} ወደ ትዕዛዝዎ ታክሏል።', toast_language: 'ቋንቋው ተቀይሯል።', toast_message_saved: 'መልዕክቱ በአካባቢያዊ ማከማቻ ተቀምጧል።', toast_booking_saved: 'የቦታ ጥያቄው ተቀምጧል።',
      room_haven_deluxe_name: 'ሃቨን ዲሉክስ', room_haven_deluxe_desc: 'ለሁለት እንግዶች የተዘጋጀ የንጉሥ አልጋ ያለው ጸጥ ያለ ክፍል።', room_haven_deluxe_alt: 'በሙቀት ብርሃን የተሞላ የኪንግ አልጋ ያለው የዲሉክስ ክፍል።',
      room_garden_suite_name: 'ጋርደን ሱዊት', room_garden_suite_desc: 'ለረጅም ቆይታ ተስማሚ የመቀመጫ ቦታ እና አረንጓዴ እይታ ያለው ሰፊ ሱዊት።', room_garden_suite_alt: 'የመቀመጫ ቦታ ያለው በተፈጥሯዊ ቀለማት የተሞላ ጋርደን ሱዊት።',
      room_executive_name: 'ኤክዘኪውቲቭ ክፍል', room_executive_desc: 'ለትኩረት ስራ እና ለፕሪሚየም እረፍት የተዘጋጀ የከተማ እይታ ያለው ክፍል።', room_executive_alt: 'የመስሪያ ቦታ እና የከተማ እይታ ያለው የኤክዘኪውቲቭ ክፍል።',
      feature_king_bed: 'ኪንግ አልጋ', feature_wifi: 'ዋይ‑ፋይ', feature_smart_tv: 'ስማርት ቲቪ', feature_breakfast: 'ቁርስ', feature_private_bathroom: 'የግል መታጠቢያ', feature_garden_view: 'የአትክልት እይታ', feature_lounge_area: 'የመቀመጫ ቦታ', feature_premium_king_bed: 'ፕሪሚየም ኪንግ አልጋ', feature_city_view: 'የከተማ እይታ', feature_workspace: 'የስራ ቦታ', feature_premium_bathroom: 'ፕሪሚየም መታጠቢያ',
      menu_ceremony_name: 'የኢትዮጵያ ቡና ሥነ ሥርዓት', menu_ceremony_desc: 'ባህላዊ የኢትዮጵያ ቡና ተሞክሮ።',
      menu_macchiato_name: 'ማኪያቶ', menu_macchiato_desc: 'በተነፈሰ ወተት የተጣመረ የኢትዮጵያ ኤስፕሬሶ።',
      menu_chechebsa_name: 'ጨጨብሳ', menu_chechebsa_desc: 'ከማር እና ቅቤ ጋር የሚቀርብ ባህላዊ ቁርስ።',
      menu_tibs_name: 'ጥብስ', menu_tibs_desc: 'በኢትዮጵያ ቅመም የተጠበሰ ስጋ።',
      menu_shiro_name: 'ሽሮ', menu_shiro_desc: 'ከእንጀራ ጋር የሚቀርብ የሽምብራ ወጥ።',
      menu_firfir_name: 'ፍርፍር', menu_firfir_desc: 'በበርበሬ የተቀመመ የእንጀራ ቁርጥራጭ።',
      menu_doro_name: 'ዶሮ ወጥ', menu_doro_desc: 'ከእንቁላል ጋር የተቀቀለ በርበሬ ያለው የዶሮ ወጥ።',
      menu_beyaynetu_name: 'በያይነቱ', menu_beyaynetu_desc: 'አትክልት፣ ምስር እና አረንጓዴ ያካተተ የፆም ፕላተር።',
      menu_kitfo_name: 'ክትፎ', menu_kitfo_desc: 'በቅቤ እና ሚጥሚጣ የተቀመመ የተፈጨ ስጋ።',
      menu_ful_name: 'ፉል', menu_ful_desc: 'በዘይት፣ ቲማቲም እና ቅጠል የተቀላቀለ የባቄላ ምግብ።',
      menu_enkulal_name: 'እንቁላል ፍርፍር', menu_enkulal_desc: 'በኢትዮጵያ ቅመም የተቀመመ የእንጀራ እና እንቁላል ምግብ።',
      menu_perch_name: 'የናይል ፐርች ግሪል', menu_perch_desc: 'ከሎሚ እና አትክልት ጋር የሚቀርብ የዓሣ ፊሌ።',
      menu_club_name: 'ክለብ ሳንድዊች', menu_club_desc: 'ከዶሮ፣ አረንጓዴ ቅጠል እና ፍራይ ጋር የተደረገ ሳንድዊች።',
      menu_pasta_name: 'የተጠበሰ ቲማቲም ፓስታ', menu_pasta_desc: 'ከባሲል እና ፓርሜዛን ጋር የተቀመመ ፔኔ ፓስታ።',
      menu_spris_name: 'ስፕሪስ ጁስ', menu_spris_desc: 'ከአቮካዶ፣ ማንጎ እና ፓፓያ የተሠራ ተደራራቢ ጁስ።',
      menu_mango_name: 'ትኩስ ማንጎ ጁስ', menu_mango_desc: 'በቀዝቃዛ ሁኔታ የሚቀርብ ብሩህ ማንጎ ጁስ።',
      menu_ambo_name: 'አምቦ ሚነራል ውሃ', menu_ambo_desc: 'የታወቀው የኢትዮጵያ ጋዝ ያለው ሚነራል ውሃ።',
      menu_shai_name: 'ቅመም ሻይ', menu_shai_desc: 'በሞቅ ቅመሞች የተቀቀለ ጥቁር ሻይ።',
      menu_cappuccino_name: 'ካፑቺኖ', menu_cappuccino_desc: 'በብዙ የወተት አረፋ የተሸፈነ ለስላሳ የኤስፕሬሶ መጠጥ።',
      menu_tiramisu_name: 'ቲራሚሱ', menu_tiramisu_desc: 'በቡና የተሞላ እና በኮኮዋ የተሸፈነ ጣፋጭ።',
      menu_honey_cake_name: 'የማር ኬክ', menu_honey_cake_desc: 'በአካባቢው ማር የተለበሰ ለስላሳ ባለ-ንብርብር ኬክ።',
      menu_fruit_name: 'የፍራፍሬ ሳላድ', menu_fruit_desc: 'ከቅጠል እና ሎሚ ጋር የተዘጋጀ የወቅቱ ፍራፍሬ ሳህን።',
      order_item: 'እቃ', order_quantity: 'ብዛት', order_line_total: 'ዋጋ',
      not_found_title: 'የሚፈልጉት ገጽ ከግቢው በስተቀር ያለ ይመስላል።', not_found_text: 'ወደ Habesha Haven መነሻ ገጽ ተመልሰው ክፍሎችን፣ የካፌ አገልግሎቶችን እና መገኛ ዝርዝሮችን ይመልከቱ።', not_found_button: 'ወደ መነሻ ተመለስ'
    }
  };

  const state = { lang: safeStorageGet('hh_lang') || 'en' };
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const toastRegionId = 'toast-region';

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
      if (token === 'email') node.setAttribute('href', `mailto:${BRAND.email}`);
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
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1c5c49"/><stop offset="100%" stop-color="#8f633f"/></linearGradient></defs><rect width="1200" height="900" fill="url(#g)"/><circle cx="920" cy="160" r="190" fill="rgba(255,255,255,.08)"/><circle cx="200" cy="720" r="220" fill="rgba(255,255,255,.08)"/><text x="600" y="440" fill="#f8f4eb" font-family="Georgia, serif" font-size="62" text-anchor="middle">${safeLabel}</text></svg>`)}`;
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
    safeStorageSet('hh_lang', state.lang);
    updateLanguageButtons();
    applyBrand();
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: state.lang } }));
    translatePage();
    renderHomeRoomsPreview();
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
          const data = JSON.parse(localStorage.getItem('hh_messages') || '[]');
          return Array.isArray(data) ? data : [];
        } catch (error) {
          return [];
        }
      })();
      existing.push(payload);
      safeStorageSet('hh_messages', JSON.stringify(existing));
      form.reset();
      if (success) {
        success.hidden = false;
        success.querySelector('[data-contact-success-title]').textContent = t('contact_success_title');
        success.querySelector('[data-contact-success-text]').textContent = t('contact_success_text');
      }
      showToast(t('toast_message_saved'));
    });
    document.addEventListener('languagechange', () => {
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
