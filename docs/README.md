### 공통

- [ ] 다른 탭에 이동했다 돌아와도 기존 탭의 상태를 유지한다.
- [ ] localStorage를 이용하여, 새로고침하더라도 가장 최근에 작업한 정보들을 불러올 수 있도록 한다.

<br>

### 크루 관리 탭

- [x] 크루 관리 탭 기본 마크업 작성
- [x] 코스별로 크루를 추가할 수 있다. (FE, BE)
- [x] [예외] 동일한 이름의 크루는 추가할 수 없다.
- [x] [예외] 크루 이름은 최대 5글자까지 가능하다.
- [x] [예외] 크루 이름이 공백인 경우
- [x] 코스 별로 크루를 삭제할 수 있다.
- [x] 삭제 시 confirm을 사용하여 사용자가 한 번 더 확인하게 한다.
- [x] 크루 table의 첫번째 열에는 index를 넣어 순서를 표시한다. index는 '1'부터 시작한다.

<br>

### 팀 매칭 관리 탭

- [x] 코스, 미션에 따라 텍스트와 크루 목록이 바뀌도록 한다.
- [x] [예외] 1팀 당 인원수가 음수인 경우
- [x] [예외] 1팀 당 인원수가 소수인 경우
- [x] [예외] 1팀 당 인원수가 공백 또는 0인 경우
- [x] [예외] 1팀 당 인원수가 숫자값이 아닌 경우
- [ ] 코스 별 & 미션마다 무작위로 팀을 매칭한다.
  ex) FE 숫자야구 게임 미션은 FE 크루끼리
  ex) BE 숫자야구 게임  미션은 BE 크루 끼리
- [ ] 팀 매칭 시 1팀당 인원수에 입력한 값보다 더 적은 수의 크루들로 구성된 팀은 없어야 한다.
  ex) 크루 11명, 1팀당 인원수 3명
  ex) 4 4 3으로 구성.
- [ ] 팀은 재 매칭 가능하다. (팀을 재매칭 하시겠습니까? 재매칭 버튼 클릭시)
- [ ] 팀 매칭 결과는 쉼표로 구분한다.
- [ ] 랜덤 매칭시 MissionUtils.Random.shuffle()을 사용한다.

<br>

### DOM 선택자

- [x] `크루 관리` 버튼의 메뉴 id는 `crew-tab`이다.
- [x] `팀 관리` 버튼의 메뉴 id는 `team-tab`이다.
- [x] 프론트엔드 코스 선택 radio input의 id는 `frontend-course`이다.
- [x] 백엔드 코스 선택 radio input의 id는 `backend-course`이다.
- [x] 크루 이름을 입력하기 위한 input의 id는`crew-name-input`이다.
- [x] 크루 추가를 위한 확인 버튼의 id는 `add-crew-buttton`이다.
- [x] 크루 삭제를 위한 삭제 버튼의 class는 `delete-crew-buttton`이다.
- [x] 크루 목록을 보여주기 위한 table의 id는 `crew-table`이다.
- [x] 코스를 선택하는 select의 id는 `course-select`이다.
- [x] 미션을 선택하는 select의 id는 `mission-select`이다.
- [x] 미션에 해당하는 팀을 관리하기 위한 확인 버튼의 id는 `show-team-matcher-button`이다.
- [x] 팀 매칭을 위한 인원 입력 요소의 id는 `team-member-count-input`이다.
- [x] 팀 매칭을 위한 버튼의 id는 `match-team-button`이다.
- [x] 팀 매칭 결과를 보여주기 위한 ul의 id는 `team-match-result`이다.
- [x] 팀 재매칭을 위한 버튼의 id는 `rematch-team-button`이다.

<br>

### 데이터

- [x] 팀 매칭을 위한 select option에 아래 데이터를 반드시 예시와 같이 괄호안에 있는 값을 option의 value로 추가해야 한다.

  ```html
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

  

