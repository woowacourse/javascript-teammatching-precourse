/**
 * DOM 객체를 하나 선택합니다.
 *
 * @param {string} selector
 * @param {HTMLElement | Document} target
 * @returns {Node}
 */
export const $ = (selector, target = document) => target.querySelector(selector);
