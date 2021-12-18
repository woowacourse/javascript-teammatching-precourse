import TeamMatchingController from './controllers/index.js';
import TeamMatchingModel from './models/index.js';
import TeamMatchingView from './views/index.js';

class App {
  constructor() {
    this.$view = this.initializeView();
    this.$model = this.initializeModel();
    this.$controller = this.initializeController();
  }

  initializeView() {
    return new TeamMatchingView();
  }

  initializeModel() {
    //  로컬 스토리지 데이터 가져오기
    return new TeamMatchingModel();
  }

  initializeController() {
    return new TeamMatchingController(this.$view, this.$model);
  }
}
export default App;
