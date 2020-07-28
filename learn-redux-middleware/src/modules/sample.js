import { handleActions, createAction } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";

import * as api from "../lib/api";
import { startLoading, finishLoading } from "./loading";
import createRequestSaga from "../lib/createRequestSaga";
// import createRequestThunk from "../lib/createRequestThunk";

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);
// function* getPostSaga(action) {
//     yield put(startLoading(getPost));
//     try {
//         const post = yield call(api.getPost, action.payload);
//         yield put({
//             type: GET_POST_SUCCESS,
//             payload: post.data,
//         });
//     } catch (error) {
//         yield put({
//             type: GET_POST_SUCCESS,
//             payload: error,
//             error: true,
//         });
//     }
//     yield put(finishLoading(GET_POST));
// }

// function* getUsersSage() {
//     yield put(startLoading(GET_USERS));
//     try {
//         const users = yield call(api.getUsers);
//         yield put({
//             type: GET_USERS_SUCCESS,
//             payload: users.data,
//         });
//     } catch (error) {
//         yield put({
//             type: GET_USERS_FAILURE,
//             payload: error,
//             error: true,
//         });
//     }
//     yield put(finishLoading(GET_USERS));
// }

export function* sampleSaga() {
    yield takeLatest(GET_POST, getPostSaga);
    yield takeLatest(GET_USERS, getUsersSaga);
}
// export const getPost = createRequestThunk(GET_POST, api.getPost);
// export const getUsers = createRequestThunk(GET_USERS, api.getUsers);
// export const getPost = (id) => async (dispatch) => {
//     dispatch({ type: GET_POST });
//     try {
//         const response = await api.getPost(id);
//         dispatch({
//             type: GET_POST_SUCCESS,
//             payload: response.data,
//         });
//     } catch (e) {
//         dispatch({
//             type: GET_POST_FAILURE,
//             payload: e,
//             error: true,
//         });
//         throw e;
//     }
// };

// export const getUsers = () => async (dispatch) => {
//     dispatch({ type: GET_USERS });
//     try {
//         const response = await api.getUsers();
//         dispatch({
//             type: GET_USERS_SUCCESS,
//             payload: response.data,
//         });
//     } catch (e) {
//         dispatch({
//             type: GET_USERS_FAILURE,
//             payload: e,
//             error: true,
//         });
//         throw e;
//     }
// };

const initialState = {
    // loading: {
    //     GET_POST: false,
    //     GET_USERS: false,
    // },
    post: null,
    users: null,
};

const sample = handleActions(
    {
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            // loading: {
            //     ...state.loading,
            //     GET_POST: false,
            // },
            post: action.payload,
        }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            // loading: {
            //     ...state.loading,
            //     GET_USERS: false,
            // },
            users: action.payload,
        }),
    },
    initialState,
);

export default sample;
