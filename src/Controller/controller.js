import * as validator from "./validate.js";

export default class Controller{
    constructor(){

    }

    addCrew(input){
        if(validator.checkOverFive(input)){
            alert('입력값이 5를 초과했습니다.');
        }
    }
}