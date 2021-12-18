class Person {
  constructor(index, name) {
    this.index = index;
    this.name = name;
  }
}

export default class Model {
  constructor() {
    this.FrontPeopleList = [];
    this.BackPeopleList = [];
  }

  addPerson(index, name, course) {
    if (course == '프론트엔드') {
      const person = new Person(index, name);
      this.FrontPeopleList.push(person);
      console.log('프론트');
    } else if (course == '백엔드') {
      const person = new Person(index, name);
      this.BackPeopleList.push(person);
      console.log('백');
    }
  }

  removePerson(personIdx, course) {
    if (course == '프론트엔드') {
      this.FrontPeopleList.splice(personIdx, 1);
      console.log(this.FrontPeopleList);
    } else if (course == '백엔드') {
      this.BackPeopleList.splice(personIdx, 1);
      console.log(this.BackPeopleList);
    }
  }
}
