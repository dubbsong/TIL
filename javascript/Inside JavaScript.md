## Inside JavaScript

송형주, 고현준 지음

<br>

### 지은이의 말

- 모든 학문 분야가 마찬가지겠지만, 특히 IT 분야에서 새로운 지식을 습득할 때 가장 중요한 것은 바로 그 분야의 핵심 원리를 정확히 이해하는 것이다.
- 원리를 정확히 이해하지 않은 개발 관련 지식으로 프로젝트를 진행했다가는 초기에는 빠른 성과를 낼 수 있을지 모르지만, 결국에는 안다고 대충 넘어갔던 부분이 개발자의 발목을 잡을 것이며, 이는 프로젝트 지연으로 이어질 수 있다.
- 필자는 자바스크립트가 굉장히 쉬운 언어이며, 무조건 코드를 가져다 쓰면 쉽게 개발할 수 있는 것으로 생각했었다.
- 급기야 자바스크립트 언어를 통해 서버 기반 프로그래밍을 할 수 있게끔 해주는 Node.js 프로그래밍을 진행했을 때 필자는 결국 두 손을 들고 말았다.
- Node.js 개발 경험이 있는 개발자들은 아마 이해할 수 있을 것이다. 자바스크립트 언어의 특성을 제대로 이해하는 것이 얼마나 중요한 것인지를.
- 학습법에 대해서 얘기할 때 가장 중요한 것이 바로 자신이 무엇을 모르는지를 정확히 파악해야 한다는 것이다. 그래야 무엇을 집중해서 공부해야 하는지를 정확히 파악할 수 있기 때문이다.

<br>

```javascript
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
```

<br>

### CHAPTER 01

### 자바스크립트 기본 개요

<br>

### 1. 소개

- 자바스크립트는 웹 브라우저에서 동작하는 스크립트 언어이다.
- 초창기 자바스크립트는 웹 페이지 제작에 있어서 보조적인 기능을 수행하기 위한 용도로써 사용했다. 대부분의 로직은 주로 웹 서버에서 실행되었고, 클라이언트인 웹 브라우저에서는 서버로부터 받은 HTML과 CSS, 데이터로 렌더링을 해주는 수준이었다. 이 시절에 자바스크립트는 그다지 중요한 역할을 담당하지 못했다. 다만 소수의 자바스크립트 프로그래머들에 의해 여러 가지 연구가 이루어지고, prototype.js와 같은 주요 라이브러리들이 개발된다. 특히, 과거에 서버에서 담당하던 역할들이 상당 부분 웹 브라우저로 이동하였고, 자바스크립트는 이 변화의 중심에 서게 된다. 게다가, jQuery의 등장으로 보다 쉽게 DOM(Document Object Model)을 핸들링하게 되면서 많은 발전을 이루었다.
- Node.js의 등장으로 자바스크립트를 이용한 서버 개발이 활발해지면서 더욱 많은 개발자가 자바스크립트를 사용하게 되었다.
- 여전히 많은 개발자가 아직 자바스크립트의 독특한 특성을 완벽하게 이해하지 못한 채 개발하고 있다.

<br>

### 2. 자바스크립트 활용 범위

- 이제는 자바스크립트만으로 웹 서버와 클라이언트인 웹 페이지 개발을 동시에 할 수 있는 수준까지 이른다.

<br>

##### 1) 웹 개발

jQuery를 비롯하여 knockout, backbone 등의 라이브러리는 웹 개발자에게 이미 중요한 컴포넌트로 자리 잡았다. 이제는 자바스크립트를 완벽하게 이해하지 못하면 좋은 웹 개발자라는 말을 들을 수 없게 되었다.

<br>

##### 2) 서버 개발

Node.js의 출현으로 자바스크립트를 활용한 서버 개발도 활발히 이루어지고 있다. express, socket.io 등의 라이브러리는 보다 쉽게 자바스크립트로 서버를 개발할 수 있는 환경을 제공해준다.

<br>

##### 3) 애플리케이션 개발

웹 기반 플랫폼에서 구동되는 애플리케이션 개발에 자바스크립트는 없어서는 안 될 핵심 요소가 되었다.특히 폰갭(PhoneGap)과 같은 크로스 플랫폼 개발 도구를 이용하면 DOM 요소를 핸들링하여 렌더링하는 것에서부터 더 나아가 디바이스의 동작에 대한 제어도 가능해지고 있다.

<br>

### 3. 자바스크립트의 핵심 개념

##### 1) 객체

자바스크립트의 거의 모든 것은 객체이다. '거의'라는 표현을 쓰는 이유는 몇 가지가 제외되기 때문이다. 바로 기본 데이터 타입인 boolean, number, string이다. 그리고 특별한 값인 null, undefined도 해당된다. 이를 제외한 나머지는 모두 객체이다. 앞의 세 가지 기본 데이터 타입은 모두 객체처럼 다룰 수도 있다. 그렇기 때문에 자바스크립트는 null과 undefined를 제외한 모든 것을 객체로 다룰 수 있다.

<br>

##### 2) 함수

자바스크립트에서는 함수도 객체로 취급한다. 일반적인 객체보다 조금 더 많은 기능이 있는 객체라고 할 수 있다. 하지만 이렇게 단순히 표현하기엔 자바스크립트에서 함수는 상당히 중요하다. 이는 함수가 일급 객체(First class object)로 다뤄지기 때문이다.

<br>

##### 3) 프로토타입

모든 객체는 숨겨진 링크(Link)인 프로토타입(Prototype)을 가진다. 이 링크는 해당 객체를 생성한 생성자의 프로토타입 객체를 가리킨다. 이 링크를 ECMAScript에서는 [[Prototype]]이라고 표현한다. 이 링크로 자바스크립트는 훨씬 더 다양하게 자신만의 자료 구조를 작성할 수 있다.

<br>

##### 4) 실행 컨텍스트와 클로저

자바스크립트는 자신만의 독특한 과정으로 실행 컨텍스트를 만들고 그 안에서 실행이 이루어진다. 이 실행 컨텍스트는 자신만의 유효 범위(Scope)를 갖는데, 이 과정에서 클로저를 구현할 수 있다. 이것은 자바스크립트를 제대로 이해하기 위한 핵심 개념이지만, 이해하기가 그렇게 쉬운 개념은 아닌 듯하다.

<br>

- 이 개념들은 자바스크립트 개발자가 되기 위해서 반드시 이해해야 한다.
- 자바스크립트는 이 핵심 개념들을 바탕으로 다음과 같은 프로그래밍이 가능하다.

<br>

### 4. 자바스크립트와 객체지향 프로그래밍

- 자바스크립트는 클래스를 지원하지 않지만 객체지향 프로그래밍이 가능하다.
- 프로토타입 체인과 클로저로 객체지향 프로그래밍에서 제시하는 상속, 캡슐화, 정보 은닉 등의 개념을 소화할 수 있다.

