"use client"
import { fetchListUrl } from "@/utils/endPoints";
import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./movie";

const clientSideRendering = ()=> {
const [moviesList, setMoviesList] = useState<any[]>([])

useEffect(()=> {
    fetchData()
},[])
const fetchData = async ()=> {
    const url: string = fetchListUrl()
    const {data}: any = await axios.get(url)
    setMoviesList(data.results)
}

return (
    <main>
    <h1 className="text-white text-5xl">Filmxia</h1>
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
)
}
export default clientSideRendering