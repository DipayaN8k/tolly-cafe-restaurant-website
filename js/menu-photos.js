/*
  Dish photos for the menu cards
  ------------------------------
  Each key must match a dish name in js/menu-data.js exactly.

  Two photos are the café's own (in /photos). The rest are free-licence photos from Unsplash
  (unsplash.com/license: free to use, no permission needed) used as stand-ins for the design review.
  Before launch, swap them for the café's own pictures: save a photo into /photos and change the
  line to e.g.  "Chilli Chicken": "photos/chilli-chicken.jpg"
*/
(function () {
  const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=520&h=520&q=70`;
  window.TOLLY_PHOTOS = {
    // café's own photos
    "Rice + Dal + Bhaji + Veg + Fish Curry + Salad + Pickle": "photos/bengali-spread.jpg",
    "Mocktails": "photos/mocktail.jpg",

    // stand-ins from Unsplash (source page noted on each line)
    "Chinese Combo for Two":        u("photo-1603496987351-f84a3ba5ec85"), // unsplash.com/photos/hEMOwugpjJk
    "Lavish Aamish Combo":          u("photo-1742281258189-3b933879867a"), // unsplash.com/photos/4pT9e68P_mU
    "Luchi (5 pc) + Aloo Dum":      u("photo-1643892467625-65df6a500524"), // unsplash.com/photos/hqRBbhRgfJo
    "Chilli Chicken":               u("photo-1710508774177-7ac2f3492675"), // unsplash.com/photos/7NEGLCTAMzg
    "Chicken Hakka Chow":           u("photo-1789990662414-f607ba6405f3"), // unsplash.com/photos/_2N4aKtju_w
    "Mixed Fried Rice":             u("photo-1609570324378-ec0c4c9b6ba8"), // unsplash.com/photos/XciY4hwqnNk
    "Chicken Steam Momo":           u("photo-1694923450868-b432a8ee52aa"), // unsplash.com/photos/90SXZzJpySc
    "Shorshe Ilish":                u("photo-1654863404432-cac67587e25d"), // unsplash.com/photos/Lsiv0oAIfFk
    "Chingri Malaikari":            u("photo-1720949579179-b4d04403f548"), // unsplash.com/photos/4ZyLEI4y3-0
    "Bhetki Paturi":                u("photo-1718942899999-b3da4177ee2a"), // unsplash.com/photos/hVnClpnYUUk
    "Mutton Curry":                 u("photo-1545247181-516773cae754"),    // unsplash.com/photos/7-TOCB28rms
    "Paneer Butter Masala":         u("photo-1742599361539-f096753d1100"), // unsplash.com/photos/gwUA_pHaOYY
    "Palak Paneer":                 u("photo-1589647363585-f4a7d3877b10"), // unsplash.com/photos/jTv_cWxEtFs
    "Rajma":                        u("photo-1668236534990-73c4ed23043c"), // unsplash.com/photos/93L024xGEUM
    "Chole":                        u("photo-1736680056470-948527554276"), // unsplash.com/photos/XCL-jHI4BTU
    "Fish Finger":                  u("photo-1604331654916-540f76d082bd"), // unsplash.com/photos/tl2e5HLF6uw
    "Chicken Wings (8 pc)":         u("photo-1608039755401-742074f0548d"), // unsplash.com/photos/R-7_ErUOLxw
    "Chicken Pasta in White Sauce": u("photo-1662197480393-2a82030b7b83"), // unsplash.com/photos/971_E-LvZuc
    "CLT Club Sandwich":            u("photo-1676300184084-de35d56a9a70"), // unsplash.com/photos/oBWEb-lAI60
    "Pancake with Honey":           u("photo-1620108093966-eafbe0885dc5"), // unsplash.com/photos/iSfIp7k_2Us
    "Cake with Kheer (Rabri Cake)": u("photo-1515544645059-de313dd20a58"), // unsplash.com/photos/IooxyWj2uso
    "Fruit Salad":                  u("photo-1760881592698-abbf44a47872"), // unsplash.com/photos/UFw41NOCOmw
    "Brownie with Ice Cream":       u("photo-1624353365286-3f8d62daad51"), // unsplash.com/photos/dKT6Q7q2UKs
    "Caramel Pudding":              u("photo-1702728109878-c61a98d80491"), // unsplash.com/photos/TqPdzQ00I0U
    "Cappuccino":                   u("photo-1760306081298-93e10f2be897"), // unsplash.com/photos/yVwtB6uOBRI
    "Cold Coffee":                  u("photo-1562447457-579fc34967fb"),    // unsplash.com/photos/02O1bXB_fgk
    "Hot Chocolate":                u("photo-1637572815755-c4b80092dce1"), // unsplash.com/photos/NtmNhrdfs-o
    "Lemon Iced Tea":               u("photo-1556679343-c7306c1976bc")     // unsplash.com/photos/kbch-i63YTg
  };
})();
