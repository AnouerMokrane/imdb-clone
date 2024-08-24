import { useSearchParams } from "react-router-dom";
import { useSearchMovies } from "../lib/api";
import LoadingSpinner from "../components/LoadingSpinner";
import MovieCard, { IMovie } from "../components/MovieCard";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const { data, isLoading, isError } = useSearchMovies(query || "");

  if (isLoading) return <LoadingSpinner />;

  if (isError)
    return (
      <p className="text-center mt-10">Something went wrong! Try again.</p>
    );

  if (data.results.length === 0) {
    return <p className="text-center mt-10">No results found for "{query}".</p>;
  }

  return (
    <section className="container mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 py-12 ">
      {data.results.map((movie: IMovie) => (
        <MovieCard key={movie.id} data={movie} />
      ))}
    </section>
  );
};

export default SearchResults;
