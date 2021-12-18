import { onClickDeleteCrewButton } from "../../controllers/crewManager/eventHandlers.js"

const makeEmptyTable = $table => {
  $table.innerHTML = `
    <thead>
      <tr>
        <th></th>
        <th>크루</th>
        <th>관리</th>
      </tr>
    </thead>
    <tbody id="crews-info"></tbody>
  `;
};

const insertCrew = (index, name) => {
  return `
    <tr>
      <td>${index}</td>
      <td>${name}</td>
      <td>
        <button class="delete-crew-buttton" id=${name}>삭제</button>
      </td>
    </tr>
  `;
};

const showFrontEndCrews = () => {
  const $table = document.getElementById("crew-table");
  makeEmptyTable($table);
  const crews = JSON.parse(localStorage.getItem("crews"));
  let count = 0;

  if (crews) {
    const crewArr = crews.split(",");
    for (let i = 0; i < crewArr.length; i++) {
      if (crewArr[i].split("/")[0] === "frontend") {
        count++;
        document.getElementById("crews-info").innerHTML += insertCrew(
          count,
          crewArr[i].split("/")[1]
        );
      }
    }
  }

  onClickDeleteCrewButton();
};

const showBackEndCrews = () => {
  const $table = document.getElementById("crew-table");
  makeEmptyTable($table);
  const crews = JSON.parse(localStorage.getItem("crews"));
  let count = 0;

  if (crews) {
    const crewArr = crews.split(",");
    for (let i = 0; i < crewArr.length; i++) {
      if (crewArr[i].split("/")[0] === "backend") {
        count++;
        document.getElementById("crews-info").innerHTML += insertCrew(
          count,
          crewArr[i].split("/")[1]
        );
      }
    }
  }

  onClickDeleteCrewButton();
};

export { showFrontEndCrews, showBackEndCrews };
