## Meteor 코딩 공작소

박승현 지음

<br>

### 들어가며

- 미티어는 자바스크립트 풀스택 플랫폼이다.
- 프론트엔드, 백엔드 그리고 데이터베이스까지 자바스크립트로 이루어진 풀스택 플랫폼이라서 자바스크립트를 좋아하는 사람에게는 정말 재미있는 도구이다.
- 개발 속도가 빨라서 스타트업이 서비스를 신속하게 런칭하여 고객과 만날 수 있는 시간을 줄여준다.
- 브라우저 뿐만 아니라 모바일에서도 빠르게 앱을 출시할 수 있다.
- 프리랜서로 개발하던 시절에 "프론트엔드는 자바스크립트 프로그래밍, 데이터베이스도 몽고디비를 사용하는데 백엔드도 자바스크립트였으면 좋겠다"라는 생각을 하고 있었다.
- 마침 공공기관의 프로젝트를 혼자 진행하게 되었다. 처음 계획은 Express.js를 사용해서 자바로 프로젝트를 하던 것처럼 Express.js로 REST 서버를 만들고 프론트는 앵귤러를 이용해서 일반적인 웹 프로그램 형태로 구현하려고 했었다.
- 다행히도 미티어는 기존에 작성한 프론트 코드를 많이 수정하지 않고 재사용할 수 있는 방법을 제공하고 있었다.
- public 폴더에 기존 .html, .js를 넣고 미티어로 REST 서버를 만들어서 기존 프론트 코드가 잘 동작하게 하는 방법이다.
- 그 뒤로 새로 작성하는 프로그램은 미티어(블레이즈)로 작성하고 나중에 앵귤러로 만들었던 코드도 점점 미티어 블레이즈 코드로 전환을 했다.
- 미티어를 하면서 미티어 자체를 배우는데 즐거움을 얻었을 뿐만 아니라 미티어를 통해서 배운 개념이 오히려 많았다.
- 특히 리액티비티는 미티어의 주된 개념이다.
- 리액티비티는 가깝게 엑셀에서도 찾을 수 있는 오래된 개념이기도 하다.

<br>

### 1장

## 미티어 소개

- 미티어는 클라이언트(브라우저)부터 애플리케이션 서버(미티어 서버), 데이터베이스(몽고DB)에 이르기까지 자바스크립트로 구성된 풀스택 플랫폼이다.
- 미티어는 명령어 한 줄만으로 빠르게 개발 환경을 구성할 수 있다.
- 브라우저부터 데이터베이스까지 실시간으로 데이터를 동기화하는 애플리케이션을 쉽게 작성할 수 있다.
- 미티어 패키지 저장소(atmosphere)에 있는 수많은 패키지를 나의 프로젝트에 설치하고 사용할 수 있다.

<br>

### 1) 빠르게 구성하는 개발 환경

- 미티어는 명령줄에서 입력하는 한 줄의 프로젝트 생성 명령만으로 자체에 내장된 데이터베이스를 사용할 수 있다.
- 내장된 몽고DB는 JSON(JavaScript Object Notation)을 저장하는 데이터베이스로 요즘 주목받고 있는 NoSQL 데이터베이스 중 하나다.
- 운영 환경에서는 외부에 있는 별도의 몽고DB를 사용하여 시스템을 구성하는 것도 가능하다.

<br>

### 2) 브라우저와 서버 간 실시간 데이터 동기화

- 미티어는 발행/구독(publish/subscribe)이라는 구조로 브라우저와 서버 간의 데이터 교환이 이루어진다. 이 교환은 실시간으로 이루어지므로 데이터의 지속적인 변화를 실시간으로 보여주는 애플리케이션을 작성할 때 아주 좋다. 게다가 코드 몇 줄만으로 쉽게 동기화를 구현할 수 있다.

<br>

### 3) 풀스택 자바스크립트

- 클라이언트와 서버에 이르기까지 모두 자바스크립트만으로 구현한다.
- 기본 데이터베이스로는 몽고DB를 사용한다.
- 몽고DB는 JSON을 저장하는 NoSQL 데이터베이스다.
- 클라이언트에서 작성된 데이터 포맷을 데이터베이스까지 같은 형태로 저장할 수 있다.
- 그야말로 풀스택 자바스크립트 플랫폼이다.

