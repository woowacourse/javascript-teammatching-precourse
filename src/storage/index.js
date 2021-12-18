import getItem from './utils/getItem.js';
import setItem from './utils/setItem.js';

const KEY_FRONTEND = 'frontend';
const KEY_BACKEND = 'backend';

export const getCourseInformation = (key) => {
	return getItem(key) || { crews: [] };
};

export const setCourseInformation = (key, object) => {
	setItem(key, object);
};

export const getFrontendInformation = () => {
	return getCourseInformation(KEY_FRONTEND);
};

export const setFrontendInforamtion = (object) => {
	setCourseInformation(KEY_FRONTEND, object);
};

export const getBackendInformation = () => {
	return getCourseInformation(KEY_BACKEND);
};

export const setBackendInformation = (object) => {
	setCourseInformation(KEY_BACKEND, object);
};
