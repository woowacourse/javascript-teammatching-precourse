const getCourseValue = () => {
  const $course = document.getElementsByName("course");
  let course = "";

  for (let i = 0; i < $course.length; i++) {
    if ($course[i].checked) {
      course = $course[i].value;
      break;
    }
  }

  return course;
};

export { getCourseValue };
