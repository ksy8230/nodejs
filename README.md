## node에서 js가 제공하는 최신 모듈 사용법

-   package.json에서 type 지정을 module로 설정

## npm 관리 명령어

-   npm ll : 현재 프로젝트에 설치된 npm 라이브러리
-   npm ll -g : 글로벌에 설치된 npm 라이브러리
-   npm ll -g --depth=0 : 글로벌레 설치된 npm 라이브러리들 중 뎁스 0만 출력
-   npm un underscore(라이브러리명): 해당 라이브러리 삭제

## 강의 실습 1 - 간단한 SNS 기능 구현

### API 디자인하기

-   [트위터 API](https://www.notion.so/REST-API-109e7cd8c41b4588bbf62f5fc2b284e9, '노션 링크')

### API 포스트맨 컬렉션에서 빠르게 API 호출 테스트 가능

### API 서버 -> MVC 패턴으로 리팩토링

-   data 층은 데이터의 모양을 어떻게 리턴할지 중점으로 잡아 코드 짜기
-   controller 층은 데이터와 라우터(뷰)의 중간에서 로직 역할을 담당한다
-   -   라우터는 말 그대로 _주어진_ 경로에 대해 어떤 함수를 연결하는지에 대한 *용도*로만 사용하자 -> 컨트롤러 폴더를 따로 뜯어내는 이유
-   -   컨트롤러 폴더를 뜯어냄으로써 익스프레스가 아닌 다른 노드 프레임워크를 사용할 때 이 컨트롤러 폴더를 *재사용*할 수 있다

## 개인 실습 1-1 - 간단한 SNS - Python으로 기능 구현

### Python 가상환경 구축하기

1.  virtualenv 모듈 사용

-   ` > pip3 install virtualenv`
-   파이썬 가상 환경을 설치함으로써 파이썬 프로그램을 실행하기 위한 최소한의 환경을 마련한다 (프로젝트별로 환경이 다를 것이니 공간을 분리하는 개념)
-   activate 명령어 실행

2. Django 프레임 워크 사용

-   장고 설치` > pip3 install django`
-   장고 프로젝트 만들기 ` > django-admin startproject (프로젝트이름)`
-   장고 프로젝트의 앱 만들기 ` > django-admin startapp (앱이름)`
-   python_api (프로젝트) > sns (앱들)
