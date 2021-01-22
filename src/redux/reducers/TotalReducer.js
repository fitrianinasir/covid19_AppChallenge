import {GET_TOTAL_REQUEST, GET_TOTAL_SUCCESS, GET_TOTAL_FAILURE} from '../GlobalVariable'

const initialState = {
  loading: false,
  latestTotal: [],
  errorTotal:''
};

const TotalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOTAL_REQUEST:
      return{
        ...state,
        loading: true
      }
    
    case GET_TOTAL_SUCCESS:
      return{
        ...state,
        loading: false,
        latestTotal: action.payload
      }

    case GET_TOTAL_FAILURE:
        return{
          ...state,
          loading: false,
          latestTotal: [],
          errorTotal: action.payload
        }
    default:
      return state;
  }
};




export default TotalReducer;
