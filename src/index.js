import App from './view/app.js';

window.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const view = new App(app);
});
