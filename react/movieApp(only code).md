## React Movie App

###### Nomad Academy

<br>

### Creating React Components with JSX (1)

#### React 파일 생성

1. `Desktop song$ sudo npm install -g create-react-app`
2. `create-react-app movie_app`
3. `cd movie_app`
4. `yarn start`

<br>

```react
//	App.js

import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return(
			<div className="App">

            </div>
        );
    }
}

export default App;
```

```react
//	App.css
.App {

}
```

<br>

### Creating React Components with JSX (2)

##### 새로운 컴포넌트 생성

1. `src song$ touch Movie.js`
2. `src song$ touch Movie.css`

<br>

```react
//	Movie.js

import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render() {
        return(
			<div>
            	<MoviePoster />
                <h1>Captain Fantastic</h1>
            </div>
        );
    }
}

class MoviePoster extends Component{
    render() {
        return(
			<img src="https://dummyimage.com/200x200" />
        );
    }
}

export default Movie;
```

<br>

```react
//	App.js

//import React, { Component } from 'react';
//import './App.css';
//import Movie from './Movie';

//class App extends Component {
    //render() {
        //return(
			//<div className="App">
				<Movie />
                <Movie />
                <Movie />
                <Movie />
            //</div>
        //);
    //}
//}

//export default App;
```

```react
//	http://localhost:3000/
img //same
Captain Fantastic

img
Captain Fantastic

img
Captain Fantastic

img
Captain Fantastic
```

<br>

### Dataflow with Props (1)

```react
//	App.js

//import React, { Component } from 'react';
//import './App.css';
//import Movie from './Movie';

const movies = [
    "Captain Fantastic",
    "Hector",
    "Walter Mitty",
    "About Time"
]

//class App extends Component {
    //render() {
        //return(
			//<div className="App">
				<Movie title={movies[0]} />
                <Movie title={movies[1]} />
                <Movie title={movies[2]} />
                <Movie title={movies[3]} />
            //</div>
        //);
    //}
//}

//export default App;
```

```react
//	Movie.js

//import React, { Component } from 'react';
//import './Movie.css';

//class Movie extends Component{
    //render() {
		console.log(this.props);
        //return(
			//<div>
            	//<MoviePoster />
                <h1>{this.props.title}</h1>
            //</div>
        //);
    //}
//}

//class MoviePoster extends Component{
    //render() {
        //return(
			//<img src="https://dummyimage.com/200x200" />
        //);
    //}
//}

//export default Movie;
```

```react
//	http://localhost:3000/
img
Captain Fantastic

img
Hertor

img
Walter Mitty

img
About Time

//	Chrome Console
▶︎ {title: "Captain Fantastic"}
▶︎ {title: "Hector"}
▶︎ {title: "Walter Mitty"}
▶︎ {title: "About Time"}
```

<br>

### Dataflow with Props (2)

```react
//import React, { Component } from 'react';
//import './App.css';
//import Movie from './Movie';

//const movies = [
    //"Captain Fantastic",
    //"Hector",
    //"Walter Mitty",
    //"About Time"
//]

const movieImages = [
    "https://dummyimage.com/200x200",
    "https://dummyimage.com/200x200",
    "https://dummyimage.com/200x200",
    "https://dummyimage.com/200x200"
]

//class App extends Component {
    //render() {
        //return(
			//<div className="App">
				<Movie title={movies[0]} poster={movieImages[0]} />
                <Movie title={movies[1]} poster={movieImages[1]} />
                <Movie title={movies[2]} poster={movieImages[2]} />
                <Movie title={movies[3]} poster={movieImages[3]} />
            //</div>
        //);
    //}
//}

//export default App;
```

```react
//	Movie.js

//import React, { Component } from 'react';
//import './Movie.css';

//class Movie extends Component{
    //render() {
		//console.log(this.props);
        //return(
			//<div>
            	<MoviePoster poster={this.props.poster />
                //<h1>{this.props.title}</h1>
            //</div>
        //);
    //}
//}

//class MoviePoster extends Component{
    //render() {
        console.log(this.props);
        //return(
			<img src={this.props.poster} />
        //);
    //}
//}

//export default Movie;
```

