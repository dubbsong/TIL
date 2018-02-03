## React & Express

VELOPERT 김민준

<br>

- Redux: 어플리케이션의 상태를 관리.
- Webpack: 각종 로더 및 플러그인들을 통해 프로젝트를 빌드하는 작업을 도움.
- Express: Node.js 환경에서 웹 서버 여는 것을 쉽게 해주는 프레임워크.
- MongoDB: 인기있는 NoSQL 데이터베이스.
- Mongoose: Node.js 웹 서버에서 MongoDB를 간편하게 사용할 수 있게 해주는 프레임워크.

<br>

### React.JS 소개

- Framework: 필요한 기능이 만들어져 있어 틀이 있으면 안을 채워 완성한다.
- Library: 그냥 필요한 곳에 가져다 사용하면 된다.


- React와 Angular는 비교할 수 없다.
- React Native: 모바일 네이티브 앱을 React로 만들 수 있게 해주는 프레임워크.

<br>

- React 라이브러리의 핵심은 **가상 DOM**을 사용한다는 것이다.
- 실제 DOM을 직접 처리하는 것은 느리고, 비효율적이고, 관리하기도 힘들다.
- Virtual DOM은 이를 추상화 시킨 것으로써, 그냥 자바스크립트의 객체에 불과하다.

<br>

### React의 장점

- Virtual DOM을 사용하는 것.
- 배우기 간단하다.
- 뛰어난 Garbage Collection, 메모리 관리, 성능.
- 서버 & 클라이언트 렌더링을 지원.
- 간편한 UI 수정 및 재사용.
- 페이스북 개발자가 만들었다.
- 다른 프레임워크나 라이브러리와 혼용 가능.

<br>

### React의 단점

- React는 보여지는 부분만 관여하기 때문에 데이터 모델링, 라우팅, Ajax 등의 기능이 없다.
- Internet Explore 8 이하는 지원하지 않는다.

<br>

### Codepen 설정, ES6 클래스

- Codepen 설정

  1. Setting
  2. JavaScript tab
  3. JavaScript Preprocessor: Babel (ES6를 ES5로 변환해주는)
  4. Quick-add: React 추가 (컴포넌트 담당)
  5. Quick-add: React DOM 추가 (실제 DOM에 렌더링하는 부분 담당)
  6. Save & Close

- 컴포넌트는 그냥 자바스크립트 class이다.

- 컴포넌트는 React 컴포넌트 class를 상속한다.

- **class**는 ES6에 새로 도입된 문법이다.

  ```javascript
  // Class 선언

  class Polygon {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  ```

- 다른 언어에서 class가 그렇듯이, 생성자 메소드가 있다. 

- 생성자 메소드는 class가 새로 만들어질 때 실행된다.

- class를 사용할 때 class를 먼저 선언해야 된다.

- 상속을 했을 때는 **super** 키워드를 통해서 부모 class를 호출할 수 있다.

<br>

### JSX의 특징

- 모든 React 컴포넌트는 render 메소드가 있다.

- render 메소드는 컴포넌트가 어떻게 생길지 정의한다.

- 자바스크립트 코드에서 HTML 형식을 그대로 작성할 수 있다.

- JSX는 XML 같은 문법을 네이티브 자바스크립트로 변환을 해준다.

- 괄호를 사용하지 않아도 오류는 발생하지 않지만, 가독성을 위해 사용하는 것이 좋다.

- JSX는 Babel이 작동시킨다. 그렇다고 ES6 문법은 아니다.

- ```react
  // JS (Babel)

  class Codelab extends React.Component {
    render() {
      let text = "Wassup bro?"
      let style = {
        backgroundColor: 'aqua'
      }
      
      return (
        <div style={style}>{text}</div>
      );    
    }
  }

  class App extends React.Component {
    render() {
    	return (
    		<Codelab/>
  	);
    }
  }

  ReactDOM.render(<App/>, document.getElementById('root'));
  ```

  ```html
  // HTML

  <div id="root">
  </div>
  ```

  ```react
  // result

  Wassup bro?		// backgroundColor: 'aqua'
  ```

