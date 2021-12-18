import { APP_MENU, APP_TITLE, EMPTY } from '../constants/index.js';

const Menu = () => `
<h1>${APP_TITLE}</h1>
<nav>
  <ul>
    ${APP_MENU.map(
      ({ id, text }) => `
      <li>
        <button id=${id}>${text}</button>
      </li>
      `,
    ).join(EMPTY)}
  </ul>
</nav>
`;

export default Menu;