<br>

### 4) 모바일 통합 개발 환경

- 미티어에서 개발한 앱은 데스크탑 뿐만 아니라 Android, iOS에서 사용할 수 있는 패키지로 배포할 수 있다.
- 특히 모바일 환경은 내장된 코르도바(cordova)를 통해 하이브리드 앱 형태로 배포하므로 별도의 컴파일 환경을 구축할 필요가 없이 미티어만으로 앱 제작이 가능하다.

<br>

### 5) 풍부한 패키지

- atmosphere는 미티어 패키지 저장소이며 Node.js의 npm과 비교될 수 있다.
- 미티어 콘솔에서 "meteor add 패키지명" 정도의 입력만으로 해당 패키지를 프로젝트에 적용할 수 있다.

<br>

### 2장

## 개발 환경 설정

- 미티어는 Node.js 기반의 풀스택 플랫폼이지만 별도로 Node.js의 설치를 신경 쓸 필요가 없다.
- 몽고DB는 프로젝트를 생성하면 자동으로 내장되어 실행까지 된다.

<br>

### 1) macOS, 리눅스 환경에서 설치하기

- 미티어 설치는 셸에서 간단하게 설치할 수 있다.
  - `$ curl https://install.meteor.com/ | sh`

<br>

- 앞으로 만드는 미티어 프로젝트는 모두 Projects 폴더 아래에서 생성하기로 한다.
  - `$ cd ~`
  - `$ mkdir Projects`
  - `$ cd Projets`
  - `~/Projects$ meteor create test`
- meteor를 입력하면 미티어가 실행된다.
  - `~/Projects/test$ meteor`
- 종료는 meteor를 실행한 콘솔에서 `Ctrl` + `C`를 입력하면 된다.

------

## sth else

- 미티어는 소스 코드를 수정한 후에 재시작할 필요가 없다. 이를 핫 코드 푸시(hot code push, 코드 즉시 반영)라 부른다.

- 프로젝트를 생성하면 프로젝트 이름으로 된 폴더에 파일이 자동으로 생성되어있다.

- `meteor create 프로젝트` 명령은 해당 프로젝트와 같은 이름의 폴더, 파일 뿐만 아니라 미티어를 실행할 수 있는 기본 파일과 설정 파일을 생성한다.

- 자동 생성된 폴더에서 파일의 역할

  - client/main.js
    클라이언트 애플리케이션의 최초 진입점
  - client/main.html
    뷰(template)가 작성된 파일
  - client/main.css
    클라이언트 애플리케이션에 적용될 CSS 파일
  - server/main.js
    서버 프로그램의 최초 진입점
  - package.json
    npm 패키지 관리를 위한 파일
    `$ meteor npm 패키지명`
    meteor npm 명령으로 npm 패키지를 사용할 때 갱신되는 파일이므로 수정하지 않는다.
  - /.meteor
    빌드 후 저장될 실제 실행 파일.
    숨김 파일이라 보이지 않는다.
  - /.gitignore
    git 설정 파일.
    형상 관리 시 git에 동기화할 때 사용되는 예외 목록을 저장한다.

- 프로젝트 생성 및 파일 저장 시 주의할 점

  - 프로젝트 경로 및 프로젝트 이름을 한글로 사용하지 않을 것.
  - \*.js, \*.html 파일은 UTF-8로 편집 및 저장할 것.

- 미티어는 폴더 이름에 따라서 코드가 실행될 위치를 결정한다.

  - 웹 브라우저에서 실행할 코드: client, lib
  - 서버에서 실행할 코드: server, lib

- 클라이언트에서 사용하는 HTML, 자바스크립트, 스타일시트 파일은 client 폴더에 작성한다.

- 서버에서 실행할 자바스크립트 파일은 server 폴더에 작성한다.

- 클라이언트와 서버가 공통으로 사용하는 코드는 lib 폴더에 작성한다.

- 몽고DB는 미티어의 내장 데이터베이스이며, 이를 다루기 위한 필수 오브젝트가 미티어 컬렉션이다.

