import { ID } from '../constants/selector.js';
import Member from './member.js';

export default class Model {
  constructor() {
    this.members = [];
  }

  addMember(type, name) {
    this.members.push(new Member(type, name));
  }

  getCrew(type) {
    return this.members
      .filter((member) => member.type === type)
      .map((member) => member.name);
  }

  get names() {
    return this.members.map((member) => member.name);
  }
}
