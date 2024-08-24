import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="container mx-auto my-4 px-4">
      <form className="flex items-center gap-3" onSubmit={handleSearch}>
        <input
          type="text"
          className="text-white w-full p-3 bg-transparent"
          placeholder="search keywords..."
          onChange={handleChange}
        />
        <button
          className={`${
            query.length === 0 ? "text-gray-400" : "text-orange-500"
          }`}
          disabled={query.length === 0}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
