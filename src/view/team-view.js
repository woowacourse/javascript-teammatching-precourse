class TeamView {

    renderMatchedResult(matchedTeam) {
        let resultList = `<li>${matchedTeam.join(',')}</li>`;

        const result = document.querySelector("#result-section");
        result.innerHTML = `
        <h3>프론트엔드 숫자야구게임 조회</h3>
        <p>팀이 매칭되었습니다.</p>
            <ul id="team-match-result">
                ${resultList}
            </ul>
        <p>
            팀을 재매칭 하시겠습니까?
            <button id="rematch-team-button">재매칭</button>
        </p>`;
    }

    renderNotYetMatched(crewList) {
        const result = document.querySelector("#result-section");

        let resultList = '';
        crewList.forEach(crew => resultList += `<li>${crew.name}</li>`);
        result.innerHTML = `
            <div>
                <div>
                    <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
                    <form>
                        <label>1팀당 인원 수</label>
                        <input type="number" id="team-member-count-input"/>
                        <button id="match-team-button">팀 매칭</button>
                    </form>
                </div>
            <h4>크루 목록</h4>
            <ul>
                ${resultList}
            </ul>
        </div>`;
    }
}

export default TeamView;