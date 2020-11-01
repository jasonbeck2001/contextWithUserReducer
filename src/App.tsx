import React from 'react';
import {LoginProvider} from './Contexts/LoginContext';
import {GlobalProvider} from './Contexts/GlobalContext';
import LoginView from './Views/LoginView';

const App: () => React.ReactNode = () => {
  return (
    <GlobalProvider>
      <LoginProvider>
        <LoginView />
      </LoginProvider>
    </GlobalProvider>
  );
};

export default App;
