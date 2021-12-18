export default {
  crews: [],
  add(name) {
    this.crews.push(name);
  },
  list() {
    return this.crews;
  },
};
