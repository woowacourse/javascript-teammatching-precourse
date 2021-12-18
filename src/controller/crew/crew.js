import {
    addCrewOnCourse,
    isUniqueCrewNameOnCourse,
    getCrewsOnCourse,
    deleteCrewOnCourse,
} from '../../model/index.js';

export default class Crew {
    constructor(name) {
        this.name = name;
    }

    addCrew() {
        addCrewOnCourse(this.keyOfCrews, this.name);
    }

    getCrews() {
        return getCrewsOnCourse(this.keyOfCrews);
    }

    isUniqueCrewName() {
        return isUniqueCrewNameOnCourse(this.keyOfCrews, this.name);
    }

    deleteCrew() {
        deleteCrewOnCourse(this.keyOfCrews, this.name);
    }
}
