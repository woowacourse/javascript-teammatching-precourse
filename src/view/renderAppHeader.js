import $ from '../util/$.js';
import {
  APP_ID,
  TAB_ID,
} from '../constant/constant.js';

export default function renderAppHeader() {
  const $app = $(`#${APP_ID}`);
  const $header = document.createElement('div');

  $header.innerHTML = `
    <h1>우테코 크루와 팀 매칭 관리 보드</h1>
    <button id="${TAB_ID.MANAGE_CREW}">크루 관리</button>
    <button id="${TAB_ID.MANAGE_TEAM}">팀 매칭 관리</button>
  `;
  $app.append($header);
}
