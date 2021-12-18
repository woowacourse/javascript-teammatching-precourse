export const setMenuObjectFlag = (CrewTabFlag, TeamTabFlag) => {
  localStorage.setItem('menuObject', JSON.stringify({ CrewTab: CrewTabFlag, TeamTab: TeamTabFlag }));
};

export const getMenuObject = () => JSON.parse(localStorage.getItem('menuObject'));

export const getMenueObjectKey = () => {
  const tmpObj = getMenuObject();
  const tmpObjKey = [];
  for (const key in tmpObj) {
    tmpObjKey.push(key);
  }
  return tmpObjKey;
};
