
export const categories = [
  {
    slug: "e-bikes",
    name: "E-bikes",
    description: "Well-maintained e-MTBs with lock and charger. 70–100 km range.",
    priceHour: 14,
    priceDay: 45,
    includes: ["Reinforced lock", "Charger (24h+ rentals)", "Helmet on request (+CHF 5/day)"],
    items: [
      { id: "emtb-1", name: "E-MTB Trek Rail 7", img: "/images/emtb-1.jpg" },
      { id: "emtb-2", name: "E-MTB Specialized Levo", img: "/images/emtb-2.jpg" }
    ]
  },
  {
    slug: "skis",
    name: "Skis",
    description: "Carving skis with bindings. Poles included.",
    priceDay: 20,
    includes: ["Poles included", "Helmet optional (+CHF 5/day)"],
    items: [
      { id: "ski-1", name: "Rossignol React 8", img: "/images/ski-1.jpg" },
      { id: "ski-2", name: "Salomon S/Max 10", img: "/images/ski-2.jpg" }
    ]
  },
  {
    slug: "paddle",
    name: "Paddle",
    description: "Stable boards, ideal for beginners. Leash & life jacket included.",
    priceHour: 12,
    priceDay: 35,
    includes: ["Safety leash", "Life jacket"],
    items: [
      { id: "sup-1", name: "iSUP 10'6 Allround", img: "/images/sup-1.jpg" }
    ]
  },
  {
    slug: "golf-clubs",
    name: "Golf clubs",
    description: "Right-handed set, great for occasional rounds around Zurich.",
    priceDay: 25,
    includes: ["Carry bag", "A few tees"],
    items: [
      { id: "golf-1", name: "Titleist full set (RH)", img: "/images/golf-1.jpg" }
    ]
  }
];
