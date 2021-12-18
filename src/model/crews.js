export default class Crews {
  constructor() {
    this.frontend = [];
    this.backend = [];
  }

  findFrontendCrew(name) {
    let index = -1;
    let count = 0;
    this.frontend.forEach(element => {
      const compareResult = element.localeCompare(name);
      if (compareResult === 0) {
        index = count;
      }
      count += 1;
    });
    return index;
  }

  findBackendCrew(name) {
    let index = -1;
    let count = 0;
    this.backend.forEach(element => {
      const compareResult = element.localeCompare(name);
      if (compareResult === 0) {
        index = count;
      }
      count += 1;
    });
    return index;
  }

  addFrontendCrew(name) {
    const index = this.findFrontendCrew(name);
    const peopleNumber = this.frontend.length;
    if (index === -1) {
      this.frontend.push(name);
      localStorage.setItem(`${peopleNumber}frontend-${name}`, `${peopleNumber}`); //-${crewInfo.mission}
      return true;
    }
    return false;
  }

  addBackendCrew(name) {
    const index = this.findBackendCrew(name);
    const peopleNumber = this.backend.length;
    if (index === -1) {
        this.backend.push(name);
        localStorage.setItem(`${peopleNumber}backend-${name}`, `${peopleNumber}`); //-${crewInfo.mission}
        return true;
    }
    return false;
  }

  deleteFrontendCrew(name) {
    const index = this.findFrontendCrew(name);
    this.frontend.splice(index,1);
    localStorage.removeItem(localStorage.key(index));
  }

  deleteBackendCrew(name) {
    const index = this.findBackendCrew(name);
    this.backend.splice(index,1);
    localStorage.removeItem(localStorage.key(index));
  }

  isFrontend(key) {
    return key.includes('frontend-');
  }

  findEndOfIndexFrontend(key) {
    return key.indexOf('frontend');
  }

  findEndOfIndexBackend(key) {
    return key.indexOf('backend');
  }
}