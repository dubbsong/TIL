## Movie App

<br>

### Creating React Components with JSX (1)

- `Desktop song$ sudo npm install -g create-react-app`
  `create-react-app movie_app`
  `cd movie_app`
  `yarn start`

- ```react
  // App.js

  import React, { Component } from 'react';
  import './App.css';

  class App extends Component {
    render() {	
      return (
  	  <div className="App">
        
        </div>
      );
    }
  }

  export default App;
  ```

  ```react
  // App.css

  .App {
    
  }
  ```

- 모든 컴포넌트는 **render 함수**를 가지고 있다.

- render의 기능은 **'무언가를 보여주는, 출력하는'** 기능.

- 우리는 **index.js**에 파일을 만들고 있다.

- **ReactDOM**은 React를 웹사이트에 출력(render)하는 것을 도와주는 모델.

<br>

### Creating React Components with JSX (2)

- 새로운 컴포넌트 생성
  `src song$ touch Movie.js`
  `src song$ touch Movie.css`


- ```react
  // Movie.js

  import React, { Component } from 'react';
  import './Movie.css';

  class Movie extends Component {
  	render() {
  		return (
       	  <div>
         		 <MoviePoster />
         	 	 <h1>CAPTAIN FANTASTIC</h1>
         	  </div>
  		);
  	}
  }
       
  class MoviePoster extends Component {
  	render() {
  		return (
  			<img src="https://is2-ssl.mzstatic.com/image/thumb/Video22/v4/71/09/3b/71093bba-626b-e900-0c05-f0a97b2070f2/source/1200x630bb.jpg" />
  		);
  	}
  }

  export default Movie;
  ```

  ```react
  // App.js

  import React, { Component } from 'react';
  import './App.css';
  import Movie from './Movie';

  class App extends Component {
  	render() {	
  		return (
  			<div className="App">
  				<Movie />
        			<Movie />
        			<Movie />
        			<Movie />
  			</div>
  		);
  	}
  }

  export default App;
  ```

  ```react
  // http://localhost:3000/
  img
  CAPTAIN FANTASTIC

  img
  CAPTAIN FANTASTIC

  img
  CAPTAIN FANTASTIC

  img
  CAPTAIN FANTASTIC
  ```

<br>

- React에는 2개의 주요 컨셉이 있다. 하나는 **props**, 나머지 하나는 **state**이다.
- **props**를 통해서 부모가 자식에게 정보를 준다.

<br>

### Dataflow with Props (1)

- ```react
  // App.js

  // import React, { Component } from 'react';
  // import './App.css';
  // import Movie from './Movie';

  const movies = [
    "Captain Fantastic",
    "Hector and the Search for Happiness",
    "The Secret Life of Walter Mitty",
    "About Time"
  ]

  // class App extends Component {
  //   render() {	
  //     return (
  //  	 <div className="App">
        		<Movie title={movies[0]} />
        		<Movie title={movies[1]} />
        		<Movie title={movies[2]} />
        		<Movie title={movies[3]} />
  //       </div>
  //     );
  //   }
  // }

  // export default App;
  ```

  ```react
  // Movie.js

  // import React, { Component } from 'react';
  // import './Movie.css';

  // class Movie extends Component {
  //   render() {
  	   console.log(this.props);
  //     return (
  //     	  <div>
  //     		 <MoviePoster />
       	 	 <h1>{this.props.title}</h1>
  //     	  </div>
  //     );
  //   }
  // }
       
  // class MoviePoster extends Component {
  //   render() {
  //     return (
  //        <img src="https://is2-ssl.mzstatic.com/image/thumb/Video22/v4/71/09/3b/71093bba-626b-e900-0c05-f0a97b2070f2/source/1200x630bb.jpg" />
  //     );
  //   }
  // }

  // export default Movie;
  ```

  ```react
  // http://localhost:3000/
  same img
  Captain Fantastic

  same img
  Hector and the Search for Happiness

  same img
  The Secret Life of Walter Mitty

  same img
  About Time

  // Console

  ▶︎ {title: "Captain Fantastic"}
  ▶︎ {title: "Hector and the Search for Happiness"}
  ▶︎ {title: "The Secret Life of Walter Mitty"}
  ▶︎ {title: "About Time"}
  ```

- 이것이 React다. 부모 컴포넌트가 자식 컴포넌트에게 정보를 주는 것이다.


<br>

