import { ID } from '../constants/selector.js';
import Member from './member.js';

export default class Model {
  constructor() {
    this.members = [];
    this.init();
  }

  init() {
    const existedMembers = JSON.parse(localStorage.getItem('members'));
    if (existedMembers) {
      existedMembers.forEach((member) => {
        this.members.push(new Member(member.type, member.name));
      });
    }
  }

  addMember(type, name) {
    this.members.push(new Member(type, name));
    localStorage.setItem('members', JSON.stringify(this.members));
  }

  getCrew(type) {
    return this.members
      .filter((member) => member.type === type)
      .map((member) => member.name);
  }

  removeMember(name) {
    this.members = this.members.filter((member) => member.name !== name);
  }

  get names() {
    return this.members.map((member) => member.name);
  }
}
