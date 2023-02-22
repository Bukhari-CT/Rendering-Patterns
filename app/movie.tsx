export default function Movie({ title, id, key, poster_path, releaseDate, pageType = "" }: any) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href={`${pageType}${id}`}>
          <img className="rounded-t-lg" src={imagePath + poster_path} alt={title} />
        </a>
        <div className="p-5">
          <a href={`${pageType}${id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{releaseDate}</p>
        </div>
      </div>
    </div>
  );
}
