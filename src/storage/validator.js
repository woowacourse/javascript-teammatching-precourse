// peopleAdd
function checkNameNull(name) {
  if (!name) {
    alert('크루 이름을 입력해주세요.');
    return;
  }

  return true;
}

function checkNameDuplicate(name, peopleList) {
  peopleList.forEach(person => {
    if (person.name == name) {
      alert('같은 이름의 크루가 등록되어 있습니다.');
      return;
    }
  });

  return true;
}

function checkNameLen(name) {
  if (name.length > 5) {
    alert('5자 이하의 이름을 입력해주세요.');
    return;
  }

  return true;
}

export function checkName(name, peopleList) {
  if (checkNameNull(name) && checkNameDuplicate(name, peopleList) && checkNameLen(name)) {
    return true;
  }

  return false;
}
