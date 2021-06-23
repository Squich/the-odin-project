import { createDomElements } from './domElement.js';

const product = (title, imgUrl, desc, category) => {
  const getTitle = () => title;
  const getImgUrl = () => imgUrl;
  const getDesc = () => desc;
  const getCategory = () => category;

  return {
    getTitle,
    getImgUrl,
    getDesc,
    getCategory,
  };
};

const createProductContainer = (menuProduct) => {
  const productContainer = document.createElement('div');
  productContainer.classList.add(
    'product-container',
    `${menuProduct.getCategory()}-products`,
  );

  const productTitle = document.createElement('h3');
  productTitle.classList.add('product-title');
  productTitle.textContent = menuProduct.getTitle();

  const productImg = createDomElements.createImg(menuProduct.getImgUrl());
  productImg.alt = 'Sushi photography';
  productImg.classList.add('product-image');

  const productDesc = createDomElements.createParagraph(menuProduct.getDesc());
  productDesc.classList.add('product-description');

  productContainer.appendChild(productTitle);
  productContainer.appendChild(productImg);
  productContainer.appendChild(productDesc);

  return productContainer;
};

export { product, createProductContainer };
