import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from '../src/list';
import User from '../src/user';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name="List" component={List} />
            <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
    );
}