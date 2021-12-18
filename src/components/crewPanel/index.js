import Panel from '../common/Panel.js';
import setVisibility from '../../dom/utils/setVisibility.js';
import getChildrenToList from '../../dom/utils/getChildrenToList.js';

export default class CrewPanel extends Panel {
	constructor(panel) {
		super(panel);
		const sections = [...panel.getElementsByTagName('section')];
		[this.courseSection, this.crewSection, this.tableSection] = sections;

		sections.forEach((section, i) => setVisibility(section, i === 0));
		this.initCourseSection();
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

	onRadioButtonClick(e) {
		console.log(e.target.value);
	}
}
