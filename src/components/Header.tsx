import { House, Info, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="container flex justify-between items-center text-black dark:text-white mx-auto py-8 px-4">
      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <NavLink
              to={"/"}
              className="text-sm uppercase duration-300 hover:text-orange-500"
            >
              <span className="hidden md:block">Home</span>
              <House size={28} className="md:hidden" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className="text-sm uppercase duration-300 hover:text-orange-500"
            >
              <span className="hidden md:block">About</span>
              <Info size={28} className="md:hidden" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex gap-3">
        <button
          className=" duration-300 hover:text-orange-500"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <h2 className="text-2xl">
          <span className="font-bold bg-orange-500 p-1 rounded-md">IMDB</span>{" "}
          <span className="hidden md:inline">Clone</span>{" "}
        </h2>
      </div>
    </header>
  );
};

export default Header;
