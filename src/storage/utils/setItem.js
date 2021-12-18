function setItem(key, object) {
	localStorage.setItem(key, JSON.stringify(object));
}

export default setItem;
