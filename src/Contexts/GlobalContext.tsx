import React from 'react';
import {useImmerReducer} from 'use-immer';

interface action {
  type: string;
  payload: any;
}

interface draftTypes {
  isConnectedToInternet: boolean;
}

const {createContext} = React;
const intialState = {
  isConnectedToInternet: false,
};

const GlobalStateContext = createContext(null);
const GlobalDispatchContext = createContext(null);

const GlobalActions = {
  isConnectedToInternet: 'IS_CONNECTED_TO_INTERNET',
};

function globalReducer(draft: draftTypes, action: action) {
  switch (action.type) {
    case GlobalActions.isConnectedToInternet: {
      draft.isConnectedToInternet = action.payload;
      return;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function GlobalProvider({children}) {
  const [state, dispatch] = useImmerReducer(globalReducer, intialState);
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
}

function useGlobalState() {
  const context = React.useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalProvider');
  }
  return context;
}

function useGlobalDispatch() {
  const context = React.useContext(GlobalDispatchContext);
  if (context === undefined) {
    throw new Error('useGlobalDispatch must be used within a GlobalProvider');
  }
  return context;
}

export {GlobalProvider, useGlobalState, useGlobalDispatch, GlobalActions};
