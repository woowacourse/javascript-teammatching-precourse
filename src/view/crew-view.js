import { fetchHtmlView } from '../fetch.js';

class CrewView {
    async renderCrewView(crews, app) {
        const view = await fetchHtmlView('crew-manage.html');
        app.innerHTML = view;
        this.renderCrewList(crews);
    }

    renderCrewList(crews) {
        const tableBody = document.querySelector("#crew-table > tbody");
        tableBody.innerHTML = '';
        
        crews.forEach((crew, index) => {
            const newCrew = document.createElement('tr');
            newCrew.innerHTML = this.renderNewCrewInnerHtml(index, crew.name);
            tableBody.appendChild(newCrew);
        });
    }
    
    renderNewCrewInnerHtml(index, name) {
        return `
            <td>${index + 1}</td>
            <td>${name}</td>
            <td>
                <button class="delete-crew-buttton">삭제</button>
            </td>
        `;
    }
}

export default CrewView;