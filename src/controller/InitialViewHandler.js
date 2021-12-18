import CrewManageView from "../view/CrewManageView.js";

export const handleClickCrewTab = container => {
  new CrewManageView(container).render();
};

export const handleClickTeamTab = () => {
  // 팀 매칭 View 연결
  console.log(`team tab`);
};
