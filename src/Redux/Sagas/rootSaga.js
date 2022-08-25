import { all } from "redux-saga/effects";
import { watchFetchPost } from "./postSaga";

// Generator function
export function* rootSaga() {
  yield all([watchFetchPost()]);
}
