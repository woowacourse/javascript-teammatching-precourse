export default {
  crews: { frontend: [], backend: [] },
  add(name) {
    this.crews.push(name);
  },
  list() {
    return this.crews;
  },
};
