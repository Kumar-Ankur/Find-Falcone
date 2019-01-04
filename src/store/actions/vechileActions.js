import * as actionTypes from "../actions/actionTypes";

export const loadVechileDetails = () => {
  return {
    type: actionTypes.LOAD_VECHILE_DETAIL
  };
};

export const updateVechileCount = () => {
  return {
    type: actionTypes.UPDATE_VECHILE_COUNT
  };
};

export const setVechileDetails = data => {
  return {
    type: actionTypes.SET_VECHILE_DETAILS,
    payload: data
  };
};
