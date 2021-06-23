import { createDomElements } from './domElement.js';

const createContact = ((doc) => {
  const createAbout = () => {
    const aboutDiv = doc.createElement('div');
    aboutDiv.id = 'contact-about-section';
    aboutDiv.classList.add('site-sections', 'contact-sections');

    const aboutTitle = doc.createElement('h2');
    aboutTitle.classList.add('titles', 'section-titles');
    aboutTitle.id = 'contact-about-title';
    aboutTitle.textContent = 'Our restaurant';

    // presentation
    const presentationDiv = doc.createElement('div');
    presentationDiv.id = 'contact-presentation';
    const contactImg = createDomElements.createImg(
      'https://images.unsplash.com/photo-1552531268-3fe8c3fc8d84?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    );
    contactImg.id = 'contact-img';
    contactImg.alt = 'restaurant photography';
    const contactDesc = createDomElements.createParagraph(
      '\tOur sushi restaurant is located is Xinyi, the most dynamic district of Tapei.\n\n\tWe open every day, every hour, save for the international robot day, which date is kept secret from humans.\n\n\tOur sushimen robots never sleep and are very hygienic for the food. Come see them at work anytime!',
    );
    contactDesc.id = 'contact-desc';
    presentationDiv.append(contactImg, contactDesc);

    // adress
    const adressDiv = doc.createElement('div');
    adressDiv.id = 'contact-adress';
    const adressCoor = doc.createElement('div');
    adressCoor.id = 'contact-adress-coor';
    const country = createDomElements.createParagraph('Taïwan');
    country.id = 'contact-adress-country';
    country.classList.add('contact-adress-text');
    const city = createDomElements.createParagraph(
      `Taipei City, Xinyi District`,
    );
    city.id = 'contact-adress-city';
    city.classList.add('contact-adress-text');
    const road = createDomElements.createParagraph(
      'Lane 39, Section 2,\nJilong Road,\nNo. 35, 1st Floor',
    );
    road.id = 'contact-adress-road';
    road.classList.add('contact-adress-text');
    adressCoor.appendChild(country);
    adressCoor.appendChild(city);
    adressCoor.appendChild(road);
    const mapEmbed = doc.createElement('iframe');
    mapEmbed.id = 'contact-map';
    mapEmbed.loading = 'lazy';
    mapEmbed.src =
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1092.0601739132837!2d121.55941121800703!3d25.03082450777196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abca7f688cf7%3A0xb2221faaa8175ac4!2zTGEgRmFtaWxsZeaLieazleexs-WLkumkkOmbhg!5e1!3m2!1sfr!2sfr!4v1619598816818!5m2!1sfr!2sfr';
    adressDiv.append(adressCoor, mapEmbed);

    aboutDiv.append(aboutTitle, presentationDiv, adressDiv);

    return aboutDiv;
  };
  const createForm = () => {
    const contactSection = doc.createElement('div');
    contactSection.id = 'contact-form-section';
    contactSection.classList.add('site-sections', 'contact-sections');

    const contactTitle = doc.createElement('h2');
    contactTitle.classList.add('titles', 'section-titles');
    contactTitle.id = 'contact-form-title';
    contactTitle.textContent = 'Contact us!';

    const contactForm = doc.createElement('form');
    contactForm.id = 'contact-form';

    const contactMailLabel = createDomElements.createLabel(
      'Your email adress:',
      'contact-mail',
    );
    contactMailLabel.id = 'contact-mail-label';
    const contactMailInput = createDomElements.createInput('email');
    contactMailInput.id = 'contact-mail';

    const contactMessageLabel = createDomElements.createLabel(
      'Your message:',
      'contact-message',
    );
    contactMessageLabel.id = 'contact-message-label';
    const contactMessage = createDomElements.createInput('textarea');
    contactMessage.id = 'contact-message';

    const contactSubmit = createDomElements.createInput('submit');
    contactSubmit.id = 'contact-submit';
    contactSubmit.value = 'Send message';

    contactForm.append(
      contactMailLabel,
      contactMailInput,
      contactMessageLabel,
      contactMessage,
      contactSubmit,
    );

    contactSection.append(contactTitle, contactForm);

    return contactSection;
  };

  return [createAbout(), createForm()];
})(document);

export { createContact };
