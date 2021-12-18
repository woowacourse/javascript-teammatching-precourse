import { HTML_OF_TEAM_TAB, HTML_OF_HEADER } from '../utils/html.js';

export default class TeamView {
  static render() {
    this.showPage();
  }

  // 순서대로 나오도록 수정
  static showPage() {
    document.getElementById('app').innerHTML = HTML_OF_HEADER + HTML_OF_TEAM_TAB;
  }
}
