import { $ } from "../common/dom.js";
import Component from "../core/Component.js";
import Crew from "./Crew.js";
import Team from "./Team.js";

export default class App extends Component {
  mount() {
    this.components = { ["crew-tab"]: Crew, ["team-tab"]: Team };
    this.setEvent();
  }

  setEvent() {
    $("nav").addEventListener("click", (e) => {
      this.onClick(e);
    });
  }

  onClick(e) {
    const { target } = e;
    if (target.nodeName === "BUTTON") {
      console.log(target.id, this.components);
      new this.components[target.id]($("main"));
    }
  }

  template() {
    return `  
        <header>
        <h1>우테코 크루와 팀 매칭 관리 보드</h1>
        <nav>
            <ul>
            <li>
                <button id='crew-tab'>크루 관리</button>
            </li>
            <li>
                <button id='team-tab'>팀 매칭 관리</button>
            </li>
            </ul>
        </nav>
        </header>
        <main><main/>
    `;
  }
}
