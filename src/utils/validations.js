const MIN_CREW_NAME = 1;
const MAX_CREW_NAME = 5;

const isValidCrewNameLength = (name) => {
  if (MIN_CREW_NAME > name.length) return alert(`크루 이름은 ${MIN_CREW_NAME}자 이상이어야합니다..`);
  if (MAX_CREW_NAME < name.length) return alert(`크루 이름은 ${MAX_CREW_NAME}자 이하여야합니다.`);
  return true;
};

const isDuplicatedName = (nameToFind, crew) => {
  const result = crew.findIndex((crewName) => crewName === nameToFind);
  if (result !== -1) return alert('이미 존재하는 이름입니다.');
  return true;
};

function isValidCrewName(name, crew) {
  return isValidCrewNameLength(name)
    && isDuplicatedName(name, crew);
}
export {
  isValidCrewName,
};
