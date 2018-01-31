## Movie App

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
         	 <h1>CAPTAIN FANTASTIC</h1>
  //     );
  //   }
  // }

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

  CAPTAIN FANTASTIC
  CAPTAIN FANTASTIC
  CAPTAIN FANTASTIC
  CAPTAIN FANTASTIC
  ```

- ​