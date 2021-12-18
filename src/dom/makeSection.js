import makeElement from './makeElement.js';

const makeSectionTitle = (text) => {
  const $h3 = makeElement('h3', text);
  return $h3;
};

const makeSection = (titleText, content) => {
  const $section = makeElement('section');
  $section.appendChild(makeSectionTitle(titleText));
  $section.appendChild(content);
};

export default makeSection;
