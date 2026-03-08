import React, { useState, useEffect } from "react";
import { useNewsContext } from "../context/NewsContext";

const Navbar = () => {
  const { fetchNews } = useNewsContext();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search) {
        fetchNews(search);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="navbar bg-base-100 shadow-sm px-50">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">News App</a>
      </div>

      <div className="flex gap-2">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search News..."
          className="input input-bordered w-24 md:w-auto"
        />

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;