import React from 'react'
import { useNewsContext } from "../context/NewsContext";

const Card = ({ article }) => {
  
    const { news } = useNewsContext();
  

  return (
      <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={article.urlToImage}
          alt={article.title}
          className="rounded-xl"
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title">{article.title}</h2>

        <p>{article.description}</p>

        <div className="card-actions">
          <a href={article.url} target="_blank">
            <button className="btn btn-primary">Read More</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card