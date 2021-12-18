import { BUTTON, HEADER } from '../../common/constant.js';

function createMainHeader() {
  return `
    <h1>${HEADER.MAIN}</h1>
  `;
}

function createNav() {
  return `
    <nav>
      <ul>
        <li>
          <button>${BUTTON.CREW_MANAGE}</button>
        </li>
        <li>
          <button>${BUTTON.TEAM_MATCHING_MANAGE}</button>
        </li>
      </ul>
    </nav>
  `;
}

export default function createHeader() {
  const header = document.createElement('header');
  const mainHeader = createMainHeader();
  header.innerHTML += mainHeader;
  const nav = createNav();
  header.innerHTML += nav;

  return header;
}
