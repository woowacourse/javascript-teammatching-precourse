class CrewInput {
  constructor($target, courseName) {
    this.$target = $target;
    this.courseName = courseName;

    this.addTemplate();
  }

  addTemplate() {
    this.$target.innerHTML = `
      <h3>${this.courseName} 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input type="text" />
        <button>확인</button>
      </form>
    `;
  }
}

export default CrewInput;
