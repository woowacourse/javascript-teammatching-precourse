import { selectListener } from "./crewContainer.js";
export const CrewPresenter = function () {
    this.init = () => {
        const $course = document.querySelectorAll("input[name=course]");
        $course.forEach((element) =>
            element.addEventListener("change", function (e) {
                e.preventDefault();
                selectListener(e.target.value);
            }),
        );
    };

    this.init();
};
