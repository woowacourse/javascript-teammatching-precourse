import { tabButtonTemplete } from "./util/dom/tabButtonTemplete.js";
import CrewControlView from "./view/CrewControlView.js";
import TeamMatchView from "./view/TeamMatchView.js";

export default class App {
  constructor($app) {
    this.$app = $app;
    this.render();
    this.tabButtonEvent();
    this.crewControl = new CrewControlView($app);
    this.teamMatch = new TeamMatchView($app);

  }

  render() {
    const tabButton = document.createElement('header');
    tabButton.innerHTML = tabButtonTemplete;
    this.$app.append(tabButton);
  }

  tabButtonEvent() {
    [...this.$app.querySelectorAll('button')].map(button => 
      button.addEventListener('click', ({ target }) => {
        if (target.id === 'control-button') {
          console.log(target.id)
        } else if (target.id === 'match-button') {
          console.log(target.id)
        }
      })
    )
  }

}