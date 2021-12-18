export const ROUTE_KEY = ['MANAGE_CREW', 'MANAGE_TEAM'];

export const route = [
    {
        label: '크루 관리',
        key: ROUTE_KEY[0],
    },
    {
        label: '팀 매칭 관리',
        key: ROUTE_KEY[1],
    },
];

export const data = {
    COURSE: [
        { label: '프론트엔드', value: 'frontend' },
        { label: '백엔드', value: 'backend' },
    ],
    MISSION: [
        { label: '숫자야구게임', value: 'baseball' },
        { label: '자동차경주', value: 'racingcar' },
        { label: '로또', value: 'lotto' },
        { label: '장바구니', value: 'shopping-cart' },
        { label: '결제', value: 'payments' },
        { label: '지하철노선도', value: 'subway' },
        { label: '성능개선', value: 'performance' },
        { label: '배포', value: 'deploy' },
    ],
};

const createEmptyArrayObject = (keyList, callback) => {
    const object = {};

    keyList.forEach((key) => {
        object[callback(key)] = [];
    });
    return object;
};

export const defaultStatus = {
    tabIdx: 0,
    selectedCourse: null,
    crew: {
        [data.COURSE[0].value]: [],
        [data.COURSE[1].value]: [],
    },
    team: {
        [data.COURSE[0].value]: createEmptyArrayObject(data.MISSION, (data) => data.value),
        [data.COURSE[1].value]: createEmptyArrayObject(data.MISSION, (data) => data.value),
    },
    selectedMission: {
        course: null,
        mission: null,
    },
};
