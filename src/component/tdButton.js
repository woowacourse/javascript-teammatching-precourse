import ButtonByClass from './buttonByClass.js';

const TdButton = (controller, crew, isFront) => {
  const tdButtonClassName = document.createElement('td');
  const button = ButtonByClass('삭제');
  button.addEventListener('click', e => {
    e.preventDefault();
    controller.deleteCrew(crew, isFront);
  });
  tdButtonClassName.appendChild(button);
  return tdButtonClassName;
};

export default TdButton;