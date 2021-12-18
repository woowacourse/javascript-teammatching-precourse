export function appendDiv(div, childArr) {
  childArr.forEach(child => div.appendChild(child));
}

export function createPeopleTbody(peopleList, tbody) {
  tbody.innerHTML = '';
  peopleList.forEach((product, idx) => {
    const body = document.createElement('tr');
    const first = document.createElement('td');
    first.innerText = product.index;
    const second = document.createElement('td');
    second.innerText = product.name;
    const third = document.createElement('td');
    third.appendChild(createDeleteBtn('삭제'));

    appendDiv(body, [first, second, third]);
    tbody.append(body);
  });
}

export function createDeleteBtn(text) {
  const button = document.createElement('button');
  button.innerText = text;
  button.className = 'delete-crew-button';

  return button;
}
