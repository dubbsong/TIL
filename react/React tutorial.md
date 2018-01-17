# React Tutorial

<br>

### What is React?

- React is a declarative(선언적이고), efficient(효율적이고), and flexible(유연한) JavaScript library for building user interfaces.
- We'll start with **React.Component** subclasses:

```react
class ShoppingList extends React.Component {
  render () {
    return (
    	<div className="shopping-list">
      		<h1>Shopping List for {this.props.name}</h1>
        	<ul>
        		<li>Instagram</li>
              	<li>WhatsApp</li>
              	<li>Oculus</li>
        	</ul>
      	</div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />
```



- Your components tell React what you want to render. Then React will efficiently(효율적으로) update and render just the right components(올바른 컴포넌트들을) when your data changes.
- Here, ShoppingList is a **React component class**, or **React component type**.
- A component takes in parameters, called **props**(하나의 컴포넌트는 props라 불리는 파라미터를 사용하고), and returns a hierarchy(계층, 체계) of views to display via the **render** method(render 메소드를 통해 표시할 뷰 계층 구조를 반환한다).
- The **render** method returns a *description*(내용) of what you want to render, and then React takes that description and renders it to the screen(React는 그 내용을 가져오고 스크린에 렌더링한다).
- In particular(특히), **render** returns a **React element**, which is a lightweight description of what to render(렌더링할 가벼운 내용인).
- Most React developers use a special syntax called JSX which makes it easier to write these structures(이 구조를 더 쉽게 작성할 수 있게 해주는).
- The **< div />** syntax is transformed at build time to **React.createElement('div')**(**< div/>** 구문은 빌드 시에 **React.createElement('div')**로 변환된다).
- The example above is equivalent to(위의 예제는 아래의 코드와 동일하다):

```react
return React.createElement(
	'div',
	{ className: 'shopping-list' },
	React.createElement(
		'h1',
		null,
		'Shopping List for',
		props.name
	),
	React.createElement(
		'ul',
		null,
		React.createElement (
			'li',
			null,
			'Instagram'
		),
		React.createElement (
			'li',
			null,
			'WhatsApp'
		),
		React.createElement (
			'li',
			null,
			'Oculus'
		)
  	)
);                           
```

- We won't be using it directly in this tutorial. Instead, we will keep using JSX.
- You can put any JavaScript expression within braces inside JSX(JSX 중괄호 안에는 JavaScript 문법을 사용할 수 있다).
- Each React element is a real JavaScript object that you can store in a variable or pass around your program(각 React element는 변수에 저장하거나 프로그램에 전달할 수 있는 실제 JavaScript 객체이다).
- The **ShoppingList** component only renders built-in DOM components, but you can compose custom React components just as easily, by writing **< ShoppingList />**(그러나 < ShoppingList />를 작성하여 커스텀 React 컴포넌트를 쉽게 구성할 수 있다).
- Each component is encapsulated so it can operate independently(각 컴포넌트는 캡슐화되어 독립적으로 동작할 수 있다), which allows you to build complex UIs out of simple components(이 때문에 간단한 컴포넌트들로 복잡한 UI를 구현할 수 있다).

<br>

### Getting Started (시작하기)

