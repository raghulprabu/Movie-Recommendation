import React from 'react'
import './App.css'
import {ButtonAppBar} from './Components/Navbar'
import Search from './SearchBar/Search'
import TopRate from './Components/TopRate';
import Trending from './Components/Trending'
import {Popular} from './Components/Popular'
import {Footer} from './Components/Footer'
const App = () => {
  return (
    <div className='custom-bg'>
      <ButtonAppBar />
      <Search/>
      <TopRate/>
      <Trending/>
      <Popular/>
      <Footer/>
    </div>
  )
}
export default App
