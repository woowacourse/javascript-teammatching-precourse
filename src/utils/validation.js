export const isValidCrewName = (crewName, currentCrews) => {
  console.log(crewName, currentCrews);

  if (crewName.length > 5 || crewName.length === 0) {
    window.alert(`"${crewName}"은 잘못된 입력입니다. 1~5글자를 입력해주세요.`);
    return false;
  }

  if (currentCrews.includes(crewName)) {
    window.alert(
      `"${crewName}"은 잘못된 입력입니다. 중복하지 않는 이름을 입력해주세요`
    );
    return false;
  }

  return true;
};
