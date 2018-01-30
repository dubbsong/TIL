- 페이스북과 인스타그램에서 사용자 경험을 향상하기 위해 만든 라이브러리.
- React는 페이스북에서 개발한 자바스크립트 라이브러리이다.
- React는 사용자 인터페이스(User Interface)를 구축하기 위한 선언적(declarative)이고 효율적(efficient)이며 유연한(flexible) JavaScript 라이브러리이다.
- React는 페이스북이 만든, MVC 패턴 중 V를 담당하는 라이브러리이다.
- 프레임워크가 아니다. 사용자 인터페이스 라이브러리이다.
- React는 라이브러리이기는 하지만 Redux나 MobX, react-router와 함께 프레임워크처럼 사용된다.
- 애플리케이션의 각 상태에 대한 간단한 뷰를 설계하면 React는 데이터가 변경될 때 적절한 구성요소만 효과적으로 업데이트하고 렌더링한다.
- Angular, Vue와 함께 프론트 프레임워크 3대장이라고 불린다.
- 컴포넌트 시스템을 구현했기 때문에 매우 효율적으로 코딩할 수 있다.
- 컴포넌트란, 쉽게 생각하면 웹 사이트를 조각낸 것이다. 그 조각 하나 하나가 각자 기능하는 완성품이다.
- React는 잘게 쪼갤수록 좋다.
- 컴포넌트를 잘게 쪼개면 재사용성이 높아진다. 재사용 가능할 정도로만 쪼개서 사용하면 된다.
- 이벤트 요청 시 서버에서 코드를 받아 다시 렌더링해야 되는 문제를 해결하기 위해 만들어졌다.
- React는 "지속해서 데이터가 변화하는 대규모 애플리케이션을 구축하기" 위하여 만들어졌다.
- React는 '컴포넌트' 단위로 재사용 가능한 UI 템플릿을 만든다.
- UI Components 만드는 일만 하며 캡슐화를 잘 시켜줘서 재사용성이 높다.
- 현재 페이스북, 인스타그램, MS 등 대형 서비스에서도 사용되고 있는 견고한 라이브러리이다.
- React는 Virtual DOM이라는 개념을 사용하여 상태(state)의 변함(diff)에 따라 선택적으로 UI를 렌더링한다. 따라서 최소한의 DOM 처리로 컴포넌트 업데이트가 가능하다.
- DOM(Document Object Model)이란 객체를 통해 구조화된 문서를 표현하는 방법을 말한다. XML 또는 HTML로 작성된다. 웹 브라우저는 DOM을 이용해 객체에 자바스크립트와 CSS를 적용한다. DOM은 트리 형태로 되어 있으며 특정 노드(node)의 서치(search)와 수정, 제거, 삽입이 가능하다. DOM의 문제점은 동적 UI에 최적화되어 있지 않다는 것이다. HTML은 그 자체로 정적인 문서(document)이기 때문이다큰 규모의 웹 애플리케이션은 하나의 페이지에도 수많은 요소들이 생기는데, 이 모든 요소들을 DOM에 직접 접근하여 조작하면서 변화를 주다보면 속도 저하를 피할 수 없게 된다. 성능 개선을 위해서는 reflow 회수를 줄이기 위해 코드를 최적화 해야 한다.
- DOM 조작을 아예 하지 않을 수는 없으니, 최소한의 조작만 하여 성능 저하 문제를 해결해보고자 하는 노력이 Virtual DOM을 탄생시켰다.
- Virtual DOM은 DOM 작업을 가상화(추상화)하여 미리 처리한 다음, 실제 DOM에 한 번에 적용하는 방식이다.
- 컴포넌트가 업데이트 될 때, 레이아웃 계산(reflow)이 한 번만 이루어지므로 속도 저하 문제를 개선할 수 있게 되는 것이다.
- React는 지속적으로 데이터가 변화하는 대규모 애플리케이션 구축에 적절하다. 단순 라이팅만 있는 정적 웹페이지의 경우 React를 쓰지 않는 편이 더 낫다.
- React와 Virtual DOM이 주는 최고의 편의성은 **간결한 업데이트 처리**이다.
- 한 가지 일만해서 단순하다.
- 여러 자바스크립트 프레임워크나 라이브러리와 함께 사용할 수 있다.
- React를 사용하기 위해 기존 코드를 모두 바꿀 필요 없이 필요한 부분부터 조금씩 사용이 가능하다.
- MVC는 확장이 어렵고 거대한 시스템에 어울리지 않는다고 페이스북은 결론을 내렸다. 이유는 새로운 기능 추가 시 시스템의 복잡도가 기하급수적으로 증가하여 개발자는 기존 기능에 대한 영향을 주지 않을지에 대한 불안감을 주게 된다. 모델(Model)과 뷰(View)의 수가 커지고 데이터의 흐름이 양방향으로 이루어질수록 복잡도는 더욱 증가하고 디버깅 및 코드를 이해하기 어려워지므로 MVC는 작은 앱에 어울린다는 것이다.
- 그래서 MVC의 대안으로 "좀 더 예측 가능하도록 코드 구조화"에 대한 목표로 "데이터 흐름이 단방향인 시스템 아키텍처" Flux를 제안한다.
- JSX(JavaScript XML)는 페이스북에서 스펙을 정의한 XML과 비슷한 자바스크립트 확장 문법이다.
- JSX는 자바스크립트의 문법 확장이다.
- JSX는 React "요소"를 만든다.
- JSX 안에 자바스크립트 표현식을 중괄호({})로 묶어서 포함시킬 수 있다.
- 따옴표(문자열 값인 경우) 또는 중괄호(표현식인 경우) 중 하나를 사용해야 한다. 둘 다 같은 속성에 사용할 수 없다.
- JSX는 자바스크립트에 가깝기 때문에 `camelCase`속성 이름 컨벤션을 사용한다.
- JSX는 자바스크립트로 만든 XML로, HTML과 매우 유사한 모양을 하고 있다.
- React는 JSX 문법을 사용하여 UI를 템플릿화한다.
- 데이터가 변할 때 바뀐 부분만을 업데이트하여 "새로고침" 하지 않아도 변경된 내용 확인이 가능하다. React의 큰 특징이다.
- 이것은 가상 DOM(Virtual DOM)에 DOM Tree와 같은 전체 구조체를 가지고 있고 변경이 생기면 구조체를 비교(Diff)하여 최소한의 요소만 DOM에 적용한다.
- 데이터가 양방향으로 흐르지 않는다(Unidirectional Data Flow). 상위 컴포넌트에서 하위 컴포넌트로 단방향으로 흐른다.
- React는 일반적으로 MVC 패턴에서 뷰 레이어만을 담당한다.
- React는 Reactive한 단방향의 흐름을 가지고 있다.
- Reactive하다는 것은 상태(일반적인 의미에서의 state)가 바뀌면 뷰도 함께 업데이트가 된다는 것이며, 단방향이라는 것은 한 방향으로 데이터가 흐른다는 것이다.
- 상태는 상위 컴포넌트(Owner)에서 하위 컴포넌트(Ownee)로 흐르게 되어 있는데, 이 데이터는 React에서 prop이라고 지칭되며, JSX에서는 HTML의 attribute처럼 작성된다.

