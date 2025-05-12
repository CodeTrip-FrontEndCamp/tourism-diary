import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

const BottomTab = createBottomTabNavigator();

import Home from '../home/Home';
import Profile from '../profile/Profile';


export default () => {

    return(
        <View style={styles.root}>
            <BottomTab.Navigator>
                <BottomTab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: '首页',
                    }}
                />
                <BottomTab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        title: '我的',
                    }}
                />
            </BottomTab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
    },
});
