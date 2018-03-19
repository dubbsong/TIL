### React

- 리액트는 유저인터페이스 라이브러리.
- 재사용 가능한 UI를 생성할 수 있게 해준다.
- Virtual DOM이라는 개념을 사용하여 상태의 변함에 따라 선택적으로 유저인터페이스를 렌더링한다.
- 리액트에서 데이터가 변하여 브라우저상의 실제 DOM을 업데이트 할 때에는 3가지 절차를 밟는다.
  1. 데이터가 업데이트 되면, 전체 UI를 Virtual DOM에 리렌더링한다.
  2. 이전 Virtual DOM에 있던 내용과 현재의 내용을 비교한다.
  3. 바뀐 부분만 실제 DOM에 적용된다.
  4. 결국에는 컴포넌트가 업데이트 될 때, 레이아웃 계산이 한 번만 이루어진다.
- 리액트의 특징
  - Virtual DOM을 사용한다.
  - JSX를 사용한다.
    JSX는 JavaScript의 확장 문법이다.
  - Component
    리액트 개발을 할 때는 모든 것을 Component로서 생각해야 한다.
- 리액트의 장점
  - Virtual DOM을 사용한 애플리케이션의 성능 향상.
  - 클라이언트에서도 렌더링 될 수 있고, 서버측에서도 렌더링 될 수 있다.
  - Component의 가독성이 매우 높고 간단하여 쉬운 유지보수가 가능하다.
  - 프레임워크가 아닌 라이브러리로써 다른 프레임워크들과 사용이 가능하다.
- 리액트의 제한
  - 애플리케이션의 View 레이어만 다루므로 이외의 부분은 다른 기술을 사용해야 한다.

<br>

- 리액트 프로젝트를 시작하려면 Node.js와 NPM을 설정해야 한다.
- 컴포넌트를 만들 때는 React.Component 클래스를 상속하여 만든다.
- 한 파일에는 여러개의 컴포넌트가 존재할 수 있다.
- Component들을 모듈화하여 여러 파일로 분리해서 사용하면 유지보수가 훨씬 쉬워진다.

<br>

- `props`는 컴포넌트에서 사용할 데이터 중 변동되지 않는 데이터를 다룰 때 사용한다.
- `parent` 컴포넌트에서 `child` 컴포넌트로 데이터를 전할 때 `props`가 사용된다.
- 컴포넌트에서 immutable(변하지 않는) 데이터가 필요할 때는, `render()` 메소드의 내부에 `{this.props.propsName}` 형식으로 넣고, 컴포넌트를 사용할 때는, `<>` 안에 `propsName="value"`를 넣어 값을 설정한다.
- 컴포넌트에서 원하는 props의 Type과 전달된 props의 Type이 일치하지 않을 때 콘솔에서 오류 메시지가 나타나게 하고 싶을 때에는, 컴포넌트 클래스의 `propTypes` 객체를 설정하면 된다. 즉, props를 지정하지 않으면 콘솔에 오류 메시지가 나타난다.

<br>

- `state`는 컴포넌트에서 유동적인 데이터를 다룰 때 사용한다.
- 리액트 애플리케이션을 만들 때에는 state를 사용하는 컴포넌트의 개수를 최소화하도록 노력해야 한다.
- 10개의 컴포넌트에서 유동적인 데이터를 사용하게 될 때에는, 각 데이터에 state를 사용할 게 아니라 props를 사용하고 10개의 컴포넌트를 포함시키는 `container` 컴포넌트를 사용하는 것이 효율적이다.
- state의 초기값을 설정할 때에는 constructor(생성자) 메소드에서 `this.state = {}`를 통하여 설정한다.
- state를 렌더링 할 때에는 `{this.state.stateName}`을 사용한다.
- state를 업데이트 할 때에는 `this.setState()` 메소드를 사용한다.
- setState 메소드를 사용하게 될 메소드를 `bind` 해줘야 한다. bind하지 않으면 컴포넌트가 가지고 있는 멤버 함수 및 객체에 접근할 수 없다.

<br>

- `props`와 `state`의 특성
  - parent 컴포넌트에 의해 값이 변경될 수 있는가?
    `props - yep`, `state -nope`
  - 컴포넌트 내부에서 변경될 수 있는가?
    `props - nope`, `state -yep`

<br>

- `map()` 메소드는 파라미터로 전달된 함수를 통하여 배열 내의 각 요소를 프로세싱하여 그 결과로 새로운 배열을 생성한다.
  - 문법: `arr.map(callback, [thisArg])`
