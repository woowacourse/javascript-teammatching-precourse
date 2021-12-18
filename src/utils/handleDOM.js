export const getDom = function getDOMElementNode(query) {
  return document.querySelector(query);
};

export const getChildDom = function getChildDOMWithQuery(parent, query) {
  return parent.querySelector(query);
};
