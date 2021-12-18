import setVisibility from '../../dom/utils/setVisibility.js';
import Panel from '../common/Panel.js';
import { COURSE, DICT_COURSE } from '../../../data/course.js';
import { MISSION, DICT_MISSION } from '../../../data/mission.js';
import removeChildren from '../../dom/utils/removeChildren.js';
import { ID_SELECT_COURSE, ID_SELECT_MISSION } from './const.js';

export default class TeamPanel extends Panel {
	constructor(panel) {
		super(panel);
		const sections = [...panel.getElementsByTagName('section')];
		[this.selectSection, this.matchingSection, this.rematchingSection] =
			sections;
		sections.forEach((section, i) => setVisibility(section, i === 0));

		this.initSelectSection();
		this.initSelectSection();
	}

	initSelectSection() {
		const form = this.selectSection.getElementsByTagName('form').item(0);
		const selects = form.getElementsByTagName('select');
		[this.courseSelect, this.missionSelect] = selects;
		this.courseSelect.id = ID_SELECT_COURSE;
		this.missionSelect.id = ID_SELECT_MISSION;
		removeChildren(this.courseSelect);
		removeChildren(this.missionSelect);
		COURSE.forEach((course) => {
			const option = document.createElement('option');
			option.innerText = DICT_COURSE[course];
			option.value = course;
			this.courseSelect.appendChild(option);
		});

		MISSION.forEach((mission) => {
			const option = document.createElement('option');
			option.innerText = DICT_MISSION[mission];
			option.value = mission;
			this.missionSelect.appendChild(option);
		});
	}
}
