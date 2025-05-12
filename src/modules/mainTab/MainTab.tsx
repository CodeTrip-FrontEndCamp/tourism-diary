import React, { useState } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native'
import {
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import * as ImagePicker from 'expo-image-picker'; // 替换 react-native-image-picker
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator'; // 引入压缩图片的库

const BottomTab = createBottomTabNavigator();

import Home from '../home/Home';
import Mine from '../profile/Profile';

import icon_tab_publish from '../../assets/icon_tab_publish.png';

export default () => {
    const [imageUri, setImageUri] = useState<string | null>(null);

    const RedBookTabBar = ({ state, descriptors, navigation }: any) => {
        const { routes, index } = state;

        const compressImage = async (uri: string, quality = 0.2, maxWidth = 640) => {
            try {
                const mainpResult = await manipulateAsync(
                    uri,
                    [
                        { resize: { width: maxWidth } }
                    ],
                    {
                        compress: quality,
                        format: SaveFormat.JPEG,
                    },

                )
                return mainpResult
            } catch (error) {
                console.log(error)
                return null
            }
        }

        const pickImage = async () => {
            try {
                // No permissions request is necessary for launching the image library
                let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ['images', 'videos'],
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                });


                if (!result.canceled) {
                    const compressedImage = await compressImage(result.assets[0].uri)
                    if (compressedImage) {
                        // setImage(compressedImage.uri)
                        // const {fileId, fileUrl} = await uploadFile(ID.unique() , compressedImage)
                        setImageUri(compressedImage.uri) // 只设置 URI
                    }
                }
            } catch (error) {
                console.log(error)
                Alert.alert('图片选择失败')
            }
        };

        const onPublishPress = () => {
            pickImage();
        }

        return (
            <View style={styles.tabBarContainer}>
                {routes.map((route: any, i: number) => {
                    const { options } = descriptors[route.key];
                    const label = options.title;
                    const isFocused = index === i;

                    if (i === 1) {
                        return (
                            <View style={styles.tabItem} key={label}>
                                {/* 发布按钮 */}
                                <TouchableOpacity
                                    style={{
                                        width: 58,
                                        height: 42,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    onPress={onPublishPress}
                                >
                                    <Image style={styles.icon_tab_publish} source={icon_tab_publish} />
                                </TouchableOpacity>
                            </View>
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
                tabBar={props => <RedBookTabBar {...props} />}
            >
                <BottomTab.Screen
                    name='Home'
                    component={Home}
                    options={{
                        title: '首页',
                        headerShown: true,
                    }}
                />

                <BottomTab.Screen
                    name='Publish'
                    component={Home}
                    options={{
                        title: '发布',
                        headerShown: false,
                    }}
                />
                <BottomTab.Screen
                    name='Mine'
                    component={Mine}
                    options={{
                        title: '我',
                        headerShown: true,
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
})