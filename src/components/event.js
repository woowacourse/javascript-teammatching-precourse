import { $, $closest } from '../common/dom.js';

/* eslint-disable no-undef */
const { shuffle } = MissionUtils.Random;

/**
 * dataset으로 엘리먼트를 조회한 데이터를 배열로 반환합니다.
 *
 * @param {*} element
 * @param {*} targets
 * @returns
 */
export const getManageOptions = (element, targets) =>
  targets.reduce((result, target) => [...result, $(target, $closest(element, 'form'))], []);

export const division = (arr, count) => {
  const indexArray = arr.reduce((result, item) => [...result, +item.index], []);
  const nameArray = arr.reduce((result, item) => [...result, item.name], []);
  const array = shuffle(indexArray);
  let totalLen = Math.floor(array.length / count) + (Math.floor(array.length % count) > 0 ? 1 : 0);
  const teams = [];
  while (totalLen > 0) {
    teams.push(array.splice(0, count));
    totalLen -= 1;
  }

  return teams.map(team => team.map(index => nameArray[index - 1]));
};