- render 메소드 안에서 어떤 view를 보여줄지 JSX 형태로 return을 하면 된다.

- ReactDOM이 render 메소드를 이용하여 컴포넌트를 렌더링한다. 이 메소드의 첫번째 인수는 렌더링할 JSX 형태의 코드이다. \<App/> 컴포넌트를 렌더링할 것이니 \<App/>을 적어준다. 두 번째 인수는 이 컴포넌트를 렌더링할 엘리먼트이다. 바로 root 엘리먼트이다. root 엘리먼트에 렌더링할 것이니 document.getElementById('root')를 작성한다.

- 모든 JSX의 코드는 container element 안에 포함시켜줘야 한다. (\<div> 안에)

- JSX 안에서 자바스크립트를 표현할 때는 {}로 wrapping 하면 된다.

- let은 ES6의 새로운 문법이다. var랑 비슷하게 변수를 선언할 때 사용되지만, var의 변수는 스코프가 기본적으로 함수 단위인데, let은 블록범위 내에서만 변수를 선언한다. 따라서 가끔 발생하는 스코프 관련 문제를 해결할 수 있다.

- let은 한 번 선언을 했으면, 다시 선언을 할 수 없다.

- 평상시에 변수를 선언할 때는 let을 사용해라. 그게 관습이다.

- JSX 안에서 style을 설정할 때는 key가 camelCase인 객체가 사용된다.

  ```react
  render() {
    let style = {
      color: "aqua",
      backgroundColor:"black"
    };
    
    return (
      <div style={style}>React CodeLab</div>
    );
  }
  ```

<br>

- JSX 안에서 class를 설정할 때는 class=가 아닌 className=을 사용한다.

  ```react
  render() {
    return (
    	<div className="box">React CodeLab</div>
    );
  }
  ```

<br>

- JSX 안에서 주석을 작성할 때는 { /* ... */ } 형식으로 작성한다.

  ```react
  render () {
    return (
    	<div>
      	{ /* This is how you comment */ }
      </div>
    );
  }
  ```

<br>

### props

- props는 컴포넌트 내부의 변화하지 않는 데이터(Immutable Data)를 처리할 때 사용한다.

- JSX 내부에 `{this.props.propsName}`, 작성은 `propsName="value"`.

- ```react
  // JS (Babel)

  class Codelab extends React.Component {
    render() {
      return (
        <div>
        	<h1>Wassup {this.props.name}</h1>
          <div>{this.props.children}</div>
        </div>
      );    
    }
  }

  class App extends React.Component {
    render() {
    	return (
    		<Codelab name="loopSong">HERE</Codelab>
  	);
    }
  }

  ReactDOM.render(<App/>, document.getElementById('root'));
  ```

  ```react
  // result

  Wassup loopSong
  HERE
  ```

- `{this.props.children}` props는 `\<Codelab name="loopSong">`와 `\</Codelab>` 사이에 있는 것이 나오게 된다.

<br>

- `App` 컴포넌트의 props를 하위 컴포넌트인 `Codelab` props로 전달하는 방법

- ```react
  // JS (Babel)

  class Codelab extends React.Component {
    render() {
      return (
        <div>
        	<h1>Wassup {this.props.name}</h1>
          <div>{this.props.children}</div>
        </div>
      );    
    }
  }

  class App extends React.Component {
    render() {
    	return (
    		<Codelab name={this.props.name}>{this.props.children}</Codelab>
  	);
    }
  }

  ReactDOM.render(<App name="loopSong">Im your children</App>, document.getElementById('root'));
  ```

  ```react
  // result

  Wassup loopSong
  Im your children
  ```

<br>

#### 기본값 설정

- 기본값을 설정할 때는 컴포넌트 선언이 끝난 후 `defaultProps` 객체를 설정하면 된다.

  ```react
  class App extends React.Component {
    render() {
      return (
      	<div>{this.props.value}</div>
      );
    }
  };

  App.defaultProps = {
    value: 0
  };
  ```

  ​

