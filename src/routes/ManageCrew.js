import { setError } from '../common/error.js';
import { isValidName } from '../common/validation.js';
import Table from '../components/Table.js';
import { data } from '../constants/index.js';
import { setEvent } from '../eventBus/index.js';
import Component from '../interface/Component.js';
import { getState, setState } from '../store/index.js';

export default class ManageCrew extends Component {
    setup() {
        this.errorMessage = this.resources.ERROR_MESSAGE;
        this.table = new Table(`#${this.selectors.ID.TABLE_VIEW}`);
        this.delegateEvent();
    }

    willmount() {
        this.selectedCourse = getState((state) => state.selectedCourse);
        this.crew = getState((state) => state.crew);
        this.courseName = data.COURSE.find((item) => item.value === this.selectedCourse)?.label;
    }

    mount() {
        this.setTableConfig();
        if (this.selectedCourse !== null) this.table.render();
    }

    setTableConfig() {
        this.table.setConfig({
            id: this.selectors.ID.TABLE,
            columns: [
                { label: '', key: 'idx' },
                { label: '크루', key: 'crew' },
                {
                    label: '관리',
                    key: 'config',
                    render: (rowData, idx) => this.deleteButtonTemplate(rowData, idx),
                },
            ],
            data: this.crew[this.selectedCourse]?.map((item, _idx) => ({ idx: _idx + 1, crew: item })),
        });
    }

    delegateEvent() {
        setEvent('click', this.selectors.EVENT_KEY.RADIO, (ev) => setState('selectedCourse', ev.target.value));
        setEvent('click', this.selectors.EVENT_KEY.DELETE, this.onDeleteItem.bind(this));
        setEvent('submit', this.selectors.EVENT_KEY.FORM, this.onSubmit.bind(this));
    }

    onDeleteItem(ev) {
        const { idx } = ev.target.dataset;

        if (window.confirm(this.errorMessage.CONFIRM_MESSAGE)) {
            this.crew[this.selectedCourse].splice(idx, 1);
            setState('crew', this.crew);
        }
    }

    onSubmit(ev) {
        ev.preventDefault();
        const name = ev.target[this.selectors.NAME.INPUT]?.value;

        if (!isValidName(name)) setError(this.errorMessage.NAME_INPUT);
        else if (this.crew[this.selectedCourse].includes(name)) setError(this.errorMessage.OVERLAB_NAME);
        else {
            this.crew[this.selectedCourse].push(name);
            setState('crew', this.crew);
        }
    }

    deleteButtonTemplate(rowData, idx) {
        return `
            <button
                data-idx="${idx}"
                ${this.eventAttr}="${this.selectors.EVENT_KEY.DELETE}"
                class="${this.selectors.CLASS.DELETE_BUTTON}"
            >${this.resources.BUTTON.DELETE}</button>`;
    }

    radioFormTemplate() {
        return data.COURSE.map(
            (course) => `
                <input
                    type="radio"
                    id="${this.selectors.ID.RADIO[course.value]}"
                    value="${course.value}"
                    name="${this.selectors.NAME.RADIO}"
                    ${this.selectedCourse === course.value ? 'checked' : ''}
                    ${this.eventAttr}="${this.selectors.EVENT_KEY.RADIO}"
                />
                <label for="${course.value}">${course.label}</label>
            `
        ).join('');
    }

    selectCourseTemplate() {
        return `
            <h3>${this.resources.HEAD}</h3>
            <div>${this.radioFormTemplate()}</div>
        `;
    }

    manageCrewTemplate() {
        return `
        <section>
            <h3>${this.courseName} ${this.resources.MANAGE_CREW_HEAD}</h3>
            <form ${this.eventAttr}="${this.selectors.EVENT_KEY.FORM}">
                <label>${this.resources.INPUT_GUIDE}</label>
                <input type="text" name="${this.selectors.NAME.INPUT}" id="${this.selectors.ID.NAME_INPUT}"/>
                <input type="submit" value="${this.resources.BUTTON.SUBMIT}" id="${this.selectors.ID.ADD_BUTTON}"/>
            </form>
        </section>
        <section>
            <h3>${this.courseName} ${this.resources.DISPLAY_CREW_HEAD}</h3><div id="${this.selectors.ID.TABLE_VIEW}"></div>
        </section>
        `;
    }

    template = () => `
        <section>${this.selectCourseTemplate()}</section>
        ${this.selectedCourse ? this.manageCrewTemplate() : ''}
    `;
}
