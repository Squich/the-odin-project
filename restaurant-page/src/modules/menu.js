import { createProductContainer } from './product-class.js';

const createMenuPage = ((doc) => {
  // one product template

  const createProductsList = (productsArr, category) => {
    const productsListSection = doc.createElement('div');
    productsListSection.classList.add(
      'products-list-sections',
      `${category.toLowerCase()}-products-section`,
    );
    productsListSection.classList.add('site-sections', 'menu-sections');

    const listTitle = doc.createElement('h2');
    listTitle.classList.add('titles', 'section-titles');
    listTitle.textContent = `${category}'s sushis`;

    const productsList = doc.createElement('div');
    productsList.classList.add('products-list');

    productsArr.map((product) => {
      productsList.appendChild(createProductContainer(product));
    });
    productsListSection.append(listTitle, productsList);

    return productsListSection;
  };

  return { createProductsList };
})(document);

export { createMenuPage };