### Dataflow with Props (2)

- ```react
  // App.js

  // import React, { Component } from 'react';
  // import './App.css';
  // import Movie from './Movie';

  const movies = [
  	"Captain Fantastic",
  	"Hector and the Search for Happiness",
      "The Secret Life of Walter Mitty",
      "About Time"
  ]

  const movieImages = [
      "https://is2-ssl.mzstatic.com/image/thumb/Video22/v4/71/09/3b/71093bba-626b-e900-0c05-f0a97b2070f2/source/1200x630bb.jpg",
      "http://www.video2k.is/data/yify/medium_cover/51486.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/a1/66/b8/a166b81c-0f6b-c751-6472-32bac5cf7ff0/886444332415.jpg/1200x630bb.jpg",
      "http://www.mjyoung.net/imgsrc/About04.jpg"
  ]

  // class App extends Component {
  //   render() {	
  //     return (
  //  	 <div className="App">
          		<Movie title={movies[0]} poster={movieImages[0]} />
          		<Movie title={movies[1]} poster={movieImages[1]} />
          		<Movie title={movies[2]} poster={movieImages[2]} />
          		<Movie title={movies[3]} poster={movieImages[3]} />
  //       </div>
  //     );
  //   }
  // }

  // export default App;
  ```

  ```react
    // Movie.js

    // import React, { Component } from 'react';
    // import './Movie.css';

    // class Movie extends Component {
    //   render() {
    	   console.log(this.props);
    //     return (
    //     	  <div>
         		 <MoviePoster poster={this.props.poster} />
         	 	 <h1>{this.props.title}</h1>
    //     	  </div>
    //     );
    //   }
    // }
         
    // class MoviePoster extends Component {
    //   render() {
    	   console.log(this.props);
    //     return (
  	        <img src={this.props.poster} />
    //     );
    //   }
    // }

    // export default Movie;
  ```

  ```react
    // http://localhost:3000/
    different img
    Captain Fantastic

    different img
    Hector and the Search for Happiness

    different img
    The Secret Life of Walter Mitty

    different img
    About Time


    // Console
    ▶︎ {title: "Captain Fantastic", poster: "sth"}
    ▶︎ {poster: "sth"}
    ▶︎ {title: "Hector and the Search for Happiness", poster: "sth"}
    ▶︎ {poster: "sth"}
    ▶︎ {title: "The Secret Life of Walter Mitty", poster: "sth"}
    ▶︎ {poster: "sth"}
    ▶︎ {title: "About Time", poster: "sth"}
    ▶︎ {poster: "sth"}
  ```


- 여기까지가 **props**와 **컴포넌트**였다.

- 여기까지의 코드는 복붙이기 때문에 비효율적이다.

<br>

### List with .map

- API에서 긁어온 엄청난 양의 정보를 불러오고 싶을 때는 어떻게 해야 할까.

- ```react
  // App.js

  // import React, { Component } from 'react';
  // import './App.css';
  // import Movie from './Movie';

  const movies = [
    {
      title: "Captain Fantastic",
      poster: "https://is2-ssl.mzstatic.com/image/thumb/Video22/v4/71/09/3b/71093bba-626b-e900-0c05-f0a97b2070f2/source/1200x630bb.jpg"
    },
    {
      title: "Hector and the Search for Happiness",
      poster: "http://www.video2k.is/data/yify/medium_cover/51486.jpg"
    },
    {
      title: "The Secret Life of Walter Mitty",
      poster: "https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/a1/66/b8/a166b81c-0f6b-c751-6472-32bac5cf7ff0/886444332415.jpg/1200x630bb.jpg"
    },
    {
      title: "About Time",
      poster: "http://www.mjyoung.net/imgsrc/About04.jpg"
    }
  ]

  // class App extends Component {
  //   render() {	
  //     return (
  //  	 <div className="App">
     {movies.map(movie => {
       return <Movie title={movie.title} poster={movie.poster} />
     })}
  //       </div>
  //     );
  //   }
  // }

  // export default App;
  ```

  ```react
  // http://localhost:3000/
  different img
  Captain Fantastic

  different img
  Hector and the Search for Happiness

  different img
  The Secret Life of Walter Mitty

  different img
  About Time

  // Console
  ▶︎Warning: Each child in an array or iterator should have a unique "key" prop.
  ```

  ```react
  // before
    {movies.map(movie => {
         return <Movie title={movie.title} poster={movie.poster} />
         
         
    // after (,index / key={index})
    {movies.map((movie, index) => {
         return <Movie title={movie.title} poster={movie.poster} key={index} />
  ```

