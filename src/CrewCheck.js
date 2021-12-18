export default class CrewCheck {
    constructor(name) {
        this.name = name;
    }

    checkEmpty() {
        return this.name !== '' && this.name.indexOf(' ') === -1; // 상수로 분리
    }

    checkLength() {
        return this.name.length <= 5; // 상수로 분리
    }
}