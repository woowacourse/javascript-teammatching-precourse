import Controller from "./Controller/Controller.js";
import Model from "./Model/Model.js";
import View from "./View/View.js";

const app = new Controller(new Model(), new View());
