import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {fetchUserApi} from './api/userApi';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   try {
      const user = yield call(fetchUserApi, action.payload.userId);
      // const user = yield call(fetchUserApi, 1);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user.data});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("INCREMENT", fetchUser);
  yield takeEvery("DECREMENT", fetchUser);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
/* function* mySaga() {
  yield takeLatest("DECREMENT", fetchUser);
} */

export default mySaga;