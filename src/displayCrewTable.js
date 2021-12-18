import { $crewTable, $frontendCourseRadioButton } from './htmlConst.js';

export const displayCrewTable = (courseName) => {
  $crewTable.children[1].innerHTML = '';
  if (courseName == $frontendCourseRadioButton.value) $crewTable.parentElement.firstElementChild.innerText = `${$frontendH3}`;
  else $crewTable.parentElement.firstElementChild.innerText = `${$backendH3}`;
  const crewList = JSON.parse(localStorage.getItem(`${courseName}`));
  let tmpHtml = '';
  for (let i = 0; i < crewList.length; i++) {
    const idx = i + 1;
    const tmpName = crewList[i];
    tmpHtml += `<tr><th>${idx}</th><th>${tmpName}</th><th><button class="delete-crew-buttton">삭제</button></th>`;
  }
  $crewTable.children[1].innerHTML += tmpHtml;
};

const $frontendH3 = '프론트엔드 크루 목록';
const $backendH3 = '백엔드 크루 목록';