<br>

#### Type 검증

- 이 기능을 통해 특정 props 값이 특정 타입이 아니거나, 필수 props인데 입력하지 않았을 경우, 개발자 콘솔에서 경고를 띄우게 할 수 있다.

- type을 검증할 때는 컴포넌트 선언이 끝난 후 propTypes를 설정하면 된다.

- ```react
  class App extends React.Component {
    render() {
      return (
        <div>
        	{this.props.value}
          {this.props.secondValue}
          {this.props.thirdValue}
        </div>
      );
    }
  };

  App.propTypes = {
    value: React.PropTypes.string,
    secondValue: React.PropTypes.number,
    thirdValue: React.PropTypes.any.isRequired
  };
  ```

<br>

#### Type 검증 적용

- ```react
  // JS (Babel)

  class Codelab extends React.Component {
    render() {
      return (
        <div>
        	<h1>Wassup {this.props.name}</h1>
          <h2>{this.props.number}</h2>
          <div>{this.props.children}</div>
        </div>
      );    
    }
  }

  Codelab.propTypes = {
    name: React.PropTypes.string,
    number: React.PropTypes.number.isRequired
  };

  Codelab.defaultProps = {
    name: 'Unknown'
  };

  class App extends React.Component {
    render() {
    	return (
    		<Codelab name={this.props.name} number={this.props.number}>{this.props.children}</Codelab>
  	);
    }
  }

  ReactDOM.render(<App number={5}>Im your children</App>, document.getElementById('root'));
  ```

  ```react
  // result

  Wassup Unknown
  5
  Im your children

  // 설정에서 .min 삭제
  // Codepen에서 console 버튼을 클릭하면 에러가 있는지 확인 가능
  ```

<br>

### state

- state는 컴포넌트에서 유동적인 데이터를 보여줄 때 사용된다.
- state는 사용할 때 초기값 설정이 필수이다.
- 초기값 설정은 컴포넌트 생성자 메소드인 constructor에서 하면 된다.
- 생성자 안에서 this.state = {}으로 기본값 설정.
- props와는 달리, `setState({…})` 메소드를 통하여 컴포넌트 내부에서 값을 변경할 수 있다.
- 렌더링 이후에는 `this.state =`로 절대 사용하면 안 된다.

<br>

#### state로 counter 만들기

- ```react
  // JS (Babel)

  class Counter extends React.Component {
    
    constructor(props) {		// 초기값 설정
      super(props);
      this.state = {
        value: 0
      };
      this.handleClick = this.handleClick.bind(this);
    }
    
    
    // 버튼이 클릭될 때 실행될 메소드
    handleClick() {
    	this.setState({
      	value:this.state.value + 1
    	});
    }
    
    
    render() {
      return (    
  	  <div>
        	<h2>{this.state.value}</h2>
          <button onClick={this.handleClick}>Press Me</button>
        </div>
      );
    }
  }


  class App extends React.Component {
    render() {
      return (
        <Counter/>    
      );
    }
  }

  ReactDOM.render(<App></App>, document.getElementById("root")
  );
  ```

  ```react
  // result

  0
  Press Me (button)
  ```

- constructor의 매개변수는 props이다. 이 props는 나중에 Counter가 만들어질 때 전달받을 props이다.

- 버튼을 클릭했을 때 해당 메소드가 실행되게 하려면 `onClick`을 사용해라.

- React에서 사용하는 이벤트 시스템은 브라우저에서 사용되는 자바스크립트 네이티브 이벤트와 똑같은 인터페이스를 가지고 있다. 따라서 `onClick`이나 `onChange`를 사용할 수 있다.

- 자바스크립트 컴포넌트에서 임의의 메소드를 실행할 때는 해당 메소드에서 this가 무엇인지 모른다. 

  ```react
  // Chrome Console
  // Press Me 버튼을 클릭했을 때

  ▶︎Uncaught TypeError: Cannot read property 'setState' of null
  ```

- this가 무엇인지 알려면 따로 binding을 해줘야 한다.