```react
// 동적으로 생성되는 모델의 경우 보통은
// 'Array.prototype.map'을 이용하여
// 배열 형태 모델을 작성하고, key를 배정하지만 
// 글의 목적에 맞게 간단하게 쓰기 위하여
// 정적으로 작성한다.

var ShoppingCart = React.createClass({
  render() {
    return 
      <div>
      	<ShoppingItem name="kimchi" available={true} />
      	<ShoppingItem name="rice" available={true} />
      	<ShoppingItem name="curry" available={false} />
      </div>
  }
});

var ShoppingItem = React.createClass({
  render() {
    return
      <div>
    	<div>
      		상품명: {this.props.name},
      		구입가능: {this.props.available ? '가능' : '불가능'}
    	</div>
      </div>
  }
});
```

- 컴포넌트 위계와 데이터 흐름을 설명하기 위해, 정말로 기본적인 React 컴포넌트 두 개를 만들었다.
- 컴포넌트는 ShoppingCart -> ShoppingItem 형태의 위계를 가지게 되며, 더 많은 데이터를 표현해야 할 경우 더욱 작은 형태로 쪼개야 할 수도 있다.
- 데이터는 \<ShoppingCart />에서 \<ShoppingItem />으로 흐른다.
- \<ShoppingItem name="kimchi" available={true} />처럼 HTML attribute처럼 써준 것이 하위 컴포넌트로 상태를 주입하는 부분이다.
- 모든 React 컴포넌트는 HTML의 인라인 이벤트 핸들러 같은 onClick 등의 prop을 넘김으로서 인터랙션을 표현할 수 있다.
- React는 HTML Element들을 Virtual DOM을 이용해 표현한다.
- Virtual DOM은 가상의 HTML Element들을 가지고 있다가, (재)렌더링을 하면 필요한 부분만 업데이트(DOM 조작)하는 방식이다.
- Virtual DOM은 사실 그 개념을 알고 나면 React의 구현 디테일에 불과하지만, key, prop 등 차후 여러 API들과 연관이 있기 때문에 개념을 알고 있을 필요가 있다.
- React는 기본적으로 빠르지 않다. 가끔 'React는 빠르다'라는 주장이 나오면 '해주는 것에 비해서는 빠르다' 또는 '최적화를 잘 해주면 빨라진다' 정도로 받아들이면 된다.
- main.js 파일은 webpack의 entry 파일(진입점)로 번들링 작업이 이루어지는 중심 지점이다. HelloWorld.js에서 만든 컴포넌트를 import하고, 기타 import한 파일들을 재귀적으로 불러와 하나의 파일로 합치는 작업을 수행한 후 페이지에 렌더링한다.
- React 컴포넌트를 페이지에 렌더링할 때는 react-dom 모듈을 불러와 render 함수를 통해 처리한다.
- render 함수의 첫 번째 파라미터는 렌더링할 JSX 형태의 코드로, 여기서는 HelloWorld 컴포넌트를 렌더링한다.
- React의 컨셉은 단순하다. 흔히 사용되는 MVC 패턴에서 View에만 집중하겠다는 것이다.
- 다른 프레임워크들이 MVC를 모두 다루겠다는 목표를 가진 것에 비해 React는 View에만 집중하고 있다.
- React는 처음 만들어질 때부터 서버-클라이언트 양쪽에서 사용할 수 있는 라이브러리임을 표방했다. 클라이언트에서 만들어 내는 결과물을 서버에서도 만들어 사용자에게 전송할 수 있다는 것이다.
- npm은 Node.js용 패키지 관리자이다. 프론트엔드 엔지니어와 디자이너들이 JavaScript 코드를 공유하는 가장 보편적인 방법이다.
- React 컴포넌트는 입력 데이터를 받고 화면에 표시할 것을 반환하는 `render()` 메소드를 구현한다.
- 컴포넌트에서 전달하는 입력 데이터는 `this.props`를 통해 `render()`에서 접근할 수 있다.
- 입력 데이터를 가져오는 것 외에도(`this.props`를 통해 접근), 컴포넌트는 내부 상태 데이터를 관리할 수 있다(`this.state`를 통해 접근).
- 컴포넌트의 상태 데이터가 바뀌면, 렌더링된 마크업은 `render()`를 다시 호출하여 업데이트 된다.

