import Store from '../../flux/store.js';
import Component from '../../abstracts/component.js';
import { crewListTemplate } from '../../templates/crew-manage/crewListTemplate.js';
import { getCourseNameById, getCourseById } from '../../utils/index.js';

class CrewList extends Component {
  static template = () => {
    const { crews, activeCourseId } = Store.instance.getState().crewManage;
    const courseName = getCourseNameById(activeCourseId);
    const course = getCourseById(activeCourseId);
    return crewListTemplate(crews, courseName, course);
  };
}

export default CrewList;
