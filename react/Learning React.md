## Learning React

###### Alex Banks, Eve Porcello 지음

<br>

#### 옮긴이의 말

- 앵귤러 1이 한창 위용을 떨치던 2013년에 태어난 리액트는 앵귤러 2보다 널리 쓰이는 웹 개발 프레임워크로 자리 잡았다.
- 2015년에 공개된 리액트 네이티브의 등장으로 리액트는 웹 뿐만 아니라 모바일까지 아우르는 프레임워크로 자리 잡았다.
- 이 책은 최신 자바스크립트(ES6)의 핵심을 설명하고, ES6를 활용한 함수형 프로그래밍을 소개함으로써 리액트 프로그래밍에 필요한 기초를 다져준다.
- JSX를 사용하지 않은 순수 리액트 프로그램으로 리액트가 실제로 어떤 일을 하는지 내부 구조를 보여주고, 리액트 프로퍼티와 상태 관리, 컴포넌트 트리의 구성과 컴포넌트 확장을 다룬다.
- 리덕스와 테스팅, 리액트 라우터, 아이소모픽 프로그래밍 등 리액트를 사용한 애플리케이션 개발에 꼭 필요한 여러 개념을 이해하기 쉬운 예제로 잘 설명해준다.
- 이 책은 최신 자바스크립트와 함수형 프로그래밍 개념을 익히고 그를 바탕으로 리액트 개념을 잘 이해함으로써 리액트에 입문하고 싶은 개발자들에게 꼭 필요한 내용을 간결하고 쉽게 전달해준다.
- 리액트를 사용하면 UI 컴포넌트를 정의하고 선언적으로 활용해 UI를 구축하고 제어할 수 있다.

<br>

#### 이 책에 대하여

- 이 책의 목적은 여러 기술을 잘 정리해서 리액트를 즉시 활용할 수 있도록 돕는 것이며, 리덕스, 리액트 라우터, 빌드 도구 등도 설명한다.
- 이 책은 당신이 리액트를 잘 모른다고 가정하므로 맨 밑바닥부터 리액트의 기본을 모두 소개한다.

<br>

### CHAPTER 01

### 리액트 소개

- 리액트는 사용자 인터페이스를 설계할 때 사용하는 유명한 라이브러리이다.
- 페이스북은 데이터를 기반으로 하는 대규모 웹사이트를 서비스하면서 발생하는 여러 문제를 해결하기 위해 2013년에 리액트를 만들었다.
- 사용자들의 불안을 덜어주기 위해 리액트 코어 팀은 '왜 리액트인가?(Why React?)'라는 글을 썼다.
- 리액트는 애플리케이션을 작성하는 데 필요한 모든 기능을 제공하지 않으며, 아주 작은 라이브러리다.
- 리액트를 사용하면 자바스크립트 안에서 HTML처럼 보이는 코드를 작성할 수 있다.
- 리액트가 DOM에서 생기는 모든 문제를 해결해주며 다루기 쉽고 예상치 못한 동작으로 프로그래머가 놀라는 일도 없다는 내용에 매혹될 것이다.

<br>

#### 1.1 장애물

- 리액트 컴포넌트를 잠시라도 배운다면 이미 전혀 새로운 웹 개발 접근 방법과 사고방식을 접한 것이다.
- 리액트를 실제 상용 코드에 적용하기 위해 극복해야 하는 장애물이 몇 가지 있다.

<br>

###### 1.1.1 리액트는 라이브러리다

- 리액트 라이브러리는 작고, 전체 웹 개발 중 단 한 부분만 담당한다.
- 자바스크립트 개발환경에서 어떤 도구를 리액트와 함께 사용할 것인가는 당신에게 달려 있다.

<br>

###### 1.1.2 새로운 ECMAScript 문법

- 리액트는 자바스크립트 역사상 가장 중요하지만 혼란스러운 시기에 태어났다.
- 리액트 문서에서는 독자들이 최신 ECMAScript 문법을 잘 알고 있다고 가정한다.

<br>

###### 1.1.3 함수형 자바스크립트가 유명해짐

