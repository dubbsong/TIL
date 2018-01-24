## METEOR.js

- 자바스크립트 기반 웹 프레임워크
- 클라이언트와 서버의 구분 없이 모두 자바스크립트 언어를 사용한다.
- 간편하고 빠르게 개발할 수 있는 환경을 제공해주는 웹 개발 플랫폼이다.
- 서버와 클라이언트를 동일 구조화(isomorphic)해서 개발이 가능하다.
- 모든 페이지는 소스 수정 시에 자동으로 업데이트 된다.
- 데이터가 변경되어도 모든 클라이언트의 페이지를 자동으로 업데이트 시켜준다.
- 클라이언트의 유저가 직접 새로고침할 필요 없이, 자동으로 업데이트 된다.
- server 구조는 Node.js 기반으로 fiber 엔진을 사용한다.
- fiber 엔진은 Node.js의 비동기 콜백 방식을 사용하지 않고, 일반적인 single thread per request 방식을 사용한다.
- 설치부터 서버 실행까지 간단한 명령어로 바로 바로 실행할 수 있다.
- Node.js와 HTML 템플릿 엔진, MongoDB를 내장하고 있다.
- hot code push를 통해 모든 수정/변경이 모든 클라이언트에 자동으로 적용된다.
- 설치, 생성, 배포가 명령어 한 번으로 간단하게 이루어져서 웹 개발에 전념할 수 있다.
- 커맨드라인에서 입력하는 한 줄의 명령만으로 브라우저/서버/데이터베이스까지 개발 환경 구성이 한 번에 끝난다.
- 내장된 MongoDB는 JSON을 저장하는 데이터베이스로, 주목받고 있는 NoSQL 데이터베이스 중 하나이다.
- 발행/구독이라는 구조로 브라우저와 서버 간의 데이터 교환이 실시간으로 이루어진다. 따라서 채팅, SNS 같은 실시간이 필요한 애플리케이션을 쉽게 작성할 수 있다.
- 클라이언트/서버/데이터베이스 모두 자바스크립트만으로 구현한다.
- Meteor에서 개발한 앱은 데스크탑 뿐만 아니라 안드로이드, iOS에서 사용할 수 있는 패키지로 배포할 수 있다.
- 모바일 환경은 내장된 Cordova를 통해 하이브리드 앱 형태로 배포하므로 별도의 컴파일 환경을 구축할 필요가 없이 Meteor만으로 앱 제작이 가능하다.
- **Meteor는 프레임워크가 아니다. Atmosphere라는 미티어 패키지 저장소가 존재한다. 여기서 좋아하는 프레임워크들을 프론트부터 백엔드까지 골라서 사용할 수 있다.**
- 미티어는 실시간 웹 앱을 구축할 목적으로 Node.js 기반 위에 구축된 플랫폼이다.
- 데이터베이스와 사용자 인터페이스 사이에 자리하여 양쪽이 서로 동기화 상태를 유지하도록 한다.
- 미티어는 Node.js 기반 위에 구축되어, JavaScript를 클라이언트와 서버 양쪽에서 사용한다.
- 미티어는 개발환경을 간단하게 명령어 한 줄로 Client/Server/MongoDB를 구축할 수 있다.
- 서버와 클라이언트 모두 동일한 API를 사용한다.
- 데이터가 변경되어도 모든 클라이언트의 페이지를 자동으로 업데이트 시켜준다.
- **미티어는 프레임워크가 아니다. 미티어는 순간순간 진보하고 있는 웹 프레임워크들을 연결하고 지지하며 가장 현명한 방법으로 사용할 수 있게 돕는 플랫폼이다.**
- ​Meteor is a full-stack JavaScript platform for developing modern web and mobile applications.
  Meteor는 최신 웹 및 모바일 앱 개발을 위한 풀스택 자바스크립트 플랫폼이다.
- Meteor allows you to develop in **one language**, JavaScript, in all environments: application server, web browser, and mobile device.
  Meteor는 응용 프로그램 서버, 모바일 장치와 같은 모든 환경에서 자바스크립트 하나로 개발할 수 있다.
- Meteor uses **data on the wire**, meaning the server sends data, not HTML, and the client renders it.
  Meteor는 와이어상의 데이터를 사용한다. 즉 HTML이 아닌 서버가 데이터를 전송하고, 클라이언트가 렌더링한다.