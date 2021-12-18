import { teamMatching } from '../index.js';

export const saveCrews = () =>
  localStorage.setItem('crews', JSON.stringify(teamMatching.crews));

export const loadCrews = () => {
  const crews = JSON.parse(localStorage.getItem('crews'));

  teamMatching.crews = !crews ? { frontend: [], backend: [] } : crews;
};
