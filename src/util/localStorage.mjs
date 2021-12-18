export const setLogetCourseFrontEndOrBackEndcalStorage = status => {
  localStorage.setItem('CourseFrontEndOrBackEnd', status);
};

export const getCourseFrontEndOrBackEnd = () =>
  localStorage.getItem('CourseFrontEndOrBackEnd');

export const setUserLocalStorage = (course, users) => {
  localStorage.setItem(course, users);
};

export const getUserLocalStorage = course => {
  if (course === '프론트엔드') localStorage.getItem('FrontEndUser');
  if (course === '백엔드') localStorage.getItem('BackEndUser');
};
