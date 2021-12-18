import { getUID } from '../common/utils.js';
import { ROUTE_KEY } from './index.js';

export default Object.freeze({
    COMMON: {
        ID: {
            BUTTONS: ['crew-tab', 'team-tab'],
        },
        EVENT_DATA_KEY: 'data-event-id',
        EVENT_KEY: {
            BUTTON: 'main-navigation-button-click',
        },
    },
    [ROUTE_KEY[0]]: {
        ID: {
            RADIO: {
                frontend: 'frontend-course',
                backend: 'backend-course',
            },
            NAME_INPUT: 'crew-name-input',
            ADD_BUTTON: 'add-crew-buttton',
            TABLE_VIEW: `${ROUTE_KEY[0]}_TABLE_VIEW`,
            TABLE: 'crew-table',
        },
        CLASS: {
            DELETE_BUTTON: 'delete-crew-buttton',
        },
        EVENT_KEY: {
            FORM: ROUTE_KEY[0] + getUID(),
            RADIO: ROUTE_KEY[0] + getUID(),
            DELETE: ROUTE_KEY[0] + getUID(),
        },
        NAME: {
            RADIO: 'course',
            INPUT: 'name',
        },
    },
    [ROUTE_KEY[1]]: {
        ID: {
            COURSE_SELECT: 'course-select',
            MISSION_SELECT: 'mission-select',
            CHECK_BUTTON: 'show-team-matcher-button',
            MATCH_INPUT: 'team-member-count-input',
            MATCH_BUTTON: 'match-team-button',
            TEAM_LIST: 'team-match-result',
            REMATCH_BUTTON: 'rematch-team-button',
        },
        EVENT_KEY: {
            SELECT_FORM: ROUTE_KEY[1] + getUID(),
            MATCH_FORM: ROUTE_KEY[1] + getUID(),
            REMATCH: ROUTE_KEY[1] + getUID(),
        },
        NAME: {
            MEMBER_NUMBER: 'member_number',
            COURSE: 'course',
            MISSION: 'mission',
        },
    },
});
