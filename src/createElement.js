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
  button.setAttribute('type','button');
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
export function labelElemntCreate(condition) {
  const label = document.createElement('label');
  label.setAttribute("for", condition.for);
  label.innerText = condition.text;
  return label;
}
export function selectElementCreate(condition) {
  const select = document.createElement('select');
  select.id = condition.id;
  return select;
}
export function theadElementCreate(text) {
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  const th = document.createElement('th');
  for (let i = 0; i < text.length; i++){
    const tempTh = th.cloneNode(true);
    tempTh.innerText = text[i];
    tr.appendChild(tempTh);
  }
  thead.appendChild(tr);
  return thead;
}