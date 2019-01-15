import * as actionTypes from "../actions/actionTypes";

const intialState = {
  vechileData: []
};

export default function(state = intialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_VECHILE_DETAIL:
      return {
        ...state
      };
    case actionTypes.UPDATE_VECHILE_COUNT:
      return {
        ...state       
      };    
    case actionTypes.SET_VECHILE_DETAILS:
    return {
      ...state,
      vechileData: action.payload
    }
    default:
      return state;
  }
}
