import { setError } from '../common/error.js';
import { matchTeam } from '../common/utils.js';
import { isEmpty, isPositiveNumber } from '../common/validation.js';
import { data } from '../constants/index.js';
import { setEvent } from '../eventBus/index.js';
import Component from '../interface/Component.js';
import { getState, setState, setStates } from '../store/index.js';

export default class ManageTeam extends Component {
    setup() {
        this.errorMessage = this.resources.ERROR_MESSAGE;
        this.delegateEvent();
    }

    willmount() {
        this.selectedMission = getState((state) => state.selectedMission);
        this.courseName = data.COURSE.find((item) => item.value === this.selectedMission.course)?.label;
        this.missionName = data.MISSION.find((item) => item.value === this.selectedMission.mission)?.label;
        this.crew = getState((state) => state.crew);
        this.team = getState((state) => state.team);
    }

    delegateEvent() {
        setEvent('submit', this.selectors.EVENT_KEY.SELECT_FORM, this.onSelect.bind(this));
        setEvent('submit', this.selectors.EVENT_KEY.MATCH_FORM, this.onMatchTeam.bind(this));
        setEvent('click', this.selectors.EVENT_KEY.REMATCH, this.onRematchTeam.bind(this));
    }

    onSelect(ev) {
        ev.preventDefault();
        const [course, mission] = [
            ev.target[this.selectors.NAME.COURSE]?.value,
            ev.target[this.selectors.NAME.MISSION]?.value,
        ];

        if (isEmpty(course) || isEmpty(mission)) setError(this.errorMessage.SELECT);
        else {
            this.selectedMission = { course, mission };
            this.teamCounter = null;
            setStates({ selectedMission: this.selectedMission, teamCounter: this.teamCounter });
        }
    }

    onMatchTeam(ev) {
        ev.preventDefault();
        const number = Number(ev.target[this.selectors.NAME.MEMBER_NUMBER]?.value);
        const { course, mission } = this.selectedMission;

        if (!isPositiveNumber(number)) setError(this.errorMessage.MEMBER_INPUT);
        else {
            this.team[course][mission] = matchTeam(this.crew[this.selectedMission.course], number);
            setState('team', this.team);
        }
    }

    onRematchTeam() {
        const { course, mission } = this.selectedMission;
        this.team[course][mission] = [];
        setState('team', this.team);
    }

    selectFormTemplate(id, name, options) {
        return `
            <select id="${id}" name="${name}">
                <option selected disabled value=""> -- select an options -- </option>
                ${options
                    .map(
                        (option) => `
                        <option value="${option.value}" ${
                            this.selectedMission[name] === option.value ? 'selected' : ''
                        }>${option.label}</option>`
                    )
                    .join('')}
            </select>
        `;
    }

    crewListTemplate() {
        return `
            <h4>${this.resources.CREW_LIST}</h4>
            <ul>
                ${this.crew[this.selectedMission.course].map((item) => `<li>${item}</li>`).join('')}
            </ul>
        `;
    }

    matchFormTemplate() {
        return `
        <h3>${this.courseName} ${this.missionName} ${this.resources.SELECTED_HEAD}</h3>
        <div>
            <div><p>${this.resources.MATCH_GUIDE}</p>
                <form ${this.eventAttr}="${this.selectors.EVENT_KEY.MATCH_FORM}">
                    <label>${this.resources.TEAM_NUMBER_INPUT_GUIDE}</label><input type="number" id="${
            this.selectors.ID.MATCH_INPUT
        }" name="${this.selectors.NAME.MEMBER_NUMBER}"/>
                    <button id="${this.selectors.MATCH_BUTTON}">${this.resources.BUTTON.MATCH}</button>
                </form>
            </div>${this.crewListTemplate()}
        </div>
        `;
    }

    matchedTeamTemplate() {
        const { course, mission } = this.selectedMission;
        const teams = this.team[course][mission];
        return `
            <h3>${this.courseName} ${this.missionName} ${this.resources.DISPLAY_HEAD}</h3>
            <p>${this.resources.DISPLAY_MESSAGE}</p>
            <ul id="${this.selectors.ID.TEAM_LIST}">${teams.map((team) => `<li>${team.join(',')}</li>`).join('')}</ul>
            <p>${this.resources.REMATCH_GUIDE}
                <button ${this.eventAttr}="${this.selectors.EVENT_KEY.REMATCH}" id="${
            this.selectors.ID.REMATCH_BUTTON
        }">${this.resources.BUTTON.REMATCH}</button>
            </p>
        `;
    }

    resultTemplate() {
        const { course, mission } = this.selectedMission;
        if (course === null || mission === null) return '';
        if (this.team[course][mission].length === 0) return this.matchFormTemplate();
        return this.matchedTeamTemplate();
    }

    template() {
        return `
        <section>
            <h3>${this.resources.HEAD}</h3>
            <form ${this.eventAttr}="${this.selectors.EVENT_KEY.SELECT_FORM}">
                ${this.selectFormTemplate(this.selectors.ID.COURSE_SELECT, this.selectors.NAME.COURSE, data.COURSE)}
                ${this.selectFormTemplate(this.selectors.ID.MISSION_SELECT, this.selectors.NAME.MISSION, data.MISSION)}
                <button id="${this.selectors.ID.CHECK_BUTTON}">${this.resources.BUTTON.SUBMIT}</button>
            </form>
        </section>
        <section>${this.resultTemplate()}</section>
        `;
    }
}