- 자바스크립트가 함수형 언어는 아니지만 함수형 언어의 기법을 자바스크립트 코드에 적용할 수는 있다.
- 리액트는 객체 지향 프로그래밍보다 함수형 프로그래밍을 더 강조한다.
- 상당히 많은 리액트 관련 문서가 독자들이 함수형 패러다임에 익숙하다고 가정하고 있다.

<br>

###### 1.1.4 자바스크립트 툴링 피로

- 과거에는 단지 자바스크립트 파일을 웹 페이지에 추가하면 되었다. 이제는 자바스크립트 파일을 빌드해야 하고 빌드 과정에서 자동화된 지속적 배포(continuous delivery) 프로세스를 사용하는 경우가 흔하다.
- JSX를 자바스크립트로 변환해야 한다.
- SCSS도 전처리해야 한다.
- 이 모두는 꼭 테스트를 통과해야 하는 컴포넌트다.
- 당신이 리액트와 친해지기 위해서는 웹팩 전문가가 되어 코드의 분리, 압축, 테스트 등 많은 작업을 처리해야 한다.

<br>

###### 1.1.5 리액트를 쉽게 배우기 위한 안내

- 이 책의 목표는 리액트와 관련 있는 모든 요소를 제대로 된 순서로 배열하여 리액트를 배우는 과정에서 발생할 수 있는 혼란을 피하고 리액트를 더 잘 배울 수 있는 토대를 만드는 것이다.
- 최신 자바스크립트에 익숙해질 수 있도록 변경된 자바스크립트 문법을 설명하는 것부터 시작한다.
- 함수형 자바스크립트를 소개해서 그 기법을 즉시 적용할 수 있게 하고, 리액트를 탄생시킨 함수형 프로그래밍의 패러다임을 이해할 수 있게 도울 것이다.
- 리액트에 대한 지식 기반을 닦을 것이다.
- 고급 리액트 기법을 사용해 색 관리 앱의 코드를 개선하며, 클라이언트 데이터 컨테이너로 리덕스를 소개하고, 제스트 테스팅과 리액트 라우터를 사용한 라우팅을 살펴보면서 앱 개발을 마친다.

<br>

#### 1.2 리액트의 미래

- 리액트는 여전히 새로운 라이브러리다.
- 리액트의 새 버전에는 리액트의 핵심 알고리즘을 재구현한 파이버(Fiber)가 들어갈 예정이다.
- 파이버의 목표는 렌더링 속도 향상이다. 파이버가 리액트 개발자들에게 어떤 영향을 끼칠지 가정해서 이야기하기는 조금 이르지만 앱이 렌더링되고 갱신되는 속도가 빨라질 것임은 확실하다.
- 이 책은 리액트를 사용해 단일 페이지 웹 앱(single page web application)을 개발할 때 필요한 기법을 다룬다.

<br>

#### 1.3 변화하는 기술 계속 따라잡기

- 이 책의 예제 중 몇 개는 사용한 도구가 버전업되어 사용할 수 없게 될 수도 있다. 비록 그런 경우라 할지라도 여전히 예제를 따라 해볼 수 있도록 package.json 파일에 정확한 버전 정보를 제공할 것이다.
- 이 책을 모두 읽은 뒤에도 공식 리액트 블로그의 정보를 계속 살펴보기 바란다.

<br>

#### 1.4 예제 파일 사용법

<br>

###### 1.4.1 깃허브 저장소

- https://github.com/moonhighway/learning-react
- https://github.com/enshahar/learning-react-kor

<br>

###### 1.4.2 리액트 개발자 도구

<br>

###### 1.4.3 노드 설치하기

- 노드(Node.js)는 브라우저 없이 사용할 수 있는 자바스크립트다.
- 노드의 런타임 환경을 사용해 풀스택 자바스크립트 애플리케이션을 개발할 수 있다.
- 노드는 오픈 소스며, 윈도우, 맥OS, 리눅스 등의 플랫폼에 설치할 수 있다.
- 리액트를 사용할 때 꼭 노드가 필요한 것은 아니다. 하지만 리액트를 다루는 동안 노드 패키지 관리자인 npm을 사용해 리액트가 의존하는 여러 라이브러리를 설치해야 한다. 노드를 설치하면 npm도 자동으로 설치된다.
- `$ node -v`

