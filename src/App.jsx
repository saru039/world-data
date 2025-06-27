import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import CountryData from './Pages/CountryData/CountryData'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country-data/:countryName' element={<CountryData />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App