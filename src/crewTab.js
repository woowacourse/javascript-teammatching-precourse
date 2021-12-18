import {
  FRONT_CREW_MANAGE_TEMPLATE,
  BACK_CREW_MANAGE_TEMPLATE,
} from './template.js';

export function getCourse() {
  const courseList = document.getElementsByName('course');
  const select = document.getElementById('course-select');
  select.addEventListener('change', (e) => {
    courseList.forEach((course) => {
      if (course.checked) {
        checkCourseView(course.value);
      }
    });
  });
}

export function checkCourseView(value) {
  const $crew = document.getElementById('crew-content');
  let front = document.createElement('div');
  front.setAttribute('id', 'front-div');
  let back = document.createElement('div');
  back.setAttribute('id', 'back-div');
  front.innerHTML = FRONT_CREW_MANAGE_TEMPLATE;
  back.innerHTML = BACK_CREW_MANAGE_TEMPLATE;
  if (value === 'frontend') {
    if (document.getElementById('back'))
      document.getElementById('back-div').outerHTML = '';
    if (!document.getElementById('front')) $crew.appendChild(front);
  }
  if (value === 'backend') {
    if (document.getElementById('front'))
      document.getElementById('front-div').outerHTML = '';
    if (!document.getElementById('back')) $crew.appendChild(back);
  }
}
