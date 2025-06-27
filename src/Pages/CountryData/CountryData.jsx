import React, { useState, useEffect } from 'react'
import './CountryData.css'
import { Link, useParams } from 'react-router-dom'

const CountryData = () => {
  const [country, setCountry] = useState(null);
  const {countryName} = useParams();

useEffect(() => {
  const getCountry = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}`);
    const data = await response.json();
    setCountry(data[0]);
  };

  getCountry();
}, [countryName]);

  const {CountryData} = useParams();

  if(!country){
    return <p>Country is Loading...</p>;
  }

  return(
    <div className='country-details-container'>
      <div className="country-card">
          <h2>{country.name.common}</h2>
          <img src={country.flags.svg} alt={country.name.common} />
          <p>Capital: {country.capital?.[0]}</p>
          <p>Region: {country.region}</p>
          <p>Population: {country.population.toLocaleString()}</p>
          <Link to="/"><button>Back to Home</button></Link>
      </div>
    </div>
  )

}

export default CountryData