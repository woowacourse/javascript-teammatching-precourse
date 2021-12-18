import * as View from "../Storage/view.js";
import {
    CREW_TAB as CREW,
    EMPTY,
    LOACL_STORAGE as LOCAL,
} from "../Storage/constant.js";
import { Crew } from "./Crew.js";
import {
    appendLocalStorage,
    getLocalStorage,
    setLocalStorage,
} from "../Storage/localStorage.js";
export const selectListener = (value) => {
    const $main = document.getElementById("main-container");
    if (value === "frontend") {
        $main.insertAdjacentHTML(
            "beforeend",
            View.CrewSecnodView("프론트엔드"),
        );

        if (getLocalStorage(LOCAL.FRONTEND_CREW) !== EMPTY) {
            showExistCrew(LOCAL.FRONTEND_CREW);
        }
        setCrewEvent(LOCAL.FRONTEND_CREW);
    } else {
        $main.insertAdjacentHTML("beforeend", View.CrewSecnodView("백엔드"));
        if (getLocalStorage(LOCAL.BACKEND_CREW) !== EMPTY) {
            showExistCrew(LOCAL.BACKEND_CREW);
        }
        setCrewEvent(LOCAL.BACKEND_CREW);
    }
};

const setCrewEvent = (storage) => {
    const $crewInput = document.getElementById(CREW.CREW_INPUT);
    const $crewAddButton = document.getElementById(CREW.CREW_ADD_BTN);
    $crewAddButton.addEventListener("click", function (e) {
        e.preventDefault();
        const inputVal = $crewInput.value; // 여기서 유효성 검사
        const id = appendLocal(inputVal, storage);
        appendTable(inputVal, id, storage);
    });
};

const appendLocal = (inputVal, storage) => {
    let id = 1;
    if (getLocalStorage(storage) === EMPTY) {
        appendLocalStorage(storage, { id, name: inputVal });
    } else {
        const crews = JSON.parse(getLocalStorage(storage));
        id = crews[crews.length - 1].id + 1;
        appendLocalStorage(storage, { id, name: inputVal });
    }

    return id;
};

const appendTable = (crewName, crewId, storage) => {
    const $crewTable = document.getElementById(CREW.CREW_TABLE);
    const $tbody = $crewTable.children[1];
    const tr = document.createElement("tr");
    const id = document.createElement("td");
    id.innerText = crewId;
    const name = document.createElement("td");
    name.innerText = crewName;
    appendTd(tr, id, name, setDelButton($tbody, tr, storage));
    $tbody.append(tr);
};

const appendTd = (tr, ...tds) => {
    tds.forEach((element) => tr.append(element));
};

const setDelButton = (tbody, tr, storage) => {
    const btn = document.createElement("td");
    const button = document.createElement("button");
    button.className = CREW.CREW_DEL_BTN;
    button.innerText = "삭제";
    button.addEventListener("click", function (e) {
        e.preventDefault();
        tbody.deleteRow(checkRowIdx(tbody, tr));
        const delId = Number(tr.children[0].innerText);
        deleteStorage(delId, storage);
    });
    btn.append(button);
    return btn;
};

const checkRowIdx = (body, tr) => {
    for (let i = 0; i < body.children.length; i++) {
        if (body.children[i] === tr) return i;
    }
};

const showExistCrew = (storage) => {
    const crews = JSON.parse(getLocalStorage(storage));
    crews.forEach((element) => appendTable(element.name, element.id, storage));
};

const deleteStorage = (delId, storage) => {
    const crews = JSON.parse(getLocalStorage(storage));
    const newCrews = crews.filter((element) => element.id !== delId);
    setLocalStorage(storage, JSON.stringify(newCrews));
};
