# 📝 구현할 기능 목록

1. [x] 메인 template render
2. [x] 크루 관리 클릭시 template render
3. [x] 프론트엔드 radio 클릭시 template render
4. [x] 백엔드 radio 클릭시 template render
5. [x] 크루 이름 validate 확인
   1. [x] 예외1) 동일한 이름의 크루는 추가할 수 없다.
      1. [x] alert 메시지 띄우기
   2. [x] 예외2) 크루 이름은 최대 5글자까지 가능하다.
      1. [x] alert 메시지 띄우기
   3. [x] 예외3) 크루 이름에 빈 값을 설정할 수 없다.
      1. [x] alert 메시지 띄우기
6. [ ] 크루 이름 확인 버튼 클릭시 table에 추가
7. [ ] 크루 삭제 버튼 클릭시 confirm 사용
8. [ ] 팀 매칭 관리 클릭시 template render
9. [ ] select 후 확인 버튼 클릭시 해당하는 template render
10. [ ] 1팀당 인원수 validate 확인
    1. [ ] 예외1) 양의 정수인지 확인한다.
       1. [ ] alert 메시지 띄우기
    2. [ ] 예외2) 빈 값인지 확인한다.
       1. [ ] alert 메시지 띄우기
11. [ ] 팀 매칭 버튼 클릭시 크루 목록에서 Random.shuffle을 사용해 팀원을 매칭한다.
    1. [ ] 예외1) 1팀당 인원 수에 입력한 값보다 적은 수의 크루들로 구성된 팀이 없어야한다.
    2. [ ] 예외2) 남은 인원은 앞 팀부터 순서대로 배정한다.
12. [ ] 팀 매칭 결과를 ,(쉼표)로 구분해 template render
13. [ ] 재매칭 버튼 클릭시 팀 매칭을 다시 할 수 있다.
