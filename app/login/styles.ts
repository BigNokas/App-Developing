import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    box1: {
        height: 120,
        width: 350,
        backgroundColor: themes.colors.gray,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderTopWidth: 3,
    },
    box2: {
        height: 100,
        width: 350,
        backgroundColor: themes.colors.lightgray,
        borderLeftWidth: 3,
        borderRightWidth: 3,
    },
    box3: {
        height: 100,
        width: 350,
        backgroundColor: themes.colors.lightgray,
        borderLeftWidth: 3,
        borderRightWidth: 3
    },
    box4: {
        height: 100,
        width: 350,
        backgroundColor: themes.colors.lightgray,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderBottomWidth: 3,
    },
    text: {
        fontWeight: "bold",
        marginTop: 40,
        fontSize: 26,
        alignSelf: "center"
    },
    titleInput: {
        marginLeft: 32,
        marginTop: 10,
        fontSize: 16
    },
    BoxInput: {
        backgroundColor: themes.colors.secondary,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: themes.colors.black,
        height: 40,
        width: 250,
        marginTop: 5,
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "center"
    },
    input: {
        width: "95%",
        height: "100%",
        backgroundColor: "#ffffff",
        borderRadius: 20,
        alignSelf: "center"
    },
    Button: {
        width: 100,
        height: 40,
        backgroundColor: themes.colors.primary,
        borderRadius: 20,
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 20
    },
    ButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: themes.colors.secondary,
        alignSelf: "center"
    }
})

export default style