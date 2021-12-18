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

export const addCrewOnCourse = (crewsOfcourse, crewName) =>
    appendToJsonItem(crewsOfcourse, crewName);

export const isUniqueCrewNameOnCourse = (crewsOfcourse, findCrewName) =>
    getJsonItem(crewsOfcourse).findIndex((crewName) => crewName === findCrewName) === -1;

export const getCrewsOnCourse = (course) => getJsonItem(course);

export const deleteCrewOnCourse = (course, findCrewName) =>
    setJsonItem(
        course,
        getCrewsOnCourse(course).filter((crewName) => crewName !== findCrewName),
    );

export const getTeamOnCourse = (course, mission) => getJsonItem(`${course}_${mission}`);
