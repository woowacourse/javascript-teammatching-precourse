import createElement from './createElement.js';

const createDataCell = (data, props) =>
	createElement('td', { ...props, innerText: data });

export default createDataCell;
