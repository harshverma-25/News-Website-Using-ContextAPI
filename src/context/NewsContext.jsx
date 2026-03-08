import { createContext, useState, useContext, useEffect } from "react";
import api from "../config/axios";

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    
   const fetchNews = async (query = "Apple") => {
  try {
    const response = await api.get(
      `everything?q=${query}&apiKey=${import.meta.env.VITE_API_KEY}`
    );
    setNews(response.data.articles);
  } catch (error) {
    console.log("Error fetching news:", error);
  }
};
    
    useEffect(() => {
        (async () => {
            const data = await fetchNews();
            setNews(data.articles);
        })();
    }, []);
    
    const value = {
        news,
        setNews,
        fetchNews
    };

    return (
        <NewsContext.Provider value={value}>
            {children}
        </NewsContext.Provider>
    )
} 

const useNewsContext = () => {
    return useContext(NewsContext);
}

export { NewsProvider, useNewsContext };
