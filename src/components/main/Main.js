import { ID } from '../../constants/index.js';

import Component from '../../core/Component.js';
import CrewTab from './crew-tab/index.js';
import TeamTab from './team-tab/index.js';

export default class Main extends Component {
  mounted() {
    const { tabID } = this.$props;
    this.setDataComponent(this.$target, tabID);
  }

  setDataComponent($target, tabID) {
    const { data, setCourse, addCrew, deleteCrew } = this.$props;

    switch (tabID) {
      case ID.CREW_TAB:
        return new CrewTab($target, { data, setCourse, addCrew, deleteCrew });

      case ID.TEAM_TAB:
        return new TeamTab($target, { data });
    }
  }
}
