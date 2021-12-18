<p align="middle" >
  <img width="200px;" src="./images/laptop_emoji.png"/>
</p>
<h1 align="middle">우아한테크코스 크루 관리 & 팀 매칭</h1>

## ✔️ 프로젝트 도입

마지막 코딩 테스트를 진행하니 감회가 새롭다. 이번 미션은 크루 관리 & 팀매칭 시스템을 아래의 요구사항에 맞춰 만드는 미션이다. 코딩컨벤션은 저번 미션과 마찬가지로 <NHN FE 개발랩>의 코딩컨벤션을 선택하여 따랐다. (ESLint 사용 예정) 또한 moudle 사용 건 때문에 별도로 https server를 설치하였다. 실행 시에는 `npm start` 를 하여 실행하면 된다. 하던대로, 긴장하지 않고. 설계부터 찬찬히 진행해 볼 예정이다. <br/>

<br/>

## ✔️ 기능 설계 (ire4564)

처음에는 필요한 파일들과, 요구사항을 천천히 읽으며 파악하는 것을 우선으로 하였다. 각 페이지에 맞추어 필요한 요구사항들은 다음과 같을 것이라고 생각하였다. 생각하는 과정을 일부러 더 보여주고 싶어서 과정이 세분화 되어지도록 보여줄 수 있다. 기능 목록만 보고 싶을 경우, 아래의 기능 목록을 바로 참고하면 된다.<br/>



> 크루관리 TAB

각 탭에서 이뤄지는 시나리오의 흐름을 정리해 보았다.

- 크루 관리 버튼을 누른다. 
- 관리 코스 선택 창이 보여진다.
- 관리할 코스를 선택한다.
- 크루 관리 입력 창이 보여진다.
- 크루 이름을 입력하고, 확인 버튼을 누른다.
- 크루 이름이 목록에 추가되는 것을 보여준다.
- 삭제 버튼을 누르면 크루 이름이 테이블에서 삭제된다.



> 팀 매칭 관리 TAB

* 팀 관리 버튼을 누른다.
* 팀 매칭을 관리할 코스, 미션을 선택하는 창이 보여진다.
* 각 코스와 미션을 선택하고 확인 버튼을 누른다.
* 팀 매칭 인원 입력창과, 팀원의 목록이 보여진다.
* 입력 창에 인원 수를 입력한다. 
* 팀 매칭 버튼을 누른다.
* 팀 매칭 후 조회 목록과, 재매칭 화면이 보여진다.
* 재매칭을 누르면 인원 수 입력 창과 목록이 다시 보여진다.
* 다시 입력하면 같은 동작을 반복한다.



<br/>이와 같은 동작을들 나누어 생각해보면 다음과 같이 세부적으로 나누어, 추후에 다음과 같은 동작을 하는 함수로 바꾸어 볼 수 있겠다.<br/>



> 크루관리 TAB

- 크루 관리 버튼을 누른다. - `Button Listener 동작 추가`
- 관리 코스 선택 창이 보여진다. - `DOM 내에서 선택 창 보여주기(radio button)`
- 관리할 코스를 선택한다. - `radio 버튼으로 선택할 경우, eventListener 추가`
- 크루 관리 입력 창이 보여진다. -`필요한 text, input, table, button 보여주기`
- 크루 이름을 입력하고, 확인 버튼을 누른다. - `확인 button event Listener 추가`
- 크루 이름이 목록에 추가되는 것을 보여준다. - `table에 추가(DOM 수정) 및 localStorage 갱신`
- 삭제 버튼을 누르면 크루 이름이 테이블에서 삭제된다. - `삭제 button eventListener 추가, DOM 수정`



> 팀 매칭 관리 TAB

