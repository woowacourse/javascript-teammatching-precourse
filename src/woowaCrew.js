import { setLocalStorage } from './store.js';

function WoowaCrew() {
  this.frontendCrew = [];
  this.backendCrew = [];

  this.addCrew = (course, crew) => {
    console.log(course);
    if (course === 'frontend') {
      this.frontendCrew.push(crew);
      setLocalStorage('frontend', this.frontendCrew);
    }
    if (course === 'backend') {
      this.backendCrew.push(crew);
      setLocalStorage('backend', this.backendCrew);
    }
  };
}

export const woowaCrew = new WoowaCrew();
