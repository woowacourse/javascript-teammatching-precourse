# 📃 **구현할 기능 목록**

# [✅] 탭 메뉴

- 크루 관리, 팀 매칭 관리 탭이 존재한다
- 다른 탭으로 이동했다 돌아와도 기존 탭의 상태가 유지되어야 한다.
- localStorage를 이용하여, 새로고침하더라도 가장 최근에 작업한 정보들을 불러올 수 있도록 한다.
- `크루 관리` 버튼의 메뉴 id는 `crew-tab`이다.
- `팀 관리` 버튼의 메뉴 id는 `team-tab`이다.

# 크루 관리

## [✅] 크루 관리 탭 초기

- 제공하는 마크업을 활용하여 크루 관리 탭을 출력한다
- 프론트엔드 코스 선택 radio input의 id는 `frontend-course`이다.
- 백엔드 코스 선택 radio input의 id는 `backend-course`이다.

## [✅] ${코스} 크루 관리

- 프로트엔드/백엔드 radio를 누르면 관련 크루 관리 창이 나타난다
- 크루 목록을 출력한다. 크루 목록을 보여주기 위한 table의 id는 `crew-table`이다.
- 크루 이름을 입력하기 위한 input의 id는`crew-name-input`이다.
- 크루 추가를 위한 확인 버튼의 id는 `add-crew-buttton`이다.
- 크루 삭제를 위한 삭제 버튼의 class는 `delete-crew-buttton`이다.

👉 크루가 있는 경우

- 크루 table의 첫번째 열에는 index를 넣어 순서를 표시한다. index는 '1'부터 시작한다.
- 크루 table에 크루의 이름과 삭제 버튼을 출력한다

👉 크루가 없는 경우(0명인 경우)

- 아무것도 출력하지 않는다

## [ ] 크루 추가

- 코스별로 크루를 추가할 수 있다.
  - 동일한 이름의 크루는 추가할 수 없다.
  - 크루 이름은 최대 5글자까지 가능하다.
  - 크루 이름은 최소 1글자여야 한다.
- 크루 이름을 입력한 후 input 값이 비도록 한다.
- 예외 발생 상황은 `alert`메서드를 이용하여 알려준다

## [ ] 크루 삭제

- 코스별로 크루를 삭제할 수 있다.
  - 삭제할 때는 [confirm](https://developer.mozilla.org/ko/docs/Web/API/Window/confirm)을 사용하여, 사용자가 한번 더 확인할 수 있게 한다.

# 팀 매칭

## [ ] 팀 매칭 탭 초기

- 제공하는 마크업을 활용하여 팀 매칭 탭을 출력한다
- 코스를 선택하는 select의 id는 `course-select`이다.
- 미션을 선택하는 select의 id는 `mission-select`이다.
- 미션에 해당하는 팀을 관리하기 위한 확인 버튼의 id는 `show-team-matcher-button`이다.

## [ ] ${코스} ${미션}의 팀 매칭 화면

- 팀 매칭을 위한 인원 입력 요소의 id는 `team-member-count-input`이다.
- 팀 매칭을 위한 버튼의 id는 `match-team-button`이다.
- 팀 매칭을 위한 select option에 아래 데이터를 반드시 예시와 같이 괄호안에 있는 값을 option의 value로 추가해야 한다.

```
# 코스
- 프론트엔드(frontend)
- 백엔드(backend)

ex) <option value="frontend">프론트엔드</option>

# 미션
- 숫자야구게임(baseball)
- 자동차경주(racingcar)
- 로또(lotto)
- 장바구니(shopping-cart)
- 결제(payments)
- 지하철노선도(subway)
- 성능개선(performance)
- 배포(deploy)

ex) <option value="baseball">숫자야구게임</option>
```

## [ ] 팀 매칭

- 코스별' '미션'마다 '무작위로' 팀을 매칭할 수 있다.
  - 예를 들어 프론트엔드의 숫자 야구 게임 미션은 프론트엔드 크루들로만 무작위로 팀이 매칭되고, 백엔드의 숫자 야구 게임 미션은 백엔드 크루들로만 무작위로 팀이 매칭된다.
  - 팀을 랜덤하게 매칭하는 기능은 `[MissionUtils` 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.shuffle`을 사용해 구현한다.
- 팀 매칭 시 `1팀당 인원 수`에 입력한 값 보다 더 적은 수의 크루들로 구성된 팀이 없어야 한다. 남은 인원은 앞 팀부터 순서대로 배정한다.
  - 예를 들어, 크루가 11명일 때 `1팀당 인원 수`로 3명을 입력 하면, **4 4 3**으로 팀이 구성되어야 한다.

## [ ] 매칭된 팀 조회

- 팀 매칭 결과는 프로그램 실행 결과 예시와 같이 쉼표로 구분한다.
- 팀 매칭 결과를 보여주기 위한 ul의 id는 `team-match-result`이다.
- 팀 재매칭을 위한 버튼의 id는 `rematch-team-button`이다.
