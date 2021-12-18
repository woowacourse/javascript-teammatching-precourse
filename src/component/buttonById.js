const ButtonById = (text, id) => {
  const button = document.createElement('button');
  button.innerText = text;
  button.setAttribute('id', id);
  return button;
};

export default ButtonById;