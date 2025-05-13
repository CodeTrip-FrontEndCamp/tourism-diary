import React, { useState } from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text,
    Linking,
    TextInput,
    LayoutAnimation,
} from 'react-native'

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { formatPhone, replaceBlank } from '../../utils/StringUtil';
/* import UserStore from '../../stores/UserStore';
import Toast from '../../components/widget/Toast'; */

import icon_logo_main from '../../assets/icon_main_logo.png';
import icon_unselected from '../../assets/icon_unselected.png';
import icon_selected from '../../assets/icon_selected.png';
import  icon_arrow from '../../assets/icon_arrow.png';
import icon_wx_small from '../../assets/icon_wx_small.png';
import icon_triangle from '../../assets/icon_triangle.png';
import icon_eye_open from '../../assets/icon_eye_open.png';
import icon_eye_close from '../../assets/icon_eye_close.png';
import icon_exchange from '../../assets/icon_exchange.png';
import icon_wx from '../../assets/icon_wx.png';
import icon_qq from '../../assets/icon_qq.webp';
import icon_close_modal from '../../assets/icon_close_modal.png';

export default () => {

    const [loginType, setLoginType] = useState<'quick' | 'input'>('quick');
    const [check, setCheck] = useState<boolean>(false);
    const [eyeOpen, setEyeOpen] = useState<boolean>(true);

    const [phone, setPhone] = useState<string>('');
    const [pwd, setPwd] = useState<string>('');

    const navigation = useNavigation<StackNavigationProp<any>>();

    const onLoginPress = async () => {
        const canLogin = phone?.length === 13 && pwd?.length === 6;
        if (!canLogin || !check) {
            return;
        }

       /*  UserStore.requestLogin(replaceBlank(phone), pwd, (success: boolean) => {
            if (success) {
                navigation.replace('MainTab');
            } else {
                Toast.show('登陆失败，请检查用户名和密码');
            }
        }) */
    }

    const renderQuickLogin = () => {
        const styles = StyleSheet.create({
            root: {
                width: '100%',
                height: '100%',
                flexDirection: 'column-reverse',
                alignItems: 'center',
                paddingHorizontal: 56,
            },
            otherLoginButton: {
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 20,
                paddingHorizontal: 10,
                marginBottom: 100,
            },
            otherLoginTxt: {
                fontSize: 16,
                color: '#303080'
            },
            icon_arrow: {
                width: 16,
                height: 16,
                resizeMode: 'contain',
                marginLeft: 6,
                transform: [{ rotate: '180deg', }]
            },
            wxLoginButton: {
                width: '100%',
                height: 56,
                backgroundColor: '#05c160',
                borderRadius: 28,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
            },
            icon_wx: {
                width: 40,
                height: 40,
            },
            wxLoginTxt: {
                fontSize: 18,
                color: 'white',
                marginLeft: 6,
            },
            oneKeyLoginButton: {
                width: '100%',
                height: 56,
                backgroundColor: '#ff2442',
                borderRadius: 28,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginBottom: 20,
            },
            oneKeyLoginTxt: {
                fontSize: 18,
                color: 'white',
                marginLeft: 6,
            },
            logoMain: {
                width: 180,
                height: 95,
                resizeMode: 'contain',
                position: 'absolute',
                top: 170,
            },
        });
        return (
            <View style={styles.root}>
                <View style={allStyles.protocolLayout}>
                    <TouchableOpacity
                        onPress={() => {
                            setCheck(!check);
                        }}
                    >
                        <Image
                            style={allStyles.radioButton}
                            source={check ? icon_selected : icon_unselected}
                        />
                    </TouchableOpacity>
                    <Text style={allStyles.lableTxt}>我已阅读并同意</Text>
                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL('https://www.baidu.com')
                        }}
                    >
                        <Text style={allStyles.protocolTxt}>《用户协议》和《隐私政策》</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.otherLoginButton}
                    onPress={() => {
                        LayoutAnimation.easeInEaseOut();
                        setLoginType('input');
                    }}
                >
                    <Text style={styles.otherLoginTxt}>其它登陆方式</Text>
                    <Image style={styles.icon_arrow} source={icon_arrow} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.wxLoginButton}
                    activeOpacity={0.7}
                >
                    <Image style={styles.icon_wx} source={icon_wx_small} />
                    <Text style={styles.wxLoginTxt}>微信登陆</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.oneKeyLoginButton}
                    activeOpacity={0.7}
                >
                    <Text style={styles.oneKeyLoginTxt}>一键登陆</Text>
                </TouchableOpacity>

                <Image style={styles.logoMain} source={icon_logo_main} />
            </View>
        );
    }

    const renderInputLogin = () => {
        const styles = StyleSheet.create({
            root: {
                width: '100%',
                height: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                paddingHorizontal: 48,
            },
            pwdLogin: {
                fontSize: 28,
                color: '#333',
                fontWeight: 'bold',
                marginTop: 56,
            },
            tip: {
                fontSize: 14,
                color: '#bbb',
                marginTop: 6,
            },
            phoneLayout: {
                width: '100%',
                height: 60,
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#ddd',
                marginTop: 28,
            },
            pre86: {
                fontSize: 24,
                color: '#bbb',
            },
            triangle: {
                width: 12,
                height: 6,
                marginLeft: 6,
            },
            phoneInput: {
                flex: 1,
                height: 60,
                backgroundColor: 'transparent',
                textAlign: 'left',
                textAlignVertical: 'center',
                fontSize: 24,
                color: '#333',
                marginLeft: 16,
            },
            pwdLayout: {
                width: '100%',
                height: 60,
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#ddd',
                marginTop: 8,
            },
            pwdInput: {
                marginLeft: 0,
                marginRight:16,
            },
            iconEye: {
                width: 30,
                height: 30,
            },
            changeLayout: {
                width: '100%',
                marginTop: 10,
                alignItems: 'center',
                flexDirection: 'row',
            },
            exchangeIcon: {
                width: 16,
                height: 16,
            },
            codeLoginTxt: {
                fontSize: 14,
                color: '#303080',
                flex: 1,
                marginLeft: 4,
            },
            forgetPwdTxt: {
                fontSize: 14,
                color: '#303080',
            },
            loginButton: {
                width: '100%',
                height: 56,
                backgroundColor: '#ff2442',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 28,
                marginTop: 20,
            },
            loginButtonDisable: {
                width: '100%',
                height: 56,
                backgroundColor: '#DDDDDD',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 28,
                marginTop: 20,
            },
            loginTxt: {
                fontSize: 20,
                color: 'white',
            },
            wxqqLayout: {
                width: '100%',
                flexDirection: 'row',
                marginTop: 54,
                justifyContent: 'center',
            },
            iconWx: {
                width: 50,
                height: 50,
                marginRight: 60,
            },
            iconQQ: {
                width: 50,
                height: 50,
                marginLeft: 60,
            },
            closeButton: {
                position: 'absolute',
                left: 36,
                top: 24,
            },
            closeImg: {
                width: 28,
                height: 28,
            },
        })
        const canLogin = phone?.length === 13 && pwd?.length === 6;
        return (
            <View style={styles.root}>
                <Text style={styles.pwdLogin}>密码登陆</Text>
                <Text style={styles.tip}>
                    未注册的手机号登陆成功后将自动注册
                </Text>
                <View style={styles.phoneLayout}>
                    <Text style={styles.pre86}>+86</Text>
                    <Image style={styles.triangle} source={icon_triangle} />
                    <TextInput
                        style={styles.phoneInput}
                        placeholderTextColor="#bbb"
                        placeholder='请输入手机号码'
                        autoFocus={false}
                        keyboardType='number-pad'
                        maxLength={13}
                        value={phone}
                        onChangeText={(text: string) => {
                            setPhone(formatPhone(text));
                        }}
                    />
                </View>

                <View style={styles.pwdLayout}>
                    <TextInput
                        style={[styles.phoneInput, styles.pwdInput]}
                        placeholderTextColor="#bbb"
                        placeholder='输入密码'
                        autoFocus={false}
                        keyboardType='number-pad'
                        maxLength={6}
                        secureTextEntry={!eyeOpen}
                        value={pwd}
                        onChangeText={(text: string) => {
                            setPwd(text);
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            setEyeOpen(!eyeOpen)
                        }}
                    >
                        <Image
                            style={styles.iconEye}
                            source={eyeOpen ? icon_eye_open : icon_eye_close}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.changeLayout}>
                    <Image style={styles.exchangeIcon} source={icon_exchange} />
                    <Text style={styles.codeLoginTxt}>验证码登陆</Text>
                    <Text style={styles.forgetPwdTxt}>忘记密码？</Text>
                </View>

                <TouchableOpacity
                    activeOpacity={canLogin ? 0.7 : 1}
                    style={canLogin ? styles.loginButton : styles.loginButtonDisable}
                    onPress={onLoginPress}
                >
                    <Text style={styles.loginTxt}>登陆</Text>
                </TouchableOpacity>

                <View style={allStyles.protocolLayout}>
                    <TouchableOpacity
                        onPress={() => {
                            setCheck(!check);
                        }}
                    >
                        <Image
                            style={allStyles.radioButton}
                            source={check ? icon_selected : icon_unselected}
                        />
                    </TouchableOpacity>
                    <Text style={allStyles.lableTxt}>我已阅读并同意</Text>
                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL('https://www.baidu.com')
                        }}
                    >
                        <Text style={allStyles.protocolTxt}>《用户协议》和《隐私政策》</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.wxqqLayout}>
                    <Image style={styles.iconWx} source={icon_wx} />
                    <Image style={styles.iconQQ} source={icon_qq} />
                </View>

                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => {
                        LayoutAnimation.easeInEaseOut();
                        setLoginType('quick')
                    }}
                >
                    <Image style={styles.closeImg} source={icon_close_modal} />
                </TouchableOpacity>
            </View>
        );
    }

    return(
        <View style={allStyles.root}>
            {
                loginType === 'quick' ?
                renderQuickLogin() : renderInputLogin()
            }
        </View>
    );
}

const allStyles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
    },
    protocolLayout: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 12,
    },
    radioButton: {
        width: 20,
        height: 20,
    },
    lableTxt: {
        fontSize: 12,
        color: '#999',
        marginLeft: 6,
    },
    protocolTxt: {
        fontSize: 12,
        color: '#1020ff',
    },
});


/* import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native'

import { get } from '../../utils/request';

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

    const onLoginPress = async() => {
        
            // Handle login logic here
            console.log('Login attempt with:', email, password);
            navigation.replace('HomeTab');
        
    }

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
                <Button title="登录" onPress={onLoginPress} />
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
 */