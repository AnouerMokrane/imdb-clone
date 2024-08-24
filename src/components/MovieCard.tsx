import { ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";

export type IMovie = {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
  vote_count: number;
  release_date: string;
};
type MovieCardProps = {
  data: IMovie;
};
const MovieCard = ({ data }: MovieCardProps) => {
  return (
    <Link
      to={`/movie/${data.id}`}
      className="max-w-[500px] overflow-hidden sm:p-3 sm:border sm:rounded-md duration-300 hover:shadow-xl"
    >
      <img
        width={500}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        alt={data.title}
        className="sm:rounded-t-md"
      />
      <div className="p-2">
        <p className="text-lg line-clamp-2">{data.overview}</p>
        <h3 className="text-lg font-bold truncate">{data.title} </h3>
        <div className="flex items-center space-x-4 mt-2">
          <span>{data.release_date} </span>
          <span className="flex items-center gap-1">
            <ThumbsUp size={20} className="-mt-1" />
            {data.vote_count}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
