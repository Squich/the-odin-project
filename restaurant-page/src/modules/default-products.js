import { product } from './product-class.js';

const listOfDietProducts = [
  product(
    'Simple Sushis',
    'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    'This simple sushis will enjoy your daily and repetitive meals.',
    'diet',
  ),
  product(
    'Soothing Sushi',
    'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
    'Conforting salmon and spinash. Sushis for busy and worried people.',
    'diet',
  ),
  product(
    'Light Sushi',
    'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    'Minimalist sushis for people who worry about getting fat.',
    'diet',
  ),
];

const listOfSpicyProducts = [
  product(
    'Fire Sushi',
    'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80',
    'Burning sushis, only if you like to burn your tongue.',
    'spicy',
  ),
  product(
    'Hot Sushi',
    'https://images.unsplash.com/photo-1617196905426-dc375ac396e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1041&q=80',
    'Very warm sushis for people who feel always cold.',
    'spicy',
  ),
  product(
    'Volcano Sushi',
    'https://images.unsplash.com/photo-1599253334678-5025a751a06a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    'These sushis wrap a lava fondue, for people who like death risk.',
    'spicy',
  ),
];

const listOfVeggieProducts = [
  product(
    'Avocado Sushi',
    'https://images.unsplash.com/photo-1602554172650-043a2de54271?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=708&q=80',
    'Avocado, rice and seeweed for refreshing sushis.',
    'veggie',
  ),
  product(
    'Bread Sushi',
    'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    'Sushis wrapped in bread with endives and parships, for a countryside taste.',
    'veggie',
  ),
  product(
    'Ratatouille Sushi',
    'https://images.unsplash.com/photo-1585144570564-9629fa5ab791?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1327&q=80',
    'Sushis with eggplant, zucchini, tomato and olive oil.',
    'veggie',
  ),
];

const listOfSeasonProducts = [
  product(
    'Spring Sushi',
    'https://images.unsplash.com/photo-1515316941871-2f69c7f2e5a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    'Refreshing sushis, mixing salmon, carrot, salad, rice.',
    'season',
  ),
  product(
    'Blossom Sushi',
    'https://images.unsplash.com/photo-1579584239904-4e9048d7bcc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80',
    'Parnship, potatoes and salad mixed with olive oil for a taste of vegetable garden.',
    'season',
  ),
  product(
    'Flower field Sushi',
    'https://images.unsplash.com/photo-1548907368-35e5ea8cbc8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=645&q=80',
    'Varied sushis with tomato, beans, peas, eggplant and zucchini.',
    'season',
  ),
];

const listOfThisWeekProducts = [
  product(
    'Flower field Sushi',
    'https://images.unsplash.com/photo-1548907368-35e5ea8cbc8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=645&q=80',
    'Varied sushis with tomato, beans, peas, eggplant and zucchini.',
    'season',
  ),
  product(
    'Hot Sushi',
    'https://images.unsplash.com/photo-1617196905426-dc375ac396e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1041&q=80',
    'Very warm sushis for people who feel always cold.',
    'spicy',
  ),
  product(
    'Ratatouille Sushi',
    'https://images.unsplash.com/photo-1585144570564-9629fa5ab791?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1327&q=80',
    'Sushis with eggplant, zucchini, tomato and olive oil.',
    'veggie',
  ),
];

export {
  listOfDietProducts,
  listOfSpicyProducts,
  listOfVeggieProducts,
  listOfSeasonProducts,
  listOfThisWeekProducts,
};
