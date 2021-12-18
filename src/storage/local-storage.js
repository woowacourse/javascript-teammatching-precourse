export const frontendCrewNameStorage = (userInput) => {
  let newCrew = {};

  newCrew.name = userInput;

  let prevCrewList = JSON.parse(localStorage.getItem('frontEndCrew'));

  if (prevCrewList === null) {
    prevCrewList = [];
  }

  let finalCrewList = prevCrewList.concat(newCrew);

  localStorage.setItem('frontEndCrew', JSON.stringify(finalCrewList));
};

export const backendCrewNameStorage = (userInput) => {
  let newCrew = {};

  newCrew.name = userInput;

  let prevCrewList = JSON.parse(localStorage.getItem('backEndCrew'));

  if (prevCrewList === null) {
    prevCrewList = [];
  }

  let finalCrewList = prevCrewList.concat(newCrew);

  localStorage.setItem('backEndCrew', JSON.stringify(finalCrewList));
};

export const getDataFromStorage = () => {
  const storage = JSON.parse(localStorage.getItem('frontEndCrew'));

  if (storage !== null) {
  }
};
