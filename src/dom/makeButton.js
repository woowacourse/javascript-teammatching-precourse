import makeElement from './makeElement.js';

const makeButton = (text, id, type) => {
  const $button = makeElement('button', text);
  $button.setAttribute('id', id);

  if (type) {
    $button.setAttribute('type', type);
  }

  return $button;
};

export default makeButton;
