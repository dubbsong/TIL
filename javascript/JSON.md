## JSON

###### by JS The Good Parts

<br>

- JSON(**JavaScript Object Notation**)은 경량화된 **데이터 교환 형식**이다.
- 이 형식은 JS의 가장 좋은 점 중에 하나인 **객체 리터럴 표기법에 기초**하고 있다.
- JSON이 JS의 부분집합이기는 하지만 언어에 독립적이다.
- JSON은 **어떤 프로그래밍 언어로 작성됐던지 관계없이 서로 데이터를 교환하는데 사용할 수 있다**.
- JSON은 텍스트 형식이기 때문에 사람이나 기계가 모두 읽을 수 있고 구현이나 사용이 쉽다.

<br>

#### 01 | JSON 구문

- JSON은 객체, 배열, 문자열, 숫자, 불리언, null 이렇게 여섯 종류의 값이 있다.
- 공백 문자는 값의 앞이나 뒤에 삽입할 수 있다.
- 공백 문자를 적절히 사용하면 JSON 텍스트를 사람이 보다 쉽게 읽을 수 있다.
- 공백 문자는 전송이나 저장 비용을 줄이기 위해 생략할 수 있다.
- **JSON 객체**는 **이름/값 쌍들을 순서 없이 가지고 있는 컨테이너**이다.
- **이름은 문자열**이고 **값은 배열과 객체를 포함한 모든 JSON 값이 가능**하다.
- JSON 객체는 원하는 만큼 중첩해서 사용할 수 있다.
- 대부분의 언어는 JSON 객체를 쉽게 사상(mapping)할 수 있는 객체, 구조체, 레코드, 사전, 해시 테이블, 속성 리스트, 연관 배열 등이 있다.
- **JSON 배열**은 **순서를 가진 값들의 연속체**이다.
- **배열 요소의 값**은 JSON **배열이나 객체를 포함한 모든 JSON 값이 가능**하다.
- 대부분의 언어는 JSON 배열을 쉽게 사상(mapping)할 수 있는 배열, 벡터, 리스트, 시퀀스 등이 있다.
- JSON 문자열은 큰 따옴표로 묶인다.
- 이스케이프를 위해서는 `\`를 사용한다.
- JSON 숫자는 JS의 숫자와 유사하다.
- 숫자는 정수, 실수 또는 그보다 더 정밀한 값 모두 가능하다.
- JSON을 설계할 때 목표로 삼은 것은 **최소화, 이식성, 텍스트 기반, JS의 부분집합**이었다.

<br>

#### 02 | JSON을 안전하게 사용하기

- JSON은 JS이기 때문에 특별히 웹 애플리케이션에서 사용하기가 쉽다.

- JSON 텍스트는 eval 함수를 통해 유용한 데이터 구조로 전환될 수 있다.

- ```json
  var myData = eval('(' + myJSONText + ')');
  ```

- eval 함수는 보안에 있어서 치명적인 문제점이 있다.

- 현재 웹 브라우저에서 서버로부터 데이터를 얻는 가장 좋은 기술은 XMLHttpRequest를 사용하는 것이다.

- XMLHttpRequest는 해당 HTML이 속하는 서버로부터만 데이터를 수신할 수 있다.

- 불완전한 서버는 JSON 형식을 제대로 만들지 못할 수 있다.

- 위험은 eval 대신 JSON.parse 메소드를 사용하여 피할 수 있다.

- JSON.parse는 텍스트 안에 위험해 보이는 것이 있으면 예외를 발생한다.

- 불완전한 서버에 대응하기 위해서 항상 eval 대신 JSON.parse를 사용할 것을 권한다. 이러한 방법은 브라우저가 다른 서버에서 데이터를 직접 받는 것을 허용하는 때가 되면 안전을 위해 더욱 유용하다.

- 외부 데이터와 innerHTML 사이에 상호작용을 할 때 또 다른 위험이 있다. 일반적인 Ajax 패턴은 서버에서 HTML 텍스트를 보내고 이를 HTML 요소의 innerHTML 속성에 할당하는 것이다. 이러한 방법은 아주 나쁜 관행이다. HTML 텍스트에 \<script> 태그나 그에 상응하는 부분이 속해 있는 경우 악의적인 스크립트가 실행될 수 있다. 이 역시도 물론 불완전한 서버로 인한 문제이다.

- 악의적인 스크립트가 자신의 페이지에서 실행되면, 페이지의 모든 상태와 기능에 접근할 수 있다. 이 스크립트는 서버와 상호작용을 할 수도 있는데 서버는 요청이 제대로만 오면 이 요청이 악의적인 스크립트가 한 요청인지 그렇지 않은지를 구별할 수 없다. 악의적인 스크립트는 전역객체에도 접근할 수 있는데 이렇게 되면 클로저(closure)로 숨겨진 변수를 제외한 애플리케이션의 모든 변수를 접근할 수 있게 된다. 

- 악의적인 스크립트는 document 객체에도 접근할 수 있다. document 객체에 접근할 수 있다는 의미는 사용자가 보는 모든 것에 접근할 수 있다는 의미이다. document 객체에 접근할 수 있으면 사용자에게 원하는 내용을 (경고창 등을 통해) 보여줄 수도 있는데 이러한 내용은 주소가 이동돼서 보이는 것이 아니기 때문에 피싱 필터에도 감지될 수 없고 결국 사용자는 이 내용을 바른 내용으로 믿게 될 수 있다.

- 이러한 위험은 모두 JS의 전역객체로 인한 직접적인 결과인데 JS의 많은 나쁜 점들 중에서도 단연 가장 나쁜 점이다.

- 이러한 위험은 Ajax나 JSON 또는 XMLHttpRequest나 Web 2.0 때문이 아니다. 이러한 위험은 JS가 소개된 이후로 계속해서 브라우저에 내재돼 있었고 JS가 대체되기 전까지는 계속 있게 될 위험입니다. 그러므로 주의해야 한다.

<br>