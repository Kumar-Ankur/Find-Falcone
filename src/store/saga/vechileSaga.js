import { put } from "redux-saga/effects";
import * as actions from "../actions";
import axios from "axios";

export function* loadVechileDetails(action) {
  try {
    const response = yield axios.get(
      "https://findfalcone.herokuapp.com/vehicles"
    );
    yield put(actions.setVechileDetails(response.data));
  } catch (error) {
   // yield put(actions.getProfileError());
  }
}