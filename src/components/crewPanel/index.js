import Panel from '../common/Panel.js';
import setVisibility from '../../dom/utils/setVisibility.js';
import getChildrenToList from '../../dom/utils/getChildrenToList.js';
import removeChildren from '../../dom/utils/removeChildren.js';
import createDataCell from '../../dom/utils/createDataCell.js';
import createElement from '../../dom/utils/createElement.js';
import { ID_BUTTON_ADD, ID_INPUT_NAME, ID_TABLE } from './const.js';
import { DICT_COURSE } from '../../../data/course.js';
import isValidName from './utils/isValidName.js';
import Course from '../../model/Course.js';
import hasDuplicate from '../../utils/hasDuplicate.js';

export default class CrewPanel extends Panel {
	constructor(panel) {
		super(panel);
		const sections = [...panel.getElementsByTagName('section')];
		[this.courseSection, this.crewSection, this.tableSection] = sections;

		sections.forEach((section, i) => setVisibility(section, i === 0));
		this.initCourseSection();
		this.initCrewSection();
		this.initTableSection();

		Course.register('crews', this.setTableRows, this.table);
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
		this.input = form.getElementsByTagName('input').item(0);
		this.input.id = ID_INPUT_NAME;
		const button = form.getElementsByTagName('button').item(0);
		button.id = ID_BUTTON_ADD;
		button.addEventListener('click', this.onAddButtonClick.bind(this));
	}

	initTableSection() {
		this.table = this.tableSection.getElementsByTagName('table').item(0);
		this.table.id = ID_TABLE;
		const tbody = this.table.getElementsByTagName('tbody').item(0);
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

		Course.init(course);
	}

	setTableRows(crews, context) {
		const tbody = context.getElementsByTagName('tbody').item(0);
		removeChildren(tbody);

		crews.forEach((crew, i) => {
			const tr = document.createElement('tr');
			tr.appendChild(createDataCell(i + 1));
			tr.appendChild(createDataCell(crew));
			const container = createDataCell('');
			const button = createElement('button', { innerText: '삭제' });
			button.addEventListener('click', () => {
				if (window.confirm('정말 삭제하시겠습니까?')) Course.removeCrew(crew);
			});
			container.appendChild(button);
			tr.appendChild(container);

			tbody.appendChild(tr);
		});
	}

	onAddButtonClick(e) {
		e.preventDefault();
		const name = this.input.value;
		const newCrews = [...Course.getCrews(), name];

		if (!isValidName(name) || hasDuplicate(newCrews, name)) {
			alert('잘못된 이름입니다.');
			this.input.value = '';
			return;
		}

		Course.addCrew(name);
	}
}
