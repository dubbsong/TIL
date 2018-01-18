# 객체 (Object)

[PoiemaWeb](http://poiemaweb.com) 자료 타이핑하며 학습

<br>

### 1. 객체란?

- 자바스크립트는 객체(object) 기반의 스크립트 언어이다.
- 자바스크립트를 이루고 있는 거의 '모든 것'은 객체이다.
- 기본자료형(primitives)을 제외한 나머지 값들(함수, 배열, 정규표현식 등)은 모두 객체이다.
- 객체는 데이터와 그 데이터에 관련되는 동작(절차, 방법, 기능)을 모두 포함할 수 있는 개념적 존재이다. 달리 말해, 이름(키)과 값으로 구성된 데이터를 의미하는 프로퍼티(property)와 동작을 나타내는 메소드(method)를 포함하고 있는 독립적 주체이다.
- 객체는 데이터를 한 곳에 모으고 구조화하는 데 유용하다.
- 객체 하나는 다른 객체를 포함할 수 있기 때문에 그래프나 트리와 같은 자료구조를 쉽게 표현할 수 있다.

<br>

#### 1) 프로퍼티 (Property)

- 객체는 이름(name)과 값(value)의 쌍인 프로퍼티들을 포함하는 컨테이너라고 할 수 있다.
- 프로퍼티는 프로퍼티 이름과 프로퍼티 값으로 구성된다.

<br>

#### 2) 메소드 (Method)

- 메소드는 객체에 제한되어 있는 함수를 의미한다. 즉 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드라 칭한다.

<br>

### 2. 객체 생성 방법

- 자바에서는 클래스를 사전에 정의하고 필요한 시점에 new 연산자를 사용하여 인스턴스를 생성하는 방식으로 객체를 생성한다.
- 자바스크립트는 클래스라는 개념이 없고 별도의 객체 생성 방법이 존재한다.
- ECMAScript6에서 새롭게 클래스가 도입되었다. ES6의 Class는 기존 prototype 기반 객체 지향 프로그래밍보다 Class 기반 언어에 익숙한 프로그래머가 보다 빠르게 학습할 수 있는 단순하고 깨끗한 새로운 문법을 제시하고 있다.

<br>

#### 1) 객체 리터럴

- 가장 일반적이고 간편한 자바스크립트의 객체 생성 방식이다.
- 중괄호{}를 사용하여 객체를 생성하고, {} 내에 아무것도 기술하지 않으면 빈 객체가 생성된다.
- {} 내에 1개 이상의 **프로퍼티 이름: 프로퍼티 값**을 기술하면 해당 프로퍼티가 추가된 객체를 생성할 수 있다.

```javascript
var emptyObject = {};

var person = {
  name: 'Song',
  gender: 'male',
  sayHello: function() {
    console.log('Wassup ' + this.name);
  }
};

console.log(person);
// {name: 'Song', gender: 'male', sayHello: [Function: sayHello]}
person.sayHello();	// Wassup Song
```

- 선언과 동시에 인스턴스가 생성된다.

<br>

#### 2) Object() 생성자 함수

- new 연산자와 **Object() 생성자 함수**를 사용하여 빈 객체를 생성할 수 있다.
- 빈 객체 생성 이후 프로퍼티와 메소드를 추가하여 객체를 완성하는 방법이다.
- 객체의 프로퍼티에 새로운 값을 할당하면 프로퍼티 값은 갱신된다.
- 객체가 소유하고 있지 않은 프로퍼티에 값을 할당하면 해당 객체에 프로퍼티를 추가하고 값을 할당한다.

```javascript
var person = new Object();	// 빈 객체 생성

person.name = 'Song';	// 프로퍼티 추가
person.gender = 'male';
person.sayHello = function() {
  console.log('Wassup ' + this.name);
};

console.log(person);
// {name: 'Song', gender: 'male', sayHello: [Function]}
person.sayHello();	// Wassup Song
```

- 객체를 생성하는 방법은 객체 리터럴을 사용하는 것이 더 간편하다.
- Object() 생성자 함수 방식은 특별한 이유가 없다면 그다지 유용해 보이지 않는다. 하지만 객체 리터럴 방식으로 생성된 객체는 결국 내장(Built-in) 함수인 Object() 생성자 함수로 객체를 생성하는 것을 단순화시킨 short-hand(축약법)이다. 자바스크립트 엔진은 객체 리터럴로 객체를 생성하는 코드를 만나면 내부적으로 Object() 생성자 함수를 사용하여 객체를 생성한다.

<br>

#### 3) 생성자 함수

- 생성자 함수를 사용하면 마치 객체를 생성하기 위한 템플릿(클래스)처럼 사용하여 구성이 동일한 객체 여러개를 간편하게 생성할 수 있다.

```javascript
function Person(name, gender) { 	// 생성자 함수
  this.name = name;
  this.gender = gender;
  this.sayHello = function() {
    console.log('Wassup ' + this.name);
  };
}


var person1 = new Person('Song', 'male');	// 인스턴스의 생성
var person2 = new Person('Leo', 'female');

person1.sayHello();
person2.sayHello();
```

- 생성자 함수 이름은 일반적으로 대문자로 시작한다. 이것은 생성자 함수임을 인식하도록 도움을 준다.
- 프로퍼티 또는 메소드명 앞에 기술한 **this**는 생성자 함수로 생성될 인스턴스(instance)를 가리킨다. 따라서 this에 연결되어 있는 프로퍼티와 메소드는 **public**(외부에서 참조 가능)하다.
- 생성자 함수 내에서 선언된 일반 변수는 **private**(외부에서 참조 불가능)하다. 즉 생성자 함수 내부에서는 자유롭게 접근이 가능하나 외부에서 접근할 수 없다.

```javascript
function Person(name, gender) {
  var married = true;			// private
  this.name = name;			 	// public
  this.gender = gender;			// public
  this.sayHello = function() {	// public
    console.log('Wassup ' + this.name);
  };
}

var person = new Person('Song', 'male');

console.log(person);
// Person {name: 'Song', gender: 'male', sayHello: [Function]}

console.log(person.gender); 	// 'male'
console.log(person.married);	// undefined
```

- 일반적으로 생성자 함수명은 첫문자를 대문자로 기술하여 혼란을 방지하려는 노력을 한다. 일반 함수에 new 연산자를 붙여 호출하면 생성자 함수처럼 동작할 수 있기 때문이다.
- new 연산자와 함께 함수를 호출하면 **this** 바인딩이 다르게 동작한다.