- React는 엘리먼트가 많을 경우 **key**를 줘야 한다.


- error가 해결된다.

<br>

- 아래 두 코드는 동일하다.

- ```react
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

- ```react
  // App.js

  // import React, { Component } from 'react';
  // import './App.css';
  // import Movie from './Movie';

  // const movies = [
  //		{
  // 			title: "Captain Fantastic",
  // 			poster: "https://is2-ssl.mzstatic.com/image/thumb/Video22/v4/71/09/3b/71093bba-626b-e900-0c05-f0a97b2070f2/source/1200x630bb.jpg"
  // 		},
  // 		{
  // 			title: "Hector and the Search for Happiness",
  // 			poster: "http://www.video2k.is/data/yify/medium_cover/51486.jpg"
  // 		},
  // 		{
  // 			title: "The Secret Life of Walter Mitty",
  // 			poster: "https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/a1/66/b8/a166b81c-0f6b-c751-6472-32bac5cf7ff0/886444332415.jpg/1200x630bb.jpg"
  // 		},
  // 		{
  // 			title: "About Time",
  // 			poster: "http://www.mjyoung.net/imgsrc/About04.jpg"
  // 		}
  // ]

  // class App extends Component {
  //    render() {	
  //       return (
  //  	    <div className="App">
  	        {movies.map((movie, index) => {
                 return <Movie title={movie.title} poster={movie.poster} key={index} />
              })}
  //          </div>
  //       );
  //    }
  // }

  // export default App;
  ```

<br>

### Validating Props with PropTypes

- ```react
  // Movie.js

  // import React, { Component } from 'react';
     import propTypes from 'prop-types';
  // import './Movie.css';

  // class Movie extends Component {

     static propTypes = {
       title: propTypes.string.isRequired,
       poster: propTypes.string.isRequired
     }

  //   render() {
  //	   console.log(this.props);
  //     return (
  //     	  <div>
  //     		 <MoviePoster poster={this.props.poster} />
  //     	 	 <h1>{this.props.title}</h1>
  //     	  </div>
  //     );
  //   }
  // }
       
  // class MoviePoster extends Component {

     static propTypes = {
       title: propTypes.string.isRequired,
       poster: propTypes.string.isRequired
     }

  //   render() {
  //	   console.log(this.props);
  //     return (
  //        <img src={this.props.poster} />
  //     );
  //   }
  // }

  // export default Movie;
  ```

- `string`으로 부모 컴포넌트에게서 받는 정보의 종류가 무엇인지 체크할 수 있다.

- `isRequired`로 Movie 컴포넌트는 title이라는 prop을 제공하는 것이 필수로 설정되는 것이다.

<br>

### Lifecycle Events on React

- 컴포넌트는 여러 기능들을 **정해진 순서대로 실행**한다.
- Render:
  1. **componentWillMount()**
     (API에 작업 요청)
  2. **render()** 
  3. **componentDidMount()**
- Update:
  1. **componentWillReceiveProps()**
     (컴포넌트가 새로운 props를 받았다는 뜻)
  2. **shouldComponentUpdate()**
     (props가 변경되면 'update = true')
  3. **componentWillUpdate()**
     (수행할 때 로딩 메시지인 spinner를 붙일 수도 있다)
  4. **render()**
  5. **componentDidUpdate()**
     (로딩 메시지를 숨기면 된다)

<br>

### Thinking in React: Component State

- **state**는 컴포넌트 안에 있는 오브젝트.

- 컴포넌트 안의 state가 바뀔 때마다 render가 발생.

- state를 직접적으로 사용하면 안 된다.

- state를 직접적으로 변경하면 render 설정이 작동하지 않는다.

- state를 업데이트하려면 **this.setState**를 사용해야 한다.

- ```react
  // App.js

  // import React, { Component } from 'react';
  // import './App.css';
  // import Movie from './Movie';

  // const movies = [
  //		{
  //			title: "Captain Fantastic",
  //			poster: "https://is2-ssl.mzstatic.com/image/thumb/Video22/v4/71/09/3b/71093bba-626b-e900-0c05-f0a97b2070f2/source/1200x630bb.jpg"
  //		},
  //		{
  //			title: "Hector and the Search for Happiness",
  //			poster: "http://www.video2k.is/data/yify/medium_cover/51486.jpg"
  //		},
  //		{
  //			title: "The Secret Life of Walter Mitty",
  //			poster: "https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/a1/66/b8/a166b81c-0f6b-c751-6472-32bac5cf7ff0/886444332415.jpg/1200x630bb.jpg"
  //		},
  //		{
  //			title: "About Time",
  //			poster: "http://www.mjyoung.net/imgsrc/About04.jpg"
  //		}
  // ]

  // class App extends Component {

  	state = {
  	  greeting: 'Wassup bro?'
  	}

  	componentDidMount() {
  	  setTimeout(() => {
  	    this.setState({
  	      greeting: 'Wassup again!'
  	    })
  	  }, 2000)
  	}

  //   render() {	
  //     return (
  //  	 <div className="App">
   		 {this.state.greeting}
  // 		 {movies.map((movie, index) => {
  //   	 	return <Movie title={movie.title} poster={movie.poster} key={index} />
  // 		 })}
  //       </div>
  //     );
  //   }
  // }

  // export default App;
  ```

  ```react
  // http://localhost:3000/
  Wassup bro?	
    // 2초 후에 바뀐다
  Wassup again!
    
  img
  Captain Fantastic

  img
  Hector and the Search for Happiness

  img
  The Secret Life of Walter Mitty

  img
  About Time
  ```

- **setTimeout**은 xx시간 후에 작업을 수행시킨다는 뜻이다.

<br>

### Practicing this.setState()

- 외부에 있는 무비 리스트를 state 안으로 이동

- ```react
  // App.js

  // import React, { Component } from 'react';
  // import './App.css';
  // import Movie from './Movie';

  // class App extends Component {

  // state = {
  // 	  greeting: 'Wassup bro?',
  	   movies: [
  		   {
  			   title: "Captain Fantastic",
  			   poster: "https://is2-ssl.mzstatic.com/image/thumb/Video22/v4/71/09/3b/71093bba-626b-e900-0c05-f0a97b2070f2/source/1200x630bb.jpg"
  		   },
  		   {
   			   title: "Hector and the Search for Happiness",
  			   poster: "http://www.video2k.is/data/yify/medium_cover/51486.jpg"
  		   },
  		   {
  			   title: "The Secret Life of Walter Mitty",
  			   poster: "https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/a1/66/b8/a166b81c-0f6b-c751-6472-32bac5cf7ff0/886444332415.jpg/1200x630bb.jpg"
  		   },
  		   {
  			   title: "About Time",
  			   poster: "http://www.mjyoung.net/imgsrc/About04.jpg"
  		   }
  	   ]
     }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "Wild",
            poster: "https://cdns.klimg.com/kapanlagi.com/p/headline/476x238/wild-kisah-petualangan-menjelajah-alam--032e71.jpg"
          }
        ]
      })
    }, 2000)
  }

  //   render() {	
  //     return (
  //  	 <div className="App">
   		 {this.state.movies.map((movie, index) => {		// this.state 추가
  //   	 	return <Movie title={movie.title} poster={movie.poster} key={index} />
  // 		 })}
  //       </div>
  //     );
  //   }
  // }

  // export default App;
  ```

  ```react
  // http://localhost:3000/  
  img
  Captain Fantastic

  img
  Hector and the Search for Happiness

  img
  The Secret Life of Walter Mitty

  img
  About Time

  // 2초 후에 표시
  img
  Wild
  ```

- **setTimeout**은 xx시간 후에 작업을 수행시킨다는 뜻이다.

- **…this.state.movies**를 삭제하면 기존 4개 리스트가 없어지고 추가한 Wild가 전체 리스트를 대체해버린다. 이처럼 state를 활용, 응용해서 페이스북이나 인스타그램처럼 아래로 내릴수록 더 많은 컨텐츠를 로딩되게 할 수 있다. 이것을 **infinite scroll**이라 한다.

<br>

### Loading States

- API가 데이터를 주면, 컴포넌트 state를 업데이트.

- API콜을 Timeout 기능으로 유사하게 구현.

- 영화가 state에 없을 때마다 로딩을 띄우거나, 리스트를 보이도록.

- 영화 리스트를 불러오는 function 생성

- ```react
  // App.js

  // import React, { Component } from 'react';
  // import './App.css';
  // import Movie from './Movie';

  // class App extends Component {

  state = {

  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
  			{
  				title: "Captain Fantastic",
  				poster: "https://is2-ssl.mzstatic.com/image/thumb/Video22/v4/71/09/3b/71093bba-626b-e900-0c05-f0a97b2070f2/source/1200x630bb.jpg"
  			},
  			{
  				title: "Hector and the Search for Happiness",
  				poster: "http://www.video2k.is/data/yify/medium_cover/51486.jpg"
  			},
  			{
  				title: "The Secret Life of Walter Mitty",
  				poster: "https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/a1/66/b8/a166b81c-0f6b-c751-6472-32bac5cf7ff0/886444332415.jpg/1200x630bb.jpg"
  			},
  			{
  				title: "About Time",
  				poster: "http://www.mjyoung.net/imgsrc/About04.jpg"
  			},
  			{
  				title: "Wild",
  				poster: "https://cdns.klimg.com/kapanlagi.com/p/headline/476x238/wild-kisah-petualangan-menjelajah-alam--032e71.jpg"
  			}
  		]
      })
    }, 2000)
  }

  _renderMovies = () => {
  	const movies = this.state.movies.map((movie, index) => {
  		return <Movie title={movie.title} poster={movie.poster} key={index} />
  	})
      return movies
  }

  	render() {	
  		return (
  			<div className="App">
              	{this.state.movies ? this._renderMovies() : 'Loading'}
  			</div>
  		);
  	}
  }

  // export default App;
  ```

  ```react
  // http://localhost:3000/

  Loading

  // 2초 후 나타남

  img
  Captain Fantastic

  img
  Hector and the Search for Happiness

  img
  The Secret Life of Walter Mitty

  img
  About Time

  img
  Wild

  // 이것이 Loding States
  ```


<br>

### Smart vs Dumb Components

- 모든 컴포넌트에 state가 있는 것은 아니다(stateless functional component). 


- state의 유무에 따라 **smart**와 **dumb**으로 구분한다.

- props만 있을 때는 클래스 컴포넌트를 사용하는 대신에, **functional 컴포넌트**를 사용하면 된다.

- 아래 두 컴포넌트는 동일하다.

- ```react
  // Movie.js

  ...

  class MoviePoster extends Component {
      
  	static propTypes = {
  		poster: PropTypes.string.isRequired
  	}

  	render() {
  		return (
  			<img src={this.props.poster} alt="Movie Poster" />
  		)
  	}
  }
  ```

- ```react
  // Movie.js

  ...

  function MoviePoster({poster}) {
  	return (
  		<img src={poster} alt="Movie Poster" />
  	)
  }
  ```


- 어떤 컴포넌트는 그냥 return을 하기 위해서 존재한다.

<br>

- ```react
  // Movie.js

     import React from 'react';
  // import propTypes from 'prop-types';
  // import './Movie.css';

  function Movie({title, poster}) {
    return (
      <div>
        <MoviePoster poster={poster} />
        <h1>{title}</h1>
      </div>
    )
  }

  // function MoviePoster({poster}) {
  //    return(
  //      <img src={poster} alt='Movie Poster' />
  //    )
  //}

  MoviePoster.propTypes = {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
  }

  MoviePoster.propTypes = {
    poster:propTypes.string.isRequired
  }

  // export default Movie;
  ```

- 똑똑한 컴포넌트는 state가 있고, 멍청한 컴포넌트는 state이 없다.


<br>

### Ajax in React

- Ajax (Asynchronous JavaScript and XML, 에이잭스)는 말그대로 JavaScript와 XML을 이용한 비동기적 정보 교환 기법이다.

- 현재는 XML보다 **JSON 데이터**를 다룬다.

- fetch를 이용해 URL에서 뭔가를 GET하는 방법

- URL은 `API - YTS` 토렌트 영화 데이터베이스에서 가져온다.

- 자바스크립트 오브젝트: `https://yts.am/api/v2/list_movies.json`

