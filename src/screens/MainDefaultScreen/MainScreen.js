import React from 'react'
import { View, Text } from 'react-native';
import CustomHeader from '../../common/components/CustomHeader';

const MainScreen = (props) => {
    return (
        <View>
            <CustomHeader
                title="Today"
                iconLeftName="md-menu"
                leftOnPress={() => props.navigation.toggleDrawer()}
                iconRightName="md-search"
                rightOnPress={() => { console.log("Search Button Pressed") }}
            />
        </View>
    )
}

export default MainScreen
