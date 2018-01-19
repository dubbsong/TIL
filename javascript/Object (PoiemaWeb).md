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

<br>

### 3. 객체 프로퍼티 접근

#### 1) 프로퍼티 이름

- 프로퍼티 이름은 문자열(빈 문자열 포함)로 작성한다.
- 숫자는 암묵적으로 형변환되어 문자열이 된다.
- 프로퍼티 이름의 문자열이므로 따옴표를 사용한다. 하지만 자바스크립트에서 사용 가능한 유효한 이름인 경우, 따옴표를 생략할 수 있다. 반대로 말하면 자바스크립트에서 사용 가능한 유효한 이름이 아닌 경우 반드시 따옴표를 사용해야 한다.
- 프로퍼티 값은 undefined를 제외한 모든 값과 표현식이 올 수 있다.
- 프로퍼티 값이 함수인 경우 이를 메소드(method)라 한다.

```javascript
var person = {
  'first-name': 'Coco',
  'last-name': 'Song',
  gender: 'male',
  1: 10,
  function: 1	// OK. 하지만 예약어 사용은 하지 않아야 한다.
};

console.log(person.function);
```

- first-name에는 반드시 따옴표를 사용해야 하지만 first_name에는 생략 가능하다.
- 예약어를 프로퍼티 이름으로 사용해도 에러가 발생하지 않는다. 하지만 예상치 못한 에러가 발생할 수 있으므로 예약어를 프로퍼티 이름으로 사용해서는 안 된다.
- 예약어는 아래와 같다.

```javascript
abstract  arguments boolean break byte
case  catch char  class*  const
continue  debugger  default delete  do
double  else  enum* eval  export*
extends*  false final finally float
for function  goto  if  implements
import* in  instanceof  int interface
let long  native  new null
package private protected public  return
short static  super*  switch  synchronized
this  throw throws  transient true
try typeof  var void  volatile
while with  yield
// *는 ES6에서 추가된 예약어
```

<br>

#### 2) 프로퍼티 값 읽기

- 객체의 프로퍼티에 접근하기 위해 두 가지 방법을 사용한다.
  - 마침표(.) 표기법
  - 대괄호([]) 표기법

```javascript
var person = {
  'first-name': 'Coco',
  'last-name': 'Song',
  gender: 'male',
  1: 10
};

console.log(person);
// {1: 10, first-name: "Coco", last-name: "Song", gender: "male"}

console.log(person.first-name); 	// NaN
console.log(person[first-name]);	// ReferenceError
console.log(person['first-name']);	// 'Coco'

console.log(person.gender); 	// 'male'
console.log(person[gender]);	// ReferenceError
console.log(person['gender']);	// 'male'
```

- 프로퍼티 값은 마침표 표기법, 대괄호 표기법 모두 사용할 수 있다.
- 대괄호([]) 표기법을 사용하는 경우, **대괄호 내에 들어가는 프로퍼티 이름은 반드시 문자열이어야 한다.**
- 객체에 존재하지 않는 프로퍼티를 참조하면 **undefined**를 반환한다.

```javascript
var person = {
  'first-name': 'Coco',
  'last-name': 'Song',
  gender: 'male'
};

console.log(person.age);	// undefined
```

<br>

#### 3) 프로퍼티 값 갱신

- 객체가 소유하고 있는 프로퍼티에 새로운 값을 할당하면 프로퍼티 값은 갱신된다.

```javascript
var person = {
  'first-name': 'Coco',
  'last-name': 'Song',
  gender: 'male'
};

person['first-name'] = 'Azor';
console.log(person['first-name']);	// 'Azor'
```

<br>

#### 4) 프로퍼티 동적 생성

- 객체가 소유하고 있지 않은 프로퍼티에 값을 할당하면 해당 프로퍼티를 객체에 추가하고 값을 할당한다.

```javascript
var person = {
  'first-name': 'Coco',
  'last-name': 'Song',
  gender: 'male'
};

person.age = 20;
console.log(person.age);	// 20
```

<br>

#### 5) 프로퍼티 삭제

- **delete** 연산자를 사용하면 객체의 프로퍼티를 삭제할 수 있다.

```javascript
var person = {
  'first-name': 'Coco',
  'last-name': 'Song',
  gender: 'male'
};

delete person.gender;
console.log(person.gender); 	// undefined

delete person;
console.log(person);	// {first-name: "Coco", last-name: "Song"}
```

<br>

#### 6) for-in 문

- for-in 문을 사용하면 객체(배열 포함)에 포함된 모든 프로퍼티에 대해 루프를 수행할 수 있다.

```javascript
var person = {
  'first-name': 'Coco',
  'last-name': 'Song',
  gender: 'male'
};

for (var prop in person) {		// prop에 객체의 프로퍼티 이름 반환
  console.log(prop + ': ' + person[prop]);
}

/*
first-name: Coco
last-name: Song
gender: male
*/
```

