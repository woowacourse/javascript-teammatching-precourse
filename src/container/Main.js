import { CURRENT_TAB } from '../constants/index.js';
import { Content } from '../presentational/index.js';
import Component from './root/Component.js';

export default class Main extends Component {
  template() {
    return Content(this.$storage.read(CURRENT_TAB));
  }

  eventSetter() {
    return [];
  }
}
