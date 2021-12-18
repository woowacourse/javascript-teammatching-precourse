export default function getStandard() {
  const radioButtons = document.getElementsByName('course');
  let standard = '';

  radioButtons.forEach((button) => {
    if (button.checked) {
      standard = button.value;
    }
  });

  return standard;
}
