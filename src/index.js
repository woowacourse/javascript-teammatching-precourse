import TeamController from './controller/controller.js';
import TeamView from './view/view.js';
import TeamModel from './model/model.js';
import { templates } from './view/templates.js';
import { dataObj } from './model/dataModel.js';

window.addEventListener('DOMContentLoaded', () => {
  const model = new TeamModel(dataObj);
  const view = new TeamView(model, templates);
  const controller = new TeamController(model, view);
  controller.app();
});
