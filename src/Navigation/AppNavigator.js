import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {Provider} from 'mobx-react';

import AuthNavigator from './AuthNavigator';
import InAppNavigator from './InAppNavigator';
import {primary} from '../Theme/colors';
import {retrieveUserSession} from '../Utils/StorageManager';
import AuthContext from '../Contexts/AuthContext';
import moviesStore from '../MobX/MoviesStore';

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkIsUserLoggedIn();
  }, []);

  const checkIsUserLoggedIn = async () => {
    const session = await retrieveUserSession();
    if (session) {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  };

  return (
    <Provider store={moviesStore}>
      <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        <NavigationContainer>
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={primary} />
            </View>
          ) : isLoggedIn ? (
            <InAppNavigator />
          ) : (
            <AuthNavigator />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppNavigator;
