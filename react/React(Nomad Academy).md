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

<br>

- `sudo npm install -g create-react-app`
  `create-react-app movie_app`
- 설치하면 4개의 script가 있다. **start/build/test/eject**.
- `song$ cd movie_app/`
  `yarn start` 실행하면 로컬 서버와 IP 주소가 보인다.
- 항상 React 프로젝트를 시작할 때마다 하는 것이 있다. 컴포넌트(components)를 디자인 하는 것이다.
- 3가지 컴포넌트를 만들 예정이다.
  1. 무비 리스트 컴포넌트 (앱 컴포넌트)
  2. 무비 카드 (무비)
  3. 무비 커버
- React는 컴포넌트에 기반하고 있다.
- JSX는 리액트 컴포넌트를 만들 때 사용하는 언어이다.
- 대단한 규칙은 없다. 간단한 HTML 뿐이다.
- 모든 컴포넌트는 **render function**을 가지고 있다.
- render의 기능은 '뭔가를 보여주는, 출력하는' 기능이다. '이 컴포넌트가 나에게 보여주는 것이 무엇인가' 이게 render의 기능이다.
- `yarn start`를 실행하면, js의 모든 코드를 가져와서 html 파일에 담는다. 그 파일을 public에서 찾을 수 있다.
- `public/index.html` 이게 바로 CRA로 만들어진 파일이다.
- 우리는 **index.js**에 파일을 만들고 있다. index.js는 **react, react-dom, css, 컴포넌트 App**을 불러온다.
- react와 reactDOM의 차이는, React는 UI 라이브러리이고, ReactDOM은 React를 웹사이트에 출력(render)하는 것을 도와주는 모델이다.
- React를 사용해서 웹사이트에 올려놓고 싶다면, ReactDOM을 사용하면 된다.
- React를 사용해서 모바일에 올려놓고 싶다면, ReactNative를 사용하면 된다.
- ReatDOM은 1개의 컴포넌트를 출력(render)하고, 그 다큐먼트 안에 엘리먼트가 있는데, 엘리먼트 ID는 root이다. 이것은 index.html 파일에 숨어 있다.
- 새로운 컴포넌트 만들기
  `new file > Movie.js`
  `new file > Movie.css`
- 컴포넌트는 항상 render를 해야 한다.
- 컴포넌트 생성 > 렌더 > 리턴 > html 내용 > 브라우저에서 확인
- app.js에서 Movie 컴포넌트를 여러 번 불러올 수 있다. 하지만 컴포넌트 각각의 id 없이 막 불러오는 건 사실 좋은 방법이 아니다.
- 큰 컴포넌트 안에 작은 컴포넌트를 집어 넣는 방식으로 작업을 한다.
- App 컴포넌트가 대빵 보스 컴포넌트이고, Movie라는 작은 꼬맹이 컴포넌트들이 있는 것이다. 그리고 그 Moive 컴포넌트 안에 제목, 그리고 MoviePoster라는 또 다른 꼬맹이 컴포넌트가 있는 것이다.
- Component > render > return > JSX
- JSX는 React로 작성하는 HTML이다.
- React에는 2개의 주요 컨셉이 있다. 하나는 **props**, 나머지 하나는 **state**이다.
- 메인 컴포넌트 App은 모든 영화들을 가져올 것이다. 그리고 그 영화들은 카드형태로 보여질 것이다. 즉, 메인 컴포넌트는 무비 리스트가 있다는 뜻이다. 그리고 리스트 안의 영화 카드에는 해당 영화의 정보가 각각 담길 것이다. 즉, 부모 컴포넌트는 칠드런 컴포넌트에게 각각 정보를 준다는 뜻이다. 
- 이미 어떤 오브젝트(props)가 있으면, 중괄호를 치고, this.props."title"로 써주면 된다.
- 데이터의 소스는 한군데뿐이다. 메인 컴포넌트가 데이터를 다 가지고 있는 것이다. 타이틀, 영화 포스터 정보를 메인에 다 집어넣고, 그걸 각각 컴포넌트에 props를 이용해 정보를 출력한다.

<br>

- API에서 긁어온 엄청난 양의 영화정보를 불러오고 싶을 때, 어떻게 해야할까?
- map이라는 기능은, 새로운 array를 만든다. 우리가 제공한 기능/명령의 결과값을 array로 만든다. map()을 하면 새로운 array가 생기는데, 다른 array의 엘리먼트를 포함한 값이다.
- 'movies' array를 가져다가, 맵핑을 해서(map), 새로운 array를 만드는 것이다.
- 리스트를 만들려면, array 하나를 잡고, 맵핑을 해서(map), 하나의 컴포넌트를 만든다. 그 array의 엘리먼트를 토대로 한 컴포넌트인 것이다.
- 아래 두 코드는 동일하다.

```react
{[
	<Movie title={movies[0].title} poster={movies[0].poster} />
	<Movie title={movies[1].title} poster={movies[1].poster} />
	<Movie title={movies[2].title} poster={movies[2].poster} />
	<Movie title={movies[3].title} poster={movies[3].poster} />
]}
```

```react
{movies.map(movie => {
  return <Movie title={movie.title} poster={movie.poster} />
})}
```

<br>

- key라는 것은 고유해야 한다.

- 'isRequired'라고 작성하면 movie 컴포넌트는 title이라는 prop을 제공하는 것이 필수로 설정된다. 부모 컴포넌트에서 얻는 정보의 종류가 무엇인지, 있는지 없는지 알 수 있다.

- React의 컴포넌트 라이프싸이클은, 여러 기능들을 정해진 순서대로 실행한다.

  1. WillMount
  2. render
  3. DidMount

- 컴포넌트가 '존재'하기 시작하면, React 세계는 `will mount` -> `did render` -> `did mount`한다.

  - will mount를 진행할 때 API에 작업을 요청한다.
  - will mount를 보면 싸이클이 시작되었음을 알게 되고,
  - did render를 보면 이제 컴포넌트가 React 세계에 '존재'하게 되었음을 알게 되고,
  - did mount를 보면 이제 성공적으로 React 세계에 컴포넌트가 자리잡았음을 알게 된다.

- update:

  - componentWillReceiveProps(): 컴포넌트가 새로운 props를 받았다는 뜻

  - shouldComponentUpdate(): React는 이전 props와 새로운 props가 다르면,

    ​							update = true라고 생각한다

- state는 React 컴포넌트 안에 있는 오브젝트이다.

- state가 바뀔 때마다 컴포넌트는 다시 render 한다.

- state를 바꿀 때는 setState를 설정하고, 업데이트할 때마다 render가 작동할 것이다.

- state를 변경하면, render가 다시 작동한다.

- setTimeout은 00시간 후에 00 작업을 수행시킨다는 뜻이다.

- 새로 영화를 추가할 때 ...this.state.movies를 붙여야 이전 리스트와 출력된다.

- ​