// import { CREW } from './constant.js';
//import { selectCrew } from './printPage.js';
import { FRONTCREW, CREW } from './constant.js';



export function courseSelect(e){
    if(e.target.value === 'frontend'){
        CREW.COURSE = '프론트엔드'    
    }
    else if(e.target.value === 'backend'){
        CREW.COURSE = '백엔드'
    }  
 
  const $crewManageTitle = document.querySelector('#crew-manage-title');
  const $crewListTitle = document.querySelector('#crew-list-title')
  const $crewManage = document.querySelector('#crew-manage')
  const $crewList = document.querySelector('#crew-list')
  $crewManage.classList.remove('hide')
  $crewManage.classList.add('show')
  $crewList.classList.remove('hide')
  $crewList.classList.add('show')
  $crewManageTitle.innerHTML = `${CREW.COURSE} 크루 관리`
  $crewListTitle.innerHTML = `${CREW.COURSE} 크루 목록`

}