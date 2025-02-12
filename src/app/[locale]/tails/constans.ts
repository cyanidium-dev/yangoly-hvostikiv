const baseTails = [
  {
    image: "/images/card-image.jpg",
    name: "Песик-інвалід Чарлі",
    buttonText: "Більше про “Чарлі”",
    categories: ["needs-sterilization", "adopted"],
  },
  {
    image: "/images/rubi.jpg",
    name: "Кошеня Рубі",
    buttonText: "Більше про “Кошеня Рубі”",
    categories: ["needs-family"],
  },
  {
    image: "/images/juja.jpg",
    name: "Жужа",
    buttonText: "Більше про “Жужа”",
    categories: ["needs-family", "adopted"],
  },
  {
    image: "/images/card-image.jpg",
    name: "Барсік",
    buttonText: "Більше про “Барсік”",
    categories: ["needs-sterilization"],
  },
  {
    image: "/images/rubi.jpg",
    name: "Мурзик",
    buttonText: "Більше про “Мурзик”",
    categories: ["needs-family"],
  },
  {
    image: "/images/juja.jpg",
    name: "Граф",
    buttonText: "Більше про “Граф”",
    categories: ["needs-family", "adopted"],
  },
];

export const tails = Array.from({ length: 100 }, (_, i) => ({
  ...baseTails[i % baseTails.length],
  id: `tail-${i + 1}`,
  name: `${baseTails[i % baseTails.length].name} #${i + 1}`,
}));
