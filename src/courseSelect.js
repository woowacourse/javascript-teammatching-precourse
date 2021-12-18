import { CREW } from './constant.js';
import { selectCrew } from './printPage.js';


export function courseSelect(e){
    if(e.target.value === 'frontend'){
        CREW.COURSE = '프론트엔드'    
    }
    else if(e.target.value === 'backend'){
        CREW.COURSE = '백엔드'
    }  
  selectCrew();  
}