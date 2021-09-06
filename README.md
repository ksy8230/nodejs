## branch별 용도

-   version/nodejs : 강의 내용
-   version/nodejs-api : nodejs, express로 api 작성
-   version/phython : phython으로 api 작성 (예정)

## node에서 js가 제공하는 최신 모듈 사용법

-   package.json에서 type 지정을 module로 설정

## npm 관리 명령어

-   npm ll : 현재 프로젝트에 설치된 npm 라이브러리
-   npm ll -g : 글로벌에 설치된 npm 라이브러리
-   npm ll -g --depth=0 : 글로벌레 설치된 npm 라이브러리들 중 뎁스 0만 출력
-   npm un underscore(라이브러리명): 해당 라이브러리 삭제

## 실습 1 - 간단한 SNS 기능 구현

### API 디자인하기

-   [트위터 API](https://protective-cairnsmore-536.notion.site/REST-API-109e7cd8c41b4588bbf62f5fc2b284e9, '노션 링크')

### API 포스트맨 컬렉션에서 빠르게 API 호출 테스트 가능

### API 서버 -> MVC 패턴으로 리팩토링

-   `data` 층은 데이터의 모양을 어떻게 리턴할지 중점으로 잡아 코드 짜기
-   `controller` 층은 데이터와 라우터(뷰)의 중간에서 로직 역할을 담당한다
-   -   라우터는 말 그대로 _주어진_ 경로에 대해 어떤 함수를 연결하는지에 대한 *용도*로만 사용하자 -> 컨트롤러 폴더를 따로 뜯어내는 이유
-   -   컨트롤러 폴더를 뜯어냄으로써 익스프레스가 아닌 다른 노드 프레임워크를 사용할 때 이 컨트롤러 폴더를 *재사용*할 수 있다

### API 호출 유효성 검사 라이브러리 - express-validator

-   서버에서 유효성 검사하는 이유
    -> 디비에 접근해서 읽고 쓰기 전에 데이터가 유효한지 검사함으로서 서버 비용 절약  
    -> 데이터를 일관성있게 보관 가능

### 인증 방식으로 JWT 사용 이유

-   서버가 다양한 클라언트를 상대하는 Restful API이기 때문에
-   서버 확장성을 위해 (여러 서버 사용시 유용)
