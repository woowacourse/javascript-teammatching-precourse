export const isExistedName = (name, crew) => crew.indexOf(name) !== -1;

export const removeCrew = (removeName, crew) =>
  crew.filter(name => name !== removeName);
