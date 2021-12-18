import createMainPage from './components/main-page.js';
import Controller from './Controller/controller.js';
import addEvents from './event.js';
import Matcher from './Model/matcher.js';
import { checkStorage, updateStorage, loadStorage } from './utils/storage.js';

const controller = new Controller();
createMainPage();
addEvents(controller);

const matcher = new Matcher();

if(checkStorage()){
    loadStorage(matcher);
}else{
    updateStorage(matcher);
}