```react
//	http://localhost:3000/
img //different
Captain Fantastic

img
Hertor

img
Walter Mitty

img
About Time

//	Chrome Console
▶︎ {title: "Captain Fantastic", poster: "sht"}
▶︎ {poster: "sth"}
▶︎ {title: "Hector", poster: "sht"}
▶︎ {poster: "sth"}
▶︎ {title: "Walter Mitty", poster: "sht"}
▶︎ {poster: "sth"}
▶︎ {title: "About Time", poster: "sht"}
▶︎ {poster: "sth"}
```

<br>

###   List with .map

```react

//	App.js

//import React, { Component } from 'react';
//import './App.css';
//import Movie from './Movie';

const movies = [
    {
        title: "Captain Fantastic",
        poster: "https://dummyimage.com/200x200"
    },
    {
        title: "Hector",
        poster: "https://dummyimage.com/200x200"
    },
    {
        title: "Walter Mitty",
        poster: "https://dummyimage.com/200x200"
    },
    {
        title: "About Time"
        poster: "https://dummyimage.com/200x200"
    }
]

//class App extends Component {
    //render() {
        //return(
			//<div className="App">
{movies.map((movie, index) => {
    return <Movie title={movie.title} poster={movie.poster} key={index}/>
})}
            //</div>
        //);
    //}
//}

//export default App;
```

```react
//	http://localhost:3000/
img //different
Captain Fantastic

img
Hertor

img
Walter Mitty

img
About Time

//	Chrome Console
▶︎ Warning: Each child in an array of iterator should have a unique "key" prop.
```

<br>

### Validating Props with PropTypes

```react
//	Movie.js

//import React, { Component } from 'react';
import propTypes from 'prop-types';
//import './Movie.css';

//class Movie extends Component{
    //render() {
		//console.log(this.props);
        //return(
			//<div>
            	//<MoviePoster poster={this.props.poster />
                //<h1>{this.props.title}</h1>
            //</div>
        //);
    //}
//}

//class MoviePoster extends Component{
    //render() {
        //console.log(this.props);
        //return(
			//<img src={this.props.poster} />
        //);
    //}
//}

Movie.propTypes = {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: propTypes.string.isRequired
}

//export default Movie;
```

<br>

### Loading States

```react
//	App.js

//import React, { Component } from 'react';
//import './App.css';
//import Movie from './Movie';

//class App extends Component {

state = {}

componentDidMount() {
	setTimeout(() => {
		this.setState({
			movies: [
  			{
				title: "Captain Fantastic",
		        poster: "https://dummyimage.com/200x200"

		    },
		    {
		        title: "Hector",
		        poster: "https://dummyimage.com/200x200"
		    },
		    {
		        title: "Walter Mitty",
		        poster: "https://dummyimage.com/200x200"
		    },
		    {
		        title: "About Time"
		        poster: "https://dummyimage.com/200x200"
		    }
		]
	})
}, 2000)
}


_renderMovies = () => {
	const movies = this.state.movies.map((movie, index) => {
		return <Movie title={movie.title} poster={movie.poster} key={index}/>
	})
	return movies
}


//render() {
	//return(
		//<div className="App">
			{this.state.movies ? this._renderMovies() : 'Loading'}
		//</div>
	//);
	//}
//}

//export default App;
```

```react
//	http://localhost:3000/
Loading


//	2초 후에 나타남
img
Captain Fantastic

img
Hertor

img
Walter Mitty

img
About Time
```

<br>

### Smart vs Dumb Components

```react
//	Movie.js

import React from 'react';
//import propTypes from 'prop-types';
//import './Movie.css';


function Movie({title, poster}) {
    return(
    	<div>
        	<MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    )
}

function MoviePoster({poster}) {
    return(
  		<img src={poster} alt='img' />
  	)
}


//Movie.propTypes = {
//title: propTypes.string.isRequired,
//poster: propTypes.string.isRequired
//}

//MoviePoster.propTypes = {
//poster: propTypes.string.isRequired
//}

//export default Movie;
```

