import { SELECTOR } from './constants.js';

export const headerTemplate = `
<header>
<h1>우테코 크루와 팀 매칭 관리 보드</h1>
<nav>
    <ul>
    <li>
        <button id=${SELECTOR.crewManageButton}>크루 관리</button>
    </li>
    <li>
        <button id=${SELECTOR.teamManageButton}>팀 매칭 관리</button>
    </li>
    </ul>
</nav>
</header>
<div id=${SELECTOR.container}></div>
`;

export const crewManageTemplate = `
  <main>
    <section>
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input type="radio" name=${SELECTOR.radioName} value="frontend" id=${SELECTOR.radioFrontendInput}/>
        <label for="frontend">프론트엔드</label>
        <input type="radio" name=${SELECTOR.radioName} value="backend" id=${SELECTOR.radioBackendInput}/>
        <label for="backend">백엔드</label>
      </div>
    </section>
    <section id=${SELECTOR.selectedCourseContents}>
    </section>
  </main>
`;

export const crewInputAndTableTemplate = course => `
<h3>${course} 크루 관리</h3>
<form>
<label>크루 이름</label>
<input type="text" id=${SELECTOR.crewNameInput}/>
<button id=${SELECTOR.crewAddButton}>확인</button>
</form>
</section>
<section>
<h3>${course} 크루 목록</h3>
<table border="1">
<thead>
    <tr>
    <th></th>
    <th>크루</th>
    <th>관리</th>
    </tr>
</thead>
<tbody>
    <tr>
    <td>1</td>
    <td>준</td>
    <td>
        <button>삭제</button>
    </td>
    </tr>
</tbody>
</table>
`;

export const crewTableTemplate = `

`;

export const teamMatchingManageTemplate = `
  <main>
    <section>
      <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
      <form>
        <select>
          <option>프론트엔드</option>
          <option>백엔드</option>
        </select>
        <select>
          <option>숫자야구게임</option>
        </select>
        <button>확인</button>
      </form>
    </section>
    <section>
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
    </section>
    <!-- 팀 매칭이 된 경우 -->
    <section>
      <h3>프론트엔드 숫자야구게임 조회</h3>
      <p>팀이 매칭되었습니다.</p>
      <ul>
        <li>준,포코</li>
      </ul>
      <p>
        팀을 재매칭 하시겠습니까?
        <button>재매칭</button>
      </p>
    </section>
  </main>
`;
