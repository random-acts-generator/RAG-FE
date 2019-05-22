import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const URL = "https://random-acts-generator.herokuapp.com";

export const login = creds => dispatch => {
  console.log(":: IN ACTION -> LOGIN ::");
  dispatch({ type: LOGIN_START });
  return axios
    .post(`${URL}/api/auth/login`, creds)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("data", res.data);
      const saved = JSON.stringify(res.data);
      localStorage.setItem("data", saved);
      console.log("LOGIN RESPONSE IS ----------->" + JSON.stringify(res));
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILED, payload: err });
      alert("Please register or use correct credentials!");
    });
};

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

export const register = creds => dispatch => {
  console.log(":: IN ACTION -> REGISTER ::" + JSON.stringify(creds));
  dispatch({ type: REGISTER_START });
  return axios
    .post(`${URL}/api/auth/register/`, creds)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: REGISTER_SUCCESS });
      console.log("REGISTER RESPONSE IS ----->" + JSON.stringify(res));
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILED, payload: err });
      alert("Something is wrong, please try again");
    });
};

export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const logout = () => dispatch => {
  console.log(":: IN ACTION LOGOUT ::");
  dispatch({ type: LOGOUT });
  localStorage.removeItem("token");
  localStorage.removeItem("data");
  dispatch({ type: LOGOUT_SUCCESS });
  window.location.reload();
};

export const FETCHING_DATA = "FETCHING_DATA";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";

export const getData = data => dispatch => {
  dispatch({ type: FETCHING_DATA, payload: data });
  dispatch({ type: FETCHING_DATA_SUCCESS });
};

export const UPDATE_USER_START = "UPDATE_USER_START";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILED = "UPDATE_USER_FAILED";

export const updateUser = (newUser, token) => dispatch => {
  console.log(
    ":: UPDATE USER - ACTION ::" + JSON.stringify(newUser),
    JSON.stringify(token)
  );
  dispatch({ type: UPDATE_USER_START });
  return axios
    .put(`${URL}/api/users/${newUser.id}`, newUser, {
      headers: { Authorization: token }
    })
    .then(res => {
      dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
      localStorage.setItem("data", JSON.stringify(res.data));
    })
    .catch(err => {
      dispatch({ type: UPDATE_USER_FAILED, payload: err.response });
      alert("Something is wrong, please try again");
    });
};
