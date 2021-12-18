import { EMPTY } from '../constants/index.js';

const Menu = ({ APP_TITLE, APP_MENU }) => `
<h1>${APP_TITLE}</h1>
<nav>
  <ul>
    ${APP_MENU.map(
      menu => `
      <li>
        <button>${menu}</button>
      </li>
      `,
    ).join(EMPTY)}
  </ul>
</nav>
`;

export default Menu;
