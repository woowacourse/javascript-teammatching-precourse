import { ID } from "../../constant/constant.js";

const crewManage = `

  <section>
    <h3>크루를 관리할 코스를 선택해주세요</h3>
    <div>
      <input type="radio" name="course" value="frontend" id=${ID.FRONTEND}/>
      <label for="frontend">프론트엔드</label>
      <input type="radio" name="course" value="backend" id=${ID.BACKEND}/>
      <label for="backend">백엔드</label>
    </div>
  </section>
`;

export { crewManage };
