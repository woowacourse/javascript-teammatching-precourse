export default class ManageCrewController {
  constructor() {}

  initialize() {
    this.radioClickEvent();
  }

  radioClickEvent() {
    const frontendRadio = document.querySelector("#frontend-course");
    const backendRadio = document.querySelector("#backend-course");
    frontendRadio.addEventListener(
      "click",
      this.onClickFrontendRadio.bind(this)
    );
    backendRadio.addEventListener("click", this.onClickBackendRadio.bind(this));
  }

  onClickFrontendRadio(event) {
    console.log("front");
  }

  onClickBackendRadio(event) {
    console.log("back");
  }
}