* 팀 관리 버튼을 누른다.  - `Button Listener 동작 추가`
* 팀 매칭을 관리할 코스, 미션을 선택하는 창이 보여진다. - `DOM 내에서 선택 창 보여주기(select, button)`
* 각 코스와 미션을 선택하고 확인 버튼을 누른다. - `확인 버튼 eventListener 추가`
* 팀 매칭 인원 입력창과, 팀원의 목록이 보여진다. - `text, (number)input, button, list 추가`
* 입력 창에 인원 수를 입력한다.  - `input value 가져오는 버튼 Listener 추가`
* 팀 매칭 버튼을 누른다. - `버튼 리스너 동작 `
* 팀 매칭 후 조회 목록과, 재매칭 화면이 보여진다. - `DOM display block`
* 재매칭을 누르면 인원 수 입력 창과 목록이 다시 보여진다. - `DOM 수정 및 팀 배치 로직 구현`
* 다시 입력하면 같은 동작을 반복한다. - `재시작 버튼에 대한 eventListener (원하는 구역 block, none )`



<br/>

이와 같은 기능들을 나누려면 먼저 view를 만든 다음, 각각의 view를 제어할 수 있는 함수들을 따로 controller로 빼도록 한다. 기준은 DOM 제어와, LocalStorage 갱신, 각각의 탭에 대한 비즈니스 로직 처리 세 부분으로 나누었다.

<br/>

<b>view</b>

[initDOM.js] : crew와 team에 필요한 요소들을 DOM에 Setting 한다.

- [x] 초기 시작 화면 진입 시 Text, Button을 보여준다. - `initDOM`
- [x] crew와 team 탭에 대한 DOM 요소들을 Setting 한다. 



[crewDOM.js] : crew 관리에서 일어나는 DOM 제어를 관리한다.

- [x] 관리 코스 선택 창을 보여준다. - `selectCourseDOM`
- [x] 크루 관리 입력 창 및 테이블을 보여준다. - `crewManageDOM`
- [x] 크루 목록 테이블 데이터를 추가한다. -`addCrewDOM`
- [ ] 크루 목록 테이블 데이터를 삭제한다. - `deleteCrewDOM`
- [x] crew에서 필요한 DOM을 초기화한다. - `initCrewDOM`



[teamDOM.js] : team 관리에서 일어나는 DOM 제어를 관리한다.

- [x] 코스, 미션 선택 창과 버튼을 보여준다. - `selectMissionDOM`
- [x] 팀 매칭 section을 보여준다. - `teamMatchingDOM`
- [x] 팀 조회 결과 section을 보여준다.  - `teamResultDOM`
- [x] 팀 조회 결과 section을 숨기고, 매칭 section을 보여준다. (재시작) - `restartDOM`
- [x] 팀 매칭 목록에 대한 DOM 재배치를 한다. (매칭 결과 보여주기) - `teamListDOM`
- [x] team에서 필요한 DOM을 초기화한다. - `initTeamDOM`



<br/>

<b>constants</b>

[constants.js] : 각 프로그램에서 필요한 상수들을 선언하여 사용한다.

- [x] 각 button과 input의 id를 통한 객체 setting

[doms.js] : 각 프로그램에서 필요한 dom을 나누어 사용한다.



<br/>

<b>controller</b>

[crewManage.js] : crew 관리에서 일어나는 로직에 대한 함수를 관리한다.

- [ ] radio 버튼을 선택했을 때 eventListener, DOM 출력 (크루관리) - `selectCourseRadio`
- [ ] 크루 관리 확인 버튼의 eventListener, 테이블 데이터 추가. (및 input 초기화) - `addCrewData`
- [ ] 크루 목록 삭제 버튼의 eventListener, 테이블 데이터 삭제. - `deleteCrewData`
  (삭제 시 confirm 이용하여 안내 창 넣어주기)



[teamManage.js] : team 관리에서 일어나는 로직에 대한 함수를 관리한다.

- [ ] 코스, 미션 선택 후 확인 버튼 eventListener, 팀 조회 창을 출력한다. 
  (해당 <백/프론트> 트랙에 대한 팀 출력)
