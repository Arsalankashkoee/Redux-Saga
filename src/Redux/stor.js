import { createStore, applyMiddleware } from "redux";
import postReducer from "./Posts/postReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
// redux-saga
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./Sagas/rootSaga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  postReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);

// Then run the saga
sagaMiddleware.run(rootSaga);

export default store;
