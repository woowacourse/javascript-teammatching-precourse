describe("구현 결과가 요구사항과 일치해야 한다.", () => {
  const baseUrl = "../index.html";
  const SELECTOR = {
    CREW_TAB: "#crew-tab",
    TEAM_TAB: "#team-tab",
    FRONTEND_COURSE_INPUT: "#frontend-course",
    CREW_NAME_INPUT: "#crew-name-input",
    ADD_CREW_BUTTON: "#add-crew-button",
    COURSE_SELECT: "#course-select",
    MISSION_SELECT: "#mission-select",
    SHOW_TEAM_MATCHER_BUTTON: "#show-team-matcher-button",
    TEAM_MEMBER_COUNT_INPUT: "#team-member-count-input",
    MATCH_TEAM_BUTTON: "#match-team-button",
  };

  const addSuffleReturnCommand = () => {
    Cypress.Commands.add("shuffleReturn", (returnValues = []) => {
      cy.visit(baseUrl, {
        onBeforeLoad: (window) => {
          window.MissionUtils = {
            Random: {
              shuffle: () => returnValues,
            },
          };
        },
      });
    });
  };

  it("크루의 이름으로 6글자를 입력한 경우 alert이 호출되어야 한다.", () => {
    cy.visit(baseUrl);
    // given
    const alertStub = cy.stub();
    const invalidInput = "포코공원준비";
    cy.on("window:alert", alertStub);

    // when
    cy.get(SELECTOR.CREW_TAB).click();
    cy.get(SELECTOR.FRONTEND_COURSE_INPUT).check("frontend");
    cy.get(SELECTOR.CREW_NAME_INPUT).type(invalidInput);

    // then
    cy.get(SELECTOR.ADD_CREW_BUTTON)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it("프론트엔드 크루 1명을 추가할 수 있어야 한다.", () => {
    cy.visit(baseUrl);
    // given
    const crewName = "포비";

    // when
    cy.get(SELECTOR.CREW_TAB).click();
    cy.get(SELECTOR.FRONTEND_COURSE_INPUT).check("frontend");
    cy.get(SELECTOR.CREW_NAME_INPUT).type(crewName);
    cy.get(SELECTOR.ADD_CREW_BUTTON).click();

    // then
    cy.get("table#crew-table td").contains(crewName).should("exist");
  });

  it("프론트엔드 숫자야구게임 미션에서 팀을 매칭할 수 있어야 한다.", () => {
    addSuffleReturnCommand();

    // given
    const crewNames = ["준", "포코", "공원", "로이드", "워니"];
    cy.shuffleReturn([2, 4, 3, 0, 1]);

    // when
    // 프론트엔드 크루 5명 추가
    cy.get(SELECTOR.CREW_TAB).click();
    cy.get(SELECTOR.FRONTEND_COURSE_INPUT).check("frontend");
    crewNames.forEach((name) => {
      cy.get(SELECTOR.CREW_NAME_INPUT).type(name);
      cy.get(SELECTOR.ADD_CREW_BUTTON).click();
      cy.get(SELECTOR.CREW_NAME_INPUT).clear();
    });

    // 프론트엔드 숫자야구게임 2명씩 팀 매칭
    cy.get(SELECTOR.TEAM_TAB).click();
    cy.get(SELECTOR.COURSE_SELECT).select("frontend");
    cy.get(SELECTOR.MISSION_SELECT).select("baseball");
    cy.get(SELECTOR.SHOW_TEAM_MATCHER_BUTTON).click();
    cy.get(SELECTOR.TEAM_MEMBER_COUNT_INPUT).type("2");
    cy.get(SELECTOR.MATCH_TEAM_BUTTON).click();

    // then
    cy.get("ul#team-match-result li")
      .eq(0)
      .should("have.text", "공원,워니,포코");
    cy.get("ul#team-match-result li").eq(1).should("have.text", "로이드,준");
  });
});
