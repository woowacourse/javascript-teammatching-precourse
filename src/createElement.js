export function h3ElementCreate(text) {
  const h3 = document.createElement('h3');
  h3.innerText = text;
  return h3;
}
export function pElementCreate(text) {
  const p = document.createElement('p');
  p.innerText = text;
  return p;
}
export function buttonIdElementCreate(condition) {
  const button = document.createElement('button');
  button.id = condition.id;
  button.innerText = condition.text;
  return button;
}
export function buttonClassElementCreate(condition) {
  const button = document.createElement('button');
  button.class = condition.class;
  button.innerText = condition.text;
  return button;
}
export function inputElementCreate(condition) {
  const input = document.createElement('input');
  input.id = condition.id;
  input.type = condition.type;
  return input;
}
export function selectElementCreate(condition) {
  const select = document.createElement('select');
  select.id = condition.id;
  return select;
}
