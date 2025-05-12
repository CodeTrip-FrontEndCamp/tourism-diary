import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native'

import { StackNavigationProp } from '@react-navigation/stack';

export default () => {

    const [loginType, setLoginType] = useState<'login' | 'register'>('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // 将注册表单的状态移到组件顶层
    const [registerEmail, setRegisterEmail] = useState('');
    const [username, setUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const navigation = useNavigation<StackNavigationProp<any>>();

    const handleBack = () => {
        navigation.goBack();
    };

    const renderBackButton = () => (
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Text style={styles.backButtonText}>返回</Text>
        </TouchableOpacity>
    );

    const renderLogin = () => {
        return (
            <View style={styles.formContainer}>
                <Text style={styles.title}>登录</Text>
                <TextInput
                    style={styles.input}
                    placeholder="邮箱"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="密码"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <Button title="登录" onPress={() => {
                    // Handle login logic here
                    console.log('Login attempt with:', email, password);
                    navigation.replace('HomeTab');
                }} />
                <View style={styles.promptContainer}>
                    <Text style={styles.promptText}>没有账号，请</Text>
                    <TouchableOpacity onPress={() => setLoginType('register')}>
                        <Text style={[styles.promptText, styles.linkText]}>注册</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    const renderRegister = () => {
        return (
            <View style={styles.formContainer}>
                <Text style={styles.title}>注册</Text>
                <TextInput
                    style={styles.input}
                    placeholder="邮箱"
                    value={registerEmail} // 使用顶层 state
                    onChangeText={setRegisterEmail} // 使用顶层 state setter
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="用户名"
                    value={username} // 使用顶层 state
                    onChangeText={setUsername} // 使用顶层 state setter
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="密码"
                    value={registerPassword} // 使用顶层 state
                    // 使用顶层 state setter
                    secureTextEntry
                />
                <Button title="注册" onPress={() => {
                    // Handle registration logic here
                    console.log('Register attempt with:', registerEmail, username, registerPassword);
                    // After successful registration, switch back to login screen
                    setLoginType('login');
                }} />
                <View style={styles.promptContainer}>
                    <Text style={styles.promptText}>已有账号，请</Text>
                    <TouchableOpacity onPress={() => setLoginType('login')}>
                        <Text style={[styles.promptText, styles.linkText]}>登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.root}>
            {renderBackButton()}
            {
                loginType === 'login' ?
                    renderLogin() : renderRegister()
            }
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
        justifyContent: 'center', // Center content vertically
    },
    formContainer: {
        width: '80%',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    promptContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    promptText: {
        fontSize: 16,
        color: 'black',
    },
    linkText: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginLeft: 5,
    },
    backButton: {
        position: 'absolute',
        top: 40, // Adjust as needed, or use Dimensions
        left: 20,
        zIndex: 1,
        paddingHorizontal: 10, // Added padding for better appearance
        paddingVertical: 5,   // Added padding for better appearance
        borderWidth: 1,       // Added border width
        borderColor: 'blue',  // Added border color
        borderRadius: 5,      // Added border radius
    },
    backButtonText: {
        fontSize: 18,
        color: 'blue', // Or your preferred color
    },
});
