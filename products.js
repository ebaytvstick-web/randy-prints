// ============================================================
//  SHOP SETTINGS + PRODUCT LIST
//  This is the only file Randy needs to edit to change the shop.
// ============================================================

const SHOP = {
  name: "Randy's Print Shop",
  tagline: "Cool 3D-printed stuff, made by a kid maker!",
  // Paste your Google Form link here (Send > link icon > copy).
  // Leave it as "" until the form is ready.
  orderFormUrl: "",
  // Optional: a grown-up email shown on the order page.
  parentEmail: "",
};

// Categories show up as filter buttons. Use the same spelling in products below.
const CATEGORIES = ["Fidgets", "Keychains", "Animals", "Desk Stuff"];

// HOW TO ADD A NEW ITEM:
// 1. Put a photo in the "images" folder (square photos look best).
// 2. Copy one { ... } block below, paste it at the end, and change the details.
// status can be: "in-stock", "made-to-order", or "sold-out"
const PRODUCTS = [
  {
    name: "Flexi Dragon",
    category: "Animals",
    price: 5,
    image: "images/dragon.svg",
    colors: ["Purple", "Green", "Rainbow"],
    size: "About 6 in long",
    printTime: "2 hours",
    status: "in-stock",
    description: "A wiggly dragon with moving joints. It bends but doesn't break!",
  },
  {
    name: "Fidget Spinner",
    category: "Fidgets",
    price: 3,
    image: "images/spinner.svg",
    colors: ["Blue", "Orange", "Black"],
    size: "About 3 in wide",
    printTime: "1 hour",
    status: "in-stock",
    description: "Spins super smooth. Great for keeping your hands busy.",
  },
  {
    name: "Name Keychain",
    category: "Keychains",
    price: 3,
    image: "images/keychain.svg",
    colors: ["Any 2 colors"],
    size: "About 2.5 in long",
    printTime: "30 minutes",
    status: "made-to-order",
    description: "Your first name in two colors. Tell us the name when you order!",
  },
  {
    name: "Pencil Cup",
    category: "Desk Stuff",
    price: 6,
    image: "images/pencilcup.svg",
    colors: ["White", "Teal", "Pink"],
    size: "About 4 in tall",
    printTime: "3 hours",
    status: "in-stock",
    description: "A cool hexagon pencil holder for your desk.",
  },
  {
    name: "Infinity Cube",
    category: "Fidgets",
    price: 4,
    image: "images/cube.svg",
    colors: ["Red", "Yellow", "Silver"],
    size: "About 1.5 in",
    printTime: "1.5 hours",
    status: "in-stock",
    description: "Folds and flips forever. Printed all in one piece!",
  },
  {
    name: "Little Turtle",
    category: "Animals",
    price: 2,
    image: "images/turtle.svg",
    colors: ["Green", "Glow-in-the-dark"],
    size: "About 2 in",
    printTime: "40 minutes",
    status: "sold-out",
    description: "A tiny pocket turtle buddy. More coming soon!",
  },
  {
    name: "Phone Stand",
    category: "Desk Stuff",
    price: 5,
    image: "images/phonestand.svg",
    colors: ["Black", "Blue", "White"],
    size: "Fits most phones and small tablets",
    printTime: "2 hours",
    status: "made-to-order",
    description: "Holds a phone or tablet so you can watch videos hands-free.",
  },
  {
    name: "Rocket Keychain",
    category: "Keychains",
    price: 2,
    image: "images/rocket.svg",
    colors: ["Red & White", "Blue & Silver"],
    size: "About 2 in",
    printTime: "35 minutes",
    status: "in-stock",
    description: "Blast off! A mini rocket for your backpack zipper.",
  },
  {
  name: "Dog Flexi",
    category: "Fidget",
    price: 12,
    image: "images/dog.svg",
    colors: ["Brown & Red & Black"],
    size: "About 12 in",
    printTime: "2 hours",
    status: "in-stock",
    description: "Flex the dog in all possible angles.",
  },
];
