import { teamMatching } from './index.js';

export const duplicatedCrewException = name => {
  if (isDuplicatedCrew(name)) {
    alert('중복된 이름의 크루가 존재합니다.');
  }

  return isDuplicatedCrew(name);
};

const isDuplicatedCrew = name => {
  const courses = ['frontend', 'backend'];
  let isDuplicated = false;

  courses.forEach(course => {
    teamMatching.crews[course].forEach(crew => {
      if (crew === name) {
        isDuplicated = true;
      }
    });
  });

  return isDuplicated;
};

export const noInputException = input => {
  if (input.length === 0) {
    alert('비어있는 항목이 존재합니다.');
  }

  return input.length === 0;
};

export const outRangeName = name => {
  if (name.length > 5) {
    alert('크루의 이름은 5자를 초과할 수 없습니다.');
  }

  return name.length > 5;
};
