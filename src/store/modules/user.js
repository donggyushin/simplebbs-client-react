//import
import axios from "axios";

//actions
const GET_TOKEN = "user/GET_TOKEN";
const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";
const REOMOVETOKEN = "user/REMOVETOKEN";

//action creators

export const removeToken = () => ({
  type: REOMOVETOKEN
});

export const logout = () => ({
  type: LOGOUT
});

export const getToken = token => ({
  type: GET_TOKEN,
  token
});

export const login = () => ({
  type: LOGIN
});

//api

export const apiSignUp = (username, password) => {
  return dispatch => {
    axios
      .post("/api/auth/new", {
        username,
        password
      })
      .then(response => response.data)
      .then(data => {
        if (data.ok) {
          console.log("ok");
        } else {
          console.log("fail");
        }
      })
      .catch(err => console.log(err));
  };
};

export const apiLogout = () => {
  return dispatch => {
    axios
      .get("/api/auth/logout")
      .then(response => response.data)
      .then(data => {
        if (data.ok) {
          dispatch(logout());
        }
      })
      .catch(err => console.log(err));
  };
};

export const apiGetToken = () => {
  return async (dispatch, getState) => {
    axios
      .get(`/api/auth/token`)
      .then(response => response.data)
      .then(data => data.userId)
      .then(user_id => {
        if (user_id) {
          dispatch(getToken(user_id));
          dispatch(login());
        }
      })
      .catch(err => console.log(err));
  };
};

export const apiLogin = (username, password) => {
  return async (dispatch, getState) => {
    axios
      .post("/api/auth/login", {
        username,
        password
      })
      .then(res => res.data)
      .then(data => {
        if (data.ok) {
          dispatch(login());
        }
      })
      .catch(err => console.log(err));
  };
};

//initialState
const initialState = {
  session_token: null,
  isLoggedIn: localStorage.getItem("token") ? true : false
};

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOKEN:
      return applyGetTokken(state, action);
    case LOGIN:
      return applyLogin(state, action);
    case LOGOUT:
      return applyLogout(state, action);
    case applyRemoveToken:
      return applyRemoveToken(state, action);
    default:
      return state;
  }
}

//reducer actions

const applyRemoveToken = (state, action) => {
  localStorage.removeItem("token");
  return {
    ...state,
    session_token: null,
    isLoggedIn: false
  };
};

const applyLogout = (state, action) => {
  localStorage.removeItem("token");
  return {
    ...state,
    session_token: null,
    isLoggedIn: false
  };
};

const applyLogin = (state, action) => {
  return {
    ...state,
    isLoggedIn: true
  };
};

const applyGetTokken = (state, action) => {
  const { token } = action;
  if (token) {
    localStorage.setItem("token", token);
  }
  return {
    ...state,
    session_token: token
  };
};
