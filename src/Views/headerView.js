import { headerTemplate } from '../Templates/headerTemplate.js';
import { $ } from '../Utils/common.js';

export default class HeaderView {
  render() {
    $(`#app`).innerHTML = headerTemplate;
  }
}
