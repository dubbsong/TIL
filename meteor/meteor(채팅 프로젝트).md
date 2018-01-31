## waggleChat PROJECT

- 미티어 설치

  `curl https://install.meteor.com/ | sh`

- 홈 디렉터리 아래에 Projects라는 디렉터리 생성
  `$ mkdir Projects`
  `$cd Projects`

- waggleChat 프로젝트 생성
  `~/Projects$ meteor create waggleChat`

  `~/Projects$ cd waggleChat`

- 콘솔에서 lib 폴더 생성 (공통 라이브러리가 저장될 lib 폴더)

  `~/Projects/waggleChat$ mkdir lib`

- 프로젝트의 최상위 <body> 구현
  `~/Projects/waggleChat/client/main.html`

- 파일 내용 모두 삭제
  `~/Projects/waggleChat/client/main.js`

- CSS 디자인
  `~/Projects/waggleChat/client/main.css`

- autopublish 패키지 제거
  `~/Projects/waggleChat$ meteor remove autopublish`

- insecure 패키지 제거
  `~/Projects/waggleChat$ meteor remove insecure`

- 트위터 부트스트랩 패키지 설치
  `~/Projects/waggleChat$ meteor add twbs:bootstrap@=3.3.6`

- 사용자의 가입과 로그인에 사용할 패키지 설치
  `~/Projects/waggleChat$ meteor add accounts-ui`

- 사용자의 가입과 로그인에 사용할 패키지 설치
  `~/Projects/waggleChat$ meteor add accounts-password`

- 지금까지 구성한 패키지 목록 확인
  `~/Projects/waggleChat$ meteor list`

- 미티어 컬렉션 collections.js 파일 생성
  `~/Projects/waggleChat/lib/touch collections.js`

- collections.js 파일에 2개의 컬렉션 선언(작성)
  `~/Projects/waggleChat/lib/touch collections.js`

- 초기 데이터 등록 코드를 작성할 fixture.js 파일 생성
  (MeteorSchool이라는 방이 있는지 확인하는 코드 작성)
  `~/Projects/waggleChat/server/touch fixture.js`

- 혹시 중간에 에러가 생기면 meteor를 중지한 상태에서 초기화
  `~/Projects/waggleChat$ meteor reset`

- 채팅 메인 구현

  1. 채팅 메인 구성 (chatMain: body 아래 최상위 템플릿)
  2. 사용자 등록 구현 (loginButtons: 로그인 기능 템플릿)
  3. 채팅방 등록 구현 (createRoom: 채팅방 생성 기능 템플릿)
  4. 채팅방 목록 구현 (roomList: 채팅방 목록 템플릿)

- chatMain 템플릿 코드 작성
  `~/Projects/waggleChat/client/main.html`

- loginButtons 템플릿 삽입 (email과 password로 구성된 가입 화면)
  `~/Projects/waggleChat/client/main.html`

- Username 항목 추가 설정
  `~/Projects/waggleChat/client/touch account.js`

- createRoom 템플릿 구성
  `~/Projects/waggleChat/client/touch createRoom.html`

- 채팅방 만들기 버튼에 대한 클릭 이벤트 작성
  `~/Projects/waggleChat/client/touch createRoom.js`

- roomList 템플릿 선언
  `~/Projects/waggleChat/client/touch roomList.html`
  `~/Projects/waggleChat/client/touch roomList.js`

- roomList가 화면에 보일 수 있게 chatMain 템플릿 아래쪽에 코드 삽입
  `~/Projects/waggleChat/client/main.html`

- 로컬에 데이터를 발행하는 코드 작성
  `~/Projects/waggleChat/server/touch publish.js`

- 구독 선언 코드 작성
  `~/Projects/waggleChat/client/roomList.js`

- 템플릿이 삭제(파괴)되는 시점에 구독이 중지되게 하는 함수 정의
  `~/Projects/waggleChat/client/roomList.js`

- 크롬 개발자 도구에서 발행/구독 확인
  `Rooms.find().fetch();`

- helpers 매니저 생성하고 Rooms.find()로 반환하는 list 헬퍼 코드 작성
  `~/Projects/waggleChat/client/roomList.js`

- list를 받아서 화면에 출력
  `~/Projects/waggleChat/client/roomList.html`

- roomListItem 템플릿 작성
  `~/Projects/waggleChat/client/roomList.html`

- server에서 컬렉션의 allow 구현
  `~/Projects/waggleChat/server/touch allow.js`

- 채팅방 구현

  1. 채팅방 구성 (chatRoom)
  2. 헤더 구현 (roomHeader)
  3. 메시지 등록 구현 (messageInput)
  4. 메시지 목록 구현 (messageList)

