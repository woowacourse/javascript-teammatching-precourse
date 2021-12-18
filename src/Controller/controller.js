import Crew from "../Model/crew.js";
import { getStorage, updateStorage } from "../utils/storage.js";
import { displayAddCrew } from "../View/display.js";
import * as validator from "./validate.js";
import * as displayer from "../View/display.js"
export default class Controller{

    addCrew(input){
        if(validator.checkOverFive(input)){
            alert('입력값이 5를 초과했습니다.');
        }else {     
            const crew = new Crew(input,'front'); //TODO: change by received front or back
        
            const matcher = getStorage();
            matcher.crews.push(crew);
            updateStorage(matcher);

            displayer.displayAddCrew();
        }
    }
}