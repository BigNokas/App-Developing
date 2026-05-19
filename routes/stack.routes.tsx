import { createStackNavigator } from "@react-navigation/stack";
import Login from "../src/login/login";
import Register from "../src/Register/register";

const Stack = createStackNavigator();

export default function RegisterRoutes() {
    return (
        <Stack.Navigator initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
}