```javascript
var array = ['one', 'two'];

for (var index in array) {
  console.log(index + ': ' + array[index]);
}

/*
0: one
1: two
*/
```

- for-in 문은 객체의 문자열 키(key)를 순회하기 위한 문법니다.
- 배열에는 사용하지 않는 것이 좋다. 객체와 배열 모두 순서를 보장하지 않는다. 그리고 배열 요소들만을 순회하지 않는다.
- for-in 문의 단점을 극복하기 위해 ES6에서 for-of 문이 추가되었다.

```javascript
const array = [1, 2, 3];
array.name = 'my array';

for (const value of array) {
  console.log(value);
}

/*
1
2
3
*/
```

- for-in 문은 객체의 프로퍼티를 순회하기 위해 사용하고 for-of 문은 배열의 요소를 순회하기 위해 사용한다.

<br>

### 4. Pass-by-reference

- 기본자료형 object를 객체형 또는 참조형이라 한다.
- 참조형이란 객체의 모든 연산이 실제값이 아닌 참조값으로 처리됨을 의미한다.
- 이에 반해 기본자료형의 값은 값(value)으로 전달된다. 즉, 복사되어 전달된다. 이를 pass-by-value라 한다.
- 기본자료형은 값이 한 번 정해지면 변경할 수 없지만(immutable), 객체는 변경 가능한 프로퍼티들의 집합이라 할 수 있다.

```javascript
// Pass-by-reference
var foo = {
  val: 10
}

var bar = foo;
console.log(foo.val, bar.val);	// 10 10
console.log(foo === bar);		// true

bar.val = 20;
console.log(foo.val, bar.val);	// 20 20
console.log(foo === bar);		// true	
```

- foo 객체를 객체 리터럴 방식으로 생성하였다. 이때 변수 foo는 객체 자체를 저장하고 있는 것이 아니라 생성된 객체의 참조값(address)를 저장하고 있다.
- 변수 bar에 변수 foo의 값을 할당했다. 변수 foo의 값은 생성된 객체를 가리키는 참조값이므로 변수 bar에도 같은 참조값이 저장된다. 즉 변수 foo, bar 모두 동일한 객체를 참조하고 있다. 따라서 참조하고 있는 객체의 val 값이 변경되면 변수 foo, bar 모두 동일한 객체를 참조하고 있으므로 두 변수 모두 변경된 객체의 프로퍼티 값을 참조하게 된다. 객체는 참조(Reference) 방식으로 전달된다. 결코 복사되지 않는다.
- 아래의 경우는 위의 경우와 약간 차이가 있다.

```javascript
var foo = {val: 10};
var bar = {val: 10};

console.log(foo.val, bar.val);	// 10 10
console.log(foo === bar);		// false

var baz = bar;

console.log(baz.val, bar.val);	// 10 10
console.log(baz === bar);		// true
```

- 변수 foo와 변수 bar는 비록 내용은 같지만 별개의 객체를 생성하여 참조값을 할당했다. 따라서 변수 foo와 변수 bar의 참조값은 동일하지 않다.
- 변수 baz에는 변수 bar의 값을 할당했다. 결국 변수 baz와 변수 bar는 동일한 객체를 가리키는 참조값을 저장하고 있다. 따라서 변수 baz와 변수 bar의 참조값은 동일하다.

```javascript
var a = {}, b = {}, c = {}; 			 // a, b, c는 각각 다른 빈 객체를 참조
console.log(a === b, a === c, b === c);  // false false false

a = b = c = {}; 					     // a, b, c는 모두 같은 빈 객체를 참조
console.log(a === b, a === c, b === c);  // true true true
```

<br>

### 5. Pass-by-value

- 기본자료형의 값은 값(value)으로 전달된다. 즉, 복사되어 전달된다. 이를 pass-by-value라 한다. 기본자료형은 값이 한 번 정해지면 변경할 수 없다(immutable).

```javascript
// Pass-by-value
var a = 1;
var b = a;

console.log(a, b);		// 1 1
console.log(a === b);	// true

a = 10;
console.log(a, b);		// 1 10
console.log(a === b);	// false
```

- 변수 a는 기본자료형인 number type의 1을 저장하고 있다. 기본자료형의 경우 값이 복사되어 변수에 저장된다. 즉 참조형으로 저장되는 것이 아니라 값 자체가 저장되게 된다.
- 변수 b에 변수 a를 대입할 경우, 변수 a의 값 1은 복사되어 변수 b에 저장된다.

<br>

### 6. 객체의 분류

- Built-in Object(내장 객체)는 웹페이지 등을 표현하기 위한 공통의 기능을 제공한다.
- 웹페이지가 브라우저에 의해 로드되자마자 별다른 행위없이 바로 사용이 가능하다.
- Built-in Object는 아래와 같이 구분할 수 있다.
  - Standard Built-in Object (or Global Objects)
  - BOM (Browser Object Model)
  - DOM (Document Object Model)
- Standard Built-in Object를 제외한 BOM과 DOM을 **Native Object**라고 분류하기도 한다.

