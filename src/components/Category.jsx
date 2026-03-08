import React from "react";
import { useNewsContext } from "../context/NewsContext";

const Category = () => {
  const { fetchNews } = useNewsContext();

  const categories = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  const handleEvent = (category) => {
    fetchNews(category);
  };

  return (
    <div className="flex justify-center gap-5 my-5 flex-wrap">
      {categories.map((category) => (
        <button
          onClick={() => handleEvent(category)}
          key={category}
          className="btn btn-outline"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Category;