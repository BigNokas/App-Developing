import React, { ComponentProps, forwardRef, Fragment } from "react";
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";

type IconComponentType = React.ComponentType<ComponentProps<typeof MaterialIcons>> |
    React.ComponentType<ComponentProps<typeof FontAwesome>> |
    React.ComponentType<ComponentProps<typeof Octicons>>

type Props = TextInputProps & {
    title?: string,
    IconLeft?: IconComponentType,
    IconRight?: IconComponentType,
    OnPressIconRight?: () => void,
    OnPressIconLeft?: () => void,
    IconLeftName?: string,
    IconRightName?: string
}


export const Input = forwardRef((Props: Props, ref) => {

    const { title, IconLeft, IconRight, OnPressIconRight, OnPressIconLeft, IconLeftName, IconRightName, ...rest } = Props

    const calculateSizeWidth = () => {
        if (IconLeft && IconRight) {
            return '80%'
        }
        else if (IconLeft || IconRight) {
            return '90%'
        }
        else {
            return '100%'
        }
    }

    const calculateSizePadding = () => {
        if (IconLeft && IconRight) {
            return 0
        }
        else if (IconLeft || IconRight) {
            return 10
        }
        else {
            return 20
        }
    }

    return (
        <Fragment>
            <View style={styles.box}>
                <Text style={styles.titleInput}> {title} </Text>
                <View style={{ ...styles.BoxInput, paddingRight: calculateSizePadding() }}>
                    {IconLeft && IconLeftName && (
                        <TouchableOpacity onPress={OnPressIconLeft}>
                            <IconLeft name={IconLeftName as any} size={20} color="gray" style={styles.Icon} />
                        </TouchableOpacity>
                    )}
                    <TextInput
                        style={{ ...styles.input, width: calculateSizeWidth() }}
                        {...rest}
                    />
                    {IconRight && IconRightName && (
                        <TouchableOpacity onPress={OnPressIconRight}>
                            <IconRight name={IconRightName as any} size={20} color="gray" style={styles.Icon} />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </Fragment >
    )
})