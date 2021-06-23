const createHeader = ((doc) => {
  const _tabNames = ['Home', 'Menu', 'Contact'];

  const header = doc.createElement('header');
  header.setAttribute('id', 'header');
  // site title
  const h1 = doc.createElement('h1');
  h1.textContent = 'Roboto sushi';
  h1.classList.add('titles');
  h1.setAttribute('id', 'site-title');
  // tabs
  const tabsDiv = doc.createElement('nav');
  tabsDiv.setAttribute('id', 'tabs');
  for (let i = 0; i < 3; i++) {
    const tab = doc.createElement('label');
    tab.textContent = _tabNames[i];
    tab.setAttribute('data-tab', _tabNames[i].toLowerCase());
    tab.classList.add('tab');
    tabsDiv.appendChild(tab);
  }

  header.appendChild(h1);
  header.appendChild(tabsDiv);

  return { header };
})(document);

const createFooter = ((doc) => {
  const footer = doc.createElement('footer');
  footer.setAttribute('id', 'footer');

  const gitProjectLink = doc.createElement('a');
  gitProjectLink.href = 'https://github.com/aurelien-genois/restaurant-page';
  gitProjectLink.textContent = 'Seventh Odin project';
  gitProjectLink.target = '_blank';
  const gitprofileLink = doc.createElement('a');
  gitprofileLink.href = 'https://github.com/aurelien-genois';
  gitprofileLink.textContent = 'Aurélien Genois';
  gitprofileLink.target = '_blank';

  const footerText = doc.createElement('p');
  footerText.append(gitProjectLink, ' created by ', gitprofileLink);

  footer.append(footerText);

  return { footer };
})(document);

const initPageStructure = ((doc) => {
  const siteContent = doc.querySelector('#content');
  const siteMain = doc.createElement('main');
  siteMain.id = 'main';

  siteContent.append(createHeader.header, siteMain, createFooter.footer);
})(document);

export { initPageStructure };
