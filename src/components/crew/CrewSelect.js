class CrewSelect {
  constructor($target) {
    this.$target = $target;

    this.addTemplate();
  }

  addTemplate() {
    this.$target.innerHTML = `
      <h3>크루를 관리할 코스를 선택해주세요</h3>
    `;
  }
}

export default CrewSelect;
