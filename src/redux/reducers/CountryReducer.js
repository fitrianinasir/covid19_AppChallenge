import {
  GET_COUNTRY_CODE,
  GET_COUNTRY_REQUEST,
  GET_COUNTRY_SUCCESS,
  GET_COUNTRY_FAILURE,
} from "../GlobalVariable";

const initialState = {
  loading: false,
  code: "",
  country: [],
  errorTotal: "",
};

const CountryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY_CODE:
      return {
        ...state,
        code: action.code,
      };
    case GET_COUNTRY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        country: action.payload,
      };

    case GET_COUNTRY_FAILURE:
      return {
        ...state,
        loading: false,
        country: [],
        errorTotal: action.payload,
      };
    default:
      return state;
  }
};

export default CountryReducer;
