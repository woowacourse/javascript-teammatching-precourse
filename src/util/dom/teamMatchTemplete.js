export const teamMatchTemplete = `
  <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
  <form>
    <select id="course-select">
      <option value="frontend">프론트엔드</option>
      <option value="backend">백엔드</option>
    </select>
    <select id="mission-select">
      <option value="baseball">숫자야구게임</option>
      <option value="racingcar">자동차경주</option>
      <option value="lotto">로또</option>
      <option value="shopping-cart">장바구니</option>
      <option value="payments">결제</option>
      <option value="performance">성능개선</option>
      <option value="deploy">배포</option>
    </select>
    <button id="show-team-matcher-button">확인</button>
  </form>
  <div id="taem-matcher-form"></div>
`;

export function teamMatchFormTemplete(teamOption) {
  const teamMatchInputTemplete = `
    <h2>${teamOption[0]} ${teamOption[1]}의 팀 매칭</h2>
    <p>아직 팀이 없습니다. 팀을 매칭하시겠습니까?</p>
    <form>
      <label>1팀당 인원 수</label>
      <input id="team-member-count-input" type="number" />
      <button id="match-team-button">팀 매칭</button>
    </form>
    <h3>크루원 목록</h3>
    <div id="crew-list"></div>
  `;

  return teamMatchInputTemplete;
}

export function crewListTemplete(crew) {
  return `<li>${crew}</li>`;
}