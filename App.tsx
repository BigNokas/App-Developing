import { StyleSheet } from "react-native";
import "./gesture-handler";

import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes/index.routes';

export default function App() {


    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});