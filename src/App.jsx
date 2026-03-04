import React from 'react'
import Navbar from './components/Navbar'
import Category from './components/Category'
import News from './pages/News'


const App = () => {
  return (
    <div>
      <Navbar />
      <Category />
      <News />
     
    </div>
  )
}

export default App