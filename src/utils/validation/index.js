const isDuplicate = (crewList, crewName) => {
  return crewList.includes(crewName);
};

const isExceedLength = (crewName) => {
  return crewName.length > 5;
};

export const isValidCrewName = (crewList, crewName) => {
  if (isDuplicate(crewList, crewName)) {
    alert('동일한 이름의 크루는 추가할 수 없습니다.');
    return false;
  }

  if (isExceedLength(crewName)) {
    alert('크루 이름은 최대 5글자까지 가능합니다');
    return false;
  }
  return true;
};