- 나중에 handleclick에서 사용될 this는, render에서 사용된 this와 같다는 의미다. 하지만 constructor에서 bind 해주는 게 더 좋다. 이제 카운트가 올라간다.

  ```react
  // before
  <button onClick={this.handleClick.bind(this)}>Press Me</button>

  // after
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  ```

<br>

### Component Mapping

- 비슷한 코드를 반복해서 렌더링 하는 방법을 알아보자.

- 데이터 배열을 React에서 렌더링 할 때는 자바스크립트 내장함수인 map을 사용한다.

- **map()** 메소드는 파라미터로 전달된 함수를 통해 배열 내의 각 요소를 처리해서 그 결과로 새로운 배열을 생성한다.

- `arr.map(callback, [thisArg])`

  - callback: 새로운 배열의 요소를 생성하는 함수.
    - currentValue: 현재 처리되고 있는 요소.
    - index: 현재 처리되고 있는 요소의 index 값.
    - array: 메소드가 불려진 배열.
  - thisArg: callback 함수 내부에서 사용할 this 값 설정. (선택항목)

  ```javascript
  var numbers = [1, 2, 3, 4, 5];

  var processed = numbers.map(function(num) {
    return num * num;
  });

  processed;	// [1, 4, 9, 16, 25]


  // ES6 Syntax
  let numbers = [1, 2, 3, 4, 5];

  let result = numbers.map((num) => {
    return num * num;
  });

  result;	// [1, 4, 9, 16, 25]
  ```

<br>

- ```react
  class Contact extends React.Component {
    render() {
      return (
        <div>
          <div>Sam 010-0000-0001</div>
          <div>Ralph 010-0000-0002</div>
          <div>Leo 010-0000-0003</div>
          <div>Song 010-0000-0004</div>
        </div>
      );
    }
  }

  class App extends React.Component {
    render() {
      return (
      	<Contact/>	// Contact 컴포넌트 렌더링
      );
    }
  };

  ReactDOM.render(<App></App>, documentElementById("root")
  );
  ```

  ```react
  // result

  Sam 010-0000-0001
  Ralph 010-0000-0002
  Leo 010-0000-0003
  Song 010-0000-0004
  ```

<br>

- 반복되는 \<div>Sam 010-0000-0001\</div>
  ​             \<div>Ralph 010-0000-0002\</div>
  ​             \<div>Leo 010-0000-0003\</div>
  ​             \<div>Song 010-0000-0004\</div> 부분을 컴포넌트로 만들자.

  ```react
  // JS (Babel)

  class ContactInfo extends React.Component {
    render() {
      return (
        <div>{this.props.contact.name} {this.props.contact.phone}</div>
      );
    }
  }

  class Contact extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        contactData: [
          {name: 'Sam', phone: '010-0000-0001'},
          {name: 'Ralph', phone: '010-0000-0002'},
          {name: 'Leo', phone: '010-0000-0003'},
          {name: 'Song', phone: '010-0000-0004'}
        ]
      }
    }
    
    render() {
      
      
      const mapToComponent = (data) => {
        return data.map((contact, i) => {
          return (<ContactInfo contact={contact} key={i}/>);
        })  ;
      };
      
      
      return (
        <div>
          {mapToComponent(this.state.contactData)}
        </div>
      );
    }
  }

  class App extends React.Component {
    render() {
      return (
        <Contact/>
      );
    }
  };

  ReactDOM.render(<App></App>, document.getElementById("root")
  );
  ```

  ```react
  // result

  Sam 010-0000-0001
  Ralph 010-0000-0002
  Leo 010-0000-0003
  Song 010-0000-0004
  ```

- state를 사용할 때는 생성자 메소드에서 state를 초기화 해야 한다.

- `const` 또한 ES6의 새로운 문법이다. 프로그램이 실행되면서 변할 일이 없는 값을 지정할 때 사용하는 상수이다.

- `key`를 사용하는 이유는 각 데이터에 아이덴티티를 주기 위해서이다.

<br>

### 작업환경 설정하기

- ​



