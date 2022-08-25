import { FETCH_POST_REQUEST } from "./postTypes";
import { FETCH_POST_SUCCESS } from "./postTypes";
import { FETCH_POST_FAILURE } from "./postTypes";

//actions

export function fetchPostRequest(id) {
  return {
    type: FETCH_POST_REQUEST,
    payload: id,
  };
}

export function fetchPostFailure(error) {
  return {
    type: FETCH_POST_FAILURE,
    payload: error,
  };
}

export function fetchPostSuccess(post) {
  return {
    type: FETCH_POST_SUCCESS,
    payload: post,
  };
}

//async action creator

// export const fetchPOSTs = () => {
//   return function (dispatch) {
//     dispatch(fetchPOSTRequest());

//     axios
//       .get("https://jsonplaceholder.typicode.com/POSTs")
//       .then((res) => {
//         const POSTs = res.data;
//         dispatch(fetchPOSTSuccess(POSTs));
//       })
//       .catch((error) => {
//         dispatch(fetchPOSTFailure(error.message));
//       });
//   };
// };
