import { useSearchParams } from "react-router-dom";
import { useGetMovies } from "../lib/api";
import LoadingSpinner from "./LoadingSpinner";
import MovieCard, { IMovie } from "./MovieCard";

const MoviesList = () => {
  const [params] = useSearchParams();
  const genre = params.get("genre");
  const { data, isPending, isError, isFetching } = useGetMovies(
    genre === "trending"
      ? "/trending/movie/week"
      : genre === "topRated"
      ? "/movie/top_rated"
      : "/movie/popular"
  );

  if (isPending || isFetching) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <p className="text-center">Something went wrong!Try again.</p>;
  }

  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data.results.map((movie: IMovie) => {
        return <MovieCard key={movie.id} data={movie} />;
      })}
    </section>
  );
};

export default MoviesList;