- 미티어 컬렉션은 미티어에서 기본으로 제공하는 오브젝트를 말한다. 미티어에서 몽고DB의 데이터를 다루는 가장 기본적인 메소드들을 가지고 있다. 미티어 컬렉션은 몽고DB 컬렉션과 1:1로 매핑된다. 몽고DB 컬렉션에 JSON 다큐먼트가 저장되므로, 몽고DB를 다큐먼트 데이터베이스라고 부른다. 따라서 미티어 컬렉션이 다루는 대상도 결국 몽고DB에 있는 JSON 다큐먼트다.

- 몽고DB 컬렉션명은 소문자로 쓰고, 미티어 컬렉션명의 시작은 대문자로 한다. 둘 이상의 단어로 구성된 컬렉션은 두 번째 단어부터 각 단어의 첫 글자를 대문자로 작성하기로 한다.

- 몽고DB 콘솔은 자바스크립트 콘솔이다.

- 모든 컬렉션 오브젝트는 데이터를 조회할 수 있는 find 메소드를 가지고 있다. 따라서 몽고DB 콘솔에서 db.컬렉션이름.find() 형태로 실행하면 데이터를 조회할 수 있다.

- main.html은 우리가 사용하는 애플리케이션의 메인 화면이다(`meteor create addressBook` 명령으로 자동 생성된 파일). \<html> 태그도 없는 불완전한 HTML 문서지만 신경 쓰지 않아도 된다. 미티어는 빌드할 때 HTML에 필요한 나머지 부분을 알아서 채운 후 클라이언트가 접속할 때 전송해준다. 따라서, 우리는 \<head>와 \<body> 안에만 코드를 작성하면 된다.

- main.html의 {{> addressList}} 태그는 addressList 템플릿이 들어갈 자리라는 표현이다. 이것은 스페이스바(Spacebars)라는 미티어 템플릿 언어의 문법 중 삽입(inclusion) 선언이다.

- 미티어는 HTML 템플릿 문법으로 스페이스바를 사용하여 뷰를 작성한다. 모든 뷰는 \<template> 태그 아래에 작성되며, 작성된 HTML을 DOM에 렌더링하는 부분은 블레이즈(Blaze) 템플릿 엔진을 사용한다. 블레이즈 엔진은 스페이스바에서 사용할 데이터를 제공한다. 또한, DOM에서 발생한 이벤트도 관리한다.

- each는 **블록 헬퍼(block helper)**라고 하며, list 배열의 개수만큼 블록 안의 내용을 반복한다.

- 블록 안의 {{email}}, {{name}} 헬퍼는 **표현식 헬퍼(expression)**로 객체의 키에 해당하는 값이나, 템플릿 매니저 중에서 템플릿 헬퍼의 이름이 email인 메소드의 반환값을 표현할 때 사용한다.

- 미티어는 빌드 시 프로젝트 폴더 안의 HTML 파일들을 읽어 들여 컴파일한다. 이때 \<template name="addressList">와 같은 태그를 발견하면 태그 블록 안의 HTML을 읽어 들여 자바스크립트 오브젝트로 변환, 생성한다. 이 오브젝트가 브라우저에서 동작하는 블레이즈 오브젝트다. 블레이즈 오브젝트 하위 요소인 Template 오브젝트로 HTML을 제어한다.

- 부트스트랩 (Bootstrap)
  부트스트랩은 트위터에서 만든 CSS 프레임워크다.
  이 프레임워크는 다양한 UI 컴포넌트(아이콘, 버튼, 내비게이션 등)와
  제워쿼리를 통한 모달 팝업, 툴팁, 팝오버, 드롭다운 등 다양한 자바스크립트 컴포넌트를 제공한다.
  미티어를 사용한다면 콘솔에서 부트스트랩을 패키지로 간단하게 추가할 수 있다.

- 트위터 부트스트랩 설치
  `~/Projects/addressBook$ meteor add twbs:bootstrap@=3.3.6`

