import { SELECTOR } from "../constants.js";
import { qs } from "../utils/index.js";
import View from "./View.js";

export default class CrewManagementView extends View {
  constructor(element = qs(`#${SELECTOR.CREW_MANAGEMENT_VIEW}`)) {
    super(element);
    this.template = new Template();

    this.initializeElements();
  }

  initializeElements() {
    this.element.innerHTML = this.template.getInitialElements();
  }
}

class Template {
  getInitialElements() {
    return `하위^^;`;
  }
}