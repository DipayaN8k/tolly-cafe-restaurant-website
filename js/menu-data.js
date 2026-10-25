/*
  Tolly Café menu
  ----------------
  Edit prices and items here. Everything on the website's menu is built from this file.

  Each item:  { n: "Name", p: price in ₹ (or null to show "Ask us"), veg: true/false,
                d: "optional description", fav: true to mark a house favourite,
                g: "optional sub-heading inside the category",
                card: "optional shorter title for the photo card" }

  Prices transcribed from the café's printed menu cards. Update them whenever the card changes.
*/
window.TOLLY_MENU = [
  {
    id: "combos",
    name: "Let's go for combo",
    plain: "Combos",
    blurb: "Shareable plates built for two people. The combo line-up changes with the season, so ask us on WhatsApp for today's.",
    items: [
      { n: "Chinese Combo for Two", p: 299, veg: false, fav: true,
        d: "The one everybody talks about. Two mocktails, French fries with two drumsticks, egg fried rice or egg noodles with chilli chicken (4 pc), and fruit custard to finish." },
      { n: "Lavish Aamish Combo", p: 449, veg: false, fav: true,
        d: "A Bengali feast for two: galouti kebab with paratha and salad, lassi, Basanti pulao, mutton kosha, chutney and payesh." },
      { n: "Egg Chicken Fried Rice + Chilli Chicken (4 pc)", p: 150, veg: false },
      { n: "Egg Chicken Chowmein + Chilli Chicken (4 pc)", p: 150, veg: false },
      { n: "Chapati + Chhole", p: 80, veg: true },
      { n: "Chapati + Tadka", p: 80, veg: true },
      { n: "Chapati + Sabji", p: 50, veg: true },
      { n: "Fish and Rice", p: 100, veg: false },
      { n: "Rice and Chicken Curry", p: 125, veg: false },
      { n: "Rice and Mutton Curry", p: 200, veg: false }
    ]
  },
  {
    id: "chinese",
    name: "Chin Chin Choo Delight",
    plain: "Kolkata-Chinese",
    blurb: "Tangra-style Kolkata-Chinese: wok-tossed rice, Hakka chow and saucy, crisp starters.",
    items: [
      { n: "Mixed Fried Rice", p: 180, veg: false, d: "Fried rice with chicken, egg and prawn." },
      { n: "Chicken Fried Rice", p: 160, veg: false },
      { n: "Egg Fried Rice", p: 140, veg: false },
      { n: "Egg Chicken Fried Rice", p: 150, veg: false },
      { n: "Veg Fried Rice", p: 130, veg: true },
      { n: "Mixed Hakka Chow", p: 175, veg: false },
      { n: "Chicken Hakka Chow", p: 155, veg: false },
      { n: "Egg Hakka Chow", p: 135, veg: false },
      { n: "Egg Chicken Hakka Chow", p: 150, veg: false },
      { n: "Veg Hakka Chow", p: 135, veg: true },
      { n: "Chicken Gravy Chow", p: 160, veg: false },
      { n: "Chilli Chicken", p: 200, veg: false },
      { n: "Lemon Chicken", p: 220, veg: false, d: "Big, succulent pieces in a tangy-sweet lemon sauce. A good pick if you don't like it spicy." },
      { n: "Hot Garlic Chicken", p: 240, veg: false },
      { n: "Chilli Fish", p: 280, veg: false },
      { n: "Hot Garlic Fish", p: 280, veg: false },
      { n: "Chilli Paneer", p: 200, veg: true },
      { n: "Veg Manchurian", p: 200, veg: true },
      { n: "Chicken Manchurian", p: 300, veg: false },
      { n: "Honey Chilli Potato", p: 150, veg: true },
      { n: "Crispy Chilli Babycorn", p: 220, veg: true }
    ]
  },
  {
    id: "momo",
    name: "Momo",
    plain: "Momo",
    blurb: "Steamed, fried or pan-fried, served with fiery red chutney.",
    items: [
      { n: "Veg Steam Momo", p: 100, veg: true },
      { n: "Veg Fried Momo", p: 125, veg: true },
      { n: "Veg Pan Fried Momo", p: 140, veg: true },
      { n: "Chicken Steam Momo", p: 130, veg: false },
      { n: "Chicken Fried Momo", p: 140, veg: false },
      { n: "Chicken Pan Fried Momo", p: 150, veg: false }
    ]
  },
  {
    id: "snacks",
    name: "Take a snack break",
    plain: "Snacks",
    blurb: "For adda that runs long. Fried fresh to order.",
    items: [
      { n: "Fish Finger", p: 125, veg: false, fav: true,
        d: "Bhetki fillets in a crisp golden coat, soft enough to melt inside. Served with fries." },
      { n: "Chicken Wings (8 pc)", p: 250, veg: false, fav: true,
        d: "Crispy fried wings with a spicy glaze. The most-mentioned starter in our reviews." },
      { n: "Grilled Chicken with Vegetables", p: 180, veg: false,
        d: "Juicy grilled chicken with buttery, crunchy boiled vegetables. Light and filling." },
      { n: "Chicken Pasta in White Sauce", p: null, veg: false, fav: true,
        d: "Penne in a creamy white sauce, loaded with chicken and a cheesy top layer." },
      { n: "Fish Fry", p: 100, veg: false },
      { n: "Fish Fry with French Fries", p: 150, veg: false },
      { n: "Fish Chop (3 pc)", p: 100, veg: false },
      { n: "Prawn Pakora", p: 250, veg: false },
      { n: "Golden Fried Prawn (6 pc)", p: 350, veg: false },
      { n: "Chicken Spring Roll (2 pc)", p: 150, veg: false },
      { n: "Chicken Lollipop (6 pc)", p: 150, veg: false },
      { n: "Crispy Chicken", p: 150, veg: false },
      { n: "Chicken Pakora", p: 150, veg: false },
      { n: "Egg Devil (4 pc)", p: 100, veg: false },
      { n: "Veg Grilled Sandwich", p: 75, veg: true },
      { n: "Egg Grilled Sandwich", p: 80, veg: false },
      { n: "Chicken Grilled Sandwich", p: 100, veg: false },
      { n: "French Fries", p: 80, veg: true },
      { n: "Potato Wedges", p: 80, veg: true },
      { n: "Paneer Pakora (6 pc)", p: 120, veg: true },
      { n: "Veg Chop (4 pc)", p: 60, veg: true },
      { n: "Veg Pakora (8 pc)", p: 100, veg: true }
    ]
  },
  {
    id: "bong",
    name: "Feel the Bong meal",
    plain: "Bengali thalis",
    blurb: "Lunch the way a Bengali home serves it: rice, dal, bhaji and a curry, with salad and pickle on the side.",
    items: [
      { n: "Rice + Dal + Bhaji + Veg", p: 100, veg: true },
      { n: "Rice + Paneer (4 pc) + Dal + Salad + Pickle", p: 125, veg: true },
      { n: "Pulao + Paneer (6 pc) + Salad + Pickle", p: 125, veg: true },
      { n: "Rice + 2 Veg + Bhaja + Dal + Chutney", p: 150, veg: true },
      { n: "Khichuri + Labra + Beguni + Chutney", p: 125, veg: true, d: "Monsoon comfort: khichuri with mixed-veg labra and crisp brinjal fritters." },
      { n: "Khichuri + Omelette + Chutney", p: 95, veg: false },
      { n: "Rice + Dal + Bhaji + Veg + Egg Curry (2 eggs) + Salad + Pickle", p: 125, veg: false },
      { n: "Rice + Dal + Bhaji + Veg + Fish Curry + Salad + Pickle", card: "Bengali fish thali", p: 150, veg: false },
      { n: "Rice + Dal + Bhaji + Veg + Chicken Curry + Salad + Pickle", p: 180, veg: false },
      { n: "Rice + Dal + Bhaji + Veg + Mutton Curry + Salad + Pickle", p: 280, veg: false }
    ]
  },
  {
    id: "luchi",
    name: "Kabhie luchi kabhie paratha",
    plain: "Luchi & paratha",
    blurb: "Puffed luchi and flaky paratha with something to dip them in.",
    items: [
      { n: "Luchi (5 pc) + Aloo Dum", p: 60, veg: true },
      { n: "Luchi (5 pc) + Cholar Dal", p: 60, veg: true },
      { n: "Luchi (5 pc) + Paneer", p: 150, veg: true },
      { n: "Luchi (5 pc) + Chicken Kasha", p: 180, veg: false },
      { n: "Luchi (5 pc) + Mutton Kasha", p: 250, veg: false },
      { n: "Paratha (2 pc) + Dum Aloo + Salad + Pickle", p: 80, veg: true },
      { n: "Paratha (2 pc) + Chhole + Salad + Pickle", p: 100, veg: true },
      { n: "Paratha (2 pc) + Egg Curry (2) + Salad + Pickle", p: 120, veg: false },
      { n: "Paratha (2 pc) + Chicken Kasha (2 pc) + Salad + Pickle", p: 150, veg: false },
      { n: "Paratha (2 pc) + Mutton Kasha (2 pc) + Salad + Pickle", p: 200, veg: false }
    ]
  },
  {
    id: "aamish",
    name: "Lavish aamish",
    plain: "Fish, meat & egg",
    blurb: "Bengali fish and meat curries, cooked light on spice like they are at home.",
    items: [
      { n: "Shorshe Ilish", p: 300, veg: false, fav: true, d: "Hilsa in a sharp mustard gravy. The dish every Bengali waits for in monsoon." },
      { n: "Bhetki Paturi", p: 300, veg: false, d: "Bhetki fillet in mustard and coconut paste, steamed inside a banana leaf." },
      { n: "Chingri Malaikari", p: 250, veg: false, d: "Prawns in a mellow coconut-milk curry." },
      { n: "Chitol Muitha", p: 250, veg: false },
      { n: "Fish Curry (Chitol)", p: 300, veg: false },
      { n: "Fish Curry (Pomfret)", p: 150, veg: false },
      { n: "Fish Curry (Pabda)", p: 150, veg: false },
      { n: "Fish Curry (Parshe)", p: 120, veg: false },
      { n: "Fish Curry (Katla)", p: 100, veg: false },
      { n: "Fish Curry (Rui)", p: 80, veg: false },
      { n: "Aar Macher Ada Bhanga", p: 150, veg: false },
      { n: "Muri Ghonto", p: 150, veg: false },
      { n: "Lau Chingri", p: 150, veg: false },
      { n: "Mutton Curry", p: 225, veg: false },
      { n: "Chicken Curry (2 pc)", p: 120, veg: false },
      { n: "Dim Posto (4 pc)", p: 200, veg: false },
      { n: "Egg Curry", p: 30, veg: false }
    ]
  },
  {
    id: "niramish",
    name: "A kiss of niramish",
    plain: "Bengali veg",
    blurb: "Niramish means vegetarian, and in a Bengali kitchen that is never an afterthought.",
    items: [
      { n: "Shukto", p: 80, veg: true },
      { n: "Mochar Ghonto", p: 100, veg: true },
      { n: "Dhokar Dalna", p: 125, veg: true },
      { n: "Chhanar Dalna", p: 125, veg: true },
      { n: "Kaanch Kolar Kofta", p: 125, veg: true },
      { n: "Alu Posto", p: 125, veg: true },
      { n: "Posto Bora (2 pc)", p: 100, veg: true },
      { n: "Navaratna Korma", p: 180, veg: true },
      { n: "Labra", p: 75, veg: true },
      { n: "Begun Bharta", p: 100, veg: true },
      { n: "Bandha Kopir Tarkari", p: 100, veg: true },
      { n: "Phool Kopir Tarkari", p: 100, veg: true },
      { n: "Bori diye Alu Begun", p: 75, veg: true },
      { n: "Bori diye Lau", p: 80, veg: true },
      { n: "Kumror Chhechki", p: 80, veg: true },
      { n: "Peper Tarkari", p: 60, veg: true },
      { n: "Alu Potoler Tarkari", p: 60, veg: true },
      { n: "Alu Soyabean", p: 60, veg: true },
      { n: "Jhuri Alu Bhaja", p: 40, veg: true },
      { n: "Potol Bhaja", p: 40, veg: true },
      { n: "Alu Bhaja", p: 30, veg: true },
      { n: "Uchhe Bhaja", p: 30, veg: true },
      { n: "Begun Bhaja", p: 20, veg: true }
    ]
  },
  {
    id: "north",
    name: "North Indian express",
    plain: "North Indian",
    blurb: "Paneer, dal and the classics, with roti or rice.",
    items: [
      { n: "Paneer Butter Masala", p: 220, veg: true },
      { n: "Shahi Korma", p: 200, veg: true },
      { n: "Mixed Veg", p: 180, veg: true },
      { n: "Palak Paneer", p: 150, veg: true },
      { n: "Matar Paneer", p: 150, veg: true },
      { n: "Rajma", p: 125, veg: true },
      { n: "Aloo Matar", p: 100, veg: true },
      { n: "Chole", p: 100, veg: true },
      { n: "Roti + Palak Paneer", p: 120, veg: true },
      { n: "Jeera Rice + Aloo Jeera", p: 120, veg: true },
      { n: "Alu Paratha + Dahi", p: 100, veg: true }
    ]
  },
  {
    id: "staples",
    name: "Be stable with staple",
    plain: "Rice & breads",
    blurb: "Add-ons for any curry.",
    items: [
      { n: "Basanti Pulao", p: 100, veg: true, d: "Sweet, saffron-yellow Bengali pulao with ghee, cashew and raisins." },
      { n: "Peas Pulao", p: 100, veg: true },
      { n: "Veg Pulao", p: 100, veg: true },
      { n: "Jeera Rice", p: 80, veg: true },
      { n: "Rice", p: 30, veg: true },
      { n: "Alur Paratha", p: 40, veg: true },
      { n: "Lachha Paratha", p: 25, veg: true },
      { n: "Paratha", p: 15, veg: true },
      { n: "Chapati", p: 4, veg: true }
    ]
  },
  {
    id: "family",
    name: "Hum chaar khayenge jee bhar",
    plain: "Family portions",
    blurb: "Big portions for the whole table, or for a house full of guests.",
    items: [
      { n: "Mutton Kosha (10 pc)", p: 900, veg: false },
      { n: "Mutton Curry (10 pc)", p: 800, veg: false },
      { n: "Badam Chicken", p: 600, veg: false },
      { n: "Katla Kalia", p: 550, veg: false },
      { n: "Dhania Chicken", p: 500, veg: false },
      { n: "Doi Katla (6 pc)", p: 500, veg: false },
      { n: "Chicken Kosha", p: 450, veg: false },
      { n: "Rui Curry", p: 350, veg: false },
      { n: "Rajma-Chawal for 2", p: 300, veg: true },
      { n: "Alu Paratha (10 pc)", p: 300, veg: true },
      { n: "Chole-Chawal for 2", p: 200, veg: true }
    ]
  },
  {
    id: "breakfast",
    name: "Toast, eggs & pancakes",
    plain: "All-day breakfast",
    blurb: "Small plates for a slow morning or a late evening.",
    items: [
      { g: "Toast hai mera dost", n: "Plain Butter Toast", p: 40, veg: true },
      { g: "Toast hai mera dost", n: "French Toast", p: 65, veg: false },
      { g: "Toast hai mera dost", n: "Spicy Mozzarella Toast (4 pc)", p: 125, veg: true },
      { g: "Toast hai mera dost", n: "Bread with Nutella Spread (4 pc)", p: 90, veg: true },
      { g: "Omelette on a plate", n: "Plain Omelette", p: 50, veg: false },
      { g: "Omelette on a plate", n: "Masala Omelette", p: 75, veg: false },
      { g: "Omelette on a plate", n: "Cheese Omelette", p: 100, veg: false },
      { g: "Omelette on a plate", n: "Chicken Omelette", p: 100, veg: false },
      { g: "Omelette on a plate", n: "Chicken Cheese Omelette", p: 150, veg: false },
      { g: "Take a break with pancake", n: "Pancake with Honey", p: 80, veg: true },
      { g: "Take a break with pancake", n: "Pancake with Maple Syrup", p: 100, veg: true },
      { g: "Take a break with pancake", n: "Vanilla Pancake", p: 125, veg: true },
      { g: "Take a break with pancake", n: "Pancake with Chocospread", p: 130, veg: true }
    ]
  },
  {
    id: "sandwich",
    name: "Sandwiches & salads",
    plain: "Sandwiches & salads",
    blurb: "Soft inside, crisp outside, served with chips.",
    items: [
      { g: "Grab a sandwich", n: "Veg Coleslaw Sandwich", p: 75, veg: true },
      { g: "Grab a sandwich", n: "Egg Coleslaw Sandwich", p: 100, veg: false },
      { g: "Grab a sandwich", n: "Plain Chicken Coleslaw Sandwich", p: 125, veg: false },
      { g: "Grab a sandwich", n: "Mustard Mayo Chicken Sandwich", p: 150, veg: false },
      { g: "Just grilled", n: "Tomato and Corn Grilled Sandwich", p: 100, veg: true },
      { g: "Just grilled", n: "Caramelised Onion and Mushroom Sandwich", p: 125, veg: true },
      { g: "Just grilled", n: "Chicken Mayo Sandwich", p: 125, veg: false },
      { g: "Just grilled", n: "Chicken Tandoori Sandwich", p: 125, veg: false, d: "Smoky tandoori chicken between crunchy toasted bread." },
      { g: "Just grilled", n: "CLT Club Sandwich", p: 150, veg: false },
      { g: "Just grilled", n: "CCC Club Sandwich", p: 150, veg: false },
      { g: "Go mad with salad", n: "Veg Corn Salad", p: 100, veg: true },
      { g: "Go mad with salad", n: "Egg Salad", p: 125, veg: false },
      { g: "Go mad with salad", n: "Chicken Salad", p: 125, veg: false },
      { g: "Go mad with salad", n: "Russian Salad", p: 125, veg: true },
      { g: "Go mad with salad", n: "Thousand Island Chicken Salad", p: 140, veg: false },
      { g: "Go mad with salad", n: "Prawn Cocktail", p: 175, veg: false }
    ]
  },
  {
    id: "dessert",
    name: "Life's desert without dessert",
    plain: "Desserts",
    blurb: "Homely Bengali sweets alongside café classics.",
    items: [
      { n: "Cake with Kheer (Rabri Cake)", p: 100, veg: true, fav: true,
        d: "A Tolly Café speciality: soft fruit cake served with thick, slow-cooked kheer for dipping." },
      { n: "Fruit Salad", p: 125, veg: true, fav: true,
        d: "Seven-plus kinds of fresh fruit, finely chopped and scented with vanilla. Big enough for three." },
      { n: "Malpua with Kheer", p: 100, veg: true, d: "Soft, homely malpua with just the right sweetness." },
      { n: "Malpua (2 pc) + Kheer", p: 75, veg: true },
      { n: "Brownie with Ice Cream", p: 100, veg: false },
      { n: "Caramel Pudding", p: 100, veg: false },
      { n: "Payesh", p: 100, veg: true },
      { n: "Simui Payesh", p: 80, veg: true },
      { n: "Muffins", p: 30, veg: false },
      { g: "Ice cream fulfills my dream", n: "Choco Desire", p: 90, veg: true },
      { g: "Ice cream fulfills my dream", n: "Nutella and Choconuts", p: 90, veg: true },
      { g: "Ice cream fulfills my dream", n: "Vanilla Ice Cream with Banana Split", p: 75, veg: true },
      { g: "Ice cream fulfills my dream", n: "Vanilla Ice Cream with Mango Slice", p: 75, veg: true },
      { g: "Ice cream fulfills my dream", n: "Yum Yum Jim Jam", p: 75, veg: true },
      { g: "Ice cream fulfills my dream", n: "Cherry Vanilla", p: 75, veg: true }
    ]
  },
  {
    id: "drinks",
    name: "Coffee, frappe & ice tea",
    plain: "Drinks",
    blurb: "Hot, cold and somewhere in between.",
    items: [
      { g: "Our house favourites", n: "Hot Chocolate", p: null, veg: true, fav: true, d: "Thick and rich. Guests pair it with butterscotch ice cream." },
      { g: "Our house favourites", n: "Brownie Smoothie", p: null, veg: true },
      { g: "Our house favourites", n: "Mocktails", p: null, veg: true, d: "Ask what's being shaken today." },
      { g: "You & me with coffee", n: "Espresso", p: 60, veg: true },
      { g: "You & me with coffee", n: "Americano", p: 70, veg: true },
      { g: "You & me with coffee", n: "Vanillacino", p: 100, veg: true },
      { g: "You & me with coffee", n: "Cappuccino", p: 110, veg: true },
      { g: "You & me with coffee", n: "Caramelcino", p: 110, veg: true },
      { g: "You & me with coffee", n: "Café Mocha", p: 110, veg: true },
      { g: "You & me with coffee", n: "Strawberrycino", p: 110, veg: true },
      { g: "You & me with coffee", n: "Café Bonbon", p: 120, veg: true },
      { g: "You & me with coffee", n: "Ice Café Bonbon", p: 120, veg: true },
      { g: "You & me with coffee", n: "Café Shakerato", p: 120, veg: true },
      { g: "Repartee with latte", n: "Regular Latte", p: 130, veg: true },
      { g: "Repartee with latte", n: "Vanilla Latte", p: 130, veg: true },
      { g: "Repartee with latte", n: "Honey Vanilla Latte", p: 140, veg: true },
      { g: "Repartee with latte", n: "Choco Latte", p: 140, veg: true },
      { g: "In the café with frappe", n: "Cold Coffee", p: 125, veg: true },
      { g: "In the café with frappe", n: "Caramel Frappe", p: 125, veg: true },
      { g: "In the café with frappe", n: "Oreo Frappe", p: 125, veg: true },
      { g: "In the café with frappe", n: "KitKat Frappe", p: 125, veg: true },
      { g: "In the café with frappe", n: "Snickers Frappe", p: 125, veg: true },
      { g: "In the café with frappe", n: "Pe-Ca-Cho Frappe", p: 140, veg: true },
      { g: "It's chilling with ice tea", n: "Lemon Iced Tea", p: 80, veg: true },
      { g: "It's chilling with ice tea", n: "Orange Iced Tea", p: 80, veg: true },
      { g: "It's chilling with ice tea", n: "Litchi Iced Tea", p: 80, veg: true },
      { g: "It's chilling with ice tea", n: "Strawberry Iced Tea", p: 80, veg: true },
      { g: "It's chilling with ice tea", n: "Vanilla Iced Tea", p: 80, veg: true },
      { g: "It's chilling with ice tea", n: "Melon Iced Tea", p: 80, veg: true }
    ]
  }
];

