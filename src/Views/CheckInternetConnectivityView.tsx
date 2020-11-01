import React, {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {useGlobalDispatch, GlobalActions} from '../Contexts/GlobalContext';

const CheckInternetConnectivityView = () => {
  const globalDispatch = useGlobalDispatch();
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    globalDispatch({
      type: GlobalActions.isConnectedToInternet,
      payload: isConnected,
    });
  }, [isConnected]);

  const unsubscribe = NetInfo.addEventListener((state) => {
    if (state.isConnected === isConnected) return;
    setIsConnected(state.isConnected);
  });

  NetInfo.fetch().then((state) => {
    setIsConnected(state.isConnected);
  });
  return <></>;
};

export default CheckInternetConnectivityView;
