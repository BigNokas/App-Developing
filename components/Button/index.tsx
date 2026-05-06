import React from "react";

import { ActivityIndicator, Text, TouchableHighlightProps, TouchableOpacity, View } from "react-native";

import { style } from "./style";

type Props = TouchableHighlightProps & {
    text: string,
    loading?: boolean
}

export function Button({ ...rest }: Props) {
    return (
        <View style={style.box}>
            <TouchableOpacity
                style={style.Button}
                {...rest}
                activeOpacity={0.7}
            >
                {rest.loading ? <ActivityIndicator /> : <Text style={style.ButtonText}> {rest.text} </Text>}

            </TouchableOpacity>
        </View>
    )
}

