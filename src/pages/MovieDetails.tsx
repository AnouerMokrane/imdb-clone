import { useParams } from "react-router-dom";
import { useMovie } from "../lib/api";
import LoadingSpinner from "../components/LoadingSpinner";

const MovieDetails = () => {
  const { id } = useParams();
  const { data, isPending, isError } = useMovie(id ?? "");

  if (isPending) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <p className="text-center">Something went wrong!Try again.</p>;
  }

  return (
    <div className="container mx-auto mt-8 px-4 pb-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2">
          <div className="sticky top-8">
            <img
              src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
              alt={data.title}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
          <p className="text-lg mb-4">
            <b>Overview: </b>
            {data.overview}
          </p>
          <p className="text-lg mb-2">
            <b>Release Date:</b> {data.release_date}
          </p>
          <p className="text-lg">
            <b>Rating:</b> {data.vote_average}/10
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
