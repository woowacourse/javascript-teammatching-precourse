import {
  INIT_MATCHING_MANAGE_TEMPLATE,
  MATCHING_RESULT_TEMPLATE,
} from "../template/matchingManage-template.js";

export default class MatchingManageView {
  renderPage = (container) => {
    container.insertAdjacentHTML("beforeend", INIT_MATCHING_MANAGE_TEMPLATE);
  };

  renderMatchingPage = (course, mission, container) => {
    const template = `
      <section>
      <h3>${course} ${mission} 미션의 팀 매칭</h3>
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
        <ul id="crew-list">
        </ul>
      </div>
    </section>
    `;
    container.innerHTML = "";
    container.innerHTML = template;
  };

  renderMatchingResult = (container) => {
    container.innerHTML = "";
    container.innerHTML = MATCHING_RESULT_TEMPLATE;
  };

  renderMatchingCrewList = (shuffledCrews, container) => {
    const resultTemplate = shuffledCrews
      .map((crews) => {
        return `<li>${crews.join(",")}</li>`;
      })
      .join("");

    container.innerHTML = resultTemplate;
  };

  renderAllCrewList = (crews, container) => {
    const template = crews.map((crew) => `<li>${crew}</li>`).join("");
    container.innerHTML = template;
  };
}
