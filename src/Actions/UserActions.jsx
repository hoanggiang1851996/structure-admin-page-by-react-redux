import axios from 'axios';
import AlertSuccess from "../Services/Alert/AlertSuccess";
import AlertError from "../Services/Alert/AlertError";
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

export const FETCH_USER_DETAIL = 'FETCH_USER_DETAIL';
export const FETCH_USER_DETAIL_SUCCESS = 'FETCH_USER_DETAIL_SUCCESS';
export const FETCH_USER_DETAIL_FAILURE = 'FETCH_USER_DETAIL_FAILURE';

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

const API_URL = 'http://5cd2a628d935aa0014149f2d.mockapi.io';

export function fetchUsers() {
  const request = axios({
    method: 'get',
    url: `${API_URL}/user`,
    headers: []
  });

  return {
    type: FETCH_USERS,
    payload: request
  };
}

export function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
}

export function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  };
}

export function createUser(props, tokenFromStorage) {
  const request = axios({
    method: 'post',
    data: props,
    url: `${API_URL}/user`,
    //set token backend
    headers: {
      // 'Authorization': `Bearer ${tokenFromStorage}`
    }
  });

  return {
    type: CREATE_USER,
    payload: request
  };
}

export function createUserSuccess(newUser) {
  return {
    type: CREATE_USER_SUCCESS,
    payload: newUser,
  };
}

export function createUserFailure(error) {
  AlertError('Create user error');
  return {
    type: CREATE_USER_FAILURE,
    payload: error
  };
}

export function fetchUser(userId) {
  const request = axios({
    method: 'get',
    url: `${API_URL}/user/${userId}`,
    headers: []
  });

  return {
    type: FETCH_USER_DETAIL,
    payload: request
  };
}
