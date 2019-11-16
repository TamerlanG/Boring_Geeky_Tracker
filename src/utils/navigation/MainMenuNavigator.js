import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationNativeContainer } from '@react-navigation/native';

// Import Screens
import MainScreen from "../../screens/MainDefaultScreen/MainScreen";
import SettingScreen from "../../screens/SettingScreen/SettingScreen";

const Drawer = createDrawerNavigator();

export const MainMenuNavigator = () => {
    return (
        <NavigationNativeContainer>
            <Drawer.Navigator initialRouteName="Airing Today">
                <Drawer.Screen name="Airing Today" component={MainScreen} />
                <Drawer.Screen name="Settings" component={SettingScreen} />
            </Drawer.Navigator>
        </NavigationNativeContainer>
    )
}