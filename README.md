<p align="middle" >
  <img width="200px;" src="./images/laptop_emoji.png"/>
</p>
<h1 align="middle">우아한테크코스 크루 관리 & 팀 매칭</h1>

## 구현할 기능 목록

* #### 1. 상단 탭 메뉴 HTML 작성
  - 크루 관리 탭, 팀 매칭 관리 탭 추가
    + 각 탭을 눌렀을 때에만 탭 이하의 div가 나오도록 작성
    + 팀 매칭을 위한 select option 작성
* #### 2. 크루 관리 기능 탭
  - 코스 별 크루 추가하기
    + 입력 값 비교하기
    + 동일한 이름 X, 최대 5자
    + 입력 값 검증이 끝나면 코스별 크루원 테이블 작성 및 표시
  - 코스 별 크루 삭제하기
    + 삭제 시 사용자에게 alert 메세지로 확인
    + 크루 table의 첫번째 열에는 index를 넣어 표시, 1부터 시작
* #### 3. 팀 매칭 관리 기능
  - 코스, 미션별로 무작위 매칭
    + 팀을 매칭할 코스와 미션을 입력 받기
    + 팀을 매칭할 인원수 입력 받기
    + 입력 받은 인원수 대로 매칭하기
    + 앞에서 부터 팀원을 매칭하여, 앞서 입력받은 수보다 큰 팀이 없도록 구성

## 팀 매칭을 위한 select option 데이터
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

---