<br>

### 5. 자바스크립트와 함수형 프로그래밍

- 자바스크립트는 함수형 프로그래밍이 가능하다.
- 함수형 프로그래밍은 높은 수준의 모듈화를 가능케 하는 매우 효율적인 프로그래밍 방법이다.
- 자바스크립트는 주요 특성인 일급 객체로서의 함수 특성과 클로저를 활용하여 함수형 프로그래밍을 가능케 한다.
- 함수형 프로그래밍 기법으로 구현된 코드는 제 3자가 해석하기가 상당히 난해하다.

<br>

### 6. 자바스크립트의 단점

- 자바스크립트는 굉장히 유연한 언어이고 뛰어난 표현력을 가지고 있다. 하지만 이러한 특성 때문에 종종 디버깅에 어려움을 겪기도 한다. 특히, 느슨한 타입 체크는 개발자에게 타입 체크에 대한 자유를 주지만, 컴파일 타임에서 잡지 못하는 오류는 고스란히 런타임 오류로 발견된다.
- 자바스크립트를 둘러싼 중요한 논란 중에 하나가 전역 객체의 존재이다. 최상위 레벨의 객체들은 모두 전역 객체 안에 위치하는데, 이는 이름 충돌의 위험성이 있다. 프로그래머는 이 부분에 대해 신경 쓰는 것을 게을리하면 안 된다.

<br>

### CHAPTER 02

### 자바스크립트 개발 환경

- 파이어폭스에서 파이어버그(firebug)라는 애드온이 나오고, 크롬에서 크롬 개발자 도구를 지원하면서 한결 디버깅이 간편해졌다.

<br>

### CHAPTER 03

### 자바스크립트 데이터 타입과 연산자

- 모든 언어의 기본은 데이터 타입을 파악하는 것에서부터 시작한다.
  - 기본 타입 - Number, String, Boolean, undefined, null
  - 참조 타입 - Object - Array, Functino, 정규표현식

<br>

<br>

### 1) 자바스크립트 기본 타입

- 자바스크립트에서 기본 타입은 **숫자, 문자열, 불린값**을 비롯해 **null**과 **undefined**라는 타입이 있다. 이들 타입의 특징은 그 자체가 하나의 값을 나타낸다는 것이다. 
- typeof 연산자는 피연산자의 타입을 리턴한다.
- 자바스크립트는 **느슨한 타입 체크 언더**다. 엄격한 타입 체크 언어인 C언어는 변수를 선언할 때 변수에 저장할 데이터의 종류(문자, 정수, 실수 등)에 따라 char, int, float 등의 예약어를 이용해서 변수의 데이터 타입을 지정해야 한다. 그리고 이렇게 지정된 변수의 데이터 타입에 맞게 해당 변수에 값을 저장하고 사용하는 것이 일반적이다.
- 반면 자바스크립트는 변수를 선언할 때 타입을 미리 정하지 않고, var라는 한 가지 키워드로만 변수를 선언한다. 이렇게 선언된 변수에는 어떤 타입의 데이터라도 저장하는 것이 가능하다. 따라서 자바스크립트는 변수에 어떤 형태의 데이터를 저장하느냐에 따라 해당 변수의 타입이 결정된다. 이는 C나 자바같이 엄격한 타입 체크 언어에 익숙한 독자들에겐 어색할 수도 있을 것이다.

<br>

```javascript
var intNum = 10;
var floatNum = 0.1;
var singleQuoteStr = 'single quote string';
var boolVar = true;
var emptyVar;
var nullVar = null;

console.log(
	typeof intNum,			// number
  	typeof floatNum,		// number
  	typeof singleQuoteStr,	// string
  	typeof boolVar,			// boolean
  	typeof emptyVar,		// undefined
  	typeof nullVar			// object
);
```

<br>

#### 1)) 숫자

- C언어의 경우 정수냐 실수냐에 따라 int, long, float, double 등과 같은 다양한 숫자 타입이 존재하지만, 자바스크립트는 하나의 숫자형만 존재한다.
- 자바스크립트에서는 모든 숫자를 64비트 부동 소수점 형태로 저장한다. 이는 C언어의 double 타입과 유사하다.
- 자바스크립트에서는 정수형이 따로 없고, 모든 숫자를 실수로 처리하므로 나눗셈 연산을 할 때는 주의해야 한다.
- C언어에서 5/2는 소수 부분을 버린 2가 출력된다. 반면에 자바스크립트에서는 5와 2가 둘 다 정수가 아닌 실수로 취급되므로 소수 부분까지 출력된 2.5가 결과값이 된다. C언어에 익숙한 개발자의 경우는 특히 주의해야 한다.
- C언어 나눗셈 연산 결과와 같이 소수 부분을 버린 정수 부분만을 구하고 싶다면, **Math.floor()** 메소드를 사용하면 된다.

```javascript
var num = 5 / 2;

console.log(num);				// 2.5
console.log(Math.floor(num));	// 2
```

<br>

#### 2)) 문자열

- 문자열은 작은 따옴표('')나 큰 따옴표("")로 생성한다.
- 문자열은 문자 배열처럼 인덱스를 이용해서 접근할 수 있다.
- 한 번 정의된 문자열은 변하지 않는다. 한 번 생성된 문자열은 읽기만 가능하지 수정이 불가능하다.

```javascript
var str = 'test';
console.log(str[0], str[1], str[2], str[3]);	// t e s t

// 첫 글자를 대문자로 변경해도 변하지 않는다.
str[0] = 'T';
console.log(str);	// test
```

<br>

#### 3)) 불린값

- 자바스크립트는 true와 false 값을 나타내는 불린 타입을 가진다.

<br>

#### 4)) null과 undefined

- 이 두 타입은 모두 **'값이 비어있음'**을 나타낸다.
- 자바스크립트 환경 내에서 기본적으로 값이 할당되지 않은 변수는 undefined 타입이며, undefined 타입의 변수는 변수 자체의 값 또한 undefined이다. **undefiend는 타입이자, 값을 나타낸다**는 것에 주의하자.
- null 타입 변수의 경우는 개발자가 명시적으로 값이 비어있음을 나타내는 데 사용한다.
- 주의할 점은 nullVar의 typeof 결과가 null이 아니라 **object**라는 것이다. 때문에 자바스크립트에서는 null 타입 변수인지를 확인할 때 typeof 연산자를 사용하면 안 되고, 일치 연산자(===)를 사용해서 변수의 값을 직접 확인해야 한다.

```javascript
var nullVar = null;

console.log(typeof nullVar === null);	// false
console.log(nullVar === null);			// true
```

<br>

<br>

### 2) 자바스크립트 참조 타입 (객체 타입)

