import Crew from './Crew.js';

export default class BackCrew extends Crew {
    constructor(name) {
        super(name);
        this.keyOfCrews = 'backCrews';
    }
}
