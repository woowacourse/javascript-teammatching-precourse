const matchTeamSameHeadCount = (shuffledCrewIndexList, headCount) => {
  const teamIndexList = [];
  const listLength = shuffledCrewIndexList.length;
  for (let i = 0; i < listLength; i = i + 1) {
    const team = [];
    for (let j = 0; j < headCount; j = j + 1) {
      team.push(shuffledCrewIndexList.shift());
    }
    teamIndexList.push(team);
  }
  return teamIndexList;
};

const matchRemainder = (shuffledCrewIndexList, teamIndexList) => {
  teamIndexList.forEach((team) => {
    if (shuffledCrewIndexList.length > 0) {
      team.push(shuffledCrewIndexList.shift());
    }
  });
};

const convertIndexToName = (crewList, teamIndexList) => {
  const shuffledCrewList = [];
  teamIndexList.forEach((indexTeam) => {
    const nameTeam = [];
    indexTeam.forEach((index) => {
      nameTeam.push(crewList[index]);
    });
    shuffledCrewList.push(nameTeam);
  });

  return shuffledCrewList;
};

export const matchRandomTeam = (crews, headCount) => {
  const indexList = [];
  crews.forEach((_, index) => {
    indexList.push(index);
  });
  // eslint-disable-next-line no-undef
  const shuffledCrewIndexList = MissionUtils.Random.shuffle(indexList);

  const teamIndexList = matchTeamSameHeadCount(shuffledCrewIndexList, headCount);

  if (shuffledCrewIndexList.length !== 0) {
    matchRemainder(shuffledCrewIndexList, teamIndexList);
  }

  return convertIndexToName(crews, teamIndexList);
};
