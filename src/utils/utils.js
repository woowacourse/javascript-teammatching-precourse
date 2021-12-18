const utils = {
  changeIdToComponent: string => {
    const result = string.split('-');
    result.pop();
    result.push('component');

    return '#' + result.join('-');
  },
};

export default utils;