- `callback`은 새로운 배열의 요소를 생성하는 함수로써, 다음 3가지 인수를 가진다.
  - `currentValue`: 현재 처리되고 있는 요소
  - `index`: 현재 처리되고 있는 요소의 index 값
  - `array`: 메소드가 불려진 배열
- `key`는 child 컴포넌트에 identity(독자성)을 부여한다.

<br>

- `this.state`에 포함된 배열에 원소를 삽입/제거/수정을 할 때에는 그 배열에 직접 접근하면 안 된다.
- `this.state`가 변경된다고 해서 컴포넌트가 업데이트 되지 않는다.
- 리액트 메뉴얼에서 강조한다. `this.state`를 직접 수정하지 말고 `this.setState()`를 사용하여 수정할 것을.

<br>

- 데이터가 수정될 때마다 상태에 변동이 없는, 즉 리렌더링 할 필요가 없는 컴포넌트들도 리렌더링 되고 있다.
- `Component Lifecycle API` 중 하나인 `shouldComponentUpdate()` 메소드를 컴포넌트 클래스 안에 작성해주면 해결할 수 있다.

<br>

- 컴포넌트를 생성할 때는 `constructor` > `componentWillMount` > `render` > `componentDidMount` 순으로 진행된다.
- 컴포넌트를 제거할 때에는 `componentWillUnmount` 메소드만 실행된다.
- 컴포넌트의 prop이 변경될 때에는 `componentWillReceiveProps` > `shouldComponentUpdate` > `componentWillUpdate` > `render` > `componentDidUpdate` 순으로 진행된다.
- state가 변경될 때에는 `shouldComponentUpdate`부터 시작된다.

<br>

- `constructor`: 
  - 생성자 메소드로써 컴포넌트가 처음 만들어질 때 실행된다.
  - 이 메소드에서 기본 state를 정할 수 있다.
- `componentWillMount`:
  - 컴포넌트가 DOM 위에 만들어지기 전에 실행된다.
- `render`:
  - 컴포넌트 렌더링을 담당한다.
- `componentDidMount`:
  - 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드이다.
  - 이 안에서 다른 JavaScript 프레임워크를 연동하거나, setTimeout, setInterval 및 AJAX 처리 등을 넣는다.
- `componentWillReceiveProps`:
  - 컴포넌트가 prop을 새로 받았을 때 실행된다.
  - prop에 따라 state를 업데이트 해야할 때 사용하면 유용하다.
- `shouldComponentUpdate`:
  - prop 혹은 state가 변경 되었을 때, 리렌더링을 할지 말지 정하는 메소드이다.
- `componentWillUpdate`:
  - 컴포넌트가 업데이트 되기 전에 실행된다.
  - 이 메소드 안에서는 `this.setState()`를 사용하지 마라. 무한루프에 빠진다.
- `componentDidUpdate`:
  - 컴포넌트가 리렌더링을 마친 후 실행된다.
- `componentWillUnmount`:
  - 컴포넌트가 DOM에서 사라진 후 실행되는 메소드이다.

<br>

- ref는 reference를 의미하며, 이는 DOM 요소에 이름을 달아준다.
- ref는 HTML의 id와 사뭇 비슷하지만, id는 일반 DOM 요소에 특정 DOM 메소드만 사용할 수 있지만, ref는 DOM 요소에도 사용하고 컴포넌트에도 사용할 수 있으며, 해당 컴포넌트가 가지고 있는 메소드 및 변수들을 사용할 수 있다는 점이 큰 차이점이다.
- 비록 ref를 사용하는 것이 코드를 간결하게 짤 수 있게 해주지만, state 및 props로 해결할 수 있는 부분에서는 ref를 사용하지 않고, 해결할 수 없는 부분에서만 ref를 사용하는 것이 유지보수에 좋은 방향이다.
- ref는 다음과 같은 경우에 유용하게 사용된다.
  - 컴포넌트에 의해 렌더 된 DOM에 직접 어떠한 처리를 해야 할 경우
  - 큰 프로젝트에 리액트 컴포넌트를 사용하는 경우

<br>

- `Sass`는 자주 사용되는 CSS 전처리기 중 하나이며, 확장된 CSS 문법들을 통하여 CSS 코드를 더욱 용이하게 작성한다.
- CSS에서 사용할 수 있는 문법을 확장하여 중복되는 코드를 줄이고, 더욱 보기 좋게 코드를 작성할 수 있다.
- 감싸진 구조로 CSS를 작성할 수 있기 때문에 가독성이 훨씬 높아진다.
- 자주 사용되는 값은 변수에 넣어서 사용할 수 있다.
  `$size: 100px;` > `width: $siez;`
