interface Section {
  id: number;
  title: string;
  content1: string;
  content2: string;
  content3?: string;
  content4?: string;
  image: string;
}

const teaData: Section[] = [
  {
    id: 1,
    title: "Historical Significance",
    content1:
      "Tea is one of the oldest beverages in the world, with its origins dating back to ancient China.",
    content2:
      "Legend has it that around 2737 BCE, Emperor Shen Nong discovered tea when leaves from a wild tree blew into his pot of boiling water.",
    content3:
      "From China, tea spread to Japan, India, and the Middle East, and eventually made its way to Europe in the 17th century, becoming a global phenomenon.",
    image: "/tea-1.jpg",
  },
  {
    id: 2,
    title: "Health Benefits",
    content1:
      "Tea offers a wide array of health benefits due to its rich content of antioxidants, particularly catechins.",
    content2:
      "Heart Health: Green and black tea have been shown to lower the risk of heart disease by improving cholesterol levels and blood pressure.",
    content3:
      "Antioxidant Properties: Tea contains polyphenols, which help combat oxidative stress in the body and may reduce the risk of chronic diseases.",
    content4:
      "Weight Management: Green tea, in particular, is often associated with boosting metabolism and aiding in fat burning, making it a popular beverage for weight loss.",
    image: "/tea-3.jpg",
  },
  {
    id: 3,
    title: "Types of Tea",
    content1:
      "Green Tea: Unoxidized leaves, which makes it one of the least processed teas. It has a fresh, grassy flavor and is rich in antioxidants.",
    content2:
      "Black Tea: Fully oxidized, with a stronger flavor. It’s the most consumed tea in the world and forms the base of many popular blends like English Breakfast and Earl Grey.",
    content3:
      "Oolong Tea: Partially oxidized, giving it a flavor profile between green and black tea. It’s known for its complex taste and health benefits, particularly in weight loss.",
    image: "/tea-6.webp",
  },
  {
    id: 4,
    title: "Impact on Health",
    content1:
      "Bone Health: Some studies suggest that regular tea drinkers may have stronger bones, likely due to the flavonoids in tea.",
    content2:
      "Cancer Prevention: Although research is ongoing, some studies have shown that the antioxidants in tea might help in preventing certain types of cancer.",
    content3:
      "Hydration: Despite the caffeine content, tea contributes to daily hydration needs and is often recommended as a healthy alternative to sugary beverages.",
    image: "/tea-5.webp",
  },
  {
    id: 5,
    title: "Cultural Importance",
    content1:
      "In Japan, the tea ceremony (茶道, sadō) is a cultural practice involving the ceremonial preparation and consumption of matcha.",
    content2:
      "In England, afternoon tea is a social occasion, and in countries like India and Turkey, tea is a symbol of hospitality and social bonding.",
    image: "/tea-7.webp",
  },
  {
    id: 6,
    title: "Controversies and Myths",
    content1:
      "Caffeine Content: While tea does contain caffeine, it generally has less than coffee, making it a gentler stimulant.",
    content2:
      "Weight Loss Claims: Although tea, especially green tea, is marketed for weight loss, its effects are often subtle and should be combined with a healthy lifestyle for significant results.",
    content3:
      "Tooth Staining: Frequent consumption of black tea can lead to tooth discoloration over time, similar to coffee.",
    image: "/tea-4.jpg",
  },
];

export default teaData;

interface TeaType {
  name: string;
  description: string;
}

interface TeaProduct {
  id: number;
  type: string;
  price: string;
  description: string;
  varieties: TeaType[];
  image: string;
}

export const teaProducts: TeaProduct[] = [
  {
    id: 1,
    type: "Black Tea",
    price: "$40.99",
    description: "Strong and famous black tea.",
    image: "/Black-Tea.png",
    varieties: [
      { name: "Darjeeling", description: "A distinctive and aromatic tea." },
      { name: "Assam", description: "Strong tea with sweet and malty flavor." },
      { name: "Ceylon", description: "Sri Lankan tea with a unique taste." },
    ],
  },
  {
    id: 2,
    type: "Green Tea",
    price: "$40.99",
    description: "Rich in antioxidants and health benefits.",
    image: "/Green-Tea.png",
    varieties: [
      { name: "Sencha", description: "Popular Japanese green tea." },
      { name: "Matcha", description: "Nutrient-rich powdered green tea." },
      {
        name: "Dragon Well",
        description: "Chinese green tea with a light flavor.",
      },
    ],
  },
  {
    id: 3,
    type: "Oolong Tea",
    price: "$80.99",
    description: "Oolong tea with a rich flavor.",
    image: "/Oolong-Tea.png",
    varieties: [
      {
        name: "Tie Guan Yin",
        description: "A unique tea with a strong aroma.",
      },
      { name: "Da Hong Pao", description: "Rare and famous oolong tea." },
    ],
  },
  {
    id: 4,
    type: "Herbal Tea",
    price: "$20.99",
    description: "A blend of natural herbs.",
    image: "/Herbal-Tea.png",
    varieties: [
      { name: "Mint", description: "Refreshing tea that aids digestion." },
      { name: "Chamomile", description: "Soothing tea beneficial for sleep." },
    ],
  },
];

interface CompanyInfo {
  id: number;
  content: string;
}

export const companyInfo: CompanyInfo[] = [
  {
    id: 1,
    content: "Ahmed Diab, owner of Kingdom Tea Company.",
  },
  {
    id: 2,
    content: "The company is headquartered in Damascus, Syria.",
  },
  {
    id: 3,
    content: "The company offers the most luxurious types of tea in the world.",
  },
  {
    id: 4,
    content: "Tea is imported from India, Japan, China, and Sri Lanka.",
  },
  {
    id: 5,
    content:
      "The company offers the most luxurious types of tea at the cheapest prices in the world.",
  },
  {
    id: 6,
    content: "The website was also designed by the company owner.",
  },
  {
    id: 7,
    content:
      "Do not forget to come to the company and taste tea with us. See you soon!",
  },
];
interface Feedback {
  id: number;
  content: string;
  image: string;
  name: string;
}

export const customerFeedback: Feedback[] = [
  {
    id: 7,
    content:
      "Communication with the company is easy, their dealings are beautiful and different, and their products are very distinctive.",
    image: "/person-6.jpg",
    name: "Rola Malahwish",
  },

  {
    id: 2,
    content:
      "You cannot see how our priests treat us as if we were the owners of the same company.",
    image: "/person-1.jpg",
    name: "Dexter Morgan",
  },
  {
    id: 3,
    content:
      "Oh my God, I love this company and what it offers. It is completely different from the rest.",
    image: "/person-2.jpg",
    name: "Ragnar Lothbrok",
  },
  {
    id: 4,
    content: "I would love to be a permanent customer with them.",
    image: "/person-3.jpg",
    name: "Floki Viking",
  },
  {
    id: 5,
    content:
      "They are unique from the rest of the market. I hope this company continues and grows further.",
    image: "/person-4.jpg",
    name: "Negen dead",
  },
  {
    id: 6,
    content:
      "I, my family, and my friends drink tea from them. They are very good at this.",
    image: "/person-5.jpg",
    name: "Daenerys Targaryen",
  },
  {
    id: 1,
    content: "This company gets advanced services.",
    image: "/person-7.jpg",
    name: "Debra Morgan",
  },
];
