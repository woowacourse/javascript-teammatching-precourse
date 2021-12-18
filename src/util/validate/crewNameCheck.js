export function emptyCrewName(crewName) {
  if (!crewName) {
    alert('크루 이름을 입력해주세요');
  }

  return crewName;
}

export function FiveOverCrewName(crewName) {
  let result = true;
  if (crewName.length > 5) {
    alert("크루 이름을 5글자 이하로 적어주세요");
    result = false;
  }
  
  return result;
}