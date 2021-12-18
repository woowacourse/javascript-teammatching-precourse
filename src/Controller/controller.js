import crewPage from "../components/crew-page.js";
import Crew from "../Model/crew.js";
import { getStorage, updateStorage } from "../utils/storage.js";
import * as validator from "./validate.js";

export default class Controller{

    addCrew(input){
        if(validator.checkOverFive(input)){
            alert('입력값이 5를 초과했습니다.');
        }else {     
            const crew = new Crew(input,'front'); //TODO: change by received front or back
        
            const matcher = getStorage();
            matcher.crews.push(crew);
            updateStorage(matcher);

            //TODO: change display
        }
    }
}