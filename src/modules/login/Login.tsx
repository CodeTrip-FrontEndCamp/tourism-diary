import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default () => {

    const [loginType, setLoginType] = useState<'login' | 'register'>('login');

    const renderLogin = () => {
        
    }

    const renderRegister = () => {
        
    }

    return(
        <View style={styles.root}>
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
    },
    text: {
        fontSize: 20,
        color: 'black',
        marginTop: 20,
    },
});
