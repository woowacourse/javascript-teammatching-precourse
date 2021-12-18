import { TITLE, MAIN_MENU } from '../constants.js';
import makeElement from './makeElement.js';

const makeTitle = () => {
  const $title = makeElement('h1', TITLE);

  return $title;
};

const makeMenuButton = (text, id) => {
  const $button = makeElement('button', text);
  $button.setAttribute('id', id);

  return $button;
};

const makeMainMenu = () => {
  const $nav = makeElement('nav');
  const $ul = makeElement('ul');

  MAIN_MENU.forEach((menu) => {
    const $li = makeElement('li');
    const $button = makeMenuButton(menu.text, menu.id);
    $li.appendChild($button);
    $ul.appendChild($li);
  });

  $nav.appendChild($ul);

  return $nav;
};

const makeHeader = () => {
  const $header = makeElement('header');

  $header.appendChild(makeTitle());
  $header.appendChild(makeMainMenu());

  return $header;
};

export default makeHeader;
