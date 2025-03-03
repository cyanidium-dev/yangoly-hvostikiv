const news = [
  {
    date: "15.07.2024",
    uk: {
      title: "Наша допомога від фонду безпритульним песикам",
      description:
        "У світі багато тварин, які потребують турботи, і наша команда не може залишатися осторонь. Ми віримо, що кожен безпритульний песик заслуговує на тепло, захист і шанс знайти люблячий дім. Саме тому наш фонд активно допомагає притулкам, забезпечуючи їжею, медичною допомогою та підтримкою.",
      mainText: {
        firstList: {
          title: "💛 Що ми робимо?",
          items: [
            "✔ Допомагаємо з кормом та необхідними ліками.",
            "✔ Підтримуємо стерилізацію та вакцинацію, щоб покращити якість життя тварин.",
            "✔ Шукаємо родини для чотирилапих друзів, які мріють про дім.",
            "✔ Організовуємо благодійні акції та освітні заходи, щоб привернути увагу до проблеми безпритульних тварин.",
          ],
        },
        secondaryList: {
          title: "🐶 Як ви можете допомогти?",
          items: [
            "➡ Підтримати нас фінансово або передати корм та ліки.",
            "➡ Стати волонтером і особисто допомогти в догляді за тваринами.",
            "➡ Поділитися інформацією або навіть подарувати одному з наших підопічних дім.",
          ],
        },
        finalPart:
          "Кожен внесок – це крок до щасливого життя для цих чудових хвостиків. Разом ми можемо змінити їхню долю! ❤️",
      },
    },
    en: {
      title: "Our Foundation's Help for Homeless Dogs",
      description:
        "There are many animals in the world that need care, and our team cannot stand aside. We believe that every homeless dog deserves warmth, protection, and a chance to find a loving home. That is why our foundation actively supports shelters by providing food, medical assistance, and support.",
      mainText: {
        firstList: {
          title: "💛 What do we do?",
          items: [
            "✔ We help with food and necessary medications.",
            "✔ We support sterilization and vaccination to improve the quality of life for animals.",
            "✔ We search for families for four-legged friends dreaming of a home.",
            "✔ We organize charity events and educational activities to raise awareness of the issue of stray animals.",
          ],
        },
        secondaryList: {
          title: "🐶 How can you help?",
          items: [
            "➡ Support us financially or donate food and medicine.",
            "➡ Become a volunteer and personally help care for the animals.",
            "➡ Share information or even give one of our wards a home.",
          ],
        },
        finalPart:
          "Every contribution is a step towards a happy life for these wonderful tails. Together, we can change their fate! ❤️",
      },
    },
    mainPhoto: "/images/blog/mainPhoto.jpg",
    secondaryPhoto: "/images/blog/secondaryPhoto.jpg",
  },
];

export const newsList = Array.from({ length: 100 }, (_, i) => ({
  ...news[i % news.length],
  id: `article-${i + 1}`,
}));
