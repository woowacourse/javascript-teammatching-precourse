const utils = {
  changeIdToComponent: string => {
    const result = string.split('-');
    result.pop();
    result.push('component');

    return '#' + result.join('-');
  },

  EnglishToKorean: string => {
    const result = {
      frontend: '프론트엔드',
      backend: '백엔드',
      baseball: '숫자야구게임',
      racingcar: '자동차경주',
      lotto: '로또',
      'shopping-cart': '장바구니',
      payments: '결제',
      subway: '지하철노선도',
      performance: '성능개선',
      deploy: '배포',
    };

    return result[string];
  },

  divisionCrew: (array, number) => {
    const len = array.length;
    const cnt = Math.floor(len / number) + (Math.floor(len % number) > 0 ? 1 : 0);
    const result = [];

    for (let i = 0; i < cnt; i++) {
      result.push(array.splice(0, number));
    }

    return result;
  },

  checkLastArray: (array, targetAmount) => {
    const temporaryArray = array[array.length - 1];

    if (temporaryArray.length >= targetAmount) return;

    const lastArray = array.pop();

    array.forEach(element => {
      if (lastArray.length > 0) element.push(lastArray.pop());
    });

    return array;
  },
};

export default utils;
