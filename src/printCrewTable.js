import { CREW, FRONTCREW, BACKCREW } from "./constant.js"


export function printCrewTable(){
    const $crewTableTbody = document.querySelector('#crew-table-tbody')        
    if(CREW.COURSE === 'Frontend'){
        $crewTableTbody.innerHTML = ''
        for(let index in CREW.FRONTCREWLIST){
            console.log(index)
            $crewTableTbody.innerHTML += `<tr>
                <td>${Number(index)+1}</td>
                <td>${CREW.FRONTCREWLIST[index].name}</td>
                <td><button class="delete-crew-buttton" data-crewName="${CREW.FRONTCREWLIST[index].name}">삭제</button></td>
            </tr>`
        }
    }
    else if(CREW.COURSE === 'Backend'){
        $crewTableTbody.innerHTML = ''
        for(let index in CREW.BACKCREWLIST){
            console.log(index)
            $crewTableTbody.innerHTML += `<tr>
                <td>${Number(index)+1}</td>
                <td>${CREW.BACKCREWLIST[index].name}</td>
                <td><button class="delete-crew-buttton" data-crewName="${CREW.BACKCREWLIST[index].name}">삭제</button></td>
            </tr>`
        }
    }
}