- 위 DB를 평점순으로 필터, 정렬
  `https://yts.am/api/v2/list_movies.json?sort_by=rating`

- ```react
  // App.js

  // import React, { Component } from 'react';
  // import './App.css';
  // import Movie from './Movie';

  // class App extends Component {

  	state = {}

  	componentDidMount() {
  		fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
  	}

  // _renderMovies = () => {
  //    const movies = this.state.movies.map((movie, index) => {
  //       return <Movie title={movie.title} poster={movie.poster} key={index} />
  //    })
  //    return movies
  // }

  //	render() {	
  //		return (
  //			<div className="App">
  //            	{this.state.movies ? this._renderMovies() : 'Loading'}
  //			</div>
  //		);
  //	  }
  //  }

  // export default App;
  ```

- ```react
  // http://localhost:3000/

  Loading
  ```



- console > Network에서 `bundle.js` 확인

<br>

### Promises

- promise는 새로운 자바스크립트 컨셉이다.

- promise는 asynchronous programming이다. 이 뜻은, 첫 번째 라인이 끝나든 말든, 두 번째 라인이 작업을 한다는 뜻이다. 이것이 좋은 이유는, 계속 다른 작업을 스케줄 해놓을 수 있기 때문이다.

- promise는 좋은 혹은 나쁜 시나리오 잡는 방법을 만들어준다. 2가지 시나리오가 있고, 이를 관리하는 것이다.