```react
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world'
  }
};
```

- 이 객체는 "React elements"라고 부른다. 화면에서 볼 수 있는 내용에 대한 설명으로 생각할 수 있다. React는 이 객체를 읽어들이고 이를 사용하여 DOM을 구성하고 최신 상태로 유지한다.
- 요소는 React 앱의 가장 작은 구성 블록이다.
- 요소는 화면에 표시할 내용을 설명한다.

```react
const element = <h1>Hello, world</h1>
```

<br>

- React DOM에 의해 관리되는 모든 것이 이 요소 안에 들어가므로 이것을 "루트" DOM 노드라고 부른다.

```react
<div id="root"></div>
```

<br>

- React 요소를 DOM 노드에 렌더링하고 싶다면, `ReactDOM.render()`에 둘 다 전달하면 된다.

```React
const element = <h1>Hello, world</h1>;
ReactDOM.render(
	element,
  	document.getElementById('root')
);
```

<br>

- UI를 업데이트 할 수 있는 유일한 방법은 새로운 요소를 만드는 것이며, 이 요소를 `ReactDOM.render()`로 전달하는 것이다.
- 개념상 컴포넌트는 자바스크립트 함수와 비슷하다. 임의의 입력("props"라고 부르는)을 받아들이고 어떤 게 화면에 나타나야 하는 지를 설명하는 React 요소를 반환한다.
- 컴포넌트를 정의하는 가장 간단한 방법은 자바스크립트 함수로 작성하는 것이다.

