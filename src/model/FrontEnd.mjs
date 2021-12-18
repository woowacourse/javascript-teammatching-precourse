import { setUserLocalStorage } from '../util/localStorage.mjs';

export default class FrontEnd {
  constructor() {
    this.crew = localStorage.getItem('FrontEndUser')?.split(',') ?? [];
  }

  setCrew(crew) {
    this.crew = [...this.crew, crew];
    setUserLocalStorage('FrontEndUser', this.crew);
  }

  getCrew(crew) {
    console.log(this.crew);
  }
}
