import { $ } from '../dom/dom.js';
import controlCrewManage from './controlCrewManage.js';

export default function control() {
  $('#crew-tab').addEventListener('click', controlCrewManage);
  // $('#team-tab').addEventListener('click');
}