- [ ] 팀 매칭 버튼 eventListener, input의 값에 의한 team 매칭 로직을 진행한다. -`teamMatching`
- [ ] 매칭 로직 함수, 매칭된 team을 return 하여 DOM에 표시해준다.



[validation.js] : input에 올바른 값이 들어갔는데 조건에 대해 판별한다.

- [ ] 크루 이름 input (x <= 5) - `isNameLength`
- [ ] 공백은 허용하지 않는다. -`isEmpty`
- [ ] 같은 이름이 있을 수 없다. -`isSame`



<br/>

<b>data</b>

[localStorage.js] - localStorage와 관련된 로직에 대한 함수를 관리한다. <b>(프론트, 백 따로 관리 유의)</b>

- [ ] 크루 관리 table 추가 및 삭제 시 localStorage를 갱신한다. - `setCrewLocalStorage`
- [ ] 크루 관리 table을 가져와 데이터를 배열 형태로 return한다. - `getCrewLocalStorage`



</br>

* 설계하는 데 소요 시간 (1.25h)
* 개발하는 데 소요 시간 (3h)

<br/>

## ✔️ Test 결과

## 🎯 기능 요구사항

### 1) 공통

상단에 `탭` 메뉴가 존재하며 각 탭에 따라 적절한 기능을 수행한다.

- `크루 관리` 탭은 크루를 추가하거나 삭제하기 위한 기능을 수행한다.
- `팀 매칭 관리` 탭은 팀 매칭을 하기 위한 기능을 수행한다.
- 다른 탭으로 이동했다 돌아와도 기존 탭의 상태가 유지되어야 한다.
- localStorage를 이용하여, 새로고침하더라도 가장 최근에 작업한 정보들을 불러올 수 있도록 한다.

### 2) 크루 관리 기능 탭

`크루 관리` 탭에서, 다음과 같은 규칙으로 크루를 추가하거나 삭제할 수 있다.

- 코스별로 크루를 추가할 수 있다.
  - 동일한 이름의 크루는 추가할 수 없다.
  - 크루 이름은 최대 5글자까지 가능하다.
