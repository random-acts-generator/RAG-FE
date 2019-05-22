import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGOUT,
  LOGOUT_SUCCESS,
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  GET_ACTS_FAILED,
  GET_ACTS_SUCCESS,
  GET_ACTS_START,
  GET_CONTACTS_FAILED,
  GET_CONTACTS_START,
  GET_CONTACTS_SUCCESS,
  DELETE_ACTS_FAILED,
  DELETE_ACTS_START,
  DELETE_ACTS_SUCCESS,
  DELETE_CONTACTS_FAILED,
  DELETE_CONTACTS_START,
  DELETE_CONTACTS_SUCCESS,
  UPDATE_ACTS_FAILED,
  UPDATE_ACTS_START,
  UPDATE_ACTS_SUCCESS,
  UPDATE_CONTACTS_FAILED,
  UPDATE_CONTACTS_START,
  UPDATE_CONTACTS_SUCCESS,
  ADD_ACTS_FAILED,
  ADD_ACTS_START,
  ADD_ACTS_SUCCESS,
  ADD_CONTACTS_FAILED,
  ADD_CONTACTS_START,
  ADD_CONTACTS_SUCCESS
} from "../actions";

const initialState = {
  user: {},
  error: null,
  loggingIn: false,
  registering: false,
  isLoggedIn: false,
  contacts: {},
  acts: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        error: "",
        registering: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        error: "",
        registering: false
      };
    case REGISTER_FAILED:
      return {
        ...state,
        error: action.payload,
        registering: false
      };
    case LOGIN_START:
      return {
        ...state,
        error: "",
        loggingIn: true,
        isLoggedIn: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: "",
        loggingIn: false,
        user: action.payload.user,
        isLoggedIn: true
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
        loggingIn: false,
        isLoggedIn: false
      };
    case LOGOUT:
      return {
        ...state,
        loggingOut: true,
        error: ""
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        error: "",
        user: {},
        isLoggedIn: false
      };
    case FETCHING_DATA:
      return {
        ...state,
        user: action.payload.user,
        error: "",
        isLoggedIn: true
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        error: "",
        isLoggedIn: true
      };
    case UPDATE_USER_START:
      console.log(":: UPDATE USER START ::");
      return {
        ...state,
        updatingUser: true,
        error: ""
      };
    case UPDATE_USER_SUCCESS:
      console.log(":: UPDATE USER SUCCESS ::");
      return {
        ...state,
        user: action.payload.account,
        updatingUser: false,
        error: ""
      };
    case UPDATE_USER_FAILED:
      console.log(":: UPDATE USER FAILED ::");
      return {
        ...state,
        updatingUser: false,
        error: action.payload
      };
    case GET_ACTS_FAILED:
      console.log(":: GET ACTS FAILED ::");
      return {
        ...state,
        gettingActs: false,
        error: action.payload
      };
    case GET_ACTS_SUCCESS:
      console.log(":: GET ACTS SUCCESS ::");
      return {
        ...state,
        acts: action.payload,
        gettingActs: false,
        error: ""
      };
    case GET_ACTS_START:
      console.log(":: GET ACTS START ::");
      return {
        ...state,
        gettingActs: true,
        error: ""
      };
    case GET_CONTACTS_FAILED:
      console.log(":: GET CONTACTS FAILED ::");
      return {
        ...state,
        gettingContacts: false,
        error: action.payload
      };
    case GET_CONTACTS_SUCCESS:
      console.log(":: GET CONTACTS SUCCESS ::");
      return {
        ...state,
        contacts: action.payload,
        gettingContacts: false,
        error: ""
      };
    case GET_CONTACTS_START:
      console.log(":: GET CONTACTS START ::");
      return {
        ...state,
        gettingContacts: true,
        error: ""
      };
    case ADD_ACTS_FAILED:
      console.log(":: ADD ACTS FAILED ::");
      return {
        ...state,
        error: action.payload
      };
    case ADD_ACTS_START:
      console.log(":: ADD ACTS START ::");
      return {
        ...state,
        error: ""
      };
    case ADD_ACTS_SUCCESS:
      console.log(":: ADD ACTS START ::");
      return {
        ...state,
        acts: action.payload,
        error: ""
      };
    case ADD_CONTACTS_FAILED:
      console.log(":: ADD CONTACTS FAILED ::");
      return {
        ...state,
        error: action.payload
      };
    case ADD_CONTACTS_START:
      console.log(":: ADD CONTACTS START ::");
      return {
        ...state,
        error: ""
      };
    case ADD_CONTACTS_SUCCESS:
      console.log(":: GET CONTACTS START ::");
      return {
        ...state,
        contacts: action.payload,
        error: ""
      };
    case DELETE_ACTS_START:
      return {
        ...state,
        error: ""
      };
    case DELETE_ACTS_SUCCESS:
      return {
        ...state,
        acts: action.payload,
        error: ""
      };
    case DELETE_ACTS_FAILED:
      return {
        ...state,
        error: action.payload
      };
    case DELETE_CONTACTS_START:
      return {
        ...state,
        error: ""
      };
    case DELETE_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
        error: ""
      };
    case DELETE_CONTACTS_FAILED:
      return {
        ...state,
        error: action.payload
      };
    case UPDATE_ACTS_START:
      return {
        ...state,
        error: ""
      };
    case UPDATE_ACTS_SUCCESS:
      return {
        ...state,
        acts: action.payload,
        error: ""
      };
    case UPDATE_ACTS_FAILED:
      return {
        ...state,
        error: action.payload
      };
    case UPDATE_CONTACTS_START:
      return {
        ...state,
        error: ""
      };
    case UPDATE_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
        error: ""
      };
    case UPDATE_CONTACTS_FAILED:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
