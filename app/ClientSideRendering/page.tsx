"use client";
import { fetchListUrl } from "@/utils/endPoints";
import { useEffect, useState } from "react";
import Movie from "./movie";

const clientSideRendering = () => {
  const [moviesList, setMoviesList] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
    console.log("Client Side Rendering:: ✅");
  }, []);
  const fetchData = async () => {
    const url: string = fetchListUrl();
    const response: any = await fetch(url);
    const data: any = await response.json();
    setMoviesList(data.results);
  };

  return (
    <main>
      <h1 className="text-white text-5xl text-center pb-8">Filmxia CSR</h1>
      <div className="grid gap-16 grid-cols-fluid">
        {moviesList.map((movie: any) => (
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
};
export default clientSideRendering;
