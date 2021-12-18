import View from './View.js';

const TabView = { ...View };

TabView.setup = function (element) {
  this.init(element);
  this.bindClick();
  return this;
};

TabView.bindClick = function () {
  Array.from(this.children('button')).forEach((child) =>
    child.addEventListener('click', (e) => this.onChangeTabView(e.target.innerText)),
  );
};

TabView.onChangeTabView = function (tab) {
  this.emit('@changeTab', { tab });
};

export default TabView;
