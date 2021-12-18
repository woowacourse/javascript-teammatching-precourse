import TeamMatching from './class/TeamMatching.js';
import { initView } from './dom/init.js';
import { initData } from './storage/init.js';

export const teamMatching = new TeamMatching();

initData();
initView();
