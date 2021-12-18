export const setLocalStorage = crew => {
  localStorage.setItem('crew', JSON.stringify(crew));
};

export const getLocalStorage = () => {
  const crew = JSON.parse(localStorage.getItem('crew'));

  return crew;
};
