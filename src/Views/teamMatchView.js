import { teamMatchTemplate } from '../Templates/teamMatchTemplate.js';
import { $ } from '../Utils/common.js';
import { ID, CLASS } from '../Utils/constants.js';

export default class TeamMatchView {
  render() {
    $(`main`).innerHTML = teamMatchTemplate.topSelect;
  }
}
