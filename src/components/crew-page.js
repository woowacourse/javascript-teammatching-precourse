import { CREW_PAGE } from "../constants.js";

export default () => {
    const $app = document.querySelector('#app');
    $app.insertAdjacentHTML('beforeend', 
    `<div id=${CREW_PAGE.MAIN} hidden=true>
    <h3> 쿠르를 관리할 코스를 선택해주세요 </h3>
    <div>
        <input id="${CREW_PAGE.FRONT_RADIO}" type="radio" name="course" value="frontend" />
        <label for="frontend">프론트엔드</label>
        <input id="${CREW_PAGE.BACK_RADIO}" type="radio" name="course" value="backend" />
        <label for="backend">백엔드</label>
    </div>
    `
    +
    
    `
    <div id="${CREW_PAGE.FRONT_PAGE}" hidden >
    <h3>프론트엔드 크루 관리</h3>
    <form>
      <label>크루 이름</label>
      <input type="text" />
      <button>확인</button>
    </form>
    <h3>프론트엔드 크루 목록</h3>
    <table border="1">
      <thead>
        <tr>
          <th></th>
          <th>크루</th>
          <th>관리</th>
        </tr>
      </thead>
    </table>
    </div>
    `
    +
    `
    <div id="${CREW_PAGE.BACK_PAGE}" hidden >
    <h3>백엔드 크루 관리</h3>
    <form>
      <label>크루 이름</label>
      <input type="text" />
      <button>확인</button>
    </form>
    <h3>백엔드 크루 목록</h3>
    <table border="1">
      <thead>
        <tr>
          <th></th>
          <th>크루</th>
          <th>관리</th>
        </tr>
      </thead>
    </div>
    </table>
    </div>
    `
    )
}