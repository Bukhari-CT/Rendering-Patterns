import Movie from "./movie";
import axios from "axios";
import { fetchListUrl } from "@/utils/endPoints";
export default async function Home() {
  const response: any = await fetch(fetchListUrl());
  const data = await response.json();
  console.log("Server Side Rendering:: ✅");

  return (
    <main>
      <h1 className="text-white text-5xl text-center pb-8">Filmxia SSR</h1>
      <div className="grid gap-16 grid-cols-fluid">
        {data.results.map((movie: any) => (
          <Movie key={movie.id} id={movie.id} title={movie.title} releaseDate={movie.release_date} />
        ))}
      </div>
    </main>
  );
}
