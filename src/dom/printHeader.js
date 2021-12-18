import makeHeader from './makeHeader.js';

const printHeader = () => {
  const $app = document.getElementById('app');

  $app.appendChild(makeHeader());
};

export default printHeader;
