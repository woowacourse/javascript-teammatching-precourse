import * as View from "../Storage/view.js";

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
};
