## METEOR

[JOSH OWENS](http://joshowens.me/) 자료 타이핑하며 학습

<br>

### What is Meteor.js?

- Meteor.js is a development platform, a collection of libraries and packages that are bound together in a tidy way to make web development easier.
  Meteor.js는 개발 플랫폼으로, 웹 개발을 쉽게 하기 위해 정리된 라이브러리와 패키지 모음이다.
- There are libraries like Tracker and Blaze that the Meteor Development Group has built specifically for a reactive front-end experience.
  반응형 프론트엔드 환경을 위해 특별히 제작한 Tracker와 Blaze 같은 라이브러리가 있다.

<br>

#### Command Line Tool

- The command line tool is the glue that creates all of this.
  command line tool은 이 모든 것을 만드는 접착제이다.
- It also has the package system built into it.
  또한 패키지 시스템이 내장되어 있다.
  - Isobuild - An isomorphic package system that allows you to easily install packages via Atmosphere, NPM, and Cordova plugins.
    Atmosphere, NPM, Cordova 플러그인을 통해 패키지를 쉽게 설치할 수 있다.

<br>

#### Server

- The server is a Node.js app built with certain libraries in place to make the communication happen over DDP and EJSON to the front-end.
  서버는 DPP와 EJSON을 통해 통신이 프론트엔드로 진행되도록 하기 위해 특정 라이브러리가 내장된 Node.js 응용 프로그램이다.
  - Node.js - A JavaScript server.
  - Connect - A library to output http responses from an app.
    앱에서 http 응답을 출력하는 라이브러리.
  - Database Driver(Mongo) - A simple drive to interface with MongoDB data.
    MongoDB 데이터와 접속하기 위한 간단한 드라이브.
  - Livequery - A library built to query and stream out Mongo data in a reactive way.
    반응형으로 Mongo 데이터를 스트리밍 하기 위해 구축된 라이브러리.
  - Fibers/Futures - A wrapper library for Node.js, making it synchronous in an effort to reduce 'callback spaghetti'.
    Node.js용 wrapper 라이브러리. 'callback spaghetti'를 줄이기 위해 동기식으로 만든다.

<br>

#### Communication layer

- The communication layer is the real magic that binds the client and server together.
  통신 계층은 클라이언트와 서버를 바인딩하는 진짜 마법이다.
- EJSON is used to serialize and deserialize data moving across the wire via DDP.
  EJSON은 DDP를 통해 이동하는 데이터를 직렬화와 비직렬화하는 데 사용된다.
  - DDP (Distributed Data Protocao) - A protocol for sending data over websockets.
    웹 소켓을 통해 데이터를 전송하기 위한 프로토콜.
  - EJSON - An extension of JSON to support serializing more data types like Dates and Binary.
    더 많은 데이터 유형을 직렬화 할 수 있도록 JSON을 확장한 것.

<br>

#### Browser

- The browser part of the platform is sent over with minimal html and some JavaScript that loads up the environment.
  플랫폼의 브라우저 부분은 환경을 로드하는 최소한의 HTML과 일부 자바스크립트로 전송된다.

- A lot of code is built on jQuery and underscore.js as the foundation.
  jQuery와 underscore.js를 기초로 많은 코드가 작성되었다.
  While the server is synchonous, browsers and JavaScript are asynchonous by nature.
  서버는 동기식이지만, 브라우저와 자바스크립트는 본질적으로 비동기식이다.

  - Tracker - The backbone of the reactive front-end.
    반응형 프론트엔드의 backbone 프레임워크.

  - Spacebars - A derivation of Handlebars, built to be reactive.

    대응을 위해 만들어진 Handlebars의 기원.

  - Blaze - A reactive library built to marry Tracker & Spacebars up to create live updating user interfaces. Similar to Angular, Backbone, Ember, React, Polymer, or Knockout.
    Tracker & Spacebars와 결합하여 실시간 업데이팅 유저 인터페이스를 만들 수 있는 반응형 라이브러리. Angular, Backbone, Ember, React, Polymer, Knockout와 유사하다.

  - Minimongo - A client side mongo library that synchronizes data over DDP and allows the client to reactively consume mongo data.
    DDP를 통해 동기화하고, 클라이언트가 반응적으로 mongo 데이터를 소비할 수 있게 하는 클라이언트 측 mongo 라이브러리. 

  - Session - A library to handle reactive UI state variables, nothing like a session in Rails, PHP or Node.js.
    반응형 UI 상태 변수를 처리하는 라이브러리.

<br>

#### Cordova

- The Cordova integration is built into the command line tool and the package system.
  Cordova 통합은 command line tool과 패키지 시스템에 내장되어 있다.
- The Cordova app will be compiled into an app, but the hot code reload will bring over new code and cache it on the local device and load that next time instead.
  Cordova 앱은 앱으로 컴파일되지만, hot code reload는 새로운 코드를 가져와서 로컬 기기에 캐시하고 그 다음에 로드한다.

<br>

### What is Meteor good for?

- Meteor is great for Rapid Application Development.
  Meteor는 신속한 애플리케이션 개발에 적합하다.