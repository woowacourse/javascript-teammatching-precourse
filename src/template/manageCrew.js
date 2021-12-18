function manageCrew(value) {
    const main = document.querySelector("main");
    const selectCourse = document.createElement("section");

    selectCourse.innerHTML = `
          <h3>${value} 크루 목록</h3>
          <table border="1">
            <thead>
              <tr>
                <th></th>
                <th>크루</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>준</td>
                <td>
                  <button>삭제</button>
                </td>
              </tr>
            </tbody>
          </table>`

    if(document.querySelectorAll("section").length === 1) {
        main.appendChild(selectCourse);
    }
    else {
        document.querySelectorAll("section")[1].innerHTML = selectCourse.innerHTML;
    }
}

export default manageCrew;
