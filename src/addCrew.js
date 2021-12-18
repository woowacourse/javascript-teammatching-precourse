import { CREW, FRONTCREW, BACKCREW, ERROR } from "./constant.js"
import { printCrewTable } from './printCrewTable.js';

function chceckCrewNameValid($crewNameInputValue){
    if($crewNameInputValue.trim() === ''){
        alert(ERROR.CREW_NAME_EMPTY_ERROR)
        return false
    }
    else if($crewNameInputValue.length > 5){
        alert(ERROR.CREW_NAME_LENGTH_ERROR)
        return false
    }
    else if(CREW.COURSE === 'Frontend' && CREW.FRONTCREWLIST.length >0 && CREW.FRONTCREWLIST.indexOf($crewNameInputValue) === -1){
            alert(ERROR.CREW_NAME_DUPLICATE_ERROR)
            return false
        }            
    else if(CREW.COURSE === 'Backend' && CREW.BACKCREWLIST.length >0 && CREW.BACKCREWLIST.indexOf($crewNameInputValue) === -1){
            alert(ERROR.CREW_NAME_DUPLICATE_ERROR)
            return false
        }     

    return true
}

export function addCrew(){
    console.log(CREW.COURSE)
    let $crewNameInputValue = document.querySelector('#crew-name-input').value

    if(chceckCrewNameValid($crewNameInputValue)){
        if(CREW.COURSE === 'Frontend'){
            $crewNameInputValue = new FRONTCREW($crewNameInputValue)
            CREW.FRONTCREWLIST.push($crewNameInputValue)
            console.log(CREW.FRONTCREWLIST)   
        }
        else if(CREW.COURSE === 'Backend'){
            $crewNameInputValue = new BACKCREW($crewNameInputValue)
            CREW.BACKCREWLIST.push($crewNameInputValue)
            console.log(CREW.BACKCREWLIST)  
        }        
    }

    printCrewTable();
  
 
}
