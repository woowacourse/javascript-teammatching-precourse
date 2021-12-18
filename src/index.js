import { drawPage } from './drawPage.js';
import { onTabButton } from './onTabButton.js';

drawPage();

function manage() {
  const $crew = document.getElementById('crew-tab');
  const $team = document.getElementById('team-tab');
  $crew.addEventListener('click', function (e) {
    onTabButton(e);
  });
  $team.addEventListener('click', function (e) {
    onTabButton(e);
  });
}

window.onload = function () {
  manage();
};
