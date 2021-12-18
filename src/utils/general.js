export const isObjectEmpty = object => Object.keys(object).length === 0;

export const generateCrewArrayAndMap = crew => {
  const crewMap = new Map();
  const crewArray = Array.from(Array(crew.length).keys());
  for (let i = 0; i < crew.length; i += 1) {
    crewMap.set(i, crew[i]);
  }

  return { crewMap, crewArray };
};
