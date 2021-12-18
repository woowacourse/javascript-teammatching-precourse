export const APP_TITLE = '우테코 크루와 팀 매칭 관리 보드';
export const APP_MENU = Object.freeze([
  { id: 'crew-tab', text: '크루 관리' },
  { id: 'team-tab', text: '팀 매칭 관리' },
]);
export const TEAM_MISSION = Object.freeze([
  { id: 'baseball', text: '숫자야구게임' },
  { id: 'racingcar', text: '자동차경주' },
  { id: 'lotto', text: '로또' },
  { id: 'shopping-cart', text: '장바구니' },
  { id: 'payments', text: '결제' },
  { id: 'subway', text: '지하철노선도' },
  { id: 'performance', text: '성능개선' },
  { id: 'deploy', text: '배포' },
]);

export const EMPTY = '';
export const BLANK = ' ';

export const ERROR_MESSAGES = Object.freeze({
  notDefined: '을(를) 입력해 주세요.',
  dupError: '은(는) 이미 존재합니다.',
});

export const EVENT_TYPE_CLICK = 'click';

export const CURRENT_TAB = 'current_tab';
export const CREW_TAB = 'crew-tab';
export const TEAM_TAB = 'team-tab';
