import React, {use, useEffect} from 'react'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountries } from '../../Slice/CountryData'
import {Link} from 'react-router-dom'

const Home = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchCountries());
  }, [dispatch]);

  const countries = useSelector((state)=>state.countries.data);
  const status = useSelector((state)=>state.countries.status);
  const error = useSelector((state)=>state.countries.error)

  return (
    <div className='container'>
      <h1>World Countries</h1>
      {status === 'loading' && <p>Loading....</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <div className='country_container'>
          {countries.map((country, index)=>(
            <div className='country_card' key={index}>
              <img className="flag_img" src={country.flags.png} alt="flag" />
              <h4>{country.name.common}</h4>
              <Link to={`/country-data/${country.name.common}`}>
              <button>Show In Details</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home