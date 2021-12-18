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

export const noCrewException = () => {
  if (
    teamMatching.crews.frontend.length === 0 &&
    teamMatching.crews.backend.length === 0
  ) {
    alert('팀을 매칭할 크루가 한명도 없습니다.');
  }

  return (
    teamMatching.crews.frontend.length === 0 &&
    teamMatching.crews.backend.length === 0
  );
};

export const littleMemberCountException = count => {
  if (count <= 1) {
    alert('팀원이 한명이하인 팀을 구성할 수 없습니다.');
  }

  return count <= 1;
};

export const outRangeMemberCountException = count => {
  if (count > getTotalCrewCount() / 2) {
    alert('1팀당 인원수가 너무 많습니다.');
  }

  return count > getTotalCrewCount() / 2;
};

const getTotalCrewCount = () => {
  let totalCount = 0;
  const courseSelector = document.getElementById('course-select');
  const selectedCourse =
    courseSelector.options[courseSelector.selectedIndex].value;

  totalCount += teamMatching.crews[selectedCourse].length;

  return totalCount;
};

export const noIntegerException = count => {
  if (!Number.isInteger(count)) {
    alert('정수만 입력될 수 있습니다.');
  }

  return !Number.isInteger(count);
};
