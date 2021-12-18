import { HTML_OF_TEAM_TAB, HTML_OF_HEADER } from "./utils/html.js";

export default class TeamView {
    static render() {
        this.showPage();
    }

    static showPage() {
        document.getElementById('app').innerHTML = HTML_OF_HEADER + HTML_OF_TEAM_TAB;
    }
}