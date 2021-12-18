const setFrontCrew = (frontCrew) => {
  localStorage.setItem("frontCrew", JSON.stringify(frontCrew));
};

const getFrontCrew = () => {
  if (localStorage.getItem("frontCrew") === null) {
    setFrontCrew([]);
  }

  return JSON.parse(localStorage.getItem("frontCrew"));
};

const setBackCrew = (backCrew) => {
  localStorage.setItem("backCrew", JSON.stringify(backCrew));
};

const getBackCrew = () => {
  if (localStorage.getItem("backCrew") === null) {
    setBackCrew([]);
  }

  return JSON.parse(localStorage.getItem("backCrew"));
};

export { getFrontCrew, setFrontCrew, setBackCrew, getBackCrew };
