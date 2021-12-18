import { InitialPresenter } from "./Storage/initialPresenter.js";

export default function TeamMatching() {
    this.init = () => {
        new InitialPresenter();
    };
}

const team = new TeamMatching();
team.init();
