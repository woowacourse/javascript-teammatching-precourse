export const setLogetCourseFrontEndOrBackEndcalStorage = status => {
  localStorage.setItem('CourseFrontEndOrBackEnd', status);
};

export const getCourseFrontEndOrBackEnd = () =>
  localStorage.getItem('CourseFrontEndOrBackEnd');

export const setUserLocalStorage = (course, users) => {
  localStorage.setItem(course, users);
};
