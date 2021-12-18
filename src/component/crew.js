class Crew {
  constructor() {
    this.frontEndMembers = [];
    this.backEndMembers = [];

    this.loadDataFromLocalStorage();
  }

  loadDataFromLocalStorage() {
    if (localStorage.getItem("frontEnd")) {
      this.frontEndMembers = localStorage.getItem("frontEnd").split(",");
    }
    if (localStorage.getItem("backEnd")) {
      this.backEndMembers = localStorage.getItem("backEnd").split(",");
    }
  }
}

export const crew = new Crew();
