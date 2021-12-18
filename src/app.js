import { tabButtonTemplete } from "./util/dom/tabButtonTemplete.js";
import CrewControlView from "./view/CrewControlView.js";
import TeamMatchView from "./view/TeamMatchView.js";

export default class App {
  constructor($app) {
    this.$app = $app;
    this.render();
    this.crewControl = new CrewControlView($app);
    this.teamMatch = new TeamMatchView($app);
    this.tabButtonEvent();
  }

  render() {
    const tabButton = document.createElement('header');
    tabButton.innerHTML = tabButtonTemplete;
    this.$app.append(tabButton);
  }

  tabButtonEvent() {
    console.log(this.$app.childNodes);
    [...this.$app.querySelectorAll('main')].map(content => content.style = ("display: none"));
    [...this.$app.querySelectorAll('button')].map(button => 
      button.addEventListener('click', ({ target }) => {
        [...this.$app.querySelectorAll('main')].map(content => content.style = ("display: none"));
        if (target.id === 'crew-tab') {
          this.crewControl.crewContolMenuClick();
        } else if (target.id === 'team-tab') {
          this.teamMatch.teamMatchMenuClick();
        }
      })
    )
  }

}