- 미티어의 패키지 저장소
  미티어 플랫폼은 atmosphere라는 패키지 저장소를 제공한다.
  브라우저에서 `https://atmospherejs.com/` 주소로 접속하면
  미티어 프로젝트에서 사용할 수 있는 패키지를 검색할 수 있다.
  저장소에는 서버 패키지와 클라이언트 패키지가 모두 있다.

- 테이블 관련 부트스트랩 클래스

  - table-bordered: 테이블 테두리에 라인을 그린다.
  - table-condensed: 테이블 안의 td 간격을 좀 더 조밀하게 나타낸다.
  - table-striped: 스트라이프 형태로 tr 색상을 번갈아 다르게 나타낸다.
  - table-hover: 마우스 오버 시 색상 변경으로 반응한다.
    - http://getbootstrap.com/css/#tables에서 더 많은 클래스 참조 가능

- 이벤트 핸들러 함수를 정의하는 형식
  `"click button[name=remove]" (evt, tmpl) {}`
  이 코드는 button[name=remove] 오브젝트의 click 이벤트가 호출되었을 때 실행할 함수를 의미한다.
  <br>

  click = 이벤트 타입
  button[name=remove] = DOM 셀렉터

  evt = 이벤트

  tmpl = 이벤트가 일어난 Template 인스턴스
  첫 번째 매개변수 "evt"는 해당 이벤트(click)가 발생한 이벤트 객체이다.
  두 번째 매개변수 "tmpl"은 이벤트가 일어난 템플릿 인스턴스 오브젝트,
  즉 Blaze.template 오브젝트다.
  따라서 Template 오브젝트의 find 메소드로 이벤트가 일어난

  \<template name="addressInput"> 템플릿 인스턴스를 찾을 수 있다.

  이어서 input HTML 오브젝트의 값을 찾아 address라는 JSON을 생성한다.

- 미티어는 빌드 시점에 소스를 읽어서 해석하므로 파일명은 개발할 때 알아보기 쉬운 용도로 분리하면 되고, 템플릿 이름만 전체 프로젝트에서 중복되지 않게 작성하자.

- 뷰 모드에서 수정 모드로 변환되는 것은 미티어 세션 변수를 사용하는데, 이것은 세션 변수의 리액티비티를 통하여 각 tr이 모드의 변화를 감지할 수 있기 때문이다.

- 미티어의 세션 변수는 클라이언트 전용 변수이다. 다른 유저와 공유되지 않으며, 현재 접속된 브라우저 안에서만 유지된다.

- 미티어가 새로 빌드해서 자동으로 렌더링을 하니, 굳이 서버를 재시작한다거나 브라우저를 새로고침할 필요가 없다. 브라우저에 새로운 코드를 자동으로 내려보내 주는 동작을 핫 코드 푸시(Hot Code Push)라고 부른다.

  1. 미티어는 소스가 수정되면 자동으로 새로 빌드하여 서버를 재시작한다.
  2. 수정된 소스가 클라이언트 소스면 자동으로 브라우저에 push한다(핫 코드 푸시).
     그렇다고 해서 클라이언트 세션 값을 변경하지는 않는다. 세션 값은 유지된다.
  3. 서버 소스가 수정될 경우 클라이언트는 변화가 없고 서버만 조용히 재시작된다.
     일부러 브라우저를 새로고침 하지 말자.

- 사용자들의 조작 실수나 오타 같은 실수로 데이터에 문제가 생길 수 있고, 애플리케이션 자체가 오용될 수도 있다. 이를 막기 위해 입력 데이터 검증은 필수다. 입력 데이터 검증을 위해 미티어 check 패키지를 설치한다.

- check 함수의 기본 사용법

```javascript
try {
  check(입력값, 패턴);
  
} catch(err) {
  
  alert(err.message);
  
  return;
}
```

- "입력값"이 "패턴"에 해당하지 않으면 에러를 발생시키므로 try 문장을 사용하여 체크하면 된다. check 함수의 첫 번째 매개변수 "입력값"은 자바스크립트의 어떤 값도 가능하다. 두 번째 매개변수인 "패턴"은 자바스크립트의 기본 자료형(String, Number, Boolean, undefined, null)과 check 패키지에서 제공하는 Match 오브젝트를 이용하여 "사용자 정의 패턴"을 사용하는 방법이 있다.

