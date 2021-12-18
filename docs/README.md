## 공통

[ ] 크루 관리 탭은 크루를 추가하거나 삭제하기 위한 기능을 수행한다

[ ] 팀 매칭 관리 탭은 팀 매칭을 하기 위한 기능을 수행한다

[ ] 다른 탭으로 이동했다 돌아와도 기존 탭의 상태가 유지되어야 한다

[ ] localStorage를 이용하여, 새로고침하더라도 가장 최근에 작업한 정보들을 불러올 수 있도록 한다

[x] 프로그램 시작 시 , 타이틀과 tab 버튼들만 보이도록 한다

## 크루 관리 기능 탭

[x] 크루 관리 탭 버튼은 crew-tab id를 가진다

[x] 크루 관리 탭을 클릭하면, 크루를 관리할 코스를 선택하는 element가 렌더링 된다

[x] 코스를 선택할 때에는 radio input를 사용한다

    [x] 프론트 엔드 코스 radio input 의 id 는 frontend-course이다

    [x] 백엔드 코스 radio input의 id 는 backend-course이다

[x] 크루 코스가 선택될 경우 쿠루 이름을 입력할 element가 render 된다

[x] 크루 이름을 입력하는 input의 id 는 crew-name-input 이다

[x] 유저가 크루 이름을 입력한다

[x] 크루 추가를 위한 확인 버튼의 id는 add-crew-button 이다

[x] add-crew-button을 클릭하면 유저가 입력한 값의 유효성을 평가한다

### 크루 이름 예외 사항

    [x] 빈칸을 입력할 경우 alert로 처리한다

    [x] 기존에 localStorage에 존재하는 크루의 이름은 추가할 수 없다

    [x] 크루 이름은 최대 5글자까지만 허용된다

[x] 만약 유저가 입력한 크루 이름이 유효한 값이라면 해당 localStorage에 업데이트 한다

[x] localStorage에 업데이트 된 값을 보여준다

[x] 크루 목록을 보여주기 위한 table의 id는 crew-table 이다

[x] 크루 삭제버튼의 class는 delete-crew-button 이다

[x] 코스별로 크루 관리 삭제버튼을 confirm을 통해서 유저에게 삭제 여부를 확인한다

[x] 만약 confirm에서 유저가 확인을 눌렀을 때에 해당 크루를 삭제한다

[x] 삭제한 내용을 localStorage에 업데이트 한다

[x] 크루 table의 첫번째 열에는 index를 넣어 순서를 표기한다 단, index는 1 부터 시작한다

<hr>

## 팀 매칭 관리 기능

[x] 팀 관리 버튼의 id는 team-tab 이다

[x] 팀 매칭 관리 탭을 클릭하면, 팀매칭을 관리할 코스 미션을 선택하는 element가 render 된다

[x] 코스를 선택하는 select id는 course-select이다

[x] 미션을 선택하는 select id는 mission-select이다

[x] 팀을 관리하기 위한 확인 버튼 id는 show-team-matcher-button이다

[ ] 유저가 코스와 게임을 선택하고 확인버튼을 누르게 되면 해당 팀 매칭 관련 element가 render된다

[ ] 코스별 미션마다 무작위로 팀을 매칭한다

[ ] 무작위로 팀을 선발할 때에는 Random.shuffle을 사용해 구현한다

[ ] 무작위로 팀을 선발할 때에는 같은 코스에 속한 사람들 끼리만 무작위로 팀이 매칭된다

[ ] 1팀당 인원수를 유저에게 입력받는다

[ ] 인원수를 유저에게 입력받는 input요소의 id는 team-number-count-input 이다

[ ] 팀매칭 버튼을 클릭시 유저가 입력한 1팀당 인원수 의 유효성을 평가한다

[ ] 팀매칭 버튼의 id는 match-team-button 이다

### 1팀당 인원수 예외 사항

    [ ] 빈칸을 입력할 경우 alert로 처리한다

    [ ] 숫자가 아닌 값을 입력할 경우 alert로 처리한다

    [ ] 정수가 아닌 값을 입력할 경우 alert로 처리한다

    [ ] 마이너스 값을 입력할 경우 alert로 처리한다

    [ ] 유저가 입력한 값 보다 더 적은 수의 크루들로 구성된 팀이 없어야 한다

[ ] 1팀당 인원수를 입력한 후 팀매칭 버튼을 클릭하면 크루 목록과 input 요소가 사라지고 팀매칭이 된 정보를 알려주는 element와 재매칭 버튼이 render 된다

[ ] 팀 매칭 결과를 보여주기 위한 ul id는 team-match-result 이다

[ ] 팀매칭 결과에서 이름들 간에는 쉼표로 구분한다

[ ] 팀 재매칭을 위한 버튼의 id는 rematch-team-button 이다

<hr>

## 데이터 관련 사항

[ ] 팀 매칭을 위한 select option 아래에 예시와 같이 괄호안에 있는 값을 option의 value로 추가해야 한다

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

[ ] 미션 이름들을 상수화 해서 관리하기

## localStorage관련 설정

### 프론트엔드 크루 localStorage

    이름: frontend
    value 저장 방식 : fronted = [
        {name: '이름',
        index : 1, }
    ]

### 벡엔드 크루 localStorage

    이름 : backend
    value 저장 방식: backend = [
        {name: '이름',
        index: 1,}
    ]