- 자주 사용되는 구문들은 믹스인을 만들어서 재사용할 수 있다.
  `@mixin sth() {}`

<br>

### Redux

- 데이터 교류 및 state 관리를 쉽고 효율적으로 하게 해준다.
- Redux는 JavaScript 애플리케이션에서 **data-state**와 **UI-state**를 관리해주는 도구이다.
- 컴포넌트의 개수가 많아지거나, 데이터를 교류할 컴포넌트들이 parent-child 관계가 아니라면 복잡해진다. 직접 데이터를 교류하는 방법이 있지만 **절대 권장되지 않는 방법**이다. **스파게티 코드**가 만들어질 수 있다.
- parent-child 관계가 아닌 컴포넌트끼리 데이터를 교류할 때에는 글로벌 이벤트 시스템을 설정하는 방법이 있다. **Flux** 패턴은 이를 수행하기 위한 방법 중 하나이다.
- Flux 자체는 라이브러리가 아니라, **디자인 패턴**이다.
- 시스템에서 어떠한 **Action**을 받았을 때, **Dispatcher**가 받은 Action들을 통제하여 **Store**에 있는 데이터를 업데이트 한다. 그리고 변동된 데이터가 있으면 **View**에 리렌더링 한다. Dispatcher는 작업이 중첩되지 않도록 해준다. 즉, 어떤 Action이 Dispatcher를 통하여 Store에 있는 데이터를 처리하고, 그 작업이 끝날 때까지 다른 Action들을 대기시킨다.
- **Redux**는 **Flux** 아키텍처를 좀 더 편하게 사용할 수 있도록 해주는 라이브러리이다.
- store에서 모든 데이터를 담고 있고, 컴포넌트끼리는 직접 교류하지 않고 store 중간자를 통하여 교류한다. 
- dispatch와 subscribe는 store에서 사용하는 메소드명이기도 하다.
- Redux는 애플리케이션의 state를 위해 단 한 개의 store를 사용한다.
- state를 변경하는 유일한 방법은 어떤 일이 발생했는지 나타내주는 action 객체를 전달하는 것이다. 즉, 애플리케이션에서 state를 직접 변경할 수 없다는 의미이다. state를 변경하기 위해서는 action이 dispatch 되어야 한다.
- dispatch는 '보낸다'는 뜻이다.
- action은 어떤 변화가 일어나야 할 지 알려주는 객체이다.
- Redux에서는 state를 직접 변경하는 것을 허용하지 않는다. 그 대신에 action을 dispatch하여 상태값을 변경한다. 이 과정에서 받아온 action 객체를 처리하는 함수를 **Reducer**라고 부른다. action이 어떤 변화를 일어나야 할 지 알려주는 객체라면, Reducer는 그 정보를 받고 애플리케이션의 상태를 어떻게 바꿀지 정의한다고 볼 수 있다.
- `store`: React 프로젝트에서 사용하는 모든 동적 데이터들을 담아두는 곳이다.
- `action`: 어떤 변화가 일어나야 할 지 나타내는 객체이다.
- `reducer`: action 객체를 받았을 때, 데이터를 어떻게 처리할지 정의하는 객체이다.
- React에서 Redux를 사용할 때, 두 가지 의존 모듈이 사용된다.
  - `redux`
  - `react-redux`: Redux를 더 편하게 사용할 수 있게 해준다.
- Redux를 사용하면 상태값을, 컴포넌트에 종속시키지 않고, 상태 관리를 컴포넌트의 바깥에서 관리할 수 있게 된다.
- Redux를 사용하면서 비동기 작업(네트워크 요청)을 다룰 때는 미들웨어가 있어야 더욱 손쉽게 상태를 관리할 수 있다.
- `middleware`는 action이 dispatch 되어서 reducer에서 이를 처리하기 전에 사전에 지정된 작업들을 설정한다.
- 미들웨어를 액션과 리듀서 사이의 중간자라고 이해하면 된다.
- 미들웨어는 액션의 정보에 따라서 아예 무시를 하게 할 수도 있고, 액션의 정보를 가로채서 수정한 다음에 리듀서로 전달시켜줄 수도 있다.
- Redux DevTool을 사용한다면 redux-logger는 사실 쓸모가 없다. Redux Devtool이 이미 그 기능을 갖추고 있고 훨씬 강력하기 때문이다. 하지만 Redux Devtool을 사용하지 못하는 환경이라면 redux-logger는 매우 유용한 미들웨어이다.
- ​

































