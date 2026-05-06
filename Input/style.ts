import { StyleSheet } from "react-native";
import { themes } from "../global/themes";

export const styles = StyleSheet.create({
    box: {
        height: 100,
        width: 350,
        backgroundColor: themes.colors.lightgray,
        borderLeftWidth: 3,
        borderRightWidth: 3
    },
    input: {
        width: "95%",
        height: "100%",
        backgroundColor: "#ffffff",
        borderRadius: 20,
        alignSelf: "center"
    },
    titleInput: {
        marginLeft: 45,
        marginTop: 10,
        fontSize: 16
    },
    BoxInput: {
        backgroundColor: themes.colors.secondary,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: themes.colors.black,
        height: 40,
        width: 280,
        marginTop: 5,
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "center"
    },
    text: {
        fontWeight: "bold",
        marginTop: 40,
        fontSize: 26,
        alignSelf: "center"
    },
    Icon: {
        width: "100%",
        paddingTop: 8.5
    }
})