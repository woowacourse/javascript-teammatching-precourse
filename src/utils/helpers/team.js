const generateCrewArrayAndMap = crew => {
  const crewMap = new Map();
  const crewArray = Array.from(Array(crew.length).keys());
  for (let i = 0; i < crew.length; i += 1) {
    crewMap.set(i, crew[i]);
  }

  return { crewMap, crewArray };
};

const convertIndexToName = (teamList, crewMap) =>
  teamList.map(list => list.map(index => crewMap.get(index)));

export const matchRandomTeam = (crew, headCount) => {
  const { crewMap, crewArray } = generateCrewArrayAndMap(crew);
  const shuffledCrew = MissionUtils.Random.shuffle(crewArray);
  const teamCount = Math.floor(crew.length / headCount);
  const teamList = [];

  for (let i = 0; i < teamCount; i += 1) {
    teamList[i] = shuffledCrew.splice(0, headCount);
  }

  let index = 0;
  while (shuffledCrew.length > 0) {
    teamList[index].push(shuffledCrew.pop());
    index += 1;
    if (index === teamCount) index = 0;
  }
  return convertIndexToName(teamList, crewMap);
};
