import {
  GET_TOTAL_REQUEST,
  GET_TOTAL_SUCCESS,
  GET_TOTAL_FAILURE,
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAILURE,
  GET_COUNTRY_CODE,
  GET_COUNTRY_REQUEST,
  GET_COUNTRY_SUCCESS,
  GET_COUNTRY_FAILURE,
} from "../GlobalVariable";

// TOTAL
export const getTotalRequest = () => {
  return {
    type: GET_TOTAL_REQUEST,
  };
};

export const getTotalSuccess = (data) => {
  return {
    type: GET_TOTAL_SUCCESS,
    payload: data,
  };
};

export const getTotalFailure = (error) => {
  return {
    type: GET_TOTAL_FAILURE,
    payload: error,
  };
};

// ALL COUNTRIES

export const getCountriesRequest = () => {
  return {
    type: GET_COUNTRIES_REQUEST,
  };
};

export const getCountriesSuccess = (data) => {
  return {
    type: GET_COUNTRIES_SUCCESS,
    payload: data,
  };
};

export const getCountriesFailure = (error) => {
  return {
    type: GET_COUNTRIES_FAILURE,
    payload: error,
  };
};

// COUNTRY

export const getCountryRequest = () => {
  return {
    type: GET_COUNTRY_REQUEST,
  };
};

export const getCountrySuccess = (data) => {
  return {
    type: GET_COUNTRY_SUCCESS,
    payload: data,
  };
};

export const getCountryFailure = (error) => {
  return {
    type: GET_COUNTRY_FAILURE,
    payload: error,
  };
};
