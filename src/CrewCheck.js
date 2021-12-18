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

    // 중복 체크하는거 추가해야됨

    // 체크하지 않으면

    checkAll() {
        return this.checkEmpty() && this.checkLength();
    }
}