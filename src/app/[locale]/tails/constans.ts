const baseTails = [
  {
    image: "/images/card-image.jpg",
    images: [
      "/images/card-image.jpg",
      "/images/rubi.jpg",
      "/images/juja.jpg",
      "/images/card-image.jpg",
    ],
    name: "Песик-інвалід Чарлі",
    buttonText: "Більше про “Чарлі”",
    categories: ["needs-sterilization", "adopted"],
    description: [
      "Чарлі отримав кулю в хребет та довго лежав на сонці, що призвело до інсульту. Також у песика паралізований сечовий міхур. Нажаль ходити він більше не зможе. Не дивлячись на це Чарлі дуже життєрадісний пес. У серпні 2024 року Чарлі був евакуйований з Покровська у Черкаську обл.",
      "Ставай янголом-патронусом для цього дивовижного хвостика.",
    ],
  },
  {
    image: "/images/rubi.jpg",
    images: [
      "/images/rubi.jpg",
      "/images/card-image.jpg",
      "/images/juja.jpg",
      "/images/rubi.jpg",
    ],
    name: "Кошеня Рубі",
    buttonText: "Більше про “Кошеня Рубі”",
    categories: ["needs-family"],
    description: [
      "Рубі – маленьке грайливе кошеня, яке шукає люблячу родину.",
      "Вона ніжна, ласкава і завжди рада новим друзям.",
    ],
  },
  {
    image: "/images/juja.jpg",
    images: [
      "/images/juja.jpg",
      "/images/card-image.jpg",
      "/images/rubi.jpg",
      "/images/juja.jpg",
    ],
    name: "Жужа",
    buttonText: "Більше про “Жужа”",
    categories: ["needs-family", "adopted"],
    description: [
      "Жужа – активна та енергійна собачка, яка любить гратися і гуляти.",
      "Вона стане чудовим другом для всієї родини.",
    ],
  },
  {
    image: "/images/card-image.jpg",
    images: [
      "/images/card-image.jpg",
      "/images/juja.jpg",
      "/images/rubi.jpg",
      "/images/card-image.jpg",
    ],
    name: "Барсік",
    buttonText: "Більше про “Барсік”",
    categories: ["needs-sterilization"],
    description: [
      "Барсік – добрий і спокійний кіт, який обожнює муркотіти та ніжитися на сонечку.",
    ],
  },
  {
    image: "/images/rubi.jpg",
    images: [
      "/images/rubi.jpg",
      "/images/card-image.jpg",
      "/images/juja.jpg",
      "/images/rubi.jpg",
    ],
    name: "Мурзик",
    buttonText: "Більше про “Мурзик”",
    categories: ["needs-family"],
    description: [
      "Мурзик – грайливий котик, який шукає дім, де його любитимуть та піклуватимуться про нього.",
    ],
  },
  {
    image: "/images/juja.jpg",
    images: [
      "/images/juja.jpg",
      "/images/rubi.jpg",
      "/images/card-image.jpg",
      "/images/juja.jpg",
    ],
    name: "Граф",
    buttonText: "Більше про “Граф”",
    categories: ["needs-family", "adopted"],
    description: [
      "Граф – благородний і відданий пес, який мріє про дім, де його оточать турботою та любов'ю.",
    ],
  },
];

export const tails = Array.from({ length: 100 }, (_, i) => ({
  ...baseTails[i % baseTails.length],
  id: `tail-${i + 1}`,
  name: `${baseTails[i % baseTails.length].name} #${i + 1}`,
}));
