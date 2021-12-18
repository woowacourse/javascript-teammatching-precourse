import { customCreateElement } from '../utils/createElements.js';
import {
  ID_CONTAINER,
  ID_CREW_LIST,
  ID_MATCH_BUTTON,
  ID_MISSION_BUTTON,
  ID_RESULT_SECTION,
  ID_TEAM_RESULT,
  TEMPLATE_BASE,
  TEMPLATE_MATCH,
  TEMPLATE_NO_MATCH,
} from './constants.js';
import { getChildDom } from '../utils/handleDOM.js';
import { checkMatch, handleMatchTeams } from './eventHandler.js';

const TeamTab = () => {
  const Container = customCreateElement({ tag: 'section', id: ID_CONTAINER });
  Container.innerHTML = TEMPLATE_BASE;

  // functions
  const addCrewList = function addCrewListToUl(section, course) {
    const list = getChildDom(section, `#${ID_CREW_LIST}`);
    const crew = course.crewList.reduce(
      (joined, crew) => `${joined}<li>${crew}</li>`,
      ''
    );
    list.innerHTML = crew;
  };

  const renderResult = function renderResultSection(members, course) {
    const ResultSection = getChildDom(Container, `#${ID_RESULT_SECTION}`);
    if (members.length !== 0) {
      ResultSection.innerHTML = TEMPLATE_MATCH;
      const teams = members.reduce(
        (str, team) => `${str}<li>${team.join(',')}</li>`,
        ''
      );
      getChildDom(ResultSection, `#${ID_TEAM_RESULT}`).innerHTML = teams;
      getChildDom(ResultSection, '#rematch-team-button').addEventListener(
        'click',
        () => renderResult([], course)
      );
    } else {
      ResultSection.innerHTML = TEMPLATE_NO_MATCH;
      addCrewList(ResultSection, course);
      const matchButton = getChildDom(ResultSection, `#${ID_MATCH_BUTTON}`);
      matchButton.addEventListener('click', () =>
        handleMatchTeams(renderResult)
      );
    }
  };

  const missionInput = getChildDom(Container, `#${ID_MISSION_BUTTON}`);
  missionInput.addEventListener('click', () => checkMatch(renderResult));

  return Container;
};

export default TeamTab;