- 현실에 사용되는 문자열의 "패턴"은 단순하지가 않다. 그렇다면 메일주소, 전화번호, 특정 날짜 형태 등, 특수한 "패턴"을 지닌 문자열은 어떻게 체크 할까? 정답은 정규식이다.

- 미티어에서 코드 작성 시 var를 사용하지 않으면 다른 파일에서도 참조할 수 있는 전역 변수가 된다. 이것은 미티어가 빌드 시에 우리가 작성한 각각의 파일을 읽어 들여 단일 자바스크립트 애플리케이션으로 만들기 때문이다. 따라서 다른 파일에 있더라도 var를 사용하지 않으면 빌드 후에는 같은 파일에서 참조하는 것과 같다.

- 설치되어 있는 패키지 살펴보는 방법

  `~/Projects/addressBook$ meteor list`

- autopublish 패키지는 모든 몽고DB의 전체 데이터베이스 데이터를 클라이언트에 발행(publish)하고, 클라이언트에서는 이 모든 발행을 구독한다. 즉, 특정 컬렉션에 중요한 정보가 들어 있어도 권한이 없는 사용자가 클라이언트로 이를 내려받을 수 있게 된다. 또한, 양적인 측면에서 문제를 일으킬 여지도 있다. 따라서 교육용이나 프로토타입용을 제외하고, 실무에서는 autopublish를 사용하지 않는다.

- 보안 적용의 첫 번째로 autopublish 패키지 삭제
  `~/Projects/addressBook$ meteor remove autopublish`

- 발행/구독과 미티어 메소드 호출
  미티어가 서버와 데이터를 주고받는 방법은 대표적으로 2가지 방법이 있다. 첫 번째는 미티어 발행/구독으로 서버 측 몽고DB와 클라이언트 미니몽고(캐시디비)와 싱크하는 방법이 있고, 두 번째는 서버 측 메소드를 클라이언트에서 호출하는 형태로 데이터를 주고받을 수 있다. 이때 내부에서는 모두 웹소켓으로 데이터를 주고받아서 http로 주고받는 것보다 부하가 적다.

- insecure는 미티어의 기본 패키지다. 이 insecure 패키지가 설치된 상태에서 서버는 클라이언트에서 일어나는 모든 데이터 요청을 별도의 검증 과정 없이 수행한다. 검증 없이 수행한다는 말은 브라우저 콘솔에서 데이터베이스 컬렉션 메소드(insert, update, remove)를 자유롭게 쓸 수 있다는 뜻이기도 하다. 정말 편리한 디버깅 도구이기도 하지만 실무에서는 교육이나 프로토타이핑을 하는 경우를 제외하고 사용하지 않는다.

- insecure 패키지를 프로젝트에서 삭제한 상태의 코드로는 읽기를 제외하고 모든 데이터에 대한 작업이 불가능해진다.

- 웹 브라우저 개발자 도구와 자바스크립트 콘솔
  웹 브라우저의 대부분은 디버깅이 가능한 도구를 제공한다.
  크롬의 경우는 오른쪽 상단의 아이콘을 클릭 후 **도구 더 보기** > **개발자 도구 순**으로 클릭하여 열 수 있다.
  **Console** 탭을 클릭하면 자바스크립트를 직접 입력하여 실행하거나 클라이언트 로그를 확인할 수 있는 콘솔 영역이 나온다.

- RPC (Remote Process Call)
  **원격 프로시저 호출**(remote procedure call, RPC)은 별도의 원격 제어를 위한 코딩 없이 다른 주소 공간에서 함수나 프로시저를 실행할 수 있게 하는 프로세스 간 통신 기술이다.
  다시 말해, 원격 프로시저 호출을 이용하면 프로그래머는 
  함수가 실행 프로그램에 로컬 위치에 있든 원격 위치에 있든 같은 코드를 이용할 수 있다.

- 자바스크립트에서 익명 함수란 이름이 존재하지 않는 함수를 말한다. 익명 함수는 어떤 함수의 호출 시 인자로 사용될 수 있다.

