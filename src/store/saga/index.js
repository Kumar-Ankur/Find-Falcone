import { takeEvery, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { loadVechileDetails } from './vechileSaga';

export function* watchVechileDetails() {
    yield all([takeEvery(actionTypes.LOAD_VECHILE_DETAIL, loadVechileDetails)]);
  }
  