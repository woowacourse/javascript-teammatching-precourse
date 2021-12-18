import { CREW, FRONTCREW, BACKCREW } from "./constant.js"
import { printCrewTable } from './printCrewTable.js';


export function addCrew(){
    console.log(CREW.COURSE)
    let $crewNameInputValue = document.querySelector('#crew-name-input').value


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


    printCrewTable();
  
 
}
