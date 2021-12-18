const removeInputValue = (id) => {
  const $input = document.getElementById(id);
  $input.value = '';
  return;
};

export default removeInputValue;
