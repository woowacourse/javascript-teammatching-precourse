import { $, $All } from '../utils/DOM.js';
import { APP_TEMPLATE } from '../utils/template.js';
import { CrewView } from './CrewView.js';
import { TeamView } from './TeamView.js';

export class CoreView {
  constructor() {
    this.$app = $('#app');
    this.addCommonElements();
    this.crewView = new CrewView();
    this.teamView = new TeamView();
  }

  setOnTabClick() {
    const $tabArray = Array.from(this.$nav.children);
    console.log(`$tabArray`, $tabArray);
    $tabArray.map(($tab, i) => {
      $tab.addEventListener('click', () => {
        this.handleSectionDisplay(i);
      });
    });
  }

  handleSectionDisplay(i) {
    const $mainArray = Array.from(this.$mains);
    $mainArray.map(($main, j) => {
      if (i === j) {
        $main.style.display = 'block';
        return;
      }
      $main.style.display = 'none';
    });
  }

  addCommonElements() {
    this.$app.innerHTML = APP_TEMPLATE;
    this.$nav = $('#app > header > nav > ul');
    this.$mains = $All('#app > main');
    this.$crewTab = $('#crew-tab');
    this.$teamTab = $('#team-tab');
  }
}
