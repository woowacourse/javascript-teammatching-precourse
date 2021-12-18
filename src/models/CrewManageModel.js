export default {
  crews: { frontend: [], backend: [] },
  add(crew) {
    if (crew.name.length > 5) {
      alert('크루 이름은 최대 5글자만 가능합니다.');
      return;
    }
    if (this.crews[crew.course].findIndex((item) => item === crew.name) !== -1) {
      alert('이미 추가된 크루입니다.');
      return;
    }
    this.crews[crew.course].push(crew.name);
  },
  list() {
    return this.crews;
  },
};
