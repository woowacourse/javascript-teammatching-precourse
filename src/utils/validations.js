const MIN_CREW_NAME = 1;
const MAX_CREW_NAME = 5;

const isValidCrewNameLength = (name) => {
  if (MIN_CREW_NAME > name.length) return alert(`크루 이름은 ${MIN_CREW_NAME}자 이상이어야합니다.`);
  if (MAX_CREW_NAME < name.length) return alert(`크루 이름은 ${MAX_CREW_NAME}자 이하여야합니다.`);
  return true;
};

const isDuplicatedName = (nameToFind, crew) => {
  const result = crew.findIndex((crewName) => crewName === nameToFind);
  if (result !== -1) return alert('이미 존재하는 이름입니다.');
  return true;
};

const isPositiveInteger = (count) => {
  if (!Number.isInteger(count) || count <= 0) return alert('한 팀의 최소 인원 수는 양의 정수여야합니다.');
  return true;
};

const isSmallerThanTotalCrewNumber = (count, crew) => {
  if (count > crew.length) return alert('한 팀의 최소 인원 수는 코스의 전체 크루원 수보다 클 수 없습니다.');
  return true;
};

function isValidCrewName(name, crew) {
  return isValidCrewNameLength(name)
    && isDuplicatedName(name, crew);
}

function isValidTeamMemberCount(count, crew) {
  return isPositiveInteger(count)
    && isSmallerThanTotalCrewNumber(count, crew);
}

export {
  isValidCrewName,
  isValidTeamMemberCount,
};