- 코스별로 크루를 삭제할 수 있다.
  - 삭제할 때는 [confirm](https://developer.mozilla.org/ko/docs/Web/API/Window/confirm)을 사용하여, 사용자가 한번 더 확인할 수 있게 한다.
- 크루 table의 첫번째 열에는 index를 넣어 순서를 표시한다. index는 '1'부터 시작한다.

### 3) 팀 매칭 관리 기능

`팀 매칭 관리` 탭에서, 다음과 같은 규칙으로 팀을 매칭할 수 있다.

- '코스별' '미션'마다 '무작위로' 팀을 매칭할 수 있다.
  - 예를 들어 프론트엔드의 숫자 야구 게임 미션은 프론트엔드 크루들로만 무작위로 팀이 매칭되고, 백엔드의 숫자 야구 게임 미션은 백엔드 크루들로만 무작위로 팀이 매칭된다.
- 팀 매칭 시 `1팀당 인원 수` 에 입력한 값 보다 더 적은 수의 크루들로 구성된 팀이 없어야 한다. 남은 인원은 앞 팀부터 순서대로 배정한다.
  - 예를 들어, 크루가 11명일 때 `1팀당 인원 수`로 3명을 입력 하면, **4 4 3**으로 팀이 구성되어야 한다.
  - 팀은 재매칭할 수 있다.
- 팀 매칭 결과는 프로그램 실행 결과 예시와 같이 쉼표로 구분한다.

---

## 💻 프로그램 실행 결과

### 1) 크루 관리

![image](./images/crew_result.png)

<img width="600" src="./images/crew_result.gif">

### 2) 팀 매칭 관리

![image](./images/team_result.png)

<img width="600" src="./images/team_result.gif">

---

## ✅ 프로그래밍 요구사항

### 마크업
- 제공하는 아래의 마크업을 활용하여 프로그램을 구현한다.

#### 크루 관리

```html
<div id="app">
  <header>
    <h1>우테코 크루와 팀 매칭 관리 보드</h1>
    <nav>
      <ul>
        <li>
          <button>크루 관리</button>
        </li>
        <li>
          <button>팀 매칭 관리</button>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input type="radio" name="course" value="frontend" />
        <label for="frontend">프론트엔드</label>
        <input type="radio" name="course" value="backend" />
        <label for="backend">백엔드</label>
      </div>
    </section>
    <section>
      <h3>프론트엔드 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input type="text" />
        <button>확인</button>
      </form>
    </section>
    <section>
      <h3>프론트엔드 크루 목록</h3>
      <table border="1">
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>준</td>
            <td>
              <button>삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</div>
```

#### 팀 매칭 관리

```html
<div id="app">
  <header>
    <h1>우테코 크루와 팀 매칭 관리 보드</h1>
    <nav>
      <ul>
        <li>
          <button>크루 관리</button>
        </li>
        <li>
          <button>팀 매칭 관리</button>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
      <form>
        <select>
          <option>프론트엔드</option>
          <option>백엔드</option>
        </select>
        <select>
          <option>숫자야구게임</option>
        </select>
        <button>확인</button>
      </form>
    </section>
    <section>
      <h3>프론트엔드 숫자야구게임 미션의 팀 매칭</h3>
      <div>
        <div>
          <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
          <form>
            <label>1팀당 인원 수</label>
            <input type="number" />
            <button>팀 매칭</button>
          </form>
        </div>
        <h4>크루 목록</h4>
        <ul>
          <li>준</li>
          <li>포코</li>
        </ul>
      </div>
    </section>
    <!-- 팀 매칭이 된 경우 -->
    <section>
      <h3>프론트엔드 숫자야구게임 조회</h3>
      <p>팀이 매칭되었습니다.</p>
      <ul>
        <li>준,포코</li>
      </ul>
      <p>
        팀을 재매칭 하시겠습니까?
        <button>재매칭</button>
      </p>
    </section>
  </main>
</div>
```

### DOM 선택자

각 요소에 아래와 같은 선택자를 반드시 지정한다.

- `크루 관리` 버튼의 메뉴 id는 `crew-tab`이다.
- `팀 관리` 버튼의 메뉴 id는 `team-tab`이다.

### 크루 관리 탭

**코스 선택 radio input**

- 프론트엔드 코스 선택 radio input의 id는 `frontend-course`이다.
- 백엔드 코스 선택 radio input의 id는 `backend-course`이다.

**크루 추가/삭제 button**

- 크루 이름을 입력하기 위한 input의 id는`crew-name-input`이다.
- 크루 추가를 위한 확인 버튼의 id는 `add-crew-buttton`이다.
- 크루 삭제를 위한 삭제 버튼의 class는 `delete-crew-buttton`이다.

**크루 table**

- 크루 목록을 보여주기 위한 table의 id는 `crew-table`이다.

### 팀 매칭 관리 탭

- 코스를 선택하는 select의 id는 `course-select`이다.
- 미션을 선택하는 select의 id는 `mission-select`이다.
- 미션에 해당하는 팀을 관리하기 위한 확인 버튼의 id는 `show-team-matcher-button`이다.
- 팀 매칭을 위한 인원 입력 요소의 id는 `team-member-count-input`이다.
- 팀 매칭을 위한 버튼의 id는 `match-team-button`이다.
- 팀 매칭 결과를 보여주기 위한 ul의 id는 `team-match-result`이다.
- 팀 재매칭을 위한 버튼의 id는 `rematch-team-button`이다.


## 📄 데이터

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

---

### 라이브러리

- 팀을 랜덤하게 매칭하는 기능은 [`MissionUtils` 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.shuffle`을 사용해 구현한다.
  - `MissionUtils` 라이브러리 스크립트는 `index.html`에 이미 포함되어 전역 객체에 추가되어 있으므로, 따로 `import` 하지 않아도 구현 코드 어디에서든 사용할 수 있다.

---

### 공통 요구사항

- 스크립트 추가 외에 주어진 `index.html`파일은 수정할 수 없다.
  - 스타일(css)은 채점 요소가 아니다.
- 모든 예외 발생 상황은 `alert`메서드를 이용하여 처리한다.
- 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- **자바스크립트 코드 컨벤션을 지키면서 프로그래밍** 한다. 정답이 없으므로, 다양한 컨벤션을 비교해보며 스스로 더 적절해보이는 컨벤션을 자율적으로 선택한다.
  - [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
  - [Airbnb JavaScript Style Guide()](https://github.com/airbnb/javascript)
  - [JavaScript Standard Style](https://standardjs.com)
  - [NHN FE개발랩](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
- **indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용**한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
- **함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게** 만들어라.
- 변수 선언시 `var` 를 사용하지 않는다. `const` 와 `let` 을 사용한다.
  - [const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)
  - [let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let)
- `import` 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만든다.
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import)
- **함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.**
  - 함수(또는 메소드)가 한 가지 일만 잘 하도록 구현한다.

---

## 📝 과제 진행 요구사항

- 미션은 [javascript-teammatching-precourse](https://github.com/woowacourse/javascript-teammatching-precourse) 저장소를 Fork/Clone해 시작한다.
- **기능을 구현하기 전에 javascript-teammatching-precourse/docs/README.md 파일에 구현할 기능 목록을 정리**해 추가한다.
- **Git의 커밋 단위는 앞 단계에서 README.md 파일에 정리한 기능 목록 단위**로 추가한다.
  - [AngularJS Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153) 참고해 commit log를 남긴다.
- 과제 진행 및 제출 방법은 [프리코스 과제 제출 문서](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 를 참고한다.

## ✉️ 미션 제출 방법

- 미션 구현을 완료한 후 GitHub을 통해 제출해야 한다.
  - GitHub을 활용한 제출 방법은 [프리코스 과제 제출 문서](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 를 참고해 제출한다.
- GitHub에 미션을 제출한 후 [우아한테크코스 지원 플랫폼](https://apply.techcourse.co.kr) 에 접속하여 프리코스 과제를 제출한다.
  - 자세한 방법은 [링크](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse#제출-가이드) 를 참고한다.
  - **Pull Request만 보내고, 지원 플랫폼에서 과제를 제출하지 않으면 최종 제출하지 않은 것으로 처리되니 주의한다.**

### 🚨 과제 제출 전 체크리스트 - 0점 방지를 위한 주의사항

- 요구사항에 명시된 출력값 형식을 지키지 않을 경우 기능 구현을 모두 정상적으로 했더라도 0점으로 처리된다.
- 기능 구현을 완료한 뒤 아래 가이드에 따라 테스트를 실행했을 때 모든 테스트가 성공하는 지 확인한다. **테스트가 실패할 경우 0점으로 처리되므로, 반드시 확인 후 제출한다.**

### ✔️ 테스트 실행 가이드

- 테스트 실행에 필요한 패키지 설치를 위해 `Node.js` 버전 `14` 이상이 필요하다.
- 다음 명령어를 입력해 패키지를 설치한다.

```bash
// {폴더 경로}/javascript-teammatching-precourse/ 에서
npm install
```

- 설치가 완료되었다면, 다음 명령어를 입력해 테스트를 실행한다.

```bash
// {폴더 경로}/javascript-teammatching-precourse/ 에서
npm run test
```

- 아래와 같은 화면이 나오며 모든 테스트가 pass한다면 성공!

![테스트 결과](./images/test_result.png)
