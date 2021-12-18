import Panel from '../common/Panel.js';
import setVisibility from '../../dom/utils/setVisibility.js';
import getChildrenToList from '../../dom/utils/getChildrenToList.js';
import { ID_BUTTON_ADD, ID_INPUT_NAME } from './const.js';
import removeChildren from '../../dom/utils/removeChildren.js';
import { DICT_COURSE } from '../../../data/course.js';

export default class CrewPanel extends Panel {
	constructor(panel) {
		super(panel);
		const sections = [...panel.getElementsByTagName('section')];
		[this.courseSection, this.crewSection, this.tableSection] = sections;

		sections.forEach((section, i) => setVisibility(section, i === 0));
		this.initCourseSection();
		this.initCrewSection();
		this.initTableSection();
	}

	initCourseSection() {
		const inputs = getChildrenToList(
			this.courseSection
		)[1].getElementsByTagName('input');
		[...inputs].forEach((input) => {
			input.id = `${input.value}-course`;
			input.addEventListener('click', this.onRadioButtonClick.bind(this));
		});
	}

	initCrewSection() {
		const form = this.crewSection.getElementsByTagName('form').item(0);
		const input = form.getElementsByTagName('input').item(0);
		input.id = ID_INPUT_NAME;
		const button = form.getElementsByTagName('button').item(0);
		button.id = ID_BUTTON_ADD;
	}

	initTableSection() {
		const table = this.tableSection.getElementsByTagName('table').item(0);
		const tbody = table.getElementsByTagName('tbody').item(0);
		removeChildren(tbody);
	}

	setCrewSection(course) {
		const heading = this.crewSection.getElementsByTagName('h3').item(0);
		heading.innerText = `${DICT_COURSE[course]} 크루 관리`;
	}

	setTableSection(course) {
		const heading = this.tableSection.getElementsByTagName('h3').item(0);
		heading.innerText = `${DICT_COURSE[course]} 크루 목록`;
	}

	onRadioButtonClick(e) {
		const course = e.target.value;

		setVisibility(this.crewSection, true);
		this.setCrewSection(course);
		setVisibility(this.tableSection, true);
		this.setTableSection(course);
	}
}
