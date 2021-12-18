const getJsonItem = (key, defaultVal = []) => {
    const json = localStorage.getItem(key);

    return json ? JSON.parse(json) : defaultVal;
};

const setJsonItem = (key, json) => {
    localStorage.setItem(key, JSON.stringify(json));
};

const appendToJsonItem = (key, item) => {
    const json = getJsonItem(key);

    json.push(item);
    setJsonItem(key, json);
};

const addCrew = (crewsOfcourse) => (crewName) => appendToJsonItem(crewsOfcourse, crewName);

export const addFronCrew = addCrew('frontCrews');

export const addBackCrew = addCrew('backCrews');

const isUniqueCrewName = (crewsOfcourse) => (findCrewName) =>
    getJsonItem(crewsOfcourse).findIndex((crewName) => crewName === findCrewName) === -1;

export const isUniqueFrontCrewName = isUniqueCrewName('frontCrews');

export const isUniqueBackCrewName = isUniqueCrewName('backCrews');
