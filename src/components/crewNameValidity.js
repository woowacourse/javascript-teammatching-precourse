import { frontEndCrew, backEndCrew } from '../index.js';

function lengthValidity(name) {
  if (name.length < 1) {
    return alert('1글자 이상 입력해주세요');
  }
  else if (name.length > 5) {
    return alert('크루의 이름은 5자까지 가능합니다.');
  }
  return true;
}
function duplicationValidity(mode, name) {
  const crew = (mode === "프론트엔드") ? frontEndCrew : backEndCrew;
  for (let i = 0; i < crew.length; i++){
    if (crew[i] === name) {
      return alert('이미 존재하는 크루 이름입니다.');
    }
  }
  return true;
}
export default function CrewNameValidity(mode, name) {
  if (!lengthValidity(name)) {
    return false;
  }
  if (!duplicationValidity(mode, name)) {
    return false;
  }
  return true;
}