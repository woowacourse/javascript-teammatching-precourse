import { ID, TEXT } from "../../constant/constant.js";

const crewManage = `
    <h3>크루를 관리할 코스를 선택해주세요</h3>
    <div id="radio-form">
      <input type="radio" name="course" value="frontend" id=${ID.FRONTEND}/>
      <label for="frontend">프론트엔드</label>
      <input type="radio" name="course" value="backend" id=${ID.BACKEND}/>
      <label for="backend">백엔드</label>
    </div>
`;

const addCrew = (course) => `
<h3>${course === "frontend" ? TEXT.FRONT : TEXT.BACK} 크루 관리</h3>
<form>
  <label>크루 이름</label>
  <input type="text" id=${ID.INPUT}/>
  <button id=${ID.ADD_BUTTON}>확인</button>
</form>
`;

const crewTable = (course) => `
  <h3>${course === "frontend" ? TEXT.FRONT : TEXT.BACK} 크루 목록</h3>
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
            <button id=${ID.DELETE_BUTTON}>삭제</button>
          </td>
        </tr>
      </tbody>
    </table>

`;

export { crewManage, addCrew, crewTable };