- 채팅방 템플릿 추가
  `~/Projects/waggleChat/client/main.html`

- 동적 렌더링 작성 순서

  1. client/lib/helper.js 파일 생성
  2. 전역 헬퍼 currentMode에서 viewMode의 변경 감지
  3. Template.dynamic의 template 매개변수를 전역 헬퍼를 통해 받아오도록 구현

- lib 폴더와 helper.js 파일 생성
  `~/Projects/waggleChat/client/mkdir lib`
  `~/Projects/waggleChat/client/cd lib`

  `~/Projects/waggleChat/client/lib/touch helper.js`

- currnetMode 전역 헬퍼 작성
  `~/Projects/waggleChat/client/lib/helper.js`

- 리액티비티의 원리로 동적 템플릿을 로딩하게 구현 (body 안의 코드 삭제 후 새로 작성)
  `~/Projects/waggleChat/client/main.html`

- 세션 패키지 설치
  `~/Projects/waggleChat$ meteor add session`

- 크롬 콘솔에 입력 후 확인
  `Session.set("viewMode", "chatMain");`
  `Session.set("viewMode", "chatRoom");`

- 최초 진입 화면을 chatMain 템플릿으로 설정
  `~/Projects/waggleChat/client/lib/helper.js`

- 방 제목(roomListItem)을 클릭하면 채팅방으로 이동하는 것을 구현
  `~/Projects/waggleChat/client/roomList.js`

- roomHeader 구현을 위한 파일 생성
  `~/Projects/waggleChat/client/touch roomHeader.html`
  `~/Projects/waggleChat/client/touch roomHeader.js`

- chatRoom 템플릿에 roomHeader 템플릿 삽입
  (템플릿은 아직 작성하지 않았지만, 우선 선언)
  `~/Projects/waggleChat/client/main.html`

- roomHeader 템플릿 작성
  `~/Projects/waggleChat/client/roomHeader.html`

- roomName 헬퍼 변수 구현
  (채팅방 이름과 goChatMain 버튼 생성)
  `~/Projects/waggleChat/client/roomHeader.js`

- 채팅 메인으로 이동하는 버튼에 이벤트 구현
  `~/Projects/waggleChat/client/roomHeader.js`

- messageInput 파일 생성
  `~/Projects/waggleChat/client/touch messageInput.html`
  `~/Projects/waggleChat/client/touch messageInput.js`

- 채팅방 템플릿에 삽입 선언
  `~/Projects/waggleChat/client/main.html`

- messageInput 템플릿 생성
  (입력창과 send 버튼 생성)

  `~/Projects/waggleChat/client/messageInput.html`

- send 버튼 이벤트 핸들러를 이벤트 매니저에 등록
  `~/Projects/waggleChat/client/messageInput.js`

- 텍스트 박스 메시지 값 가져오기
  `~/Projects/waggleChat/client/messageInput.js`

- 메시지를 컬렉션에 insert
  `~/Projects/waggleChat/client/messageInput.js`

- 텍스트 박스 초기화
  `~/Projects/waggleChat/client/messageInput.js`

- allow 구현 및 데이터 확인
  (콘솔에 "insert failed: Access denied" 표시)
  `~/Projects/waggleChat/client/messageInput.js`

- 정상적으로 등록되게 allow 설정
  (콘솔에 messageObj 표시)
  `~/Projects/waggleChat/server/allow.js`

- 몽고 셸 접속, 컬렉션 확인, 데이터 확인
  (meteor가 실행 중이어야 한다.)
  `~/Projects/waggleChat$ meteor mongo`
  `meteor:PRIMARY> show collections`
  `meteor:PRIMARY> db.messages.find();`

- sendMessage 메소드 추가
  `~/Projects/waggleChat/client/messageInput.js`

- 기존 코드를 복사해서 옮기고 기존 코드 삭제
  `~/Projects/waggleChat/client/messageInput.js`

- 이벤트 메소드 호출
  `~/Projects/waggleChat/client/messageInput.js`

- input 박스에서 키다운(keydown) 이벤트가 발생하면 채팅 메시지를 저장하는 코드 추가
  `~/Projects/waggleChat/client/messageInput.js`

- 메시지 목록을 채팅방에 추가
  `~/Projects/waggleChat/client/touch messageList.html`
  `~/Projects/waggleChat/client/touch messageList.js`

- 메시지 목록 템플릿을 메인에 추가
  `~/Projects/waggleChat/client/main.html`

- 서버 쪽에서 발행하는 "messages" 코드 작성
  `~/Projects/waggleChat/server/publish.js`

