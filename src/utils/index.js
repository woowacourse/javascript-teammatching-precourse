import { OPTION } from '../constants.js';

export const changeMissionNameToKorean = mission => {
  switch (mission) {
    case OPTION.baseball:
      return '숫자야구게임';
    case OPTION.racingcar:
      return '자동차경주';
    case OPTION.lotto:
      return '로또';
    case OPTION.shoppingCart:
      return '장바구니';
    case OPTION.payments:
      return '결제';
    case OPTION.subway:
      return '지하철노선도';
    case OPTION.performance:
      return '성능개선';
    case OPTION.deploy:
      return '배포';
    default:
      break;
  }
  return true;
};

export const suffleCrewMemberTeam = crewMemberIndex =>
  MissionUtils.Random.shuffle([...crewMemberIndex]);
