import {
  getCountryRequest,
  getCountrySuccess,
  getCountryFailure,
} from "../redux/actions";

const axios = require("axios");

export default function getCountry(props) {
  return function (dispatch) {
    dispatch(getCountryRequest());
    let config = {
      method: "get",
      url: `https://covid-19-data.p.rapidapi.com/country/code?code=${props}`,
      headers: {
        "x-rapidapi-key": "381cd21911msh925fcb70a3a7b99p14cf15jsn27794db4a978",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        useQueryString: true,
      },
    };

    axios(config)
      .then((res) => {
        dispatch(getCountrySuccess(res.data));
      })
      .catch((err) => {
        dispatch(getCountryFailure(err.message));
      });
  };
}
