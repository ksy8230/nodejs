## node에서 js가 제공하는 최신 모듈 사용법

-   package.json에서 type 지정을 module로 설정

## npm 관리 명령어

-   npm ll : 현재 프로젝트에 설치된 npm 라이브러리
-   npm ll -g : 글로벌에 설치된 npm 라이브러리
-   npm ll -g --depth=0 : 글로벌레 설치된 npm 라이브러리들 중 뎁스 0만 출력
-   npm un underscore(라이브러리명): 해당 라이브러리 삭제

## 실습 1 - 간단한 SNS 기능 구현

### API 디자인하기

-   [트위터 API](https://www.notion.so/REST-API-109e7cd8c41b4588bbf62f5fc2b284e9, '노션 링크')

### API 포스트맨 컬렉션에서 빠르게 API 호출 테스트 가능

### API 서버 -> MVC 패턴으로 리팩토링

-   data 층은 데이터의 모양을 어떻게 리턴할지 중점으로 잡아 코드 짜기
