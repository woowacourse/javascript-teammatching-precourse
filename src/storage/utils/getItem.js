function getItem(key) {
	return JSON.parse(localStorage.getItem(key));
}

export default getItem;
