export default {
  crews: { frontend: [], backend: [] },
  add(crew) {
    this.crews[crew.course].push(crew.name);
  },
  list() {
    return this.crews;
  },
};
