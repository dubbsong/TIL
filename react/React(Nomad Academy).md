- React 구조는 요소별, 컴포넌트별로 나눠서 작업할 수 있다.
- 쪼개서 작업하면 재사용이 가능하다.
- JSX는 React로 HTML을 쓰는 방법이다.
- ex) Instagram
  - \<Nav />
  - \<Header />
  - \<Number />
  - \<Grid />

```react
function Nav() {
  return (
  	<nav>
    	<ul>
      		<li></li>
          	...
      	</ul>
    </nav>
  )
}

function Header() {
  return (
  	<header>
    	<img src={avatar} />
      	<h1>dubbsong</h1>
      	...
    </header>
  )
}
```

- React는 Unidirectional(단방향) 데이터플로우를 가지고 있다. 데이터는 항상 일정한 장소에 위치해있고, 그 장소에서만 변경할 수 있다.
- 데이터는 위치한 장소에 있고, 상태가 변했을 경우, 데이터는 그대로 있고, UI가 업데이트 된다. 즉, 데이터가 UI를 변경시키는 것이다. UI는 절대로 데이터를 변경시키지 않는다. 즉, 데이터가 변하면 UI가 업데이트 된다.

`change Data, update UI`

- React는 프레임워크가 아니라 UI 라이브러리이다.
- React는 MVC(Model, View, Controller)에서 View이기 때문에 섞어 사용할 수 있다.

<br>

#### 무비앱 제작

- API를 yts.ag에서 불러온다.
- yts.ag는 Yify라는 토렌트 사이트가 있는데, yts.ag는 거기서 사용하는 API이다. 영화와 관련된 정보를 긁어온다.
- React 코드를 자바스크립트로 바꿔주는 툴을 **트랜스파일러**라고 한다. 우리가 사용할 트랜스파일러는 **웹팩**이다.
- 웹팩은 React 코드를 브라우저가 이해할 수 있는 코드로 변경해주는 역할을 한다.
- 웹팩은 많이 복잡하나, 이해해두면 굉장히 쿨한 툴이다.
- **create react app**은 웹팩과 같은 툴을 사용할 필요 없이 손쉽게 React 앱을 만들어주는 툴이다.

```react
npm install -g create-react-app		// create-react-app 안에 웹팩 파일이 숨어있는 셈이다

npx create-react-app my-app
cd my-app/
npm start
```

- ​

