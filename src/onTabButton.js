export function onTabButton(e) {
  if (e.target.id === 'crew-tab') {
    e.stopPropagation();
    const $crew = document.getElementById('crew-content');
    const $team = document.getElementById('team-content');
    $crew.classList.remove('hide');
    $crew.classList.add('show');
    $team.classList.add('hide');
    $team.classList.remove('show');
  }
  if (e.target.id === 'team-tab') {
    e.stopPropagation();
    const $crew = document.getElementById('crew-content');
    const $team = document.getElementById('team-content');
    $team.classList.remove('hide');
    $crew.classList.add('hide');
    $crew.classList.remove('show');
    $team.classList.add('show');
  }
}
