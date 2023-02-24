export default function Movie({ title, id, key, poster_path, releaseDate }: any) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div key={id}>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
          <img src={`${imagePath}${poster_path}`} alt={title} className="w-full object-cover" />
        </div>
        <div className="p-5">
          <a href={`ClientSideRendering/${id}`}>
            <h5 key={id} className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{releaseDate}</p>
        </div>
      </div>
    </div>
  );
}
