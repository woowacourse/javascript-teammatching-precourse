import { crewManageDOM, addCrewDOM } from "../view/crewDOM.js";
import { setCrewLocalStorage, getCrewLocalStorage } from "../data/localStorage.js";
import { validateInput } from "./validation.js";

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
    
    const input = $addInput.value;
    const index = setCrewLocalStorage(input);
    
    if(validateInput(input)) {
      addCrewDOM(index, $addInput.value);
    }
    else {
      alert("올바르게 입력해주세요!");
    }
    
    $addInput.value = '';
  });
};

export const deleteCrewData = () => {

};

