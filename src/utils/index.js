function getTeam(crew, shuffleIndex, memberCount, start, end, left) {
  const maxIndex = Math.floor(crew.length / memberCount);
  const teamIndex = shuffleIndex.slice(start, end);
  const team = teamIndex.map((idx) => crew[idx]);
  let leftMemberCount = left;
  if (leftMemberCount !== 0) {
    team.push(crew[shuffleIndex[maxIndex * memberCount + left - 1]]);
    leftMemberCount -= 1;
  }
  return { team, leftMemberCount };
}

function matchTeam(crew, memberCount) {
  const result = [];
  const shuffleIndex = MissionUtils.Random.shuffle(crew.map((member, index) => index));
  let left = crew.length % memberCount;
  let index = 0;
  while (index < Math.floor(crew.length / memberCount)) {
    const start = index * memberCount;
    const end = (index + 1) * memberCount;
    const { team, leftMemberCount } = getTeam(crew, shuffleIndex, memberCount, start, end, left);
    left = leftMemberCount;
    result.push(team);
    index += 1;
  }
  return result;
}

function getNameFromValue(data, value) {
  return data.find((item) => item.value === value).name;
}

export {
  matchTeam,
  getNameFromValue,
};
