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
};

export default utils;
