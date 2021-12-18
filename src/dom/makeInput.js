import makeElement from './makeElement.js';

const makeInput = (id, type) => {
  const $input = makeElement('input');
  $input.setAttribute('id', id);
  $input.setAttribute('type', type);

  return $input;
};

export default makeInput;
