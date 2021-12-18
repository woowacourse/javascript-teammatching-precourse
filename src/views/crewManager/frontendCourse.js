const inputSection = () => {
  return `
    <section>
      <h3>프론트엔드 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input type="text" id="crew-name-input" />
        <button id="add-crew-buttton">확인</button>
      </form>
    </section>
  `;
};

const tableSection = () => {
  return `
    <section>
      <h3>프론트엔드 크루 목록</h3>
      <table id="crew-table" value="frontend" border="1"></table>
    </section>
  `;
};

const showFrontendSection = () => {
  const $crewArea = document.getElementById("crew-area");

  $crewArea.innerHTML = `
    ${inputSection()}
    ${tableSection()}
  `;
};

export { showFrontendSection };
