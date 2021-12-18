import { $ } from '../util/index.js';

const triggerEvent = () => {
    $('#crew-tab').addEventListener('click', () => {
        $('#main').classList.remove('team');
        $('#main').classList.add('crew');
    });

    $('#team-tab').addEventListener('click', () => {
        $('#main').classList.remove('crew');
        $('#main').classList.add('team');
    });
};

export default triggerEvent;
