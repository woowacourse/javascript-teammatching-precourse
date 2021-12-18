const duplicateName = name => {
  const crewsStr = JSON.parse(localStorage.getItem("crews"));
  const names = [];

  if (crewsStr) {
    const crews = crewsStr.split(",");
    for (let i = 0; i < crews.length; i++) {
      names.push(crews[i].split("/")[1]);
    }
  }

  return names.includes(name);
};

const checkCrewName = name => {
  let check = true;

  // 조건 1: 이름은 최대 5글자까지만 가능
  if (name.length === 0 || name.length > 5) {
    check = false;
  } else if (duplicateName(name)) {
    // 조건 2: 동일한 이름의 크루는 추가할 수 없음
    check = false;
  }

  return check;
};

export { checkCrewName };
