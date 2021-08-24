import React from "react";
import axios from "axios";
import Movies from"./Movies";
import "./App.css";

class App extends React.Component{
    state  = {
        isLoading: true,
        movies: []
    };
    
    getMovies = async() => {
        const {
            data: {
                data: {movies}
            }
        } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
        // {data:{data:{moviess}}} === movies.data.data.movies (ES6 용법)
        // facth와 유사한 역할을 하는 확장 기능 (npm i axios로 설치 후 import로 사용)
        // 속도가 느린 편 === async와 await를 사용하여 유예시간을 갖는다 => 비동기 함수 지정 (이 함수를 기다려야해!)
        // async === 비동기함수를 기다려줘 그게 뭐냐면... -> await === 이거!
        // result === axios 함수가 끝나기를 기다린 후 이후 코드를 송출한다(Javascript 용법)
         this.setState({ movies, isLoading: false });
         // axios의 movies를 state의 movies array로 render
    } 
    componentDidMount(){
        this.getMovies();
        // component가 mount 완료되면(render이후 시점) getMovies를 호출한다. 
        // but, axios 기능은 속도가 느리기 때문에, 완전히 로딩될 때까지 시간이 필요함 => async
         }
    render(){
            const { isLoading, movies } = this.state;
            // {brackets} === isLoading은 this.state 오브젝트의 안에 있는 요소
            return (
            <section className="container">
                {/* JSX의 class component 안에 있는 html의 class는 className으로 표기, react상의 혼동 방지, html 코드 상에서는 class로 표기된다! */}
                {isLoading ?(
                    <div className="loader">
                        <span className="loader_text">Loading...</span>
                    </div>
                ) : ( 
                   <div className="movies">
                       { movies.map(movie => {
                         return <Movies 
                        key={movie.id}
                        year={movie.year} 
                        title={movie.title} 
                        summary={movie.summary}
                        poster={movie.medium_cover_image}
                        genres={movie.genres}
                        />
                       })}
                    </div>
                )}
            </section>
            );
    }
}
  
  export default App;
  