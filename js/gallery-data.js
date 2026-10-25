/*
  Tolly Café photo gallery
  ------------------------
  Each line is one photo in the "Moments in frame" gallery, shown in this order.
  Save photos into the /photos folder (JPG, about 1200 px or more on the long side).

  src      the file in /photos
  caption  the line written under the print
  alt      describes the photo for people using screen readers and for Google Images
  wide     true for landscape photos (they hang as wider prints)

  A photo whose file is missing is skipped automatically.
*/
window.TOLLY_GALLERY = [
  { src: "photos/lane.jpg",             caption: "The lane beside Bangur High School",        alt: "Narrow lane with painted walls and creepers leading to the Tolly Café gate under its red We Serve Happiness sign" },
  { src: "photos/bengali-spread.jpg",   caption: "Bengali lunch, the home way",               alt: "A spread of Bengali dishes in small bowls around a plate of rice" },
  { src: "photos/yard-gathering.jpg",   caption: "Senior citizens' get-together in the yard", alt: "A group of senior guests chatting around red tables in the open yard with potted plants", wide: true },
  { src: "photos/mocktail.jpg",         caption: "Mocktail hour",                             alt: "A tall green mocktail with ice and mint against a painted wall" },
  { src: "photos/table-favourites.jpg", caption: "A table full of favourites",                alt: "Chowmein, spaghetti, pancakes, a burger, a salad and a rice platter on a wooden table", wide: true },
  { src: "photos/birthday.jpg",         caption: "Birthday evening under the lights",         alt: "A family with children celebrating a birthday among balloons and blue lights", wide: true }

  /* Ideas for more photos when the café has them:
  ,{ src: "photos/yard-night.jpg",    caption: "The yard after sundown",   alt: "Outdoor seating in the Tolly Café yard lit by lanterns at night" }
  ,{ src: "photos/chinese-combo.jpg", caption: "Chinese combo for two",    alt: "Chinese combo with fried rice, chilli chicken, drumsticks, fries and mocktails" }
  ,{ src: "photos/fish-finger.jpg",   caption: "Bhetki fish finger",       alt: "Golden fried bhetki fish fingers with French fries" }
  ,{ src: "photos/rabri-cake.jpg",    caption: "Cake with kheer",          alt: "Fruit cake served with a bowl of thick kheer" }
  ,{ src: "photos/karaoke.jpg",       caption: "Karaoke evening",          alt: "Guests singing karaoke in the café yard in the evening" }
  */
];
