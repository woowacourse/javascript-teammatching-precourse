import View from './View.js';

const MatchingManageView = { ...View };

MatchingManageView.setup = function (element) {
  this.init(element);
  return this;
};