- 자바스크립트에서 숫자, 문자열, 불린값, null, undefined 같은 기본 타입을 제외한 모든 값은 객체다. 따라서 배열, 함수, 정규표현식 등도 모두 결국 자바스크립트 객체로 표현된다.
- 객체는 **'이름(key):값(valuse)'** 형태의 프로퍼티들을 저장하는 컨테이너로서, 컴퓨터 과학 분야에서 해시(Hash)라는 자료구조와 상당히 유사하다.
- 자바스크립트에서 기본 타입은 하나의 값만을 가지는 데 비해, 참조 타입인 객체는 여러 개의 프로퍼티들을 포함할 수 있으며, 이러한 객체의 프로퍼티는 기본 타입의 값을 포함하거나, 다른 객체를 가리킬 수도 있다. 이러한 프로퍼티의 성질에 따라 객체의 프로퍼티는 함수로 포함할 수 있으며, 자바스크립트에서는 이러한 프로퍼티를 **메소드**라고 부른다.

<br>

#### 1)) 객체 생성

- 자바에서는 클래스를 정의하고, 클래스의 인스턴스를 생성하는 과정에서 객체가 만들어진다.
- 자바스크립트에서는 클래스라는 개념이 없고, 객체 리터럴이나 생성자 함수 등 별도의 생성 방식이 존재한다.
- 자바스크립트에서 객체를 생성하는 방법은 크게 세 가지가 있다. **Object() 객체 생성자 함수**를 이용하는 방법, **객체 리터럴**을 이용하는 방법, **생성자 함수**를 이용하는 방법이다.

<br>

<br>

###### 1))) Object() 생성자 함수

```javascript
var foo = new Object(); 	// 빈 객체 생성

foo.name = 'foo';			// 객체 프로퍼티 생성
foo.age = 30;
foo.gender = 'male';

console.log(typeof foo);	// object
console.log(foo);			// {name: "foo", age: 30, gender: "male"}
```

<br>

<br>

###### 2))) 객체 리터럴

- 리터럴이란 용어의 의미는 표기법이라고 생각하면 된다. 따라서 객체 리터럴이란 객체를 생성하는 표기법을 의미한다.
- 간단한 표기법만으로도 객체를 생성할 수 있는 강력한 자바스크립트 문법이다.
- 객체 리터럴은 중괄호({})를 이용해서 객체를 생성한다.
- {} 안에 아무것도 적지 않은 경우는 빈 객체가 생성되며, 중괄호 안에 "프로퍼티 이름" : "프로퍼티값" 형태로 표기하면, 해당 프로퍼티가 추가된 객체를 생성할 수 있다.
- 프로퍼티 이름은 문자열이나 숫자가 올 수 있다.
- 프로퍼티 값으로는 자바스크립트의 값을 나타내는 어떤 표현식도 올 수 있으며, 이 값이 함수일 경우 이러한 프로퍼티를 **메소드**라고 부른다.

```javascript
var foo = {				// 객체 리터럴 방식으로 객체 생성
  name : 'foo',
  age: 30,
  gender: 'male'
};

console.log(typeof foo);		// object
console.log(foo);				// {name: "foo", age: 30, gender: "male"}
```

<br>

<br>

###### 3))) 생성자 함수 이용

- 자바스크립트의 경우 함수를 통해서도 객체를 생성할 수 있다.

<br>

<br>

#### 2)) 객체 프로퍼티 읽기/쓰기/갱신

- 객체는 새로운 값을 가진 프로퍼티를 생성하고, 생성된 프로퍼티에 접근해서 해당 값을 읽거나 또는 원하는 값으로 프로퍼티의 값을 갱신할 수 있다.
- 객체의 프로퍼티에 접근하는 두 가지 방법
  - 대괄호([]) 표기법
  - 마침표(.) 표기법

```javascript
var foo = {
  name: 'foo',
  major: 'computer science'
};


// 객체 프로퍼티 읽기
console.log(foo.name);		// foo
console.log(foo['name']);	// foo
console.log(foo.nickname);	// undefined


// 객체 프로퍼티 갱신
foo.major = 'civil engineering';
console.log(foo.major);		// civil engineering
console.log(['major']);		// civil engineering


// 객체 프로퍼티 동적 생성
foo.age = 30;
console.log(foo.age);;		// 30


// 대괄호 표기법을 사용해야 하는 경우
foo['full-name'] = 'foo bar';
console.log(foo['full-name']);		// foo bar
console.log(foo.full-name);			// NaN
console.log(foo.full);				// undefined
console.log(name);					// undefined
```

<br>

- NaN(Not a Number)는 수치 연산을 해서 정상적인 값을 얻지 못할 때 출력되는 값이다. 가령 1- 'hello'라는 연산의 결과는 NaN이다.

<br>

<br>

#### 3)) for in 문과 객체 프로퍼티 출력

- for in 문을 사용하면 객체에 포함된 모든 프로퍼티에 대해 루프를 수행할 수 있다.

```javascript
var foo = {
  name: 'foo',
  age: 30,
  major: 'computer science'
};


// for in 문을 이용한 객체 프로퍼티 출력
var prop;
for (prop in foo) {
  console.log(prop, foo[prop]);
}									// name foo
									// age 30
									// major computer science
```

<br>

<br>

#### 4)) 객체 프로퍼티 삭제

- 자바스크립트에서는 객체의 프로퍼티를 **delete 연산자**를 이용해 즉시 삭제할 수 있다.
- 주의할 점은 delete 연산자는 객체의 프로퍼티를 삭제할 뿐, 객체 자체를 삭제하지는 못한다는 것이다.

```javascript
var foo = {
  name: 'foo',
  nickname: 'babo'
};

console.log(foo.nickname);		// babo
delete foo.nickname;
console.log(foo.nickname);		// undefined

delete foo;						// 객체 삭제 시도
console.log(foo.name);			// foo
```

<br>

<br>

### 3) 참조 타입의 특성

- 자바스크립트에서는 기본 타입인 숫자, 문자열, 불린값, null, undefined 5가지를 제외한 모든 값은 객체다. 배열이나 함수 또한 객체로 취급된다. 이러한 객체는 자바스크립트에서 참조 타입이라고 부른다.객체의 모든 연산이 실제 값이 아닌 참조값으로 처리되기 때문이다.

```javascript
var objA = {
  val: 40
};

var objB = objA;

console.log(objA.val);		// 40
console.log(objB.val);		// 40


objB.val = 50;
console.log(objA.val);		// 50
console.log(objB.val);		// 50
```

- objA와 objB 모두 동일한 객체를 참조하고 있다.
- 변수 objA는 실제로는 객체를 참조하는 값을 저장할 뿐 실제 객체를 나타내지는 않는다. 따라서 **objA 객체는 참조 변수 objA가 가리키고 있는 객체**를 나타낸다고 생각하자.

<br>

<br>

#### 1) 객체 비교

동등 연산자(==)를 사용하여 두 객체를 비교할 때도 객체의 프로퍼티값이 아닌 참조값을 비교한다는 것에 주의하자.

