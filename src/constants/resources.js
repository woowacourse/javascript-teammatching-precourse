import { ROUTE_KEY } from './index.js';

export default Object.freeze({
    COMMON: {
        HEADER: '우테코 크루와 팀 매칭 관리 보드',
    },
    [ROUTE_KEY[0]]: {
        HEAD: '크루를 관리할 코스를 선택해주세요',
        MANAGE_CREW_HEAD: '크루 관리',
        INPUT_GUIDE: '크루 이름',
        DISPLAY_CREW_HEAD: '크루 목록',
        ERROR_MESSAGE: {
            NAME_INPUT: '이름은 1~5글자 범위로 입력해야 합니다.',
            OVERLAB_NAME: '이미 등록된 이름입니다.',
            CONFIRM_MESSAGE: '크루를 삭제하시겠습니까?',
        },
        BUTTON: {
            SUBMIT: '확인',
            DELETE: '삭제',
        },
    },
    [ROUTE_KEY[1]]: {
        HEAD: '팀 매칭을 관리할 코스, 미션을 선택하세요.',
        SELECTED_HEAD: '미션의 팀 매칭',
        MATCH_GUIDE: '아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?',
        TEAM_NUMBER_INPUT_GUIDE: '1팀당 인원 수',
        CREW_LIST: '크루 목록',

        DISPLAY_HEAD: '조회',
        DISPLAY_MESSAGE: '팀이 매칭되었습니다.',
        REMATCH_GUIDE: '팀을 재매칭 하시겠습니까?',
        BUTTON: {
            SUBMIT: '확인',
            MATCH: '팀 매칭',
            REMATCH: '재매칭',
        },
        ERROR_MESSAGE: {
            SELECT: '코스와 미션을 선택해야 합니다.',
        },
    },
});