- 무한 스크롤 방식으로 페이징 구현

  - cnt라는 이름의 세션 변수를 생성하여 30으로 초기값을 설정하고,
  - cnt의 숫자 값만큼(초기에는 30) 서버로부터 구독하게 구현한다.
  - cnt 세션 값이 변경되면 변경된 숫자만큼 구독되도록 선언한다.
  - 마우스 스크롤 이벤트 시 스크롤이 아래부분에 도달하면 세션 변수에 30을 더해준다.

- $(오브젝트).scroll(function(){}) 함수는 jQuery 함수로서 해당 오브젝트에서 스크롤 이벤트가 발생할 때마다 인자로 받은 콜백 함수가 호출된다.

- $(오브젝트).scrollTop() 함수는 해당 오브젝트의 현재 스크롤바의 수직 위치(y좌표)를 얻을 수 있는 함수이다. 값을 주어 호출하면 현재 스크롤바를 해당 위치로 이동시킬 수 있다.

- 미티어의 재미이자 장점 중 하나는, 데이터의 변경이 UI까지 실시간으로 반영된다는 점이다. 이 점을 잘 이용하면 채팅 서비스나 SNS를 비교적 짧은 코드로 쉽게 구현할 수 있다.

- 미티어 프로젝트 생성


`~/Projects$ meteor create waggleChat`

- 미티어로 처음 프로젝트를 시작할 때 필요한 기본 폴더와 메인을 구성하기 위해 순서대로 작업한다.
  1. 기본 폴더 생성
  2. 최상위 \<body> 구성
  3. 기본 CSS 구성
- \<meta>의 viewport는 흔히 "메타 뷰포트 태그"라고도 한다. 모바일 브라우저에서 레이아웃을 조절하기 위한 것이다.
  - width=device-width : 브라우저 너비를 장치 너비에 맞추어 표시
  - initial-scale=1.0 : 보이는 영역과 웹 페이지를 맞춤
  - maximum-scale=1.0 : 뷰포트의 최대 배율값
  - user-scalable=no : 사용자가 화면 축소를 못하게 설정
- 웹킷용 스타일
  - ::-webkit-scrollbar-track: 화살표를 제외한 몸통 부분에 대한 스타일
  - ::-webkit-scrollbar: 스크롤바 영역 전체에 대한 스타일
  - ::-webkit-scrollbar-thumb: 몸통 부분에서 실제로 움직이는 부분을 제외한 나머지 부분
    이와 같은 코드를 작성만 하면 전체 프로젝트에 반영된다.
    미티어는 빌드할 때 HTML에 CSS를 알아서 삽입해준다.
    게다가 CSS 변경사항은 핫 코드 푸시에서도 브라우저를 리프레시 하지 않아도
    변경된 CSS만 반영될 정도로 훌륭하다.
- 패키지 구성은 프로젝트를 하는 중간중간 atmosphere 사이트에서 마음에 드는 패키지를 쇼핑하여 meteor add 명령으로 추가할 수 있겠지만, 프로젝트 생성 초반에 몇 가지 기본 패키지를 추가해서 프로젝트를 구성하자.
- 기본 패키지 중에서 필요 없는 패키지를 삭제하는데, 특히 autopublish 패키지는 몽고DB의 모든 컬렉션의 전체 데이터를 로컬에 내려받아서 클라이언트(브라우저) 쪽에 부담이 클뿐더러, 서버에서도 전체 데이터를 감지해야 하기 때문에 실무 프로젝트에서는 사용하는 일이 드물다. 따라서 기본 설치된 autopublish 패키지를 먼저 삭제한다.
- CRUD란 Create, Object, Update, Delete의 약자로 기본적인 데이터 처리 기능을 묶어서 의미하는 말이다.
- 프로젝트를 생성한 직후에 모든 미티어 컬렉션의 CRUD를 브라우저에서 사용할 수 있다. 이런 기능이 개발이나 디버깅 시에는 유용하지만 실제 운영되는 사이트에서는 위험하다. 따라서 브라우저 콘솔에서 데이터 생성과 변경을 조건 없이 허용하는 insecure 패키지를 삭제한다.
- 프로젝트에서 데이터를 생성하고 변경하려면 미티어 컬렉션의 allow 메소드나 deny 메소드를 서버 코드에서 설정해야 한다. allow나 deny 메소드로 데이터 접근에 대한 제약을 풀어주거나 방지할 수 있다.
- 현재 구성한 패키지 목록은 `meteor list` 명령으로 확인 가능.
- fixture의 특성상 초기 한 번 실행되야 하는데, 미티어는 파일 변화의 감지를 실시간으로 하여 자동으로 재실행하므로 코드를 작성하는 순서에 따라 논리적인 오류가 생길 수도 있다. 따라서 fixture 데이터를 생성하는 코드를 완료하기 전까지는 meteor를 잠시 중지해야 한다. 또한, 혹시라도 중간에 에러가 생겨서 데이터를 다시 설정해야 할 때는 meteor를 중지한 상태에서 meteor reset으로 초기화할 수 있다. 어차피 운영 환경이 아니라면 몽고DB를 초기화시키는 명령 정도는 알아두는 게 좋다. 다만 계정 정보를 포함하여 모든 정보가 초기화된다.
  - `~/Projects/waggleChat$ meteor reset`
  - `~/Projects/waggleChat$ meteor mongo`
    `meteor:PRIMARY> db.rooms.remove({});`
