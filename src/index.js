import { drawPage } from './drawPage.js';
import { onTabButton } from './onTabButton.js';
import { getCourse } from './crewTab.js';
drawPage();

function manage() {
  const $crew = document.getElementById('crew-tab');
  const $team = document.getElementById('team-tab');
  $crew.addEventListener('click', function (e) {
    e.stopPropagation();
    onTabButton(e);
  });
  $team.addEventListener('click', function (e) {
    e.stopPropagation();
    onTabButton(e);
  });
}

window.onload = function () {
  manage();
};

getCourse();
