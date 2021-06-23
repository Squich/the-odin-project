const createDomElements = ((doc) => {
  const createParagraph = (textContent) => {
    const paragraph = doc.createElement('p');
    paragraph.textContent = textContent;
    return paragraph;
  };
  const createImg = (ImgSrc) => {
    const img = doc.createElement('img');
    img.src = ImgSrc;
    return img;
  };
  const createInput = (type) => {
    let input;
    if (type === 'textarea') {
      input = doc.createElement('textarea');
      input.maxLength = '400';
    } else {
      input = doc.createElement('input');
      input.maxLength = '80';
      input.type = type;
    }
    input.required = true;
    return input;
  };
  const createLabel = (textContent, forAttr) => {
    const label = doc.createElement('label');
    label.htmlFor = forAttr;
    label.textContent = textContent;
    return label;
  };

  return { createParagraph, createImg, createInput, createLabel };
})(document);

export { createDomElements };
