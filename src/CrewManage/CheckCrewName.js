export default function checkCrewName(name) {
  if (name.length >= 1 && name.length <= 5) return true;
  alert("1글자 이상 5글자 이하의 이름을 적어주세요.");
  return false;
}