<br>

```react
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

```react
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

- 위 두 컴포넌트는 동일하다.
- 이 함수는 단일 "props" 객체 인수를 받고 React 요소를 반환하기 때문에 유효한 React 컴포넌트이다. 이러한 컴포넌트는 말 그대로 자바스크립트 함수이기 때문에 "함수형"이라고 부른다.

<br>

```react
const element = <Welcome name="Sara" />;
```

- React가 유저가 정의한 컴포넌트를 나타내는 요소를 볼 때 JSX 속성을 이 컴포넌트에 단일 객체로 전달한다. 이 객체를 "props"라고 부른다.

<br>

```react
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
	element,
  	document.getElementById('root')
);

// Hello, Sara
```

- 위 코드는 "Hello, Sara"를 페이지에 렌더링한다.
- 컴포넌트 이름은 항상 대문자로 시작한다. 예를 들어 `<div />`는 DOM 태그를 나타내지만 `<Welcome />`은 컴포넌트를 나타내며 스코프에 `Welcome`을 필요로 한다.
- React 앱에서 버튼, 폼, 다이얼로그, 스크린 같은 것들은 모두 일반적으로 컴포넌트로 표현된다.

<br>

```react
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
  	<div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
	<App />,
  	document.getElementById('root')
);
```

<br>

- 새 React 앱은 단일 `App` 컴포넌트를 최상위에 둔다. 그러나 기존 앱에 React를 도입하는 경우, `Button` 같은 작은 컴포넌트부터 덩치를 키워나가기 시작하여 점차적으로 뷰 계층의 최상단으로 나아갈 수 있다.

<br>

- 컴포넌트를 더 작은 컴포넌트로 쪼개는 것을 두려워하지 마라.

```react
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

- 이 컴포넌트는 author(객체), text(문자열), date(날짜)를 props로 받고, 소셜 미디어 웹사이트의 덧글을 나타낸다.
- 이 컴포넌트는 중첩 때문에 변경하기 까다로울 수 있으며, 각 파트를 다시 사용하기 어렵다. 몇 가지 컴포넌트를 추출해보자.

```react
// Avatar를 추출할 수 있다
function Avatar(props) {
  return (
  	<img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```

- Avatar는 Comment 내에서 렌더링되는지 알 필요가 없다. 따라서 속성을 author 대신 user라는 더 일반적인 이름을 사용한다. 컴포넌트가 사용되는 상황이 아닌 컴포넌트 자체 관점에서 props 이름을 짓는 걸 권장한다.

<br>

- 컴포넌트를 추출하는 건 처음에는 쓸데없는 일처럼 보일 수 있지만, 재사용 가능한 컴포넌트 팔레트를 사용하면 큰 앱에서 비용을 줄인다.

<br>

- 컴포넌트를 함수나 클래스 중 어떤 걸로 선언했건 props를 수정할 수 없다.
- **모든 React 컴포넌트는 props와 관련한 동작을 할 때 순수 함수처럼 동작해야 한다.**
- ​