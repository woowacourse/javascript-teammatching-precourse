export const $ = (selector) => document.querySelector(selector);

export const $All = (selector) => document.querySelectorAll(selector);

export const siblings = ($) => [...$.parentElement.children].filter((element) => element != $);