- fetch, promise가 좋은 이유는, 시나리오가 생기고 이를 관리할 수 있기 때문이다.

- `.then`: 위의 작업이 끝나면, 성공적 수행이 아니라 그냥 작업이 완료되면, `.then`을 불러온다. then function은 1개의 attribute만 준다. 

- `.catch`: 위의 작업이 완료되면, 무언가를 해라. 하지만 위의 작업이 에러가 있다면, 잡아서(catch) 보여줘라.

- ```react
  // App.js

  // import React, { Component } from 'react';
  // import './App.css';
  // import Movie from './Movie';

  // class App extends Component {

  // state = {}

  componentDidMount() {
  	fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
  	.then(response => console.log(response))
    	.catch(err => console.log(err))
  }

  // _renderMovies = () => {
  //    const movies = this.state.movies.map((movie, index) => {
  //       return <Movie title={movie.title} poster={movie.poster} key={index} />
  //    })
  //    return movies
  // }

  //	render() {	
  //		return (
  //			<div className="App">
  //            	{this.state.movies ? this._renderMovies() : 'Loading'}
  //			</div>
  //		);
  //	  }
  //  }

  // export default App;
  ```

  ```react
  // http://localhost:3000/
  Loading
  ```


  // Console
  ▶︎Response {type: "cors", url: "https://yts.am/api/v2/list_movies.json?sort_by=rating", redirected: false, status: 200, ok: true, …}
  ```

<br>

- ```react
  // App.js

  // import React, { Component } from 'react';
  // import './App.css';
  // import Movie from './Movie';

  // class App extends Component {

  // state = {}

  componentDidMount() {
  	fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
  	.then(response => response.json())
    	.then(json => console.log(json))
    	.catch(err => console.log(err))
  }

  // _renderMovies = () => {
  //    const movies = this.state.movies.map((movie, index) => {
  //       return <Movie title={movie.title} poster={movie.poster} key={index} />
  //    })
  //    return movies
  // }

  //	render() {	
  //		return (
  //			<div className="App">
  //            	{this.state.movies ? this._renderMovies() : 'Loading'}
  //			</div>
  //		);
  //	  }
  //  }

  // export default App;
  ```

  ```react
  // http://localhost:3000/
  Loading


  // Console
  ▼{status: "ok", status_message: "Query was successful", data: {…}, @meta: {…}}
  	▶︎@meta: {server_time: 1517480942, server_timezone: "EST5EDT", api_version: 2, execution_time: "0 ms"}
      ▼data:
  		limit: 20
  		movie_count: 6685
  	  ▼movies: Array(20)
  		▶︎0: {id: 3709, url: …}
  		▶︎1: {id: 3304, url: …}
  		▶︎2: {id: 3175, url: …}
  		…
          ▶︎19: {id: 3490, url: …}
  		 length: 20
  		…
  ```

- 못생긴 데이터를 `response`로 체크하고, `json`으로 변환하고, `console`로 보는 것이다.

- 성공적으로 수행하지 않을 경우, 결과물을 catch, then으로 받아볼 수 있다.

- `fetch`가 좋은 이유는, url을 Ajax로 심플하게 불러올 수 있기 때문이다.

<br>

### Async Await in React

- Await, Async는 위에 작성한 라인들을 좀 더 분명하게 작성해주는 도구이다.

- CALLBACK HELL: then, then, then..이 많아져서 길을 잃어버리는 것.

  ```react
  .then(() => .then())
  CALLBACK HELL!
  ```

- ```react
  // App.js

  // import React, { Component } from 'react';
  // import './App.css';
  // import Movie from './Movie';

  // class App extends Component {

  // state = {}

  componentDidMount() {
  	this._getMovies();
  }

  _renderMovies = () => {
     const movies = this.state.movies.map((movie, index) => {
  //    console.log(movie)
        return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id} />
     })
     return movies
  }

  _getMovies = async () => {
  	const movies = await this._callApi()
      this.setState({
        movies
      })
  }

  _callApi = () => {
     return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
     .then(response => response.json())
     .then(json => json.data.movies)
     .catch(err => console.log(err))
  }

  //	render() {	
  //		return (
  //			<div className="App">
  //            	{this.state.movies ? this._renderMovies() : 'Loading'}
  //			</div>
  //		);
  //	  }
  //  }

  // export default App;
  ```

  ```react
  // http://localhost:3000/

  img (The Shawshank Redemption)
  The Shawshank Redemption

  img (The Godfather)
  The Godfather

  ...
  ```

- fetch를 callApi로 변경

- get movies는 asynchronous function이다.

- 컴포넌트의 key를 index로 사용하는 것은 좋지 않다. 느리다.

- **await**. It means that we want to wait for the Promise() to finish before continue.

<br>

### Updating Component

- ​

- ```react
  // App.js

  // import React, { Component } from 'react';
  // import './App.css';
  // import Movie from './Movie';

  // class App extends Component {

  // state = {}

  // componentDidMount() {
  // 	  this._getMovies();
  // }

  _renderMovies = () => {
     const movies = this.state.movies.map((movie, index) => {
  //    console.log(movie)
        return <Movie 
                 title={movie.title_english} 
                 poster={movie.medium_cover_image} 
                 key={movie.id}
                 genres={movie.genres}
                 synopsis={movie.synopsis}
  	  />
     })
     return movies
  }

  _getMovies = async () => {
  	const movies = await this._callApi()
      this.setState({
        movies
      })
  }

  _callApi = () => {
     return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
     .then(response => response.json())
     .then(json => json.data.movies)
     .catch(err => console.log(err))
  }

  //	render() {	
  //		return (
  //			<div className="App">
  //            	{this.state.movies ? this._renderMovies() : 'Loading'}
  //			</div>
  //		);
  //	  }
  //  }

  // export default App;
  ```

  ```react
  // Movie.js

  // import React from 'react';
  // import propTypes from 'prop-types';
  // import './Movie.css';
  ```


  function Movie({title, poster, genres, synopsis}) {
  	return (
      	<div className="Movie">
          	<div className="Movie__Columns">
          		<MoviePoster poster={poster} alt={title} />
          	</div>
          	<div className="Movie__Columns">
  	        	<h1>{title}</h1>
                	<div className="Movie__Genres">
                		{genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                	</div>
                	<p className="Movie__Synopsis">
                		{synopsis}
                	</p>
          	</div>
        	</div>
      )
  }
​       
  function MoviePoster({poster, alt}) {
  	return (
      	<img src={poster} alt={alt} title={alt} className="Movie__Poster" />
      )
  }

  function MovieGenre({genre}) {
    return (
    	<span className="Movie__Genre">{genre} </span>
    )
  }

  MoviePoster.propTypes = {
  	title: propTypes.string.isRequired,
    	poster: propTypes.string.isRequired,
    	genres: propTypes.string.isRequired,
    	synopsis: propTypes.string.isRequired
  }

  MoviePoster.propTypes = {
  	poster: propTypes.string.isRequired,
    	alt: propTypes.string.isRequired
  }

  MovieGenre.prototypes = {
    	genre: propTypes.string.isRequired
  }

  // export default Movie;
  ```

  ```react
  // http://localhost:3000/

  img
  The Shawshank Redemption

  Action Crime Drama

  Chronicles the experiences of a formerly...

  ...

  // 마우스오버하면 제목 hover
  ```

- props 추가

- 기본 HTML 작업 (JSX로 클래스명 추가, 칼럼-무비 포스터 만들고, 장르 array 맵핑, 무비 시놉시스 클래스 만들기, alt 이미지 만들기)

<br>

### Giving some CSS to

- `yarn add react-lines-ellipsis`
- 여기서부터는 깃헙 참조