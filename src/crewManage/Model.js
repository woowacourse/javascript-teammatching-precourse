class Person {
  constructor(index, name) {
    this.index = index;
    this.name = name;
  }
}

export default class Model {
  constructor() {
    this.peopleList = [];
  }

  addPerson(index, name) {
    this.person = new Person(index, name);
    this.peopleList.push(this.person);
  }

  removePerson(personIdx) {
    this.peopleList.splice(personIdx, 1);
  }
}
