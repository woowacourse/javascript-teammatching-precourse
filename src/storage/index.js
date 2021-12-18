import getItem from './utils/getItem.js';
import setItem from './utils/setItem.js';

export const getCourseInformation = (key) => {
	return getItem(key) || { crews: [] };
};

export const setCourseInformation = (key, object) => {
	setItem(key, object);
};