```javascript
var a = 100;
var b = 100;

var objA = {value: 100};
var objB = {value: 100};
var objC = objB;

console.log(a == b);			// true
console.log(objA == objB);		// false
console.log(objB == objC);		// true
```

- a와 b는 기본 타입의 변수다. 기본 타입의 경우 동등 연산자(==)를 이용해서 비교할 때 **값을 비교한다.**
- objA와 objB는 다른 객체지만, 같은 형태의 프로퍼티값을 가지고 있다. 하지만 동등 연산자(==)로 두 객체를 비교하면 결과는 false가 된다. 기본 타입의 경우는 값 자체를 비교해서 일치 여부를 판단하지만, 객체와 같은 참조 타입의 경우는 **참조값이 같아야 true**가 된다.
- objB와 objC는 동일한 객체를 참조하고 있다.

<br>

<br>

#### 2)) 참조에 의한 함수 호출 방식

- 기본 타입과 참조 타입의 경우는 함수 호출 방식도 다르다.
- 기본 타입의 경우는 **값에 의한 호출(Call By Value) 방식**으로 동작한다. 즉, 함수를 호출할 때 인자로 기본 타입의 값을 넘길 경우, 호출된 함수의 매개변수로 **복사된 값**이 전달된다. 때문에 함수 내부에서 매개변수를 이용해 값을 변경해도, 실제로 호출된 변수의 값이 변경되지는 않는다.
- 객체와 같은 참조 타입의 경우는 함수를 호출할 때 **참조의 의한 호출(Call By Reference) 방식**으로 동작한다. 즉, 함수를 호출할 때 인자로 참조 타입인 객체를 전달할 경우, 객체의 프로퍼티값이 함수의 매개변수로 복사되지 않고, 인자로 넘긴 객체의 참조값이 그대로 함수 내부로 전달된다. 때문에 함수 내부에서 참조값을 이용해서 인자로 넘긴 실제 객체의 값을 변경할 수 있는 것이다.

```javascript
var a = 100;
var objA = {value: 100};

function changeArg(num, obj) {
  num = 200;
  obj.value = 200;
  
  console.log(num);		// 200
  console.log(obj);		// {value: 200}
}

changeArg(a, objA);

console.log(a);			// 100
console.log(objA);		// {value: 200}
```

- changeArg() 함수를 호출하면서, 인자값으로 기본 타입인 숫자를 가진 변수 a와 참조 타입인 객체 objA를 넘겼다. 함수 내부에서 매개변수 num과 obj를 이용해 인자로 전달된 a와 objA.val의 값을 100에서 200으로 바꿨지만, 함수 호출이 끝난 후에는 참조 타입인 객체의 objA.value 프로퍼티만이 실제 값으로 변해 있다는 것을 확인할 수 있다.
- 함수 내부에서 매개변수 num을 이용해서 100을 200으로 바꿔도 변수 a의 값은 변하지 않는다는 것을 알 수 있다. 반면에 객체의 경우는 매개변수 obj로 objA가 참조하는 객체의 위치 값이 그대로 전달되므로 실제 객체의 value 프로퍼티값이 changeArg() 함수 호출 후에도 적용되는 것이다.

<br>

<br>

### 4) 프로토타입

- 자바스크립트의 **모든 객체는 자신의 부모 역할을 하는 객체와 연결되어 있다.** 그리고 이것은 마치 객체지향의 상속 개념과 같이 부모 객체의 프로퍼티를 마치 자신의 것처럼 쓸 수 있는 것 같은 특징이 있다. 이러한 부모 객체를 **프로토타입 객체**(짧게는 **프로토타입**)라고 부른다.

```javascript
var foo = {
  name: 'foo',
  age: 30
};

console.log(foo.toString());  // [object Object]
console.dir(foo);			  // ▼Object
							  //		age: 30
							  //		name: "foo"
							  //	  ▼__proto__: Object
							  //		▶︎constructor: ƒ Object()
							  //		▶︎hasOwnProperty: ƒ hasOwnProperty()
							  //		▶︎isPrototypeOf: ƒ isPrototypeOf()
							  //		▶︎propertyIsEnumerable: ƒ propertyIsEnumerable()
							  //		▶︎toLocaleString: ƒ toLocaleString()
							  //		▶︎toString: ƒ toString()
							  //		▶︎...
```

- foo 객체는 toString() 메소드가 없으므로 에러가 발생해야 하지만, 정상적으로 결과가 출력되었다. 에러가 발생하지 않고 예제가 실행될 수 있는 이유는 **foo 객체의 프로토타입**에 toString() 메소드가 이미 정의되어 있고, foo 객체가 상속처럼 toString() 메소드를 호출했기 때문이다.
- 실행결과를 보면, 객체 리터럴로 생성한 name과 age 프로퍼티 이외에도 foo 객체에 **\_\_proto\_\_프로퍼티**가 있다는 것을 확인할 수 있다. 이 프로퍼티가 바로 foo 객체의 부모인 **프로토타입 객체**를 가리킨다. 이 객체의 다음 부분에 toString() 메소드가 정의되어 있다는 것을 알 수 있다. 때문에 foo.toString() 메소드가 제대로 출력된 것이다.

<br>

- ECMAScript 명세서에는 자바스크립트의 **모든 객체는 자신의 프로토타입을 가리키는 [[Prototype]]이라는 숨겨진 프로퍼티**를 가진다고 설명하고 있다.
- 크롬 브라우저에서는 \_\_proto\_\_가 바로 이 숨겨진 [[Prototype]] 프로퍼티를 의미한다.
- foo 객체는 자신의 부모 객체를 \_\_proto\_\_라는 내부 프로퍼티로 연결하고 있는 것이다.
- 모든 객체의 프로토타입은 자바스크립트의 룰에 따라 객체를 생성할 때 결정된다.
- 객체 리터럴 방식으로 생성된 객체의 경우 **Object.prototype 객체**가 프로토타입 객체가 된다.
- foo 객체는 foo.toString()과 같이 자신의 프로토타입인 Object.prototype 객체에 포함된 다양한 메소드를 자신의 프로퍼티인 것처럼 상속받아 사용할 수 있다.
- 부모 객체를 동적으로 바꿀 수도 있다. 이러한 특징을 활용해서 객체 상속 등의 기능을 구현한다.

<br>

<br>

### 5) 배열

- 배열은 자바스크립트 객체의 특별한 형태다.
- C언어나 자바의 배열과 같은 기능을 하는 객체지만, 이들과는 다르게 크기를 지정하지 않아도 되고, 어떤 위치에 어느 타입의 데이터를 저장하더라도 에러가 발생하지 않는다.

<br>

<br>

#### 1)) 배열 리터럴

- **배열 리터럴**은 자바스크립트에서 새로운 배열을 만드는 데 사용하는 표기법이다.
- 배열 리터럴은 **대괄호([])**를 사용한다.

