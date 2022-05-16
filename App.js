import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import Landing from './pages/landing.js';
import SignIn from './pages/signin.js';
import SignUp from './pages/signup.js';
import Dashboard from './pages/dashboard.js';
import RentOut from './pages/rentout.js';
import RentIn from './pages/rentin.js';
import Categories from './pages/categories.js';
import Vehicles from './pages/vehicles.js';
import Detail from './pages/detail.js';
import Confirm from './pages/confirm.js';
import OwnCarView from './pages/OwnCarView.js';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
export default function App() {

  const Stack = createNativeStackNavigator ();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={Landing}
        options={{header: () => null}}
        />
        <Stack.Screen
        name="Sign In"
        component={SignIn}
        />
        <Stack.Screen
        name="Sign Up"
        component={SignUp}
        />
        <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{header: () => null}}
        />
        <Stack.Screen
        name="Rent Out"
        component={RentOut}
        />
        <Stack.Screen
        name="Rent In"
        component={RentIn}
        />
        <Stack.Screen
        name="Categories"
        component={Categories}
        />
        <Stack.Screen
        name="Vehicles"
        component={Vehicles}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
        />
        <Stack.Screen
          name="OwnCarView"
          component={OwnCarView}
        />



        <Stack.Screen
        name="Confirm"
        component={Confirm}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}