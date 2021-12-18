const findTeam = (teams, mission) => {
  return teams.some(teamMission => teamMission.name === mission && teamMission.team.length > 0);
};

export default findTeam;
