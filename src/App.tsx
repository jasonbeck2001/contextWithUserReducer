import React from 'react';
import {LoginProvider} from './Contexts/LoginContext';
import {GlobalProvider} from './Contexts/GlobalContext';
import LoginView from './Views/LoginView';
import CheckInternetConnectivityView from './Views/CheckInternetConnectivityView';

const App: () => React.ReactNode = () => {
  return (
    <GlobalProvider>
      <LoginProvider>
        <CheckInternetConnectivityView />
        <LoginView />
      </LoginProvider>
    </GlobalProvider>
  );
};

export default App;
