export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);

export const visibleElement = (elements, isVisible = true) => {
  elements.forEach(($element) => {
    if (isVisible === true) $element.classList.remove('hide');
    else if (isVisible === false) $element.classList.add('hide');
  });
};

export const removeTags = (value) => value.replace(/(<([^>]+)>)/gi, '');
