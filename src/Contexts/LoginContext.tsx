import React from 'react';
import {useImmerReducer} from 'use-immer';

interface action {
  type: string;
  payload: any;
}

interface draftTypes {
  username: string;
  password: string;
  loginError: string;
  loggedIn: boolean;
}

const {createContext} = React;
const initialState = {
  username: '',
  password: '',
  loggedIn: false,
  loginError: '',
};

const LoginActions = {
  setUsername: 'SET_USERNAME',
  setPassword: 'SET_PASSWORD',
  setLoginError: 'SET_LOGIN_ERROR',
  setLoggedIn: 'SET_LOGGED_IN',
};

const LoginStateContext = createContext(null);
const LoginDispatchContext = createContext(null);

const {setUsername, setPassword, setLoginError, setLoggedIn} = LoginActions;

function loginReducer(draft: draftTypes, action: action) {
  switch (action.type) {
    case setUsername: {
      draft.username = action.payload;
      return;
    }
    case setPassword: {
      draft.password = action.payload;
      return;
    }
    case setLoginError: {
      draft.loginError = action.payload;
      return;
    }
    case setLoggedIn: {
      draft.loggedIn = action.payload;
      return;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function LoginProvider({children}) {
  const [state, dispatch] = useImmerReducer(loginReducer, initialState);
  return (
    <LoginStateContext.Provider value={state}>
      <LoginDispatchContext.Provider value={dispatch}>
        {children}
      </LoginDispatchContext.Provider>
    </LoginStateContext.Provider>
  );
}

function useLoginState() {
  const context = React.useContext(LoginStateContext);
  if (context === undefined) {
    throw new Error('useLoginState must be used within a LoginProvider');
  }
  return context;
}

function useLoginDispatch() {
  const context = React.useContext(LoginDispatchContext);
  if (context === undefined) {
    throw new Error('useLoginDispatch must be used within a LoginProvider');
  }
  return context;
}

export {LoginProvider, useLoginState, useLoginDispatch, LoginActions};
