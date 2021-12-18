export const SELECT_COURSE_TITLE = "크루를 관리할 코스를 선택해주세요";
export const FRONT_END = "frontend";
export const FRONT_END_TEXT = "프론트엔드";
export const BACK_END = "backend";
export const BACK_END_TEXT = "백엔드";

export const FRONT_END_INPUT_TITLE = "프론트엔드 크루 관리";
export const BACK_END_INPUT_TITLE = "백엔드 크루 관리";
export const INPUT_FORM_LABEL = "크루 이름";
export const INPUT_FORM_BUTTON = "확인";

export const TABLE_BORDER = 1;
export const FRONT_END_TABLE_TITLE = "프론트엔드 크루 목록";
export const BACK_END_TABLE_TITLE = "백엔드 크루 목록";
export const TABLE_HEADERS = ["", "크루", "관리"];
export const DELETE_BUTTON = "삭제";

export const NAME_LENGTH = 5;
export const ERROR_MESSAGE = {
  isNull: "이름을 입력해 주세요.",
  isDuplicate: "중복된 이름이 존재합니다.",
  inOverFiveLength: "5글자 이하의 이름을 입력해주세요.",
};

export const PUBLIC_HEADER = `
<header>
<h1>우테코 크루와 팀 매칭 관리 보드</h1>
<nav>
  <ul>
    <li>
      <button id="crew-tab">크루 관리</button>
    </li>
    <li>
      <button id="team-tab">팀 매칭 관리</button>
    </li>
  </ul>
</nav>
</header>
<main>
  <section id="course-section"></section>
  <section id="input-section"></section>
  <section id="list-section"></section>
</main>`;
