import { HTML_OF_HEADER, HTML_OF_CREW_RADIO, HTML_OF_CREW_INPUT, HTML_OF_CREW_TABLE} from "./utils/html.js";

export default class CrewView {
    static render() {
        this.showPage();
    }

    // 순서대로 나오도록 수정
    static showPage() {
        document.getElementById('app').innerHTML = HTML_OF_HEADER + HTML_OF_CREW_RADIO + HTML_OF_CREW_INPUT + HTML_OF_CREW_TABLE;
    }

    static showTable() {
        const crew = JSON.parse(localStorage.getItem("Crew"));

        document.getElementById('crew-table').innerHTML = `${HTML_OF_CREW_TABLE}
        ${Object.keys(crew)
          .map(
            (name) => `            
        <tr class="product-manage-item">
        <td>1</td>
        <td>${name}</td>
        <td>
          <button id="delete-crew-buttton">삭제</button>
        </td>
        </tr>`
          )
          .join('')}`;
    }
}