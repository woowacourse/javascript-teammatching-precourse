export const setCrewLocalStorage = (value) => {
  let info = getCrewLocalStorage("crew");

  info = info !== null ? info + `${value},` : value;
  localStorage.setItem("crew", info);

  return info.split(",").length;
};

export const getCrewLocalStorage = () => localStorage.getItem("crew");