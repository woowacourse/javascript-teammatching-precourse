import { $ } from '../util/index.js';

const convertTabEvent = (tab) => () => {
    $('#main').classList.remove('crew');
    $('#main').classList.remove('team');
    $('#main').classList.add(tab);
};

const triggerTapEvent = () => {
    $('#crew-tab').addEventListener('click', convertTabEvent('crew'));
    $('#team-tab').addEventListener('click', convertTabEvent('team'));
};

export default triggerTapEvent;
