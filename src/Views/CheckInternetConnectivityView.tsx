import React from 'react';
import NetInfo from '@react-native-community/netinfo';
import {useGlobalDispatch, GlobalActions} from '../Contexts/GlobalContext';

const CheckInternetConnectivityView = () => {
  const loginDispatch = useGlobalDispatch();

  const unsubscribe = NetInfo.addEventListener((state) => {
    loginDispatch({
      type: GlobalActions.isConnectedToInternet,
      payload: state.isConnected,
    });
  });
  NetInfo.fetch().then((state) => {
    loginDispatch({
      type: GlobalActions.isConnectedToInternet,
      payload: state.isConnected,
    });
  });
  return <></>;
};

export default CheckInternetConnectivityView;
