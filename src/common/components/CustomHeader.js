import React from 'react'
import { Header } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';
import color from '../../themes/colors';

const CustomHeader = (props) => {
    return (
        <Header
            placement="left"
            containerStyle={{ backgroundColor: color.PRIMARY_COLOR }}
            leftComponent={
                <Ionicons name={props.iconLeftName} size={32} color={color.WHITE} onPress={props.leftOnPress} />
            }
            centerComponent={{ text: `${props.title}`, style: { color: color.WHITE, fontSize: 20, fontWeight: "bold" } }}
            rightComponent={
                <Ionicons name={props.iconRightName} size={32} color={color.WHITE} onPress={props.rightOnPress} />
            }
        />
    )
}

export default CustomHeader
