import {
  BACKEND_COURSE_TEMPLATE,
  INIT_CREW_MANAGE_TEMPLATE,
  FRONTEND_COURSE_TEMPLATE,
} from "../template/crewManage-template.js";

export default class CrewManageView {
  renderPage = (container) => {
    container.insertAdjacentHTML("beforeend", INIT_CREW_MANAGE_TEMPLATE);
  };

  renderFrontendCourse = (container) => {
    this.resetCoursePage(container);
    container.insertAdjacentHTML("beforeend", FRONTEND_COURSE_TEMPLATE);
  };

  renderBackendCourse = (container) => {
    this.resetCoursePage(container);
    container.insertAdjacentHTML("beforeend", BACKEND_COURSE_TEMPLATE);
  };

  resetCoursePage = (container) => {
    container.innerHTML = "";
  };

  renderCrewsTable = (crews, container) => {
    const template = crews
      .map((crew, idx) => {
        return `
        <tr>
          <td>${idx + 1}</td>
          <td id="crew-name">${crew}</td>
          <td>
            <button id="delete-crew-button">삭제</button>
          </td>
        </tr>
      `;
      })
      .join("");
    container.innerHTML = template;
  };
}