```react
//	http://localhost:3000/
Loading
```

<br>

### Promises

```react
//	App.js

//import React, { Component } from 'react';
//import './App.css';
//import Movie from './Movie';

//class App extends Component {

state = {}

componentDidMount() {
	fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
		.then(response => response.json())
		.then(json => console.log(json))
		.catch(err => console.log(err))
    }


_renderMovies = () => {
	const movies = this.state.movies.map((movie, index) => {
		return <Movie title={movie.title} poster={movie.poster} key={index}/>
	})
	return movies
}

//render() {
	//return(
		//<div className="App">
			{this.state.movies ? this._renderMovies() : 'Loading'}
		//</div>
		//);
	//}
//}

//export default App;
```

```react
//	http://localhost:3000/
Loading

//	Chrome Console
▶︎ data:
```

<br>

## Async Await in React

```react
//	App.js

//import React, { Component } from 'react';
//import './App.css';
//import Movie from './Movie';



//class App extends Component {


//state = {}


componentDidMount() {
	this._getMovies();
}


_renderMovies = () => {
	const movies = this.state.movies.map((movie, index) => {
		return <Movie title={movie.title} poster={movie.medium_cover_image} key={movie.id}/>
	})
	return movies
}


_getMovies = async() => {
	const movies = await this._callApi()
	this.setState({
		movies
	})
}


_callApi = () => {
	return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
		.then(response => response.json())
  		.then(json => json.data.movies)
	  	.catch(err => console.log(err))
}


render() {
	return(
		<div className="App">
			{this.state.movies ? this._renderMovies() : 'Loading'}
		</div>
	);
}


//}


//export default App;
```

```react
//	http://localhost:3000/
img
The Shawshank Redemption

img
The Godfather

...
```

<br>

### Updating Component

```react
//	App.js

//import React, { Component } from 'react';
//import './App.css';
//import Movie from './Movie';



//class App extends Component {


//state = {}


//componentDidMount() {
	//this._getMovies();
//}


//_renderMovies = () => {
	//const movies = this.state.movies.map((movie, index) => {
	console.log(ssup)
		return <Movie
			title={movie.title}
			poster={movie.medium_cover_image}
			key={movie.id}
      		genres={ssup.genres}             
			synopsis={ssup.synopsis}
		/>
	//})
	//return movies
//}


//_getMovies = async() => {
	//const movies = await this._callApi()
	//this.setState({
		//movies
	//})
//}


//_callApi = () => {
	//return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
		//.then(response => response.json())
  		//.then(json => json.data.movies)
	  	//.catch(err => console.log(err))
//}


//render() {
	//return(
		//<div className="App">
			//{this.state.movies ? this._renderMovies() : 'Loading'}
		//</div>
	//);
//}


//}


//export default App;
```

```react
//	Movie.js

//import React from 'react';
//import propTypes from 'prop-types';
//import './Movie.css';


function Movie({title, poster, genres, synopsis}) {
    return(
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

function MoviePoster({poster, alt}) {
    //return(
  		<img src={poster} alt={alt} title={alt} className="Movie__Poster" />
  	//)
//}

function MovieGenre({genre}) {
    return(
		<span className="Movie__Genre">{genre} </span>
    )
}


//Movie.propTypes = {
	//title: propTypes.string.isRequired,
	//poster: propTypes.string.isRequired,
	genres:propTypes.array.isRequired,
	synopsis:propTypes.string.isRequired,
//}

//MoviePoster.propTypes = {
	//poster: propTypes.string.isRequired,
	alt: propTypes.string.isRequired
//}
        
MovieGenre.propTypes = {
	genre: propTypes.string.isRequired        
}

//export default Movie;
```

```react
//	http://localhost:3000/
img
The Shawshank Redemption
ActionCrimeDrama
Chronicles the experiences of a formerly ...

img
The Godfather
ActionCrimeDrama
When the aging head of a famous crime family ...

...


// 마우스롤 이미지 위에 호버하면 제목 보임
```

