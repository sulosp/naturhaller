import { asset } from "./asset.js";
export const rooms = [
  {
    slug: "family-panorama-suite",
    name: "Family Panorama Suite",
    area: "57 qm",
    guests: "4 - 6",
    price: "€ 125,00",
    image: asset("/assets/room-1.png"),
    description:
      "Our new Family Suite Panorama for 4-6 persons (57 m²) with balcony which offer a beautiful view of the valley, in natural wood. It has two separate bedrooms and a bathroom with large shower, toilet, bidet and hairdryer. In addition, the room disposes of flat screen TV, free Wlan, safe, desk and a couch which can be converted to one or two additional beds. A spa bag with cosy towels for sauna and pool is provided in the room.",
  },
  {
    slug: "family-alpin-suite",
    name: "Family Alpin Suite",
    area: "57 qm",
    guests: "4 - 6",
    price: "€ 125,00",
    image: asset("/assets/room-2.png"),
    description:
      "Here everyone will find their own oasis of well-being. The Family Alpin Suite is arranged for 4–6 guests, 57 m², in the Naturhotel Haller in Mareit.",
  },
  {
    slug: "alpin-suite",
    name: "Alpin Suite",
    area: "57 qm",
    guests: "4 - 6",
    price: "€ 125,00",
    image: asset("/assets/room-3.png"),
    description:
      "Here everyone will find their own oasis of well-being. The Alpin Suite is arranged for 4–6 guests, 57 m², in the Naturhotel Haller in Mareit.",
  },
  {
    slug: "family-junior-suite",
    name: "Family Junior Suite",
    area: "57 qm",
    guests: "4 - 6",
    price: "€ 125,00",
    image: asset("/assets/slide-2.png"),
    description:
      "Here everyone will find their own oasis of well-being. The Family Junior Suite is arranged for 4–6 guests, 57 m², in the Naturhotel Haller in Mareit.",
  },
];

export const slides = [
  {
    title: "Hospitality",
    heading: "A warm welcome",
    text: "Our Naturhotel Haller in Mareit in the beautiful Ridnaun Valley in the municipality of Ratschings is located in the north of Italy near the Dolomites.",
    cta: "ABOUT US",
    to: "/about",
    image: asset("/assets/slide-1.png"),
  },
  {
    title: "Living",
    heading: "Our Room Categories",
    text: "Here everyone will find their own oasis of well-being",
    cta: "ROOMS",
    to: "/living",
    image: asset("/assets/slide-2.png"),
  },
  {
    title: "Relax",
    heading: "Wellness at our Hotel",
    text: "Our wellness area lets you forget about everyday hassle. Quiet music, low light and the nice scents welcome you at the entrance to this spa.",
    cta: "WELLNESS",
    to: "/wellness",
    image: asset("/assets/slide-3.png"),
  },
  {
    title: "Cuisine",
    heading: "Culinary Delights in our Hotel",
    text: "“Nature in its purest form” resonates throughout Matthias and Judith's kitchen, where a reverence for craftsmanship takes center stage.",
    cta: "CULINARY",
    to: "/about#cuisine",
    image: asset("/assets/slide-4.png"),
  },
  {
    title: "Winter",
    heading: "Winter",
    text: "The Ratschings/Jaufen ski area, the Rosskopf ski area and the Ladurns ski area are waiting for you. The most modern lifts, a great range of restaurants and wonderful panoramas make your holiday a unique winter experience.",
    cta: "WINTER",
    to: "/winter",
    image: asset("/assets/slide-5.png"),
  },
  {
    title: "Summer",
    heading: "Summer",
    text: "There are a variety of tours for beginners and advanced hikers around the hotel. Whether it's a walk or a 3000m peak, everyone will find their next project in the Wipptal. Just ask at reception, we'll be happy to help you choose.",
    cta: "SUMMER",
    to: "/summer",
    image: asset("/assets/slide-6.png"),
  },
];

export const philosophy = [
  {
    icon: asset("/assets/icon-tradition.svg"),
    title: "Traditions",
    text: "We do live in a busy time and especially now we believe that is important to to get back to the roots of our culture and connect in a deeper way. In the middle of the beautiful nature which surrounds us we would like to connect and would love you to be part of it. Only when we feel good about ourselves, we can pass it on to our guests and only when our guests are satisfied, we are satisfied.",
  },
  {
    icon: asset("/assets/icon-hospitality.svg"),
    title: "Hospitality",
    text: "In our Nature Hotel in South Tyrol you will find beautiful nature, hospitality and above all a warm atmosphere. We, the Haller family and our Team, are happy to advise you on hikes and trips to make the most out of your holiday.",
  },
  {
    icon: asset("/assets/icon-cuisine.svg"),
    title: "Gastronomic pleasures",
    id: "cuisine",
    text: "Our kitchen is managed by chef Matthias and cook Judith. Their style is “regional, fresh and homemade”. Together with the other kitchen staff, they prepare traditional, fresh and tasty dishes for you every day. Senior Chef Peter takes care of your breakfast pleasures. He even makes you fresh breakfast eggs to your liking. Quick tipp: a if you would like to order in our dialect, it is a “Goggele” :)",
  },
  {
    icon: asset("/assets/icon-seasons.svg"),
    title: "Environment",
    text: "Environmental protection, sustainability and the use of renewable energy are more important than ever. That's why we have always been committed to protecting the environment and nature. But more than that it is a passion of us to reduce energy consumption of the hotel and replace the conventional energy sourced by energy created locally. Thereby our solar efforts as well as our biomass heating are just the tip of the iceberg.",
  },
];

export const priceSeasons = [
  { label: "Summer 2024", range: "26.08. – 13.10.24" },
  { label: "Winter 2024/2025", range: "05.12. – 22.12.24" },
  { label: "Winter 2024/2025", range: "22.12. – 06.01.25" },
];

export const priceRows = [
  "Family Panorama Suite",
  "Family Alpine Suite",
  "Family Junior Suite",
  "Standard Doppelzimmer mit Balkon",
  "Standard Doppelzimmer ohne Balkon",
];

export const suiteRates = [
  {
    season: "Summer 2024",
    rows: [
      { dates: "03.08. – 26.08.24", short: "€ 155,00", long: "€ 145,00" },
      { dates: "26.08. – 13.10.24", short: "€ 135,00", long: "€ 125,00" },
    ],
  },
  {
    season: "Summer 2025",
    rows: [
      { dates: "03.08. – 26.08.25", short: "€ 155,00", long: "€ 145,00" },
      { dates: "26.08. – 13.10.25", short: "€ 135,00", long: "€ 125,00" },
    ],
  },
];

export const menuLinks = [
  { label: "Home", to: "/", image: asset("/assets/hero-summer.png") },
  { label: "About Us", to: "/about", image: asset("/assets/philosophy.png") },
  { label: "Living", to: "/living", image: asset("/assets/room-1.png") },
  { label: "Wellness", to: "/wellness", image: asset("/assets/wellness-pool.png") },
  { label: "Winter", to: "/winter", image: asset("/assets/winter-village.png") },
  { label: "Summer", to: "/summer", image: asset("/assets/summer-village.png") },
  { label: "Inquiry", to: "/inquiry", image: asset("/assets/inquiry.png") },
];
