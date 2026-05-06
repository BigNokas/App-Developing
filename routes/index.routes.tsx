import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../app/login/';

export default function Routes() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
            />
        </Stack.Navigator>
    )
}