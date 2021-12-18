const match = (crews, minCount) => {
  const newCrewArr = window.MissionUtils.Random.shuffle(crews);
  const newCrews = [];

  for (let i = 0; i < newCrewArr.length; i += minCount) {
    const tmpCrew = [];
    for (let j = i; j < i + minCount; j++) {
      tmpCrew.push(newCrewArr[j]);
    }
    newCrews.push(tmpCrew.join("/"));
  }

  return newCrews;
};

const findCrewNameByIndex = index => {
  const crews = JSON.parse(localStorage.getItem("crews"));
  let name = "";

  if (crews) {
    const crewArr = crews.split(",");
    name = crewArr[index].split("/")[1];
  }

  return name;
};

const convertIndexToName = teams => {
  const teamsByName = [];

  for (let i = 0; i < teams.length; i++) {
    const membersIndex = teams[i].split("/");
    const members = [];
    for (let j = 0; j < membersIndex.length; j++) {
      members.push(findCrewNameByIndex(parseInt(membersIndex[j], 10)));
    }
    teamsByName.push(members.join("/"));
  }

  return teamsByName.join(",");
};

const matchTeam = (course, mission, minCount) => {
  const crews = JSON.parse(localStorage.getItem("crews"));
  const crewsIndex = [];

  if (crews) {
    const crewArr = crews.split(",");
    for (let i = 0; i < crewArr.length; i++) {
      const info = crewArr[i].split("/");
      if (info[0] === course) {
        crewsIndex.push(i);
      }
    }
  }

  const team = convertIndexToName(match(crewsIndex, minCount));

  localStorage.setItem(`${course}-${mission}`, JSON.stringify(team));
};

export { matchTeam };
