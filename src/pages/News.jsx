import React from "react";
import Card from "../components/Card";
import { useNewsContext } from "../context/NewsContext";

  const News = () => {
      const { news } = useNewsContext();
     return (
    <div className="px-50 grid grid-cols-3 gap-5">
      {news.map((article, index) => (
        <Card key={index} article={article} />
      ))}
    </div>
  );
  }

export default News;
