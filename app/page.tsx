import Movie from "./movie";
import axios from "axios";
export default async function Home() {
  const data: any = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const movies = await data.json();
  console.log(movies);
  return (
    <main>
      <h1>Filmxia</h1>
      <div className="grid gap-16 grid-cols-fluid">
        {movies.results.map((movie: any) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            releaseDate={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
