import { HEADER_ID, CREW_TAB, TEAM_TAB } from "./constant.js";

export const Header = () => {
    return `
    <header>
    <h1>우테코 크루와 팀 매칭 관리 보드</h1>
    <nav>
        <ul>
            <li>
                <button id = ${HEADER_ID.CREW_TAB}>크루 관리</button>
            </li>
            <li>
                <button id = ${HEADER_ID.TEAM_TAB}>팀 매칭 관리</button>
            </li>
        </ul>
    </nav>
    </header>
    `;
};

export const CrewFirstView = () => {
    return `
        <main id = 'main-container'>
        <section>
        <h3>크루를 관리할 코스를 선택해주세요</h3>
        <div>
            <input type="radio" name="course" value="frontend" id = ${CREW_TAB.FRONT_COURSE} />
            <label for="frontend">프론트엔드</label>
            <input type="radio" name="course" value="backend" id = ${CREW_TAB.BACK_COURSE} />
            <label for="backend">백엔드</label>
        </div>
        </section>
        </main>
    `;
};

export const CrewSecnodView = (section) => {
    return `
        <section>
        <h3>${section} 크루 관리</h3>
        <form>
            <label>크루 이름</label>
            <input type="text" id=${CREW_TAB.CREW_INPUT} />
            <button id = ${CREW_TAB.CREW_ADD_BTN}>확인</button>
        </form>
        </section>
        <section>
        <h3>${section} 크루 목록</h3>
        <table id=${CREW_TAB.CREW_TABLE} border="1">
            <thead>
            <tr>
                <th></th>
                <th>크루</th>
                <th>관리</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            </tr>
            </tbody>
        </table>
        </section>
    
    `;
};

export const TeamFirstView = () => {
    return `
    <main id = 'main-container'>
    <section>
    <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
    <form>
        <select id = ${TEAM_TAB.COURSE_SELECT} >
            <option>프론트엔드</option>
            <option>백엔드</option>
        </select>
        <select id = ${TEAM_TAB.MISSION_SELECT}>
            <option value = 'baseball'>숫자야구게임</option>
            <option value = 'racingcar'>자동차경주</option>
            <option value = 'lotto'>로또</option>
            <option value = 'shopping'>장바구니</option>
            <option value = 'payments'>결제</option>
            <option value = 'subway'>지하철노선도</option>
            <option value = 'performance'>성능개선</option>
            <option value = 'deploy'>배포</option>
        </select>
        <button id = ${TEAM_TAB.SHOW_TEAM_BTN}>확인</button>
    </form>
    </section>
    </main>
    
    
    `;
};

export const TeamBeforeMatchingView = (team, mission) => {
    return `
    <section>
    <h3>${team} ${mission} 미션의 팀 매칭</h3>
    <div>
        <div>
        <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
        <form>
            <label>1팀당 인원 수</label>
            <input type="number" id=${TEAM_TAB.TEAM_INPUT} />
            <button id=${TEAM_TAB.MATCH_BTN}>팀 매칭</button>
        </form>
        </div>
        <h4>크루 목록</h4>
        <ul id='crew-list'>
        </ul>
    </div>
    </section>
    `;
};

export const TeamAfterMatchingView = (team, mission) => {
    return `
    <section>
    <h3>${team} ${mission} 조회</h3>
    <p>팀이 매칭되었습니다.</p>
    <ul id=${TEAM_TAB.RESULT}>

    </ul>
    <p>
        팀을 재매칭 하시겠습니까?
        <button id=${TEAM_TAB.REMATCH_BTN}>재매칭</button>
    </p>
    </section>
    
    
    `;
};