- 미티어 컬렉션 insert 함수를 이용하여 생성하면 _id 값은 임의의 문자열로 자동 등록된다. _id 문자열은 Random.id()라는 미티어 메소드의 결과값과 같다.
- 템플릿의 역할
  - chatMain: body 아래 최상위 템플릿
  - loginButtons: 로그인 기능의 템플릿
  - createRoom: 채팅방 생성 기능 템플릿
  - roomList: 채팅방 목록 템플릿
- this.subscribe 함수는 Meteor.subscribe 함수와 동일하나, 템플릿 인스턴스에서도 참조할 수가 있다. 또한, this를 self로 받아서 사용하는 이유는 인스턴스 함수 내부의 하위함수에서 접근할 수 있도록 하기 위함이다. 즉, this는 함수의 스코프에 따라 참조하는 객체가 달라지므로 (해당 함수에 대한 참조가 됨) 오동작을 일으키는 것을 방지하기 위함이다.
- 스스로 성격이 너무 급해서 뷰를 작성하기 전에 데이터가 들어오는지, 발행/구독이 궁금하다면 브라우저에서 제공하는 개발자 도구에서 Rooms.find(), Rooms.find().fetch() 쿼리를 날려보자.
- 콘솔에서 Rooms.find()를 실행해서 질의를 해보면 커서를 반환하여 데이터를 볼 수가 없다. 하지만 커서에는 fetch 메소드가 있으므로 Rooms.find().fetch(); 해주면 데이터를 볼 수 있다.
- 전역 헬퍼란 모든 미티어 템플릿에서 접근할 수 있는 템플릿 메소드를 말한다. 따라서 다른 코드보다 먼저 로딩되어야만 코드 실행 시 "undefined"를 만나는 사태가 발생하지 않는다.
- 리액티비티는 미티어의 근간을 구성하는 개념이지만, 기존 프로그래밍 방식과 달라서 혼자 학습하며 개념을 이해하기에 다소 생소하게 느낄 수 있다.
- 변경이 일어나는 무언가를 감지하여 그에 따른 동작을 일으키는 방식의 프로그래밍을 "리액티브 프로그래밍" 또는 "리액티브 프로그램"이라고 한다.
- 미티어에서는 화재 감지 센서를 "**리액티브 컴퓨테이션**"이라고 하고 센서가 감지하는 대상인 장작을 "**리액티브 데이터 소스**"라고 한다. 다시 말해서 리액티브 데이터 소스(장작)가 외적인 요소(점화)로 인해 상태가 변경(불)되고, 그 변경(장작->불)을 감지한 리액티브 컴퓨테이션(센서)이 임의의 동작(물 뿌리기)을 하게 만드는 것이다.
- 리액티브 프로그래밍은 엑셀과 같은 프로그램에서 수십 년 동안 존재해온 프로그래밍 방식이다.
- 리액티비티는 변화를 발산하는 "리액티브 데이터 소스", 그리고 이 데이터 소스의 변화를 감지하여 (재)실행되는 "리액티브 컴퓨테이션", 이 두 가지 핵심 요소로 구성된다.
- 클라이언트에서 리액티비티에 의한 DOM의 변경 동작 순서
  1. 발행/구독에 따라 미니몽고의 데이터가 변화된다.
  2. 변화된 미니몽고의 데이터가 감지되어 템플릿 헬퍼가 DOM을 업데이트한다.
  3. 실제로 DOM이 변경된 부분만 업데이트된다.
