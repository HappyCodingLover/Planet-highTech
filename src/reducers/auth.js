// import * as actionTypes from '@actions/actionTypes';
import * as actionTypes from '../actions/actionTypes';
const initialState = {
  login: {
    isLoading: false,
    success: false,
    error: null,
  },
  register: {
    isLoading: false,
    success: false,
    error: null,
  },
  showOnboardingFlow: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.SET_SHOULD_SHOW_ONBOARDING_FLOW:
      return {
        ...state,
        showOnboardingFlow: {...state.showOnboardingFlow, ...action.payload},
      };
    case actionTypes.LOGIN_START:
      return {
        ...state,
        login: {
          ...state.login,
          isLoading: true,
          error: null,
        },
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          ...state.login,
          isLoading: false,
          success: true,
        },
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        login: {
          ...state.login,
          isLoading: false,
          success: false,
          error: action.payload,
        },
      };
    case actionTypes.LOGOUT_START:
      return {
        ...state,
        login: {
          ...state.login,
          isLoading: true,
          error: null,
        },
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        login: {
          isLoading: false,
          success: false,
          error: null,
        },
        user: initialState.user,
      };
    case actionTypes.LOGOUT_ERROR:
      return {
        ...state,
        login: {
          ...state.login,
          isLoading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