```javascript
var colorArr = ['orange', 'yellow', 'blue', 'green', 'red'];

console.log(colorArr[0]);	// orange
console.log(colorArr[1]);	// yellow
console.log(colorArr[4]);	// red
```

- 객체 리터럴에서는 프로퍼티 이름과 프로퍼티값을 모두 표기해야 하지만, 배열 리터럴에서는 **각 요소의 값**만을 포함한다.
- 객체가 **프로퍼티의 이름**으로 대괄호나 마침표 표기법을 이용해 해당 프로퍼티에 접근했다면, 배열의 경우는 대괄호 내에 접근하고자 하는 원소에 **배열 내 위치 인덱스값**을 넣어서 접근한다.
- 배열 내의 첫 번째 원소는 인덱스 0부터 시작한다.

<br>

#### 2)) 배열의 요소 생성

- 객체가 동적으로 프로퍼티를 추가할 수 있듯이, 배열도 동적으로 배열 원소를 추가할 수 있다.
- 자바스크립트 배열의 경우는 값을 순차적으로 넣을 필요 없이 아무 인덱스 위치에 값을 동적으로 추가할 수 있다.

```javascript
var emptyArr = [];			// 빈 배열 생성
console.log(emptyArr[0]);	// undefined

emptyArr[0] = 100;			// 배열 요소 동적 생성
emptyArr[3] = 'eight';
emptyArr[7] = true;

console.log(emptyArr);	// [100, undefined × 2, "eight", undefined × 3, true]
console.log(emptyArr.length);	// 8
```

- 배열도 또한 자바스크립트 객체이기 때문에 객체에서도 포함하지 않은 객체의 프로퍼티에 접근한 경우 undefined가 출력된 것과 같이 배열의 경우도 값이 없는 원소에 접근할 경우 undefined가 출력된다.
- 배열의 요소는 숫자나 문자열 같은 기본 타입의 값들을 포함해서, 객체나 함수, 배열 등과 같이 자바스크립트의 모든 데이터 타입의 값을 포함할 수 있다.
- console.log(emptyArr) 문을 출력하면, 8개의 배열 요소 값이 출력된다. **이것은 자바스크립트가 배열의 크기를 현재 배열의 인덱스 중 가장 큰 값을 기준으로 정하기 때문이다.**
- 값이 할당되지 않은 인덱스의 요소는 undefined 값을 기본으로 가진다.
- 배열의 원소 개수는 length 프로퍼티를 출력하면 알 수 있다.
- 자바스크립트의 **모든 배열은 이러한 length 프로퍼티가 있으며**, 이것은 배열의 동작을 이해하는 데 아주 중요하다.

<br>

#### 3) 배열의 length 프로퍼티

- 자바스크립트의 모든 배열은 **length 프로퍼티**가 있다.
- length 프로퍼티는 배열의 원소 개수를 나타내지만, 실제로 배열에 존재하는 원소 개수와 일치하는 것은 아니다.
- length 프로퍼티는 **배열 내의 가장 큰 인덱스에 1을 더한 값이다.**

```javascript
var arr = [];
console.log(arr.length);	// 0

arr[0] = 0;		// arr.length = 1
arr[1] = 1;		// arr.length = 2
arr[2] = 2;		// arr.length = 3
arr[100] = 100;
console.log(arr.length);	// 101
```

- 배열의 인덱스 100 위치에 값을 저장한 순간, 가장 큰 인덱스 값인 100을 기준으로 해서 배열의 length 값이 101로 늘어난다. 하지만 실제 메모리는 length 크기처럼 할당되지는 않는다.

```javascript
var arr = [0, 1, 2];
console.log(arr.length);	// 3

arr.length = 5;
console.log(arr);			// [0, 1, 2, undefined x 2]

arr.length = 2;
console.log(arr);			// [0, 1]
console.log(arr[2]);		// undefined
```

<br>

<br>

###### 1))) 배열 표준 메소드와 length 프로퍼티

- 자바스크립트는 배열에서 사용 가능한 다양한 표준 메소드를 제공한다.
- 배열 메소드는 **length 프로퍼티**를 기반으로 동작한다.
- push() 메소드는 인수로 넘어온 항목을 배열의 끝에 추가하는 자바스크립트 표준 배열 메소드이다. 이 메소드는 배열의 현재 length 값의 위치에 새로운 원소값을 추가한다. 배열의 length 프로퍼티는 '현재 배열의 맨 마지막 원소의 인덱스+1'을 의미하므로 결국 length 프로퍼티가 가리키는 인덱스에 값을 저장하는 것은 배열의 끝에 값을 추가하는 것과 같은 결과가 되기 때문이다.

```javascript
var arr = ['zero', 'one', 'two'];

arr.push('three');		// push() 메소드 호출
console.log(arr);		// ['zero', 'one', 'two', 'three']

arr.length = 5;
arr.push('four');
console.log(arr);	// ['zero', 'one', 'two', 'three', undefined, 'four']
```

- 배열의 length 프로퍼티는 배열 메소드 동작에 영향을 줄 수 있을 만큼 중요한 프로퍼티이다.

<br>

<br>

#### 4) 배열과 객체

- 배열 역시 객체다. 하지만 배열은 일반 객체와는 약간 차이가 있다.

```javascript
// 배열
var colorsArray = ['orange', 'yellow', 'green'];
console.log(colorsArray[0]);		// orange
console.log(colorsArray[1]);		// yellow
console.log(colorsArray[2]);		// green


// 객체
var colorsObj = {
  '0': 'orange',
  '1': 'yellow',
  '2': 'green'
};
console.log(colorsObj[0]);		// orange
console.log(colorsObj[1]);		// yellow
console.log(colorsObj[2]);		// green


// typeof 연산자 비교
console.log(typeof colorsArray);	// object
console.log(typeof colorsObj);		// object


// length 프로퍼티
console.log(colorsArray.length);		// 3
console.log(colorsObj.length);		// undefined


// 배열 표준 메소드
colorsArray.push('red');	// ['orange', 'yellow', 'green', 'red']
colorsObj.push('red');		// Uncaught TypeError: colorsObj.push is not a function
```

