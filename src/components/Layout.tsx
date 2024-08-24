import { Outlet } from "react-router-dom";
import Header from "./Header";
import FilterBar from "./FilterBar";
import SearchForm from "./SearchForm";

const Layout = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#374152]">
      <Header />
      <FilterBar />
      <SearchForm />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
