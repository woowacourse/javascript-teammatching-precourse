import { crewManageDOM, addCrewDOM } from "../view/crewDOM.js";
import { setCrewLocalStorage, getCrewLocalStorage } from "../data/localStorage.js";

export const initCrewManage = () => {
  selectCourseRadio();
  addCrewData();
};

export const selectCourseRadio = () => {
  const $radios = document.getElementsByName("course");

  $radios.forEach((node) => {
    node.addEventListener('click', e => {
      crewManageDOM();
    })
  })
}

export const addCrewData = () => {
  const $addButton = document.querySelector("#add-crew-buttton");
  const $addInput = document.querySelector("#crew-name-input");

  $addButton.addEventListener('click', e => {
    e.preventDefault();
    
    const index = setCrewLocalStorage($addInput.value);
    addCrewDOM(index, $addInput.value);
    
    $addInput.value = '';
  });
};

export const deleteCrewData = () => {

};