- 구독 코드 작성
  `~/Projects/waggleChat/client/messageList.js`

- 구독 중지 코드 작성
  `~/Projects/waggleChat/client/messageList.js`

- 메시지 목록 헬퍼 작성
  `~/Projects/waggleChat/client/messageList.js`

- 메시지 목록 템플릿 뷰 코드 작성
  `~/Projects/waggleChat/client/messageList.html`

- message 템플릿을 구현할 파일 생성
  `~/Projects/waggleChat/client/touch message.html`
  `~/Projects/waggleChat/client/touch message.js`

- 메시지 목록 템플릿 내용 변경
  `~/Projects/waggleChat/client/messageList.html`

- message 템플릿의 코드로 재사용
  `~/Projects/waggleChat/client/message.html`

- 라인을 구분할 수 있는 코드 추가 (이름 사라짐)
  `~/Projects/waggleChat/client/message.html`

- usr를 표현할 수 있는 헬퍼 함수 작성
  (owner와 같으면 "나"라는 텍스트를 반환)
  `~/Projects/waggleChat/client/message.js`

- 그라바타 설치
  `~/Projects/waggleChat$ meteor add jparker:gravatar`

- 그라바타를 사용할 수 있도록 헬퍼 함수를 파일에 추가

  `~/Projects/waggleChat/client/message.js`

- 헬퍼 매니저에 gravatar라는 이름의 헬퍼 함수 작성 (구글 사진 가져오게 됨)
  `~/Projects/waggleChat/client/message.html`

- 메시지의 경과 시간을 알려주는 기능 구현
  (momentjs 패키지 설치)
  `~/Projects/waggleChat$ meteor add momentjs:moment@=2.13.1 rzymek:moment-locale-ko@=2.12.0`

- 경과 시간 전역 헬퍼 작성
  `~/Projects/waggleChat/client/lib/helper.js`

- 뷰에서 헬퍼 호출 구현
  `~/Projects/waggleChat/client/message.html`

- 매초 변경하게 random 패키지 설치
  ``~/Projects/waggleChat$ meteor add random`

- 매초 변화를 일으키는 코드 작성
  ``~/Projects/waggleChat/lib/helper.js`

