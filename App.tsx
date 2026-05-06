import { StyleSheet } from "react-native";
import Login from './app/login/index.js';
import "./gesture-handler";

export default function login() {
    return (
        <Login />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});