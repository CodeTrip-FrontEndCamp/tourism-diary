import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react'; // Assuming you'll manage login state here or via context/redux

// Define your stack navigator param list if you have one, otherwise use a generic type
type RootStackParamList = {
    Login: undefined;
    // other routes...
};

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

export default () => {
    const navigation = useNavigation<ProfileScreenNavigationProp>();
    // Placeholder for login status. In a real app, this would come from auth context, Redux, AsyncStorage, etc.
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Default to not logged in

    // Example: Simulate checking login status on component mount
    useEffect(() => {
        // Replace this with your actual login check logic
        const checkLoginStatus = async () => {
            // const userToken = await AsyncStorage.getItem('userToken');
            // setIsLoggedIn(!!userToken);
            // For demonstration, let's toggle it after a delay
            // setTimeout(() => setIsLoggedIn(true), 3000); // Simulate login after 3s
        };
        checkLoginStatus();
    }, []);

    const handleLoginPress = () => {
        navigation.navigate('Login');
    };

    return(
        <View style={styles.root}>
            {!isLoggedIn && (
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleLoginPress}
                >
                    <Text style={styles.loginButtonText}>登录</Text>
                </TouchableOpacity>
            )}
            {/* You can add a logout button or user info here if isLoggedIn is true */}
            {isLoggedIn && (
                <View>
                    <Text style={styles.text}>欢迎回来!</Text>
                    {/* Add a logout button here */}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20, // Added padding for better visibility of title
    },
    text: {
        fontSize: 18, // Adjusted size
        color: 'black',
        marginTop: 20,
    },
    loginButton: {
        marginTop: 30,
        backgroundColor: '#007AFF', // Example blue color
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
