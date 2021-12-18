import { STORAGE_KEY } from '../../utils/constants.js';
import { getLocalStorage } from '../../utils/LocalStorage.js';
import Component from '../core/Component.js';

export default class CrewManageContainer extends Component {
  init() {
    this.$state = { crews: getLocalStorage(STORAGE_KEY.CREW, []) };
  }

  template() {
    return `
      <section id="select-course"></section>
      <section id="crew-manage"></section>
      <section id="crew-list"></section>
    `;
  }

  mounted() {}
}
