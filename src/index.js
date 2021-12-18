import { fetchHtmlView } from './fetch.js';



const app = document.querySelector("#app");

fetchHtmlView('tab.html').then(view => app.innerHTML = view);

