export default function checkMemberCountIsNum(input, maxMember) {
  const inputNum = Number(input);
  if (input !== String(inputNum) || inputNum < 1 || inputNum.length > 0) {
    alert("1이상의 숫자를 입력해주세요");
    return false;
  }
  if (inputNum > maxMember) {
    alert("최대 인원보다 많은 인원을 배정할 수 없습니다. 다시 입력해주세요.");
    return false;
  }
  return true;
}
