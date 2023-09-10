import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {action,originals,ComedyMovies} from './urls'
import './App.css'
import Banner from './Components/banner/Banner'
import RowPost from './Components/RowPost/RowPost'
function App() {
  return (
    <div className='App'>
   <Navbar/>
   <Banner/>
    <RowPost url={originals} title='Netflix Originals'/>
    <RowPost url={action} title='Action' isSmall/>
    <RowPost url={ComedyMovies} title='ComedyMovies' isSmall/>
    </div>
  )
}

export default App