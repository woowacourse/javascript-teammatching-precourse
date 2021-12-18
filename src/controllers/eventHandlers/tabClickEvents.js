export function clickCrewManage(e) {
    e.preventDefault();
    const $crewManageComponent = document.getElementById("crew-manage-component");
    const $teamGeneratecomponent = document.getElementById("team-generate-component");
  
    $crewManageComponent.hidden = false;
    $teamGeneratecomponent.hidden = true;
  }
  
  export function clickTeamGenerate(e) {
    e.preventDefault();
    const $crewManageComponent = document.getElementById("crew-manage-component");
    const $teamGeneratecomponent = document.getElementById("team-generate-component");
  
    $crewManageComponent.hidden = true;
    $teamGeneratecomponent.hidden = false;
  }