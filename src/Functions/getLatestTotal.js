import {
    getTotalRequest,
    getTotalSuccess,
    getTotalFailure,
  } from '../redux/actions'

const axios = require('axios')

export default function getLatestTotal() {
    return function (dispatch) {
      dispatch(getTotalRequest());

      let config = {
        method: "get",
        url: "https://covid-19-data.p.rapidapi.com/totals",
        headers: {
          "x-rapidapi-key":
            "381cd21911msh925fcb70a3a7b99p14cf15jsn27794db4a978",
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
          useQueryString: true,
        },
      };

      axios(config)
        .then((res) => {
          dispatch(getTotalSuccess(res.data));
        })
        .catch((err) => {
          dispatch(getTotalFailure(err.message));
        });
    };
  }