## node에서 js가 제공하는 최신 모듈 사용법

-   package.json에서 type 지정을 module로 설정

## npm 관리 명령어

-   npm ll : 현재 프로젝트에 설치된 npm 라이브러리
-   npm ll -g : 글로벌에 설치된 npm 라이브러리
-   npm ll -g --depth=0 : 글로벌레 설치된 npm 라이브러리들 중 뎁스 0만 출력
-   npm un underscore(라이브러리명): 해당 라이브러리 삭제

## API 디자인하기

-   [트위터 API](https://protective-cairnsmore-536.notion.site/REST-API-109e7cd8c41b4588bbf62f5fc2b284e9, '노션 링크')

-   API 포스트맨 컬렉션에서 빠르게 API 호출 테스트 가능

---

## 강의 실습 1 - 간단한 SNS - nodejs(express)로 기능 구현

| 클라이언트 | 서버            |
| ---------- | --------------- |
| react.js   | express(nodejs) |

### API 서버 -> MVC 패턴으로 리팩토링

-   data 층은 데이터의 모양을 어떻게 리턴할지 중점으로 잡아 코드 짜기
-   controller 층은 데이터와 라우터(뷰)의 중간에서 로직 역할을 담당한다
-   -   라우터는 말 그대로 _주어진_ 경로에 대해 어떤 함수를 연결하는지에 대한 *용도*로만 사용하자 -> 컨트롤러 폴더를 따로 뜯어내는 이유
-   -   컨트롤러 폴더를 뜯어냄으로써 익스프레스가 아닌 다른 노드 프레임워크를 사용할 때 이 컨트롤러 폴더를 *재사용*할 수 있다

---

## 개인 실습 1-1 - 간단한 SNS - Python으로 기능 구현

| 클라이언트 | 서버   |
| ---------- | ------ |
| react.js   | django |

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

3. 모델 생성

-   앱 폴더 내 모델 파일 작성 후 마이그레이션하면 디비 생성 완료
-   `python manage.py makemigrations`
-   `python manage.py migrate`
-   관리자 유저 생성 후 서버 실행
-   `python manage.py createsuperuser`
-   `python manage.py runserver`

4. Queryset을 Nested한 JSON으로 매핑하는 과정

-   serializers
    \*\*

### ORM (Object Relational Mapping)

-   ORM 프레임워크를 사용하면 프레임워크에서 만든 모델 파일이 자동적으로 디비에서 모델을 생성한다. (디비에서 데이터 명시, 프레임워크에서 데이터 파일 명시할 필요가 없어진다)
