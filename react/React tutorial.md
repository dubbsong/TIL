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
- In Board's **renderSquare** method, change the code to pass a **value** prop to the Square:

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
| :--- | ---- | ---- |
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

- ​