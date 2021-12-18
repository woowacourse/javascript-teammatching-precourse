const ID = Object.freeze({
  crewTabButton: 'crew-tab',
  teamTabButton: 'team-tab',
  crewNameInput: 'crew-name-input',
  addCrewButton: 'add-crew-button',
  crewTable: 'crew-table',
  courseSelect: 'course-select',
  missionSelect: 'mission-select',
  showTeamMatcherButton: 'show-team-matcher-button',
  teamMemberCountInput: 'team-member-count-input',
  matchTeamButton: 'match-team-button',
  teamMatchResult: 'team-match-result',
  rematchTeamButton: 'rematch-team-button',
});

const CLASS = Object.freeze({
  deleteCrewButton: 'delete-crew-button',
});

const COURSE = Object.freeze({
  frontend: 'frontend',
  backend: 'backend',
});

const MISSION = Object.freeze({
  baseball: 'baseball',
  racingCar: 'racingcar',
  lotto: 'lotto',
  shoppingCart: 'shopping-cart',
  payments: 'payments',
  subway: 'subway',
  performance: 'performance',
  deploy: 'deploy',
});

const KEY = Object.freeze({
  localKey: 'teamMatchingData',
});

const DIR = Object.freeze({
  crew: 'crew',
  team: 'team',
});

export { ID, CLASS, COURSE, MISSION, KEY, DIR };
