import { $, $closest } from '../common/dom.js';
import { getCourse } from '../common/parsed.js';
import { isEmpty, isValidate, numbersValidate } from '../common/valid.js';
import {
  CURRENT_TAB,
  EVENT_TYPE_CLICK,
  DOM,
  SELECTED,
  EVENT_TYPE_CHANGE,
  MISSION,
  HIDDEN,
  TEAMS,
  DISPLAY_MATCHED,
  DISPLAY_NON_MATCHED,
} from '../constants/index.js';
import { Content } from '../view/index.js';
import { division, getManageOptions } from './event.js';
import Component from './root/Component.js';

export default class Main extends Component {
  template() {
    return Content({
      component: this.$storage.read(CURRENT_TAB),
      matched: this.$storage.read(DISPLAY_MATCHED),
      nonMatched: this.$storage.read(DISPLAY_NON_MATCHED),
      checked: this.$storage.read(SELECTED),
      mission: this.$storage.read(MISSION),
      data: this.$storage.read(this.$storage.read(SELECTED)),
      teams: this.$storage.read(TEAMS),
    });
  }

  eventSetter() {
    return [
      // radio
      {
        type: EVENT_TYPE_CLICK,
        callback: ({ target }) => {
          if (!target.matches('[name=course]')) return;
          this.$storage.create(SELECTED, target.id);
        },
      },
      // button : 확인
      {
        type: EVENT_TYPE_CLICK,
        callback: event => {
          if (!event.target.matches(`#${DOM.ADD_CREW_BUTTON}`)) return;
          event.preventDefault();
          const key = this.$storage.read(SELECTED);
          const items = this.$storage.read(key);
          const item = isValidate(
            $(`#${DOM.CREW_NAME_INPUT}`),
            items[this.$storage.read(SELECTED)],
          );
          if (item) this.$storage.create(key, [...items, { name: item, index: items.length + 1 }]);
        },
      },
      // button : 삭제
      /* eslint-disable no-restricted-globals */
      {
        type: EVENT_TYPE_CLICK,
        callback: event => {
          if (!event.target.matches(`.${DOM.DELETE_CREW_BUTTON}`)) return;
          event.preventDefault();
          if (!confirm('삭제하시겠습니까?')) return;
          const key = this.$storage.read(SELECTED);
          const items = this.$storage.read(key);
          const { textContent: index } = $('td:first-child', $closest(event.target, 'tr'));
          const deletedItems = items[this.$storage.read(SELECTED)]
            .filter(item => item.index !== +index)
            .reduce((result, item, idx) => [...result, { index: idx + 1, name: item.name }], []);
          this.$storage.create(key, {
            ...items,
            [this.$storage.read(SELECTED)]: deletedItems,
          });
        },
      },
      // 여기서 탭이 달라짐
      {
        type: EVENT_TYPE_CHANGE,
        callback: ({ target }) => {
          if (target.matches(`#${DOM.COURSE_SELECT}`) || target.matches(`#${DOM.MISSION_SELECT}`)) {
            const [{ value: course }, { value: mission }] = getManageOptions(event.target, [
              `#${DOM.COURSE_SELECT}`,
              `#${DOM.MISSION_SELECT}`,
            ]);

            const courseKey = getCourse(course);
            this.$storage.create(SELECTED, courseKey, false);
            this.$storage.create(MISSION, mission, false);
            this.$storage.create(DISPLAY_MATCHED, HIDDEN, false);
            this.$storage.create(DISPLAY_NON_MATCHED, HIDDEN);
          }
        },
      },
      // button : 확인
      {
        type: EVENT_TYPE_CLICK,
        callback: event => {
          if (!event.target.matches(`#${DOM.SHOW_TEAM_MATCHER_BUTTON}`)) return;
          event.preventDefault();
          const [{ value: course }, { value: mission }] = getManageOptions(event.target, [
            `#${DOM.COURSE_SELECT}`,
            `#${DOM.MISSION_SELECT}`,
          ]);
          const courseKey = getCourse(course);
          this.$storage.create(SELECTED, courseKey, false);
          this.$storage.create(MISSION, mission, false);
          let displayKey = DISPLAY_NON_MATCHED;
          if (!isEmpty(this.$storage.read(TEAMS)[`${courseKey}${mission}`]))
            displayKey = DISPLAY_MATCHED;
          this.$storage.create(displayKey, '');
        },
      },
      // button : 팀 매칭
      {
        type: EVENT_TYPE_CLICK,
        callback: event => {
          if (!event.target.matches(`#${DOM.MATCH_TEAM_BUTTON}`)) return;
          event.preventDefault();
          const { value, placeholder } = $(`#${DOM.TEAM_MEMBER_COUNT_INPUT}`);
          const memberCount = numbersValidate(value, placeholder);
          if (isEmpty(memberCount)) return;
          const key = `${this.$storage.read(SELECTED)}${this.$storage.read(MISSION)}`;
          this.$storage.create(TEAMS, {
            ...this.$storage.read(TEAMS),
            [key]: division(this.$storage.read(this.$storage.read(SELECTED)), memberCount),
          });
          this.$storage.create(DISPLAY_NON_MATCHED, HIDDEN, false);
          this.$storage.create(DISPLAY_MATCHED, '');
        },
      },
      // button : 재매칭
      {
        type: EVENT_TYPE_CLICK,
        callback: event => {
          if (!event.target.matches(`#${DOM.REMATCH_TEAM_BUTTON}`)) return;
          event.preventDefault();
          this.$storage.create(DISPLAY_MATCHED, HIDDEN, false);
          this.$storage.create(DISPLAY_NON_MATCHED, '');
        },
      },
    ];
  }
}
