import React from 'react'

const Category = () => {
    const categories = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];

  return (
    <div className="flex flex-wrap justify-center">
    {categories.map((item, index)=>(
    <button key={index} className="btn btn-primary m-5">{item}</button>
    ))}
    </div>
   
  )
}

export default Category 