- 갱신을 감지하는 코드를 ago 함수에 반영
  ``~/Projects/waggleChat/client/lib/helper.js`

- 사용자를 비교하는 헬퍼 me 추가
  `~/Projects/waggleChat/client/message.js`

- ​







- 미티어의 재미이자 장점 중 하나는, 데이터의 변경이 UI까지 실시간으로 반영된다는 점이다. 이 점을 잘 이용하면 채팅 서비스나 SNS를 비교적 짧은 코드로 쉽게 구현할 수 있다.
- 채팅 프로젝트 구현하는 순서
  1. 프로젝트 생성/설정
  2. 채팅 메인 구현
  3. 채팅방 구현
  4. 고급 기능 구현
- 미티어로 처음 프로젝트를 시작할 때, 필요한 기본 폴더와 메인을 구성하기 위해 아래의 순서로 작업한다.
  1. 기본 폴더 생성
  2. 최상위 <body> 구성
  3. 기본 CSS 구성
- 클라이언트 프로그램이 저장될 client 폴더, 서버 프로그램이 저장될 server 폴더, 공통 라이브러리가 저장될 lib 폴더로 구성되어 있다.
- 미티어는 빌드 시에 HTML에 CSS를 알아서 삽입해준다. 게다가 CSS 변경사항은 핫 코드 푸시에서도 브라우저를 리프레시 하지 않아도 변경된 CSS만 반영될 정도로 훌륭하다.
- 실제로 운영하는 시스템에 불필요한 패키지(autopublish, insecure)를 제거하고 화면 구성에 필요한 부트스트랩과 로그인 등의 기본 패키지(bootstrap, accounts-ui, accounts-password)를 설치한다.
- 화면을 구성하기 전에 미티어 컬렉션을 생성하고, 컬렉션에 사용할 픽스처 데이터를 생성한다.
- 처음 실행 시점에 데이터가 없으면 허전하고, 코드 작성 시 디버깅용으로 일일이 사용자와 채팅방을 등록하는 것은 번거롭다. 그래서 미티어가 실행될 때 기본 사용자와 채팅방을 미리 등록해보자. 사용자 등록은 Accounts 패키지를 가지고 등록한다. 다만, 작성 전에 주의할 사항이 있다. fixture의 특성상 초기 한 번 실행되어야 하는데, 미티어는 파일 변화의 감지를 실시간으로 하여 자동으로 재실행하므로 코드를 작성하는 순서에 따라 논리적인 오류가 생길 수도 있다. 따라서 fixture 데이터를 생성하는 코드를 완료하기 전까지는 meteor를 잠시 중지해야 한다. 또한, 혹시라도 중간에 에러가 생겨서 데이터를 다시 설정해야 할 때는 meteor를 중지한 상태에서 meteor reset으로 초기화할 수 있다.
- 미티어의 _id
  미티어 컬렉션 insert 함수를 이용하여 생성하면 _id 값은 임의의 문자열로 자동 등록된다. _id 문자열은 Random.id()라는 미티어 메소드의 결과값과 같다.
- 채팅 메인은 처음 접속했을 때 클라이언트(브라우저)에서 마주하는 화면이다. 따라서 채팅방 목록뿐 아니라 채팅방 생성 기능과 로그인 기능을 함께 제공해야 한다.
- onCreated 콜백 함수에 구독 코드를 작성한 이유는 템플릿이 DOM에 삽입되는 시점보다 앞서 호출되기 때문이다. 따라서 템플릿 인스턴스의 초기 설정 등도 onCreated 함수에 넣는 게 좋다.
- this.subscribe 함수를 이용하여 "roomList" 발행을 구독한다.
- this.subscribe 함수는 Meteor.subscribe 함수와 동일하나, 템플릿 인스턴스에서도 참조할 수가 있다. 또한, this를 self로 받아서 사용하는 이유는 인스턴스 함수 내부의 하위함수에서 접근할 수 있도록 하기 위함이다. 즉, this는 함수의 스코프에 따라 참조하는 객체가 달라지므로 오동작을 일으키는 것을 방지하기 위함이다.
- 전역 헬퍼란 모든 미티어 템플릿에서 접근할 수 있는 템플릿 메소드를 말한다. 따라서 다른 코드보다 먼저 로딩되어야만 코드 실행 시 "undefined"를 만나는 사태가 발생하지 않는다. 미티어가 코드 빌드 시 lib 폴더 안의 파일은 같은 위치에 있는 자바스크립트 파일보다 먼저 로딩하므로 helper.js를 waggeChat/client/lib/ 폴더에 작성했다.
- 템플릿 동적 로딩은 세션을 통해 외부에서 제어하는 방식이다.
- glyphicon을 \<button>, \<a> 태그 안에 span과 함께 사용하면 버튼 위에 다양한 아이콘을 표현할 수 있다. 즉, 버튼을 클릭하면 어떤 일이 일어날지를 프로그램 사용자에게 미리 알려줄 수 있다. 따라서 부트스트랩 사용 시 glyphicon을 사용하는 것을 추천한다.
- btn을 선언하면 \<a> 태그가 클릭 가능한 버튼으로 보여진다. btn-default 클래스는 버튼에 색상을 입힌다. btn-default는 하얀색을 나타낸다. btn-xs는 버튼의 사이즈를 나타내기 위한 클래스다.
- Meteor.user() 함수는 현재 로그인된 사용자의 기본 정보를 반환한다. 이 정보는 클라이언트에 보내지는 로그인한 사용자 자신의 정보다. 콘솔에서 확인해볼 수 있다.
- 각각의 메시지를 리스트로 표현하려면 서버로부터 데이터를 받아야 한다. 이를 위해서 메시지를 서버에서 발행하고 발행한 메시지를 클라이언트에서 구독하는 형태로 구현한다. 물론 구독하는 데이터는 전체가 아니다. 현재 채팅방의 최신 데이터만 구독한다. 또한, 발행/구독에 의해서 자동으로 최신 데이터 상태로 갱신된다.
- onCreated는 인스턴스 생성 시 최초 한 번 호출될뿐더러, 함수 호출 시점이 DOM에 렌더링하는 onRendered 함수나 여타의 함수보다 앞서 호출된다. 따라서 구독 등의 설정이나 템플릿 공통 메소드 생성, 템플릿 공통 변수 설정 등의 초기화 작업을 onCreated에서 한다.
- 템플릿 위주로 작성하면 다른 템플릿이나 같은 템플릿 인스턴스 간 간섭을 받지 않는다. 또한, 다른 템플릿 안에 이식하기도 쉬워진다.
- 그라바타(gravatar)란 자신의 이메일 계정과 매칭되는 그림이다. 자신의 메일 계정으로 이미지를 등록하면 각종 애플리케이션에서 사용자의 이메일 정보를 통해 해당 이미지를 아이콘 형태로 사용할 수 있다. 물론 애플리케이션 API는 그라바타에서 제공한다.
- Meteor.startup 함수는 미티어가 클라이언트에서 최초 실행될 대 호출되는 함수다.
- ​