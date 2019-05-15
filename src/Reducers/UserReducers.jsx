import {
  FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE,
  CREATE_USER, CREATE_USER_FAILURE, CREATE_USER_SUCCESS, FETCH_USER_DETAIL
} from "../Actions/UserActions";

const INITIAL_STATE = { usersList: {users: [], error:null, loading: false}};

export default function (state = INITIAL_STATE, action) {
  let error;

  switch (action.type) {

    case FETCH_USERS:
      return {...state, usersList: {users: action.payload.data, error: null, loading: true}};

    case FETCH_USERS_SUCCESS:
      return {...state, usersList: {users: action.payload, error: null, loading: false}};

    case FETCH_USERS_FAILURE:
      error = action.payload || {message: action.payload.message};
      return {...state, usersList: {users: [], error: error, loading: false}};

    case CREATE_USER:
      return {...state, newUser: {...state.newUser, loading: true}};

    case CREATE_USER_SUCCESS:
      return {...state, newUser: {user: action.payload, error: null, loading: false}};

    case CREATE_USER_FAILURE:
      return {...state, newUser: {user: null, error: error, loading: false}};

    case FETCH_USER_DETAIL:
      return {...state, user: {user: action.payload.data}}

    default:
      return state;
  }

}
