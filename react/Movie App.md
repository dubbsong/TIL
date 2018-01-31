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
    render() {	// '무언가를 보여주는, 출력하는' 기능
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
  `src/Movie.js`
  `src/Movie.css`


- ```react
  // Movie.js

  // import React, { Component } from 'react';
     import './Movie.css';

     class Movie extends Component {
  //   render() {
  //     return (
       	  <div>
         		 <MoviePoster />
         	 	 <h1>CAPTAIN FANTASTIC</h1>
         	  </div>
  //     );
  //   }
  // }
       
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

  // import React, { Component } from 'react';
  // import './App.css';
     import Movie from './Movie';

  // class App extends Component {
  //   render() {	
  //     return (
  //  	 <div className="App">
        		<Movie />
        		<Movie />
        		<Movie />
        		<Movie />
  //       </div>
  //     );
  //   }
  // }

  // export default App;
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

  const movie = [
    "Captain Fantastic",
    "Hector and the Search for Happiness",
    "The Secret Life of Walter Mitty",
    "About Time"
  ]

  const movieImages = [
    "",
    "",
    "",
    ""
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
  //        <img src="https://is2-ssl.mzstatic.com/image/thumb/Video22/v4/71/09/3b/71093bba-626b-e900-0c05-f0a97b2070f2/source/1200x630bb.jpg" />
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

<br>

### List with .map

- ​