const OPTIONS = {
  course: ["frontend", "backend"],
  mission: [
    { name: "숫자야구게임", value: "baseball" },
    { name: "자동차경주", value: "racingcar" },
    { name: "로또", value: "lotto" },
    { name: "장바구니", value: "shopping-cart" },
    { name: "결제", value: "payments" },
    { name: "지하철노선도", value: "subway" },
    { name: "성능개선", value: "performance" },
    { name: "배포", value: "deploy" },
  ],
};

const ALERT_MSG = {
  wrongName: "이름을 잘못 입력하셨습니다. 다시 입력해주세요.",
  askDeleteElement: "정말로 삭제하시겠습니까?",
  wrongMemberCount: "인원 수를 잘못 입력하셨습니다. 다시 입력해주세요.",
};

export { OPTIONS, ALERT_MSG };
