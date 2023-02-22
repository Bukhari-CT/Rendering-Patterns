import Movie from "../movie";
import { fetchListUrl } from "@/utils/endPoints";
export default async function Home() {
  const response: any = await fetch(fetchListUrl(), {
    cache: "no-store",
  });
  const data = await response.json();
  console.log("🚀 ISR Movies List :", data.results.length);

  return (
    <main>
      <h1 className="text-white text-5xl text-center pb-8">Filmxia SSG</h1>
      <div className="grid gap-16 grid-cols-fluid">
        {data.results.map((movie: any) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            releaseDate={movie.release_date}
            pageType={"StaticSideGeneration/"}
          />
        ))}
      </div>
    </main>
  );
}