[Tic Tac Toe](https://codepen.io/gaearon/pen/oWWQNa?editors=0010)

- We have three components:

> *Square*

> *Board*

> *Game*

- The Square component renders a single **< button>**, the Board renders 9 squares, and the Game component renders a board with some placeholders that we'll fill in later(Game 컴포넌트는 나중에 우리가 채워야 할 공백이 있는 하나의 보드를 렌더링한다).
- None of the components are interactive at this point(지금 이 컴포넌트들은 아무런 동작도 하지 않는다).

<br>

### Passing Data Through Props (props를 통해 데이터 전달하기)

- Let's try passing some data from the Board component to the Square component.
- # In Board's **renderSquare** method, change the code to pass a **value** prop to the Square:

```react
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
```

- Then change Square's **render** method to show that value by replacing **{/ * TODO * /}** with **{this.props.value}**(value 값을 보여주기 위해 Square 컴포넌트의 render 메소드 안의 코드 {/ * TODO * /}를 {this.props.value}로 변경해라):

```react
class Square extends React.Component {
  render () {
    return (
    	<button className="square">
      		{this.props.value}
      	</button>
    );
  }
}
```

- Before:

Next player: X

|      |      |      |
| :--: | :--: | :--: |
|      |      |      |
|      |      |      |

- After:  You should see a number in each square in the rendered output(렌더링된 결과에서는 각 사각형 안에 숫자가 위치한다).

Next player: X

|  0   |  1   |  2   |
| :--: | :--: | :--: |
|  3   |  4   |  5   |
|  6   |  7   |  8   |

[View the current code.](https://codepen.io/gaearon/pen/aWWQOG?editors=0010)

<br>

### An Interactive Component (대화형 컴포넌트)

- Let's make the Square component fill in an 'X' when you click it.
- Try changing the button tag returned in the **render()** function of the Square like this:

```react
class Square extends React.Component {
  render() {
    return (
    	<button className="square" onclick={() => alert('click')}>
      		{this.props.value}
      	</button>
    );
  }
}
```

- If you click on a square now, you should get an alert in your browser.
- This uses the new JavaScript <u>arrow function</u> syntax.
- Note that we're passing a function as the **onClick** prop(onClick prop에 함수를 전달했다).
- Doing **onClick={alert('click')}** would alert immediately instead of when the button is clicked(코드를 작성하고 버튼을 클릭하면 alert창 대신 경고가 뜨게 된다).
- React components can have state by setting **this.state** in the constructor(React 컴포넌트는 생성자에서 this.state를 설정하여 상태를 가질 수 있다), which should be considered private to the component(상태는 각 컴포넌트마다 가지고 있다).
- Let's store the current value of the square in state, and change it when the square is clicked.
- First, add a constructor to the class to initialize the state(우선 상태를 초기화 하기 위해 클래스에 생성자를 추가):

```react
class Square extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
    	<button className="square" onClick={() => alert('click')}>
      		{this.props.value}
      	</button>
    );
  }
}
```

- In <u>JavaScript classes</u>, you need to explicitly call **super();** when defining the constructor of a subclass(JavaScript 클래스에서 서브클래스의 생성자를 정의할 때 super(); 메소드를 명시적으로 호출해줘야 한다).
- Now change the Square **render** method to display the value from the current state, and to toggle it on click(Square의 render 메소드에서 현재 상태의 value 값을 표시하고 클릭할 때 바뀌도록 수정):
  - Replace **this.props.value** with **this.state.value** inside the **< button>** tag.
  - Replace the **() => alert()** event handler with () => this.setState({value: 'X'}).
- Now the **< button>** tag looks like this:

```react
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  
  render() {
    return (
    	<button className="square" onClick={() => this.setState({value: 'X'})}>
      		{this.state.value}
      	</button>
    );
  }
}
```

- Whenever **this.setState** is called, an update to the component is scheduled, causing React to merge in the passed state update and rerender the component along with its descendants(this.setState가 호출될 때마다 컴포넌트가 업데이트되므로 업데이트된 상태가 전달되어 React가 이를 병합하고 하위 컴포넌트와 함께 다시 렌더링한다).
- When the component rerenders, **this.state.value** will be 'X' so you'll see an X in the grid(컴포넌트가 렌더링 될 때 this.state.value는 'X'가 되어 그리드 안에 X가 보이게 된다).
- If you click on any square, an X should show up in it.

[View the current code.](https://codepen.io/gaearon/pen/VbbVLg?editors=0010)

<br>

### Developer Tools (개발자 도구)

- The React Devtools extension(개발자 도구 확장 프로그램) for <u>Chrome</u> and <u>Firefox</u> lets you inspect(검사할 수 있게 해준다) a React component tree in your browser devtools.
- It lets you inspect the props and state of any of the components in your tree.
- After installing it, you can right-click any element on the page, click 'inspect' to open the developer tools, and the React tab will appear as the last tab to the right.

<br>

### Lifting State Up (상태 들어올리기)

- To make a fully-working game(더 원활하게 동작하는 게임을 만들기 위해), we now need to check if one player has won the game, and alternate placing X and O in the squares(사각형 안에 X와 O를 번갈아 표시해야 한다).
- When you want to aggregate data from multiple children or to have two child components communicate with each other(여러 하위 컴포넌트로부터 데이터를 모으거나 두 개의 하위 컴포넌트들이 서로 통신하기를 원한다면), move the state upwards so that it lives in the parent component(상위 컴포넌트 안으로 상태를 이동시켜라).
- The parent can then pass the state back down to the children via props(상위 컴포넌트는 props를 통해 하위 컴포넌트로 상태를 전달해줄 수 있다), so that the child components are always in sync with each other and with the parent(그러면 하위 컴포넌트들은 항상 하위 컴포넌트나 상위 컴포넌트와 동기할 수 있다).