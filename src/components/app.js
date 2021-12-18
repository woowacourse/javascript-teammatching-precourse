/* eslint-disable radix */
import Component from "../common/component.js";
import HeaderSection from "./headerSection.js";
import InputSection from "./inputSection.js";
import RadioButtonSection from "./radioButtonSection.js";
import Table from "./table.js";

export default class App extends Component {
  initialize() {
    this.$state = { activeTab: "crew-tab" };
  }

  template() {
    return `
      <header></header>
      <main>
        <section></section>
        <section></section>
        <section></section>
      </main>
    `;
  }

  componentDidMount() {
    this.mountHeader();
    this.mountRadioSection();
    this.mountInputSection();
    this.mountTableSection();
  }

  // setEvent() {
  //   this.$target.addEventListener("click", this.onClickButton.bind(this));
  // }

  mountHeader() {
    const $headerSelector = document.querySelector("header");
    new HeaderSection($headerSelector, {
      title: "우테코 크루와 팀 매칭 관리 보드",
      buttonList: [
        { name: "크루 관리", id: "crew-tab" },
        { name: "팀 매칭 관리", id: "team-tab" },
      ],
    });
  }

  mountRadioSection() {
    const $sectionSelector = document.querySelectorAll("section")[0];

    new RadioButtonSection($sectionSelector, {
      title: "크루를 관리할 코스를 선택해주세요",
      name: "course",
      buttonList: [
        { id: "frontend-course", value: "frontend", label: "프런트엔드" },
        { id: "backend-course", value: "backend", label: "백엔드" },
      ],
    });
  }

  mountInputSection() {
    const $sectionSelector = document.querySelectorAll("section")[1];

    new InputSection($sectionSelector, {
      title: "프런트엔드 크루 관리",
      titleElementType: "h3",
      label: "크루 이름",
      inputType: "text",
      buttonId: "add-crew-buttton",
      inputId: "crew-name-input",
    });
  }

  mountTableSection() {
    const $sectionSelector = document.querySelectorAll("section")[2];
    new Table($sectionSelector, { title: "프런트엔드 크루 관리 목록" });
  }

  // onClickButton(event) {}
}
