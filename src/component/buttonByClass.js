const Button = text => {
  const button = document.createElement('button');
  button.innerText = text;
  button.setAttribute('class', 'delete-crew-button');
  return button;
};

export default Button;