- 미티어의 발행/구독 코드에 따라 서버에서 추가, 변경, 삭제된 데이터가 미니몽고에 실시간으로 반영된다. 템플릿 헬퍼는 이 변화를 감지하여 DOM을 업데이트한다. 이때 DOM 전체를 업데이트하지 않고 변화된 부분만 업데이트한다.
- 미티어 서버에서 리액티비티의 핵심은 몽고DB 데이터 변화에 대한 감지다. 몽고DB(마스터 또는 프라이머리)는 데이터에 변화가 있을 때마다 오퍼레이션 로그를 남기고 복제 서버(슬레이브 또는 세컨더리)들이 로그를 읽어 스스로 반영한다.
- Template.dynamic은 template이라는 매개변수에 원하는 템플릿 이름을 입력하면 해당 템플릿을 렌더링한다. 즉, {{> Template.dynamic template="chatRoom"}} 형태로 사용하면 chatRoom 템플릿을 렌더링한다. 이것은 템플릿 삽입 코드 {{> chatRoom}}과 정확하게 같은 동작이다.
- 템플릿 동적 로딩은 세션을 통해 외부에서 제어하는 방식이다.
- glyphicon 클래스는 무엇일까?
  glyphicon을 \<button>, \<a> 태그 안에 span과 함께 사용하면 버튼 위에 다양한 아이콘을 표현할 수 있다. 즉, 버튼을 클릭하면 어떤 일이 일어날지를 프로그램 사용자에게 미리 알려줄 수 있다. 따라서 부트스트랩 사용 시 glyphicon을 사용하는 것을 추천한다. 보통은 이런 클래스들은 유료로 구매할 수 있으나 부트스트랩에서는 glyphicon을 무료로 사용하면 된다.
- \<a> 태그 안에 클래스 중에 btn, btn-default, btn-xs라는 클래스를 사용했다. btn을 선언하면 \<a> (또는 button) 태그가 클릭 가능한 버튼으로 보여진다. btn 클래스와 함께 btn-default 클래스를 사용한 이유는 버튼에 색상을 입히기 위해 사용하였다. btn-default는 하얀색을 나타낸다. 붉은색 버튼으로 보이고 싶으면 btn-danger로 대신 사용하면 된다. 그리고 btn-xs는 버튼의 사이즈를 나타내기 위한 클래스다. 
- Meteor.user() 함수는 현재 로그인된 사용자의 기본 정보를 반환한다. 이 정보는 클라이언트에 보내지는 로그인한 사용자 자신의 정보다.
- 템플릿의 onCreated 함수
  onCreated는 인스턴스 생성 시 최초 한 번 호출될뿐더러, 함수 호출 시점이 DOM에 렌더링하는 onRendered 함수나 여타의 함수보다 앞서 호출된다. 따라서 구독 등의 설정이나 템플릿 공통 메소드 생성, 템플릿 공통 변수 설정 등의 초기화 작업을 onCreated에서 한다.
- 그라바타(gravatar)란 자신의 이메일 계정과 매칭되는 그림이다. 자신의 메일 계정으로 이미지를 등록하면 각종 애플리케이션에서 사용자의 이메일 정보를 통해 해당 이미지를 아이콘 형태로 사용할 수 있다. 물론 애플리케이션 API는 그라바타에서 제공한다.
- 패키지를 검색해서 설치하고, 코드를 조금 추가한 것으로 메시지에 사용자 아이콘을 반영할 수 있었다. 이렇게 이미 작성된 패키지를 추가해 쉽게 구현할 수 있는 것이 미티어의 장점이다.
- ​
























