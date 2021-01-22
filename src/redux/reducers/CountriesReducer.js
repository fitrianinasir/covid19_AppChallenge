import {GET_COUNTRIES_REQUEST, GET_COUNTRIES_SUCCESS, GET_COUNTRIES_FAILURE} from '../GlobalVariable'

const initialState = {
  loading: false,
  allCountries: [],
  errorTotal:''
};

const CountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES_REQUEST:
      return{
        ...state,
        loading: true
      }
    
    case GET_COUNTRIES_SUCCESS:
      return{
        ...state,
        loading: false,
        allCountries: action.payload
      }

    case GET_COUNTRIES_FAILURE:
        return{
          ...state,
          loading: false,
          allCountries: [],
          errorTotal: action.payload
        }
    default:
      return state;
  }
};




export default CountriesReducer;
