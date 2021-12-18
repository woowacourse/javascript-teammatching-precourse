import { ID } from '../../../constants/index.js';

import Component from '../../../core/Component.js';

export default class CourseForm extends Component {
  template() {
    const { frontend, backend } = this.$props.data['crew_course'];

    return `
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input type="radio" id="${ID.FE_RADIO_INPUT}" name="course" value="frontend" ${frontend}/>
        <label for="frontend">프론트엔드</label>
        <input type="radio" id="${ID.BE_RADIO_INPUT}" name="course" value="backend" ${backend}/>
        <label for="backend">백엔드</label>
      </div>
    `;
  }
  mounted() {}
  setEvent() {
    const { setCourse } = this.$props;

    this.addEvent('click', `#${ID.FE_RADIO_INPUT}`, ({ target }) => {
      setCourse({ frontend: 'checked', backend: '' });
    });

    this.addEvent('click', `#${ID.BE_RADIO_INPUT}`, ({ target }) => {
      setCourse({ frontend: '', backend: 'checked' });
    });
  }
}
