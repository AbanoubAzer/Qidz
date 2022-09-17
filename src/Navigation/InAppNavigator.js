import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MovieList from '../Screens/MovieList';

const Stack = createStackNavigator();

const InAppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Movies"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Movies" component={MovieList} />
    </Stack.Navigator>
  );
};

export default InAppNavigator;
