import * as View from "../Storage/view.js";
import { CREW_TAB as CREW } from "../Storage/constant.js";
import { Crew } from "./Crew.js";
export const selectListener = (value) => {
    const $main = document.getElementById("main-container");
    if (value === "frontend") {
        $main.insertAdjacentHTML(
            "beforeend",
            View.CrewSecnodView("프론트엔드"),
        );
    } else {
        $main.insertAdjacentHTML("beforeend", View.CrewSecnodView("백엔드"));
    }
    setCrewEvent();
};

const setCrewEvent = () => {
    const $crewInput = document.getElementById(CREW.CREW_INPUT);
    const $crewAddButton = document.getElementById(CREW.CREW_ADD_BTN);

    $crewAddButton.addEventListener("click", function (e) {
        e.preventDefault();
        const inputVal = $crewInput.value; // 여기서 유효성 검사
        appendTable(inputVal);
    });
};

const appendTable = (crewName) => {
    const $crewTable = document.getElementById(CREW.CREW_TABLE);
    const $tbody = $crewTable.children[1];
    const tr = document.createElement("tr");
    const crew = new Crew(2, crewName);
    const id = document.createElement("td");
    id.innerText = crew.id;
    const name = document.createElement("td");
    name.innerText = crew.name;
    appendTd(tr, id, name, setDelButton($tbody, tr));
    $tbody.append(tr);
};

const appendTd = (tr, ...tds) => {
    tds.forEach((element) => tr.append(element));
};

const setDelButton = (tbody, tr) => {
    const btn = document.createElement("td");
    const button = document.createElement("button");
    button.className = CREW.CREW_DEL_BTN;
    button.innerText = "삭제";
    button.addEventListener("click", function (e) {
        e.preventDefault();
        tbody.deleteRow(checkRowIdx(tbody, tr));
    });
    btn.append(button);
    return btn;
};

const checkRowIdx = (body, tr) => {
    for (let i = 0; i < body.children.length; i++) {
        if (body.children[i] === tr) return i;
    }
};
