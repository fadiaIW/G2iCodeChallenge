import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Quiz/Home';
import Quiz from '../screens/Quiz/Quiz';
import Result from '../screens/Quiz/Result';

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default StackNav;