- 객체의 프로퍼티 접근을 설명할 때, 대괄호 안에는 접근하려는 프로퍼티의 속성을 **문자열 형태**로 적어야 한다. 때문에 colorsObj[0]이 아니라 colorsObj['0']의 형태로 기입하는 것이 맞다. 하지만 colorsObj[0]의 결과가 'orange'로 정상적인 결과가 출력됐다. 이것은 자바스크립트 엔진이 [] 연산자 내에 숫자가 사용될 경우, 해당 숫자를 자동으로 문자열 형태로 바꿔주기 때문이다.
- typeof 연산 결과는 배열과 객체가 모두 **object**라는 것을 기억하자. 즉, 자바스크립트도 배열을 객체라고 생각한다는 것이다.
- colorsObj는 배열이 아니므로 push()와 같은 **표준 배열 메소드**를 사용할 수 없다. 배열과 객체가 자신의 부모인 프로토타입 객체가 서로 다르기 때문이다.
- 객체 리터럴 방식으로 생성한 객체의 경우, 객체 표준 메소드를 저장하고 있는 **Object.prototype 객체**가 프로토타입이다. 반면에 배열의 경우 **Array.prototype 객체**가 부모 객체인 프로토타입이 된다.
- Array.prototype 객체의 프로토타입은 Object.prototype 객체가 된다. 객체는 자신의 프로토타입이 가지는 모든 프로퍼티 및 메소드들을 상속 받아 사용할 수 있다고 했으므로, 배열은 Array.prototype에 포함된 배열 표준 메소드와 Object.prototype의 표준 메소드들을 모두 사용할 수 있다.

```javascript
var emptyArray = [];	// 배열 리터럴을 통한 빈 배열 생성
var emptyObj = {};		// 객체 리터럴을 통한 빈 객체 생성

console.log(emptyArray.__proto__);
// 배열의 프로토타입(Array.prototype) 출력
// [constructor: ƒ, concat: ƒ, pop: ƒ, push: ƒ, shift: ƒ, …]
console.log(emptyObj.__proto__);
// 객체의 프로토타입(Object.prototype) 출력
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
```

<br>

<br>

#### 5) 배열의 프로퍼티 동적 생성

```javascript
// 배열 생성
var arr = ['zero', 'one', 'two'];
console.log(arr.length)				// 3


// 프로퍼티 동적 추가
arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length);		// 3


// 배열 원소 추가
arr[3] = 'red';
console.log(arr.length);		// 4


// 배열 객체 출력
// 배열의 모든 프로퍼티를 출력한 결과
// 배열도 객체처럼 'key: value' 형태로 배열 원소 및 프로퍼티 등이 있다.
console.dir(arr);	// ▼Array(4)
					//		0: "zero"
					//		1: "one"
					//		2: "two"
					//		3: "red"
					//		color: "blue"
					//		name: "number_array"
					//		length: 4
					//	   ▶︎__proto__: Array(0)
```

- arr 배열에 동적으로 color와 name 프로퍼티를 추가했다. 주목할 점은 배열에 동적 프로퍼티가 추가될 경우는 배열의 length 값이 3으로 바뀌지 않는다는 것이다. 그런 다음 다시 arr[3]에 배열 원소를 추가했을 대 length 값이 4로 바꼈음을 확인할 수 있다. 즉, **배열의 length 프로퍼티는 배열 원소의 가장 큰 인덱스가 변했을 경우만 변경된다.**

<br>

#### 6) 배열의 프로퍼티 열거

- 객체는 for in 문으로 프로퍼티를 열거한다.
- 배열도 객체이므로 for in 문을 사용해서 배열 내의 모든 프로퍼티를 열거할 수 있지만, 이렇게 되면 불필요한 프로퍼티가 출력될 수 있으므로 되도록 for 문을 사용하는 것이 좋다.

```javascript
for (var prop in arr) {
  console.log(prop, arr[prop]);
}
// 0 zero
// 1 one
// 2 two
// 3 red
// color blue
// name number_array

for (var i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}
// 0 "zero"
// 1 "one"
// 2 "two"
// 3 "red"
```

- for in 문은 0에서 3까지 배열 요소들을 포함해서, color와 name 프로퍼티까지 출력된 반면, for 문은 정확히 배열의 요소만을 출력하고 있다.

<br>

#### 7) 배열 요소 삭제

- 배열도 객체이므로, 배열 요소나 프로퍼티를 삭제하는 데 delete 연산자를 사용할 수 있다.

```javascript
var arr = ['zero', 'one', 'two', 'three'];

delete arr[2];
console.log(arr);			// ["zero", "one", undefined, "three"]
console.log(arr.length);	// 4
```

- delete 연산자로 배열 요소 삭제 후에도 배열의 length 값은 변하지 않는다. 즉, delete 연산자는 해당 요소의 값을 undefined로 설정할 뿐 원소 자체를 삭제하지는 않는다.
- 때문에 보통 배열에서 요소들을 완전히 삭제할 경우 **splice() 배열 메소드**를 사용한다.

```javascript
var arr = ['zero', 'one', 'two', 'three'];

arr.splice(2, 1);
console.log(arr);			// ["zero", "one", "three"]
console.log(arr.length);	// 3
```

- delete 연산자와는 다르게 배열 요소를 완전히 없애게 된다. 따라서 배열의 요소 개수도 3개가 됐다.

<br>

#### 8) Array() 생성자 함수

- 배열은 일반적으로 배열 리터럴로 생성하지만, 배열 리터럴도 결국 자바스크립트 기본 제공 **Array() 생성자 함수**로 배열을 생성하는 과정을 단순화시킨 것이다.
- 생성자 함수로 배열과 같은 객체를 생성할 때는 반드시 new 연산자를 같이 써야 한다.
- Array() 생성자 함수는 호출할 때 인자 개수에 따라 동작이 다르므로 주의해야 한다.
  - 호출할 때 인자가 1개이고, 숫자인 경우: 호출된 인자를 length로 갖는 빈 배열 생성
  - 그 외의 경우: 호출된 인자를 요소로 갖는 배열 생성

```javascript
var foo = new Array(3);
console.log(foo);			// [undefined x 3]
console.log(foo.length);	// 3


var bar = new Array(1, 2, 3);
console.log(bar);			// [1, 2, 3]
console.log(bar.length);	// 3
```

<br>

#### 9) 유사 배열 객체

- **length 프로퍼티**는 배열의 동작에 있어서 중요한 프로퍼티이다.
- length 프로퍼티를 가진 객체를 **유사 배열 객체(array-like objects)**라고 부른다.
- 유사 배열 객체의 가장 큰 특징은 객체임에도 불구하고, 표준 배열 메소드를 사용하는 게 가능하다는 것이다.

```javascript
var arr = ['bar'];
var obj = {
  name: 'foo',
  length: 1
};

arr.push('baz');
console.log(arr);		// ["bar", "baz"]

obj.push('baz');		// Uncaught TypeError: obj.push is not a function
```

- 배열 arr는 push() 표준 배열 메소드를 활용해서 'baz' 원소를 추가하는 것이 가능한 반면에, 유사 배열 객체 obj는 당연히 배열이 아니므로 push() 메소드를 호출할 경우 에러가 발생한다.

<br>

```javascript
var arr = ['bar'];
var obj = {name: 'foo', length: 1};

arr.push('baz');
console.log(arr);		// ["bar", "baz"]

Array.prototype.push.apply(obj, ['baz']);
console.log(obj);		// {"1": "baz", name: "foo", length: 2}
```