<br>

##### yarn을 사용한 의존성 패키지 관리

- npm을 대신할 수 있는 것으로 yarn이 있다.
- yarn 프로젝트는 페이스북 등의 회사가 의존관계를 더 신뢰성 있게 관리할 수 있도록 돕고 있다.
- `$ npm install -g yarn`
- `$ yarn add [패키지_이름]`
- yarn.lock 파일이 들어 있는 프로젝트가 바로 yarn을 사용하는 프로젝트다.

<br>

### CHAPTER 02

### 최신 자바스크립트

- 원래 자바스크립트는 웹 페이지에 상호작용을 손쉽게 추가하기 위해 만든 언어였다. 그 후 DHTML과 AJAX를 거치면서 더 활발히 사용되었다.
- 노드가 등장함에 따라 이제 자바스크립트는 풀스택 애플리케이션을 개발하는 데 쓰이는 언어가 되었다.
- 자바스크립트의 변화를 주도하는 기관이 바로 ECMA(European Computer Manufacturers Association, 에크마, 유럽 컴퓨터 제작자 협회)다.
- 자바스크립트 언어의 변화는 커뮤니티에 의해 이루어진다. 자바스크립트를 어떻게 변경할지 커뮤니티 멤버라면 누구든지 ECMA에 제안서를 제출할 수 있다.
- 자바스크립트 명세는 2015년 6월에 크게 개정되었으며 ECMAScript 6, ES6, ES2015, ES6Harmony 등 다양한 이름으로 불렸다.
- 2016년에는 그리 큰 변화가 없었다. 하지만 ES2017에는 쓸모 있는 기능이 상당히 많이 들어갈 것으로 보인다.

<br>

#### 2.1 ES6에서 변수 선언하기

- ES6 이전에는 var 키워드가 변수를 선언하는 유일한 방법이었다.

<br>

###### 2.1.1 const

- 상수(constant)는 값을 변경할 수 없는 변수다.

- ```javascript
  var pizza = true
  pizza = false

  console.log(pizza)	// false
  ```

- ```javascript
  const pizza = true
  pizza = false

  console.log(pizza)	// Uncaught SyntaxError:
  ```

<br>

###### 2.1.2 let

- 자바스크립트도 이제는 **구문적인 변수 영역 규칙**(lexical variable scoping)을 지원한다.

- 자바스크립트에서는 중괄호 {}를 사용해 코드 블록을 만든다. 함수의 경우 이런 코드 블록이 별도의 변수 영역을 이룬다. 하지만 if/else 문 같은 경우는 다르다. if/else 블록 안에서 변수를 새로 만들면 그 변수의 영역이 그 블록 안으로만 한정되지 않는다.

- ```javascript
  var topic = "자바스크립트"

  if (topic) {
      var topic = "리액트"
      console.log('블록', topic)	// 블록 리액트
  }

  console.log('글로벌', topic)	// 글로벌 리액트
  ```

- let 키워드를 사용하면 변수 영역을 코드 블록 안으로 한정시킬 수 있다. 그러므로 **글로벌 변수의 값을 보호할 수 있다.**

- ```javascript
  var topic = "자바스크립트"

  if (topic) {
      let topic = "리액트"
      console.log('블록', topic)	// 블록 리액트
  }

  console.log('글로벌', topic)	// 글로벌 자바스크립트
  ```

<br>

- 중괄호가 새로운 영역을 만들어내지 못하는 다른 부분으로는 for 루프가 있다.

- ```javascript
  var div, container = document.getElementById('container')

  for (var i = 0; i < 5; i++) {
      div = document.createElement('div')
      div.onclick = function() {
          alert('이것은 박스 #' + i + '입니다.')
      }
      container.appendChild(div)
  }
  ```

