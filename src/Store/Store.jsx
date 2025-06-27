import {configureStore} from '@reduxjs/toolkit'
import countryReducer from '../Slice/CountryData'

const Store = configureStore({
    reducer: {
        countries : countryReducer,
    }
})

export default Store;