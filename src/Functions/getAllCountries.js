import {
  getCountriesRequest,
  getCountriesSuccess,
  getCountriesFailure,
} from '../redux/actions'

const axios = require('axios')

export default function getAllCountries() {
  return function (dispatch) {
    dispatch(getCountriesRequest());

    let config = {
      method: "get",
      url: "https://covid-19-data.p.rapidapi.com/help/countries",
      headers: {
        "x-rapidapi-key": "381cd21911msh925fcb70a3a7b99p14cf15jsn27794db4a978",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        useQueryString: true,
      },
    };

    axios(config)
      .then((res) => {
        dispatch(getCountriesSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getCountriesFailure(err.message));
      });
  };
}
