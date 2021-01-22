import TotalReducer from './TotalReducer'
import CountriesReducer from './CountriesReducer'
import CountryReducer from './CountryReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  totalReducer: TotalReducer,
  countriesReducer: CountriesReducer,
  countryReducer: CountryReducer
})
export default allReducers