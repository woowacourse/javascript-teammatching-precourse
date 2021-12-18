class TeamManageController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  showScreen(currentTabMenu) {
    if (currentTabMenu === this.model.getCurrentTabMenu()) {
      return;
    }

    this.model.setCurrentTabMenu(currentTabMenu);
    this.view.initScreen();
  }
}

export default TeamManageController;
