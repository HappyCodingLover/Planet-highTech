import * as actionTypes from './actionTypes';
// import { UserServices } from '@services';
import {UserServices} from '../services';

const onLoginStart = () => {
  return {
    type: actionTypes.LOGIN_START,
  };
};

const onLoginSuccess = (payload) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload,
  };
};

const onLoginError = (payload) => {
  return {
    type: actionTypes.LOGIN_ERROR,
    payload,
  };
};

const onLogoutStart = () => {
  return {
    type: actionTypes.LOGOUT_START,
  };
};

const onLogoutSuccess = () => {
  return {
    type: actionTypes.LOGOUT_SUCCESS,
  };
};

const onLogoutError = (payload) => {
  return {
    type: actionTypes.LOGOUT_ERROR,
    payload,
  };
};

const onRegisterStart = () => {
  return {
    type: actionTypes.REGISTER_START,
  };
};

const onRegisterSuccess = () => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
  };
};

const onRegisterError = (payload) => {
  return {
    type: actionTypes.REGISTER_ERROR,
    payload,
  };
};

const onSetShouldShowOnboardingFlow = (payload) => {
  return {
    type: actionTypes.SET_SHOULD_SHOW_ONBOARDING_FLOW,
    payload,
  };
};

export const login = (loginCredential, callback) => (dispatch) => {
  dispatch(onLoginStart());

  UserServices.login(loginCredential)
    .then((response) => {
      if (response.data.success === 1) {
        const payload = {
          ...response.data.data,
          token: response.data.token,
        };
        dispatch(onLoginSuccess(payload));
      } else {
        dispatch(onLoginError(response.data.msg));
      }
      callback(response.data);
    })
    .catch((error) => {
      dispatch(onLoginError(error.response));
      callback(error.response);
    });
};

export const logout = (callback) => (dispatch) => {
  dispatch(onLogoutStart());

  UserServices.logout()
    .then((response) => {
      if (response.data.success === 1) {
        dispatch(onLogoutSuccess());
      } else {
        dispatch(onLogoutError(response.data.msg));
      }
      callback(response.data);
    })
    .catch((error) => {
      dispatch(onLogoutError(error.response));
      callback(error.response);
    });
};

export const register = (body, callback) => (dispatch) => {
  dispatch(onRegisterStart());

  UserServices.register(body)
    .then((response) => {
      if (response.data.success === 1) {
        dispatch(onRegisterSuccess());
      } else {
        dispatch(onRegisterError(response.data.msg));
      }
      callback(response.data);
    })
    .catch((error) => {
      dispatch(onRegisterError(error.response));
      callback(error.response);
    });
};

export const setShouldShowOnboardingFlow = (flag) => (dispatch) => {
  dispatch(onSetShouldShowOnboardingFlow(flag));
};
