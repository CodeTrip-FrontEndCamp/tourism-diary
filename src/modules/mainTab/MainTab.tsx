import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

import Home from '../home/Home';
import Profile from '../profile/Profile';
import { launchImageLibrary, ImagePickerResponse } from 'react-native-image-picker';


import icon_tab_publish from '../../assets/icon_tab_publish.png';

export default () => {

    const RedBookTabBar = ({ state, descriptors, navigation }: any) => {
        const { routes, index } = state;

        const onPublishPress = () => {
            launchImageLibrary(
                {
                    mediaType: 'photo',
                    quality: 1,
                    includeBase64: true,
                },
                (res: ImagePickerResponse) => {
                    const { assets } = res;
                    if (!assets?.length) {
                        console.log('选择图片失败');
                        return;
                    }
                    const {
                        uri, width, height, fileName, fileSize, type
                    } = assets[0];
                    console.log(`uri=${uri}, width=${width}, height=${height}`);
                    console.log(`fileName=${fileName}, fileSize=${fileSize}, type=${type}`);
                }
            );
        }

        return (
            <View style={styles.tabBarContainer}>
                {routes.map((route: any, i: number) => {
                    const { options } = descriptors[route.key];
                    const label = options.title;
                    const isFocused = index === i;

                    if (i === 1) {
                        return (
                            <TouchableOpacity
                                key={label}
                                style={styles.tabItem}
                                onPress={onPublishPress}
                            >
                                <Image style={styles.icon_tab_publish} source={icon_tab_publish} />
                            </TouchableOpacity>
                        )
                    }
                    return (
                        <TouchableOpacity
                            key={label}
                            style={styles.tabItem}
                            onPress={() => {
                                navigation.navigate(route.name);
                            }}
                        >
                            <Text style={{
                                fontSize: isFocused ? 18 : 16,
                                color: isFocused ? '#333' : '#999',
                                fontWeight: isFocused ? 'bold' : 'normal'
                            }}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }

    return (
        <View style={styles.root}>
            <BottomTab.Navigator
                /* screenOptions={({ route }) => {
                    return {
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            if (route.name === 'Home') {
                                iconName = focused ? 'home' : 'home-outline';
                            } else if (route.name === 'Profile') {
                                iconName = focused ? 'person' : 'person-outline';
                            }
                            return (
                                <Ionicons
                                    name={iconName || 'help-circle-outline'}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                        // 为整个标签栏增加一些空间以容纳突出的发布按钮
                        tabBarStyle: {
                            height: 60,
                        }
                    };
                }} */
                tabBar={props => <RedBookTabBar {...props} />}
            >
                <BottomTab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: '首页',
                        headerShown: true,
                    }}
                />

                <BottomTab.Screen
                    name="Publish"
                    component={Home}
                    options={{
                        title: '发布',
                        headerShown: true,
                    }}
                />

                < BottomTab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        title: '我的',
                        headerShown: true,
                    }}
                />
            </BottomTab.Navigator >
        </View >
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
    },
    publishButtonContainer: {
        position: 'relative',
        alignItems: 'center',
    },

    publishIcon: {
        color: '#FFFFFF',    // 白色文本
        fontSize: 30,        // 文字大小
        fontWeight: 'bold',  // 加粗
    },
    tabBarContainer: {
        width: '100%',
        height: 52,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    tabItem: {
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon_tab_publish: {
        width: 58,
        height: 42,
        resizeMode: 'contain',
    },
});