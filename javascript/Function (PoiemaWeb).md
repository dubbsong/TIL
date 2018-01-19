# 함수 (Function)

[PoiemaWeb](http://poiemaweb.com) 자료 타이핑하며 학습

<br>

- 함수란 어떤 특정 작업을 수행하기 위해 필요한 일련의 구문들을 그룹화하기 위한 개념이다.
- 만일 스크립트의 다른 부분에서도 동일한 작업을 반복적으로 수행해야 한다면 미리 작성된 함수를 재사용할 수 있다(코드의 재사용).
- 함수의 일반적 기능은 특정 작업을 수행하는 구문들의 집합을 정의하고, 필요시에 호출하여 필요한 값 또는 수행 결과를 얻는 것이다. 그러나 이러한 일반적 기능(코드의 재사용) 이외에 객체 생성, 객체의 행위 지정(메소드), 정보의 구성 및 은닉, 클로저, 모듈화 등의 기능을 수행할 수 있다.
- 함수는 구문(statement)의 집합으로 모듈화의 근간이 된다.
- 일반적으로 프로그래밍 기술은 요구사항의 집합을 자료구조와 함수의 집합으로 변환하는 것이다.
- 함수도 객체이다. 다른 객체와 구분될 수 있는 특징은 호출할 수 있다는 것이다.
- 함수도 객체이므로 다른 값들처럼 사용할 수 있다. 즉 변수나 객체, 배열 등에 저장될 수 있고, 다른 함수에 전달되는 인수로도 사용될 수 있으며, 함수의 반환값이 될 수도 있다.

<br>

### 1. 함수 정의

- 함수를 정의하는 방식은 3가지가 있다.
  - 함수선언식 (Function declaration)
  - 함수표현식 (Function expression)
  - Function() 생성자 함수

<br>

#### 1) 함수선언식 (Function declaration)

- 함수선언식을 사용한 함수 정의는 **function** 키워드와 이하의 내용으로 구성된다.

```javascript
function square(number) {
  return number * number;
}
```

<br>

#### 2) 함수표현식 (Function expression)

- 함수의 일급 객체 특성을 이용하여 리터럴 방식으로 함수를 정의하고 변수에 할당할 수 있는데 이러한 방식을 함수표현식(Function expression)이라 한다.

```javascript
var square = function(number) {
  return number * number;
};
```

- 함수표현식으로 정의한 함수는 함수명을 생략할 수 있다. 이러한 함수를 **익명 함수(anonymous function)**이라 한다.

```javascript
// 가명 함수표현식 (named function expression)
var foo = function multiply(a, b) {
  return a * b;
};
```

```javascript
// 익명 함수표현식 (anonymous function expression)
var bar = function(a, b) {
  return a * b;
};
```

```javascript
console.log(foo(10, 5));		// 50
console.log(multiply(10, 5));	// Uncaught ReferenceError
```

- 함수는 일급 객체이기 때문에 변수에 할당할 수 있는데, 이 변수는 함수명이 아니라 할당된 함수를 가리키는 참조값을 저장하게 된다. 함수 호출시에 이 변수가 함수명처럼 사용된다.

```javascript
var foo = function(a, b) {
  return a * b;
};

var bar = foo;

console.log(foo(10, 10));	// 100
console.log(bar(10, 10));	// 100
```

- 변수 bar와 변수 foo는 동일한 익명 함수의 참조값을 갖는다.
- **함수가 할당된 변수를 사용해 함수를 호출하지 않고, 기명 함수의 함수명을 사용해 호출하게 되면 에러가 발생한다. 이는 함수표현식에서 사용한 함수명은 외부 코드에서 접근 불가능하기 때문이다.** (사실은 선언식의 경우도 마찬가지이다)
- 함수표현식과 함수선언식에서 사용한 함수명은 함수 몸체에서 자신을 재귀적 호출하거나 자바스크립트 디버거가 해당 함수를 구분할 수 있는 식별자의 역할을 한다.
- **결국 함수선언식도 함수표현식과 동일하게 함수 리터럴 방식으로 정의되는 것이다.**

<br>

#### 3) Function() 생성자 함수

- 함수표현식으로 함수를 정의할 때 함수 리터럴 방식을 사용한다. 함수선언식도 내부적으로 자바스크립트 엔진이 기명 함수표현식으로 변환하므로 결국 함수 리터럴 방식을 사용한다.
- 따라서 **함수선언식과 함수표현식은 모두 함수 리터럴 방식으로 함수를 정의하는데, 이것은 결국 내장 함수 Function() 생성자 함수로 함수를 생성하는 것을 단순화 시킨 것이다.**
- Function() 생성자 함수는 Function.prototype.constructor 프로퍼티로 접근할 수 있다.

```javascript
new Function(arg1, arg2, ... argN, functionBody)
```

```javascript
var square = new Function('number', 'return number * number');
console.log(square(10));	// 100
```

- Function() 생성자 함수로 함수를 생성하는 방식은 일반적으로 사용하지 않는다.

<br>

### 2. 함수 호이스팅 (Function Hoisting)

```javascript
var res = square(5);

function square(number) {
  return number * number;
}
```

- 위 코드를 보면 함수선언식으로 함수가 정의되기 이전에 함수 호출이 가능하다. 함수 선언의 위치와는 상관없이 코드 내 어느 곳에서든지 호출이 가능한데, 이것을 함수 호이스팅(Function Hoisting)이라 한다.
- **자바스크립트는 ES6의 let, const를 포함해서 모든 선언(var, let, const, function, class)을 호이스팅(Hoisting)한다.**
- 호이스팅이란, var 선언문이나 function 선언문 등을 해당 **Scope**의 맨 위로 옮기는 것을 말한다. 즉 자바스크립트는 코드를 실행하기 전에 var 선언문과 function 선언문을 해당 스코프의 맨 위로 옮긴다.
- 함수선언식으로 정의된 함수는 자바스크립트 엔진이 스크립트가 로딩되는 시점에 바로 초기화하고 이를 VO(variable object)에 저장한다. 즉, 함수 선언, 초기화, 할당이 한 번에 이루어진다. 그렇기 때문에 함수 선언의 위치와는 상관없이 소스 내 어느 곳에서든지 호출이 가능하다.
- **함수표현식의 경우 함수 호이스팅이 아니라 <u>변수 호이스팅</u>이 발생한다.**

```javascript
var res = square(5);	// TypeError: square is not a function

var square = function(number) {
  return number * number;
}
```

- 변수 호이스팅은 변수 생성 및 초기화와 할당이 분리되어 진행된다. 호이스팅된 변수는 undefined로 초기화되고 실제값의 할당은 할당문에서 이루어진다.
- 더글라스 크락포드(Douglas Crockford)는 이와 같은 문제 때문에 함수표현식만 사용할 것을 권고하고 있다. 함수 호이스팅이 함수 호출 전 반드시 함수를 선언하여야 한다는 규칙을 무시하므로 코드의 구조를 엉성하게 만들 수 있다고 지적한다. 또한 함수선언식으로 함수를 정의하면 사용하기에 쉽지만, 대규모 애플리케이션을 개발하는 경우, 인터프리터가 너무 많은 코드를 변수 객체(VO)에 저장하므로 애플리케이션의 응답속도는 현저히 떨어질 수 있다.

<br>

### 3. 일급 객체 (First-class object)

- 일급 객체(first-class object)란 생성, 대입, 연산, 인자 또는 반환값으로서의 전달 등 프로그래밍 언어의 기본적 조작을 제한없이 사용할 수 있는 대상을 의미한다.
- 다음 조건을 만족하면 일급 객체로 간주한다.
  - 무명의 리터럴로 표현이 가능하다.
  - 변수나 자료 구조(객체, 배열 등)에 저장할 수 있다.
  - 함수의 파라미터로 전달할 수 있다.
  - 반환값(return value)으로 사용할 수 있다.

```javascript
// 무명의 리터럴로 표현이 가능하다.
// 변수나 데이터 구조 안에 담을 수 있다.
var increase = function(num) {
  return num + 1;
};

var decrease = function(num) {
  return num - 1;
};

var obj = {
  increase: increase,
  decrease: decrease
};

// 함수의 파라미터로 전달할 수 있다.
function calc(func, num) {
  return func(num);
}

console.log(calc(increase, 1));
console.log(calc(decrease, 1));

// 반환값(return value)으로 사용할 수 있다.
function calc(mode) {
  var funcs = {
    plus:  function(left, right){ return left + right; },
    minus: function(left, right){ return left - right; }
  };
  return funcs[mode];
}

console.log(calc('plus')(2, 1));
console.log(calc('minus')(2, 1));
```

- 자바스크립트의 함수는 위의 조건을 모두 만족하므로 **자바스크립트의 함수는 일급객체이다.**
- 따라서 자바스크립트의 함수는 흡사 변수와 같이 사용할 수 있으며, 코드의 어디에서든지 정의할 수 있다.

<br>

### 4. 매개변수 (Parameter, 인자)

- 함수의 작업 실행을 위해 추가적인 정보가 필요할 경우, 매개변수를 지정한다. 매개변수는 함수 내에서 변수와 동일하게 동작한다.

#### 1) 매개변수(parameter, 인자)  vs. 인수(argument)

- 매개변수는 함수 내에서 변수와 동일하게 메모리 공간을 확보하며, 함수에 전달한 인수는 매개변수에 할당된다. 만약 인수를 전달하지 않으면 매개변수는 undefined로 초기화된다.

```javascript
var foo = function(p1, p2) {
  console.log(p1, p2);
};

foo(1); 	// 1 undefined
```

<br>

#### 2) Call-by-value

- 기본자료형(Primitives) 인수는 **Call-by-value**(값에 의한 호출)로 동작한다. 이는 함수 호출 시 기본자료형 인수를 함수에 매개변수로 전달할 때 매개변수에 값을 복사하여 함수로 전달하는 방식이다. 이때 함수 내에서 매개변수를 통해 값이 변경되어도 전달이 완료된 기본자료형 값은 변경되지 않는다.

```javascript
function foo(primitive) {
  primitive += 1;
  return primitive;
}

var x = 0;

console.log(foo(x));	// 1
console.log(x);			// 0
```

<br>

#### 3) Call-by-reference

- 객체형(참조형) 인수는 **Call-by-reference**(참조에 의한 호출)로 동작한다. 이는 함수 호출 시 참조 타입 인수를 함수에 매개변수로 전달할 때 매개변수에 값이 복사되지 않고 객체의 참조값이 매개변수에 저장되어 함수로 전달되는 방식이다. 이때 함수 내에서 매개변수의 참조값을 이용하여 객체의 값을 변경했을 때 전달되어진 참조형의 인수값도 같이 변경된다.

```javascript
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = 'Song';
  obj.gender = 'male';
}

var num = 100;
var obj = {
  name: 'Leo',
  gender: 'male'
};

console.log(num);	// 100
console.log(obj);	// {name: "Leo", gender: "male"}

changeVal(num, obj);

console.log(num);	// 100
console.log(obj);	// {name: "Song", gender: "male"}
```

- changeVal 함수는 기본자료형과 객체형 인수를 전달 받아 함수 몸체에서 매개변수의 값을 변경하였다. 이때 기본자료형 인수는 값을 복사하여 매개변수에 전달하기 때문에 함수 몸체에서 그 값을 변경하여도 어떠한 부수 효과(side-effect)도 발생시키지 않는다.
- 하지만 객체형 인수는 참조값을 매개변수에 전달하기 때문에 함수 몸체에서 그 값을 변경할 경우 원본 객체가 변경되는 부수 효과가 발생한다. 이와 같이 부수 효과를 발생시키는 비순수 함수(Impure function)는 복잡성을 증가시킨다. 비순수 함수를 최대한 줄이는 것은 부수 효과를 최대한 억제하는 것과 같다. 이것은 디버깅을 쉽게 만든다.
- 어떤 외부 상태도 변경하지 않는 함수를 순수함수(Pure function), 외부 상태도 변경시키는 부수 효과가 발생시키는 함수를 비순수 함수(Impure function)라 한다.

<br>

### 5. 반환값 (return value)

- 함수는 자신을 호출한 코드에게 수행한 결과를 반환(return)할 수 있다.

