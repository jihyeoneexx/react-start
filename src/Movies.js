import react from "react";
import "./Movie.css";

function Movie({year, title, summary, poster, genres}){
    // state가 필요없기 때문에 Class component일 필요 없음
    // function component의 인자로서 props 자체가 아니라 props 내부의 특정 값을 가져올 때는 꼭 {bracket}으로 감싸야함
    return <div className="movie">

            <img src={poster} alt={title} title={title}></img>

        <div className="movie-data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="genres">
                {genres.map((genre, index) =>
                (<li key={index} className="genres_genre">{genre}</li>
                ))}
                {/* map 함수는 array의 각기 요소를 인자로 삼는 외에도, 자동으로 index(number)를 argument로 제공함 === key prop으로 사용 가능 */}
            </ul>
            <p className="movie_summary">{summary.slice(0, 180)}</p>
        </div>

    </div>
}

export default Movie;