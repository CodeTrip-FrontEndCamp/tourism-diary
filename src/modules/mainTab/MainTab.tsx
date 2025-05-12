import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTab = createBottomTabNavigator();

import Home from '../home/Home';
import Profile from '../profile/Profile';


export default () => {

    return(
        <View style={styles.root}>
            <BottomTab.Navigator
                screenOptions={({ route }) => {
                    return {
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName;
                            if (route.name === 'Home') {
                                iconName = focused
                                    ? 'home'
                                    : 'home-outline';
                            } else if (route.name === 'Profile') {
                                iconName = focused
                                    ? 'person'
                                    : 'person-outline';
                            }
                            return <Ionicons name={iconName || 'help-circle-outline'} size={size} color={color} />;
                        }
                    }
                }}
            >
                <BottomTab.Screen
                    name='Home'
                    component={Home}
                    options={{
                        title: '首页',
                        headerShown: false,
                    }}
                />
                <BottomTab.Screen
                    name='Profile'
                    component={Profile}
                    options={{
                        title: '我的',
                        headerShown: false,
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
    }
});
