import { $ } from '../common/dom.js';
import { isValidate } from '../common/valid.js';
import { CURRENT_TAB, EVENT_TYPE_CLICK, DOM, RADIO_TAB } from '../constants/index.js';
import { Content } from '../view/index.js';
import Component from './root/Component.js';

export default class Main extends Component {
  template() {
    return Content({
      component: this.$storage.read(CURRENT_TAB),
      checked: this.$storage.read(RADIO_TAB),
    });
  }

  eventSetter() {
    return [
      // radio
      {
        type: EVENT_TYPE_CLICK,
        callback: ({ target }) => {
          if (!target.matches('[name=course]')) return;
          this.$storage.create(RADIO_TAB, target.id);
        },
      },
      // button : 확인
      {
        type: EVENT_TYPE_CLICK,
        callback: event => {
          if (!event.target.matches(`#${DOM.ADD_CREW_BUTTON}`)) return;
          event.preventDefault();
          const key = this.$storage.read(CURRENT_TAB);
          const items = this.$storage.read(key);
          const item = isValidate($(`#${DOM.CREW_NAME_INPUT}`), items);
          if (item) this.$storage.create(key, [...items, { name: item, index: items.length + 1 }]);
        },
      },
      // button : 삭제
      {
        type: EVENT_TYPE_CLICK,
        callback: event => {
          if (!event.target.matches(`.${DOM.DELETE_CREW_BUTTON}`)) return;
          event.preventDefault();
          console.log('삭제');
        },
      },
      // 여기서 탭이 달라짐
      // button : 확인
      {
        type: EVENT_TYPE_CLICK,
        callback: event => {
          if (!event.target.matches(`#${DOM.SHOW_TEAM_MATCHER_BUTTON}`)) return;
          event.preventDefault();
          console.log('확인');
        },
      },
      // button : 팀 매칭
      {
        type: EVENT_TYPE_CLICK,
        callback: event => {
          if (!event.target.matches(`#${DOM.MATCH_TEAM_BUTTON}`)) return;
          event.preventDefault();
          console.log('확인');
        },
      },
      // button : 재매칭
      {
        type: EVENT_TYPE_CLICK,
        callback: event => {
          if (!event.target.matches(`#${DOM.REMATCH_TEAM_BUTTON}`)) return;
          event.preventDefault();
          console.log('확인');
        },
      },
    ];
  }
}
