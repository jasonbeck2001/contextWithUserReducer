import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './LoginView.styles';
import {
  useLoginState,
  useLoginDispatch,
  LoginActions,
} from '../Contexts/LoginContext';

const LoginView = () => {
  const {username, password, loginError, loggedIn} = useLoginState();
  const loginDispatch = useLoginDispatch();

  const _onPressLogin = () => {
    if (username === 'Steve' && password === 'password') {
      loginDispatch({type: LoginActions.setLoggedIn, payload: true});
      loginDispatch({type: LoginActions.setLoginError, payload: ''});
    } else {
      loginDispatch({type: LoginActions.setLoggedIn, payload: false});
      loginDispatch({
        type: LoginActions.setLoginError,
        payload: 'Incorrect username or password',
      });
    }
  };

  const _onPressSwitchColorScheme = () => {
    globalDispatch({type: 'setVibrantColors', payload: true});
  };

  const _onPressLogout = () => {
    loginDispatch({type: LoginActions.setUsername, payload: ''});
    loginDispatch({type: LoginActions.setPassword, payload: ''});
    loginDispatch({type: LoginActions.setLoginError, payload: ''});
    loginDispatch({type: LoginActions.setLoggedIn, payload: false});
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>App To Demo:</Text>
              <Text style={styles.sectionTitle}>
                useContext/useReducer/Immer
              </Text>
            </View>
            {!loggedIn && (
              <>
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>Please Log In</Text>
                </View>
                {!!loginError && (
                  <View style={styles.sectionContainer}>
                    <Text style={[styles.sectionTitle, styles.warning]}>
                      Login Error
                    </Text>
                  </View>
                )}
                <View style={styles.sectionContainer}>
                  <TextInput
                    style={styles.textInputStyle}
                    value={username}
                    placeholder="username"
                    autoCapitalize={'none'}
                    onChangeText={(text) =>
                      loginDispatch({
                        type: LoginActions.setUsername,
                        payload: text,
                      })
                    }
                  />
                </View>
                <View style={styles.sectionContainer}>
                  <TextInput
                    style={styles.textInputStyle}
                    value={password}
                    placeholder="password"
                    autoCapitalize={'none'}
                    onChangeText={(text) =>
                      loginDispatch({
                        type: LoginActions.setPassword,
                        payload: text,
                      })
                    }
                  />
                </View>
                <View style={styles.sectionContainer}>
                  <Button title="Login" onPress={_onPressLogin} />
                </View>
              </>
            )}
            {loggedIn && (
              <>
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>
                    {`${username} logged in successfully`}
                  </Text>
                </View>
                <View style={styles.sectionContainer}>
                  <View style={styles.sectionContainer}>
                    <Button title="Log out" onPress={_onPressLogout} />
                  </View>
                </View>
              </>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LoginView;