- 이 루프에서는 컨테이너 안에 5개의 div를 만든다. 각 div에는 그 div의 인덱스를 경고창에 표시해주는 onclick 핸들러가 할당된다. for 루프 안에서 i를 선언해도 글로벌 영역에 i가 생기며 i가 5가 될 때까지 for 루프를 돈다. 그러므로 5개의 div 박스 중 어느 것을 클릭하건 i의 값은 글로벌 변수 i에 있는 5이기 때문에 표시되는 인덱스는 모두 같다.

- 루프 카운터 변수 i를 var 대신 let을 사용해 선언하면 i의 영역이 블록으로 제한된다. 이제 각 박스를 클릭하면 해당 박스를 루프에서 생성할 때 사용한 i 값이 정상적으로 표시된다.

- ```javascript
  var div, container = document.getElementById('container')

  for (let i = 0; i < 5; i++) {
      div = document.createElement('div')
      div.onclick = function() {
          alert('이것은 박스 #' + i + '입니다.')
      }
      container.appendChild(div)
  }
  ```

<br>

###### 2.1.3 템플릿 문자열

- 템플릿 문자열(template string)은 문자열 연결 대신 사용할 수 있다. 문자열 중간에 변수를 삽입할 수도 있다.

- 전통적인 문자열 연결은 더하기 기호(+)로 문자열과 변수를 서로 이어붙이는 방식을 사용한다.

- ```javascript
  console.log(lastName + ", " + firstName + " " + middleName)
  ```

<br>

- 템플릿에서는 ${ }를 사용해 문자열 안에 변수를 집어넣을 수 있기 때문에 문자열을 단 하나만 사용해도 된다.

- ```javascript
  console.log(`${lastName}, ${firstName} ${middleName}`)
  ```

- 템플릿 문자열의 ${ }에는 값을 만들어내는 자바스크립트 식이라면 어떤 것이든 들어갈 수 있다.

- 템플릿 문자열은 공백(빈 칸 뿐 아니라 탭이나 개행 문자 등도 포함)을 유지한다.

- ```javascript
  `
  ${firstName} 님께,

  ${event} 티켓 ${qty} 건을 구매해주셔서 감사합니다.

  주문 상세 정보:
  	${lastName} ${firstName} ${middleName}
  	${qty} x $${price} = $${qty*price} 공연: ${event}

  공연 시작 30분 전까지 배부처에서 티켓을 수령하시키 바랍니다.

  감사합니다.

  ${ticketAgent} 드림
  `
  ```

<br>

###### 2.1.4 디폴트 파라미터

- C++이나 파이썬 같은 언어에서는 함수의 인자로 디폴트 값을 선언할 수 있다. ES6 명세에도 디폴트 파라미터(default parameter)가 추가되었다. 따라서 함수를 호출하면서 값을 지정하지 않으면 디폴트 값이 사용된다.

- ```javascript
  function logActivity(name="송진영", activity="테니스") {
      console.log(`${name}은 ${activity}를 좋아합니다.`)
  }
  ```

- logActivity 함수를 호출하면서 인자를 지정하지 않아도 디폴트 값을 사용해 함수가 정상적으로 실행된다.

- 문자열 뿐 아니라 어떤 타입의 값도 디폴트 값으로 사용할 수 있다.

- ```javascript
  var defaultPerson = {
      name: {
          first: "진영",
          last: "송"
      },
      favActivity: "테니스"
  }

  function logActivity(p=defaultPerson) {
      console.log(`${p.name.first}은 ${p.favActivity}를 좋아합니다.`)
  }
  ```

<br>

#### 2.2 화살표 함수 (arrow function)

- 화살표 함수는 ES6에 새로 추가된 유용한 기능이다. 이를 사용하면 function 키워드 없이도 함수를 만들 수 있으며, return을 사용하지 않아도 식을 계산한 값이 자동으로 반환된다.

- ```javascript
  // 인자로 받은 이름을 그 지역의 영주로 만드는 함수

  var lordify = function(firstname) {
      return `켄테베리의 ${firstname}`
  }

  console.log(lordify("송진영")) 	// 켄터베리의 송진영
  console.log(lordify("송주영")) 	// 켄터베리의 송주영
  ```


