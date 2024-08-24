import { Link, useSearchParams } from "react-router-dom";

const FilterBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const genre = searchParams.get("genre");
  const handleFilterChange = (genre: string) => {
    setSearchParams({ genre });
  };

  return (
    <div className="flex justify-center items-center gap-10 mx-auto py-5 bg-amber-100 dark:bg-gray-600">
      <Link
        to={`/?genre=trending`}
        className={`font-medium duration-300 hover:text-orange-500 ${
          genre === "trending"
            ? "text-orange-500 underline underline-offset-8 decoration-[2px] decoration-orange-500"
            : ""
        }`}
      >
        Trending
      </Link>
      <Link
        to={`/?genre=topRated`}
        className={`font-medium duration-300 hover:text-orange-500 ${
          genre === "topRated"
            ? "text-orange-500 underline underline-offset-8 decoration-[2px] decoration-orange-500"
            : ""
        }`}
        onClick={() => handleFilterChange("top_rated")}
      >
        Top Rated
      </Link>
    </div>
  );
};

export default FilterBar;
