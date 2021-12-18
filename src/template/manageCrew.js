import Crew from "../domain/Crew/Crew.js";

const crew = new Crew();

function manageCrew(value) {
    const main = document.querySelector("main");
    const selectCourse = document.createElement("section");

    selectCourse.innerHTML = `
          <h3>${value} 크루 목록</h3>
          <table id="crew-table" border="1">
            <thead>
              <tr>
                <th></th>
                <th>크루</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>`

    if(document.querySelectorAll("section").length === 1) {
        main.appendChild(selectCourse);
    }
    else {
        document.querySelectorAll("section")[1].innerHTML = selectCourse.innerHTML;
    }
}

function deleteCrew(index) {
}

function displayCrewList() {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    crew.getCrewList().map((item) => {
        tbody.innerHTML += `
            <tr>
                <td>${item.index}</td>
                <td>${item.name}</td>
                <td>
                    <button onclick="deleteCrew(${item.index})">삭제</button>
                </td>
            </tr>`
    });
}


export default manageCrew;
