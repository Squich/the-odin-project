import { initPageStructure } from './modules/initial-page-load.js';
import { createHomePage } from './modules/home.js';
import { createMenuPage } from './modules/menu.js';
import { createContact } from './modules/contact.js';
import {
  listOfDietProducts,
  listOfSpicyProducts,
  listOfVeggieProducts,
  listOfSeasonProducts,
  listOfThisWeekProducts,
} from './modules/default-products.js';

// ! update the branch gh-pages if modifications
// git subtree push --prefix dist origin gh-pages

const tabsSelection = ((doc) => {
  const main = document.querySelector('#main');
  const tabs = [...document.querySelectorAll('.tab')];

  const homeElements = [
    createHomePage.createSlogan(),
    createHomePage.createPresentation(),
    createHomePage.createThisWeekSection(listOfThisWeekProducts),
  ];
  const menuElements = [
    createMenuPage.createProductsList(listOfDietProducts, 'Diet'),
    createMenuPage.createProductsList(listOfSpicyProducts, 'Spicy'),
    createMenuPage.createProductsList(listOfVeggieProducts, 'Veggie'),
    createMenuPage.createProductsList(listOfSeasonProducts, 'Season'),
  ];
  const contactElements = [...createContact];

  const clearChilds = (el) => {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  };
  const setTabActive = (thisTab) => {
    tabs.map((tab) => tab.classList.remove('current-tab'));
    thisTab.classList.add('current-tab');
  };

  // init home on
  homeElements.map((el) => main.appendChild(el));
  setTabActive(tabs[0]);

  // manage the tabs selection
  tabs.map((tab) =>
    tab.addEventListener('click', (e) => {
      const whichTab = e.target.dataset.tab;
      setTabActive(e.target);
      switch (whichTab) {
        case 'home':
          clearChilds(main);
          homeElements.map((el) => main.appendChild(el));
          break;
        case 'menu':
          clearChilds(main);
          menuElements.map((el) => main.appendChild(el));
          break;
        case 'contact':
          clearChilds(main);
          contactElements.map((el) => main.appendChild(el));
          break;
      }
    }),
  );
})(document);
