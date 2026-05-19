import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../src/login/login';
import BottomRoutes from './bottom.routes';
import RegisterRoutes from './stack.routes';

export default function Routes() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Register"
                component={RegisterRoutes}
            />
            <Stack.Screen
                name="BottomRoutes"
                component={BottomRoutes}
            />
        </Stack.Navigator>
    )
}