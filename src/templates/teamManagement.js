import { convertObjectToArray } from '../utils/general.js';

const crewListGenerator = crew =>
  crew
    .map(name => {
      return `<li>${name}</li>`;
    })
    .join('');

const teamListGenerator = teamList =>
  teamList.map(team => {
    return `<li>${team.join(',')}</li>`;
  });

export const matchTeamForm = crew => `
  <div>
    <div>
      <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
      <form>
        <label>1팀당 인원 수</label>
        <input type="number" id="team-member-count-input"/>
        <button id="match-team-button">팀 매칭</button>
      </form>
    </div>
    <h4>크루 목록</h4>
    <ul>
      ${crewListGenerator(crew)}
    </ul>
  </div>
`;

export const matchedTeams = teamList => `
  <p>팀이 매칭되었습니다.</p>
  <ul id="team-match-result">
    ${teamListGenerator(teamList)}
  </ul>
  <p>
    팀을 재매칭 하시겠습니까?
    <button id="rematch-team-button">재매칭</button>
  </p>
`;

export const optionGenerator = (optionIdObject, optionNameObject) =>
  convertObjectToArray(optionIdObject)
    .map(
      ([, value]) =>
        `<option value=${value}>${optionNameObject[value]}</option>`
    )
    .join('');