- **arguments 객체**나 **jQuery 객체**가 바로 유사 배열 객체 형태이다.

<br>

<br>

### 6) 기본 타입과 표준 메소드

- 자바스크립트는 숫자, 문자열, 불린값에 대해 각 타입별로 호출 가능한 표준 메소드를 정의하고 있다.
- 기본 타입의 값들에 대해서 객체 형태로 메소드를 호출할 경우, 이들 기본값은 메소드 처리 순간에 객체로 변환된 다음 각 타입별 표준 메소드를 호출하게 되는 것이다. 그리고 메소드 호출이 끝나면 다시 기본값으로 복귀하게 된다.

```javascript
// 숫자 메소드 호출
var num = 0.5;
console.log(num.toExponential(1));	// 5.0e-1

//문자 메소드 호출
console.log("test".charAt(2));		// s
```

- **toExponential()**은 표준 숫자형 메소드로서, 숫자를 지수 형태의 문자열로 변환한다. 인자로 받는 값은 소수점 아래 몇 번째 자리까지 표시할 것인지 지정하는 것이다.
- 표준 문자열 메소드 **charAt()**은 문자열에서 인자로 받은 위치에 있는 문자를 반환한다. 
- 숫자와 문자열 등은 기본 타입이지만, 이들을 위해 정의된 표준 메소드들을 **객체처럼 호출할 수 있다**는 것을 기억하자.

<br>

### 7) 연산자

<br>

#### 1) + 연산자

<br>

#### 1)) + 연산자

- \+ 연산자는 **더하기 연산**과 **문자열 연결 연산**을 수행한다.

```javascript
var add1 = 1 + 2;				// 3
var add2 = 'my ' + 'string';	// my string
var add3 = 1 + 'string';		// 1string
var add4 = 'string' + 2;		// string2
```

<br>

#### 2)) typeof 연산자

- typeof 연산자는 피연산자의 타입을 문자열 형태로 리턴한다.
- null과 배열이 'object'라는 점, 함수는 'function'이라는 점에 유의해야 한다.

| 기본 타입 |    숫자     |    'number'    |
| :---: | :-------: | :------------: |
| 기본 타입 |    문자열    |    'string'    |
| 기본 타입 |    불린값    |   'boolean'    |
| 기본 타입 | **null**  |  **'object'**  |
| 기본 타입 | undefined |  'undefined'   |
| 참조 타입 |    객체     |    'object'    |
| 참조 타입 |  **배열**   |  **'object'**  |
| 참조 타입 |  **함수**   | **'function'** |

<br>

#### 3)) == (동등) 연산자와 === (일치) 연산자

- == 연산자는 비교하려는 피연산자의 타입이 다를 경우에 타입 변환을 거친 다음 비교한다.
- === 연산자는 피연산자의 타입이 다를 경우에 타입을 변경하지 않고 비교한다.

```javascript
console.log(1 == '1');	// true
console.log(1 === '1');	// false
```

- 자바스크립트 코딩 가이드에서는 == 연산자로 비교하는 것을 추천하지 않는다.

<br>

#### 4)) !! 연산자

- !!의 역할은 피연산자를 불린값으로 변환하는 것이다.

```javascript
console.log(!!0);			// false
console.log(!!1);			// true
console.log(!!'string');	// true
console.log(!!'');			// false
console.log(!!null);		// false
console.log(!!undefined);	// false
console.log(!!{});			// true
console.log(!![1, 2, 3]);	// true
```

- 빈 객체가 true로 변환되는 것을 주의해야 한다.

<br>

### CHAPTER 04

### 함수와 프로토타입 체이닝

- 자바스크립트에서 가장 중요한 개념 1순위는 당연히 **함수**다.
- C 프로그래밍을 배울 때 포인터를 얼마나 제대로 이해하느냐에 따라 고급 C 개발자로 발돋움할 수 있듯이, 자바스크립트에서 함수를 얼마나 제대로 이해하고 활용하느냐에 따라서 고급 자바스크립트 개발자로 거듭날 수 있다.
- 자바스크립트의 함수는 모듈화 처리나 클로저, 객체 생성 등 자바스크립트의 근간이 되는 많은 기능을 제공하고 있다.

<br>

#### 1) 함수 정의

- 자바스크립트에서 함수를 생성하는 방법은 3가지가 있다.
  - 함수 선언문 (function statement)
  - 함수 표현식 (function expression)
  - Function() 생성자 함수

<br>

#### 1)) 함수 리터럴

- 자바스크립트에서는 함수도 일반 객체처럼 값으로 취급된다. 때문에 객체 리터럴 방식으로 일반 객체를 생성할 수 있는 것처럼, **함수 리터럴**을 이용해 함수를 생성할 수 있다.
- 함수 선언문이나 함수 표현식 방법 모두 함수 리터럴 방식으로 함수를 생성한다.

```javascript
// 함수 리터럴을 통한 add() 함수 정의
function add(x, y) {
  return x + y;
}
```

- 함수 리터럴은 function 키워드로 시작한다.
- 함수명은 함수 몸체의 내부 코드에서 자신을 재귀적으로 호출하거나 또는 디버거가 해당 함수를 구분하는 식별자로 사용된다.
- 함수명이 없는 함수를 익명 함수라 한다.
- 함수 몸체는, 실제 함수가 호출 됐을 때 실행되는 코드 부분이다.

<br>

#### 2)) 함수 선언문 방식으로 함수 생성하기

- 함수 선언문 방식은 함수 리터럴 형태와 같다. 주의할 점은 함수 선언문 방식으로 정의된 함수의 경우는 **반드시 함수명이 정의되어 있어야 한다**는 것이다.

```javascript
// add() 함수 선언문	// 위 코드와 동일
function add(x, y) {
  return x + y;
}
```

<br>

#### 3)) 함수 표현식 방식으로 함수 생성하기

- 자바스크립트에서는 함수도 하나의 값처럼 취급된다(이러한 특징이 있으므로 자바스크립트의 함수를 일급 객체라고 한다).
- 따라서 함수도 숫자나 문자열처럼 변수에 할당하는 것이 가능하다.
- 함수 리터럴로 하나의 함수를 만들고, 여기서 생성된 함수를 변수에 할당하여 함수를 생성하는 것을 **함수 표현식**이라고 한다.

```javascript
// add() 함수 표현식
var add = function (x, y) {
  return x + y;
};

var plus = add;

console.log(add(3, 4));		// 7
console.log(add(5, 6));		// 11
```

