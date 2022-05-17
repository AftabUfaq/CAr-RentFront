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
import BookCar from './pages/BookCar'
import BookingList from './pages/BookingList'
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
          options={{
            title:"Sign In",
            headerStyle: {
              backgroundColor: '#C70404',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
        name="Sign Up"
        component={SignUp}
        options={{
          title:"Sign Up",
          headerStyle: {
            backgroundColor: '#C70404',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        
        />
        <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{header: () => null}}
        />
        <Stack.Screen
        name="Rent Out"
        component={RentOut}
        options={{
          title:"Rent Out",
          headerStyle: {
            backgroundColor: '#C70404',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        
        />
        <Stack.Screen
        name="Rent In"
        component={RentIn}
        options={{
          title:"Rent In",
          headerStyle: {
            backgroundColor: '#C70404',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        
        
        />

    <Stack.Screen
        name="BookCar"
        component={BookCar}
        options={{
          title:"Book Car",
          headerStyle: {
            backgroundColor: '#C70404',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />

<Stack.Screen
        name="BookingList"
        component={BookingList}
        options={{
          title:"All Bookings",
          headerStyle: {
            backgroundColor: '#C70404',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />

        <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          title:"Categories",
          headerStyle: {
            backgroundColor: '#C70404',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        
        />
        <Stack.Screen
        name="Vehicles"
        component={Vehicles}
        options={{
          title:"Vehicles",
          headerStyle: {
            backgroundColor: '#C70404',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title:"Details",
            headerStyle: {
              backgroundColor: '#C70404',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="OwnCarView"
          component={OwnCarView}
          options={{
            title:"Car Added",
            headerStyle: {
              backgroundColor: '#C70404',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />



        <Stack.Screen
        name="Confirm"
        component={Confirm}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}