<br>

- ```javascript
  var lordify = first => `켄테베리의 ${firstname}`

  console.log(lordify("송진영")) 	// 켄터베리의 송진영
  console.log(lordify("송주영")) 	// 켄터베리의 송주영
  ```

<br>

- 화살표(=>)를 사용하면 모든 함수 정의를 한 줄로 끝낼 수 있다. function 키워드를 없앴고, 화살표가 어떤 값을 반환하는지 지정해주기 때문에 return도 없앴다. 또 다른 장점은 함수가 파라미터를 단 하나만 받는 경우 파라미터 주변의 괄호를 생략해도 된다는 것이다. 파라미터가 2개 이상이라면 괄호가 필요하다.

- ```javascript
  // 예전 방식

  var lordify = function(firstName, land) {
      return `${land}의 ${firstName}`
  }

  console.log(lordify('송진영', '더보')) 	// 더보의 송진영
  console.log(lordify('송진영', '멜번')) 	// 멜번의 송진영
  ```

- ```javascript
  // 새로운 방식

  var lordify = (firstName, land) => `${land}의 ${firstName}`

  console.log(lordify('송진영', '더보')) 	// 더보의 송진영
  console.log(lordify('송진영', '멜번')) 	// 멜번의 송진영
  ```

<br>

- 결과를 계산하기 위해 여러 줄을 사용해야 한다면 함수 본문 전체를 중괄호로 둘러싸야 한다.

- ```javascript
  // 예전 방식

  var lordify = function(firstName, land) {
      if (!firstName) {
  	    throw new Error('lordify에 이름을 넘겨야 합니다.')
      }
      if (!land) {
          throw new Error('영주에게는 영지가 있어야 합니다.')
      }
      return `${land}의 ${firstName}`
  }

  console.log(lordify('송진영', '더보'))	// 더보의 송진영
  console.log(lordify('송주영'))			 // Uncaught Error:
  ```

- ```javascript
  var lordify = (firstName, land) => {
      if (!firstName) {
  	    throw new Error('lordify에 이름을 넘겨야 합니다.')
      }
      if (!land) {
          throw new Error('영주에게는 영지가 있어야 합니다.')
      }
      return `${land}의 ${firstName}`
  }

  console.log(lordify('송진영', '더보'))	// 더보의 송진영
  console.log(lordify('송주영'))			 // Uncaught Error:
  ```

<br>

- 화살표 함수는 this를 새로 바인딩하지 않는다.

- ```javascript
  var gangwon = {
      resorts: ['용평', '평창', '강촌', '강릉', '홍천'],
      print: function(delay=1000) {
          setTimeout(function() {
              console.log(this.resorts.join(','))
          }, delay)
      }
  }

  gangwon.print()	// Uncaught TypeError:
  ```

- 이 오류는 this.resorts의 join 메소드를 호출하려고 시도했기 때문에 발생했다. 이 경우 this가 window 객체이기 때문에 resorts가 undefined다. 이런 방법 대신 화살표 함수를 사용하면 this 영역이 제대로 유지된다.

- ```javascript
  var gangwon = {
      resorts: ['용평', '평창', '강촌', '강릉', '홍천'],
      print: function(delay=1000) {
          setTimeout(() => {	// function() 대신 ()=> 사용
              console.log(this.resorts.join(','))
          }, delay)
      }
  }

  gangwon.print()	// 용평, 평창, 강촌, 강릉, 홍천
  ```

- join을 사용해 리조트 이름을 콤마(,)로 연결할 수 있다. 하지만 항상 영역을 염두에 두어야 한다. 화살표 함수는 새로운 this 영역을 만들어내지 않는다.

<br>

#### 세미콜론(;)의 사용

- 자바스크립트에서는 세미콜론이 선택사항이다. 저자의 기본 철학은 필요하지 않은 곳에 세미콜론을 넣지 않는 것이다. 이 책은 불필요한 구문을 최대한 사용하지 않는 미니멀리즘을 지향한다.

<br>

#### 2.3 ES6 트랜스파일링

- ​
































