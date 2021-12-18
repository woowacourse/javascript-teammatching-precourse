const $app = document.querySelector('#app');
const $main = document.createElement('main');

export const renderCourseChoice = () => {
  $main.innerHTML = `
    <section>
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input type="radio" id="frontend-course" name="course" value="frontend" />
        <label for="frontend">프론트엔드</label>
        <input type="radio" id="backend-course" name="course" value="backend" />
        <label for="backend">백엔드</label>
      </div>
    </section>
  `;

  $app.appendChild($main);
};
