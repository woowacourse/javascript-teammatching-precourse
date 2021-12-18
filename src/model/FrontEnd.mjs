import { setUserLocalStorage } from '../util/localStorage.mjs';

export default class FrontEnd {
  constructor() {
    this.crew = localStorage.getItem('FrontEndUser')?.split(',') ?? [];
  }

  getCrew(crew) {
    this.crew = [...this.crew, crew];
    setUserLocalStorage('FrontEndUser', this.crew);
  }
}