/* What guests said about specific dishes (from Google reviews). Shown in the dish details. */
window.TOLLY_DISH_QUOTES = {
  "Chinese Combo for Two": ["The food was really delicious in both quality and quantity.", "Meghna Chakraborty"],
  "Lavish Aamish Combo": ["Kabab was super soft, good combination with paratha and salad.", "Pallabi Raha"],
  "Fish Finger": ["This was the star of all the items.", "foodie tamal"],
  "Chicken Wings (8 pc)": ["The best was chicken wings (must recommended).", "Bitan Ghosh"],
  "Chicken Pasta in White Sauce": ["This was truly heaven.", "foodie tamal"],
  "Cake with Kheer (Rabri Cake)": ["I haven't even thought cake can be eaten with kheer.", "Pritam Das"],
  "Fruit Salad": ["The quantity was fulfilling for 3 people.", "Aritri Roy"],
  "Malpua with Kheer": ["Malpua was prepared in homely way which gave it a very soft texture.", "Pritam Das"],
  "Lemon Chicken": ["The lemon chicken was tangy and sweet.", "Priyanka Nandi"],
  "Grilled Chicken with Vegetables": ["The chicken was juicy and flavoursome yet healthy.", "Aritri Roy"],
  "Hot Chocolate": ["Must try: Hot Chocolate, Brownie Smoothies, Spicy Chicken Wings.", "Pritam Nandi"],
  "Basanti Pulao": ["The Kebabs and Basanti Polau were delicious.", "Sarmistha Pal"]
};
