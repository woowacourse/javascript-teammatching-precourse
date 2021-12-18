export function $(id) {
  return document.getElementById(id);
}

export function createSection() {
  return document.createElement('section');
}

export function createHeader(level, textContent) {
  const header = document.createElement(level);
  header.textContent = textContent;

  return header;
}

export function createDiv() {
  return document.createElement('div');
}
