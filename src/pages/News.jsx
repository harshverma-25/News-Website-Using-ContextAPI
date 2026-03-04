import React, { useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'

const News = () => {
    
    const fetchNews = async () => {
        const response = await axios.get("https://newsapi.org/v2/everything?q=Apple&from=2026-03-04&sortBy=popularity&apiKey=3fc9ac2fa12e495d91bdd9bd1cbfa801")
        console.log(response.data);
    }

    useEffect(() => {
        fetchNews()
    }, [])
  return (
    <div className='px-50 grid grid-cols-3 gap-5'>
      <Card />
 
    </div>
  )
}

export default News