- 함수 리터럴로 두 값을 더하는 함수를 생성한 다음, 이를 add 변수에 저장한 것이다.
- 여기서 함수 리터럴로 생성한 함수는 함수명이 없으므로 익명 함수이다.
- 함수 표현식 방법에서는 함수 이름이 선택 사항이며, 보통 사용하지 않는다.
- add 변수는 함수 리터럴로 생성한 함수를 참조하는 변수이지, **함수 이름**이 아니라는 것에 주의하자.
- 함수 변수 add는 함수의 참조값을 가지므로 또 다른 변수 plus에도 그 값을 그대로 할당할 수가 있다.
- 함수 표현식으로 생성된 함수를 호출하려면 함수 변수를 사용해야 한다.
- 함수 변수 add가 실제로 참조하는 두 수를 더하는 함수의 이름이 없다. 이렇게 이름이 없는 함수 형태를 **익명 함수(anonymous function)**라고 부른다.
- 인자로 넘겨진 두 수를 더하는 익명 함수를 만들고 이를 add 변수에 할당한 것이다. 이것이 **익명 함수를 이용한 함수 표현식 방법(익명 함수 표현식)**이다. 이러한 **익명 함수의 호출**은 함수 변수에 함수 호출 연산자인 ()를 붙여서 기술하는 것으로 가능하다.
- 참고로 함수 이름이 포함된 함수 표현식을 **기명 함수 표현식**이라 한다.

```javascript
var add = function sum(x, y) {
  return x + y;
};

console.log(add(3, 4));		// 7
console.log(sum(3, 4));		// Uncaught ReferenceError
```

- sum() 함수를 정의하고, 이 함수를 add 함수 변수에 할당했다. 
- 에러가 발생한 것은 **함수 표현식에서 사용된 함수 이름이 외부 코드에서 접근 불가능하기 때문이다.**
- 함수 표현식에서 사용된 함수 이름은 정의된 함수 내부에서 해당 함수를 재귀적으로 호출하거나, 디버거 등에서 함수를 구분할 때 사용된다. 따라서 함수 이름으로 사용된 sum으로 함수 외부에서 해당 함수를 호출할 때 sum() 함수가 정의되어 있지 않다는 에러가 발생한다.
- 함수 표현식에서는 함수 이름이 선택 사항이지만, 이러한 함수 이름을 이용하면 함수 코드 내부에서 함수 이름으로 함수의 재귀적인 호출 처리가 가능하다.

```javascript
// 함수 표현식 방식으로 구현한 팩토리얼 함수
var factorialVar = function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorail(n - 1);
};

console.log(factorialVar(3));	// 6
console.log(factorial(3));		// Uncaught ReferenceError:
```

- 함수 표현식 방식으로 팩토리얼 값을 재귀적으로 구현한 함수이다.
- 함수 외부에서는 함수 변수 factorialVar로 함수롤 호출했으며, 함수 내부에서 이뤄지는 재귀 호출은 factorial() 함수 이름으로 처리한다.
- 함수명 factorial()로 함수 외부에서 해당 함수를 호출하지 못해 에러가 발생한다.

<br>

#### 4)) Function() 생성자 함수를 통한 함수 생성하기

- 자바스크립트의 함수도 Function()이라는 기본 내장 생성자 함수로부터 생성된 **객체**라고 볼 수 있다.
- 함수 선언문이나 함수 표현식 방식도 Function() 생성자 함수가 아닌 함수 리터럴 방식으로 함수를 생성하지만, 결국엔 이 또한 내부적으로는 Function() 생성자 함수로 함수가 생성된다고 볼 수 있다.

```javascript
new Function (arg1, arg2, ... argN, functionBody)

arg1, arg2, ... argN: 함수의 매개변수
functionBody: 함수가 호출될 때 실행될 코드를 포함한 문자열
```

```javascript
var add = new Function('x', 'y', 'return x + y');
console.log(add(3, 4));		// 7
```

- 일반적으로 FUnction() 생성자 함수를 사용한 함수 생성 방법은 자주 사용되지 않는다.

<br>

#### 5)) 함수 호이스팅

- 함수를 생성하는 3가지 방법 사이에는 동작 방식이 약간 차이가 있다. 그 중의 하나가 **함수 호이스팅(Function Hoisting)**이다.
- 자바스크립트 Guru로 알려진 더글라스 크락포드는 함수 표현식만 사용할 것을 권하고 있다. 그 이유 중의 하나가 바로 함수 호이스팅 때문이다.

```javascript
// 함수 선언문 방식과 함수 호이스팅
add(2, 3);	// 4

// 함수 선언문 형태로 add() 함수 정의
function add(x, y) {
  return x + y;
}

add(3, 4);	// 7
```

- add() 함수가 정의되지 않았음에도 add() 함수를 호출하는 것이 가능하다. 이것은 함수가 자신이 위치한 코드에 상관없이 **함수 선언문 형태로 정의한 함수의 유효 범위는 코드의 맨 처음부터 시작한다**는 것을 확인할 수 있다. 이것을 **함수 호이스팅**이라고 한다.

<br>

```javascript
// 함수 표현식 방식과 함수 호이스팅
add(2, 3);	// uncaught type error

var add = function(x, y) {
  return x + y;
};

add(3, 4);	// 7
```

- add() 함수는 함수 표현식 형태로 정의되어 있어 **호이스팅이 일어나지 않는다.** 따라서 함수가 생성된 이후에 호출이 가능하다.

<br>

- 함수 호이스팅이 발생하는 원인은 자바스크립트의 **변수 생성(Instantiation)**과 **초기화(Initialization)**의 작업이 분리되어서 진행되기 때문이다.

<br>

#### 2. 함수 객체: 함수도 객체다

<br>

#### 1)) 자바스크립트에서는 함수도 객체다

- 자바스크립트에서는 **함수도 객체**이다. 즉, 함수의 기본 기능인 코드 실행뿐만 아니라, 함수 자체가 일반 객체처럼 프로퍼티들을 가질 수 있다는 것이다.

```javascript
// 함수 선언 방식으로 add() 함수 정의
function add(x, y) {
  return x + y;
}

// add() 함수 객체에 result, status 프로퍼티 추가
add.result = add(3, 2);
add.status = 'OK';

console.log(add.result);	// 5
console.log(add.status);	// 'OK'
```

- 함수 선언문 방식으로 add() 함수를 생성한 후, add() 함수가 일반 객체처럼 result와 status 프로퍼티를 추가하는 게 가능하다는 것을 보여준다.
- 자바스크립트에서 함수는 특정 기능의 코드를 수행하는 역할뿐만 아니라, 일반 객체처럼 자신의 프로퍼티를 가질 수 있는 특별한 객체라고 볼 수 있다.

<br>

#### 2)) 자바스크립트에서 함수는 값으로 취급된다

- 함수는 객체다. **함수도 일반 객체처럼 취급될 수 있다**는 것을 말한다.
- 자바스크립트 함수는 다음과 같은 동작이 가능하다.
  - 리터럴에 의해 생성
  - 변수나 배열의 요소, 객체의 프로퍼티 등에 할당 가능
  - 함수의 인자로 전달 가능
  - 함수의 리턴값으로 리턴 가능
  - 동적으로 프로퍼티를 생성 및 할당 가능
- 81p























































