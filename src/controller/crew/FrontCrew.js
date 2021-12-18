import Crew from './Crew.js';

export default class FrontCrew extends Crew {
    constructor(name) {
        super(name);
        this.keyOfCrews = 'frontCrews';
    }
}
