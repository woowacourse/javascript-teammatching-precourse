class TeamManage {
  constructor($target) {
    this.$target = $target;

    this.addTemplate();
  }

  addTemplate() {
    this.$target.innerHTML = `
    <h3>프론트엔드 숫자야구게임 미션의 팀 매칭</h3>
    <div>
      <div>
        <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
        <form>
          <label>1팀당 인원 수</label>
          <input type="number" />
          <button>팀 매칭</button>
        </form>
      </div>
      <h4>크루 목록</h4>
      <ul>
        <li>준</li>
        <li>포코</li>
      </ul>
    </div>
    `;
  }
}

export default TeamManage;
