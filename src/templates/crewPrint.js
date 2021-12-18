import { CREW_MANAGEMENT } from '../constants/selector.js';

function crewMember(index, crewName) {
  return `
    <tbody>
    <tr>
      <td>${index}</td>
      <td>${crewName}</td>
      <td>
        <button class=${CREW_MANAGEMENT.CLASS.DELETE_CREW_BUTTON}>삭제</button>
      </td>
    </tr>
  </tbody>
    `;
}

export default function crewPrint(crewNames) {
  return `
      <section>
      <h3>프론트엔드 크루 목록</h3>
      <table border="1">
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
          ${crewNames.map((crewName, index) => crewMember(index + 1, crewName)).join('')}
        </thead>
      </table>
    </section>
    `;
}
