import {call, put, takeLatest} from 'redux-saga/effects';
import {authUser, updateUser} from '../../api/users';
import {
  AUTH_USER_FAILED,
  AUTH_USER_SUCCESS,
  AUTH_USER,
  LOGOUT,
  AUTH_DISCONNECT,
  ON_UPDATE_ACCOUNT,
  UPDATE_ACCOUNT_SUCCESS,
  UPDATING,
} from '../actions';

export default function* authUserWatcherSaga() {
  yield takeLatest(AUTH_USER, authUserWorker);
  yield takeLatest(AUTH_DISCONNECT, authLogoutWorker);
  yield takeLatest(ON_UPDATE_ACCOUNT, updateUserWorker);
}

function* authUserWorker(action) {
  try {
    const user = yield call(() => authUser(action.payload));
    if (user.status === 200) {
      yield put({type: AUTH_USER_SUCCESS, user: user.data.data});
    } else {
      yield put({type: AUTH_USER_FAILED, error: e.message});
    }
  } catch (e) {
    yield put({type: AUTH_USER_FAILED, error: e.message});
  }
}
function* authLogoutWorker() {
  yield put({type: LOGOUT});
}

function* updateUserWorker(action) {
  try {
    const user = yield call(() => updateUser(action.payload));
    user.firstName = user.first_name;
    user.lastName = user.last_name;
    yield put({type: UPDATING});
    user.displayName = user.username;
    if (user.id) {
      yield put({type: UPDATE_ACCOUNT_SUCCESS, user});
    } else {
      yield put({type: AUTH_USER_FAILED, error: user});
    }
  } catch (e) {
    yield put({type: AUTH_USER_FAILED, error: e.message});
  }
}
