const makeElement = (elementName, text) => {
  const $element = document.createElement(elementName);

  if (text) {
    $element.appendChild(document.createTextNode(text));
  }

  return $element;
};

export default makeElement;
