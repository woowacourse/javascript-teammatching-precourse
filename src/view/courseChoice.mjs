const $app = document.querySelector('#app');
const $main = document.createElement('main');

export const renderCourseChoice = frontEndOrBackEnd => {
  const $section = document.createElement('section');

  $section.innerHTML = `
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input type="radio" id="frontend-course" name="course" value="frontend" ${
          frontEndOrBackEnd === 'frontend' ? 'checked' : ''
        }/>
        <label for="frontend">프론트엔드</label>
        <input type="radio" id="backend-course" name="course" value="backend" />
        <label for="backend">백엔드</label>
      </div>
  `;

  $main.appendChild($section);
  $app.appendChild($main);
};
