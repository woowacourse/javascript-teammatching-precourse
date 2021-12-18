import { CREW } from '..';

function lengthValidity(name) {
  if (name.length < 1) {
    return alert('1글자 이상 입력해주세요');
  }
  else if (name.length > 5) {
    return alert('크루의 이름은 5자까지 가능합니다.');
  }
  return true;
}
function duplicationValidity(name) {
  let flag = true;
  CREW.some((crew) => {
    if (crew === name) {
      flag = false;
      return alert('이미 존재하는 크루 이름입니다.');
    }
  });
  return flag;
}
export function CrewNameValidity(name) {
  if (!lengthValidity(name)) {
    return false;
  }
  if (!duplicationValidity(name)) {
    return false;
  }
  return true;
}