import React from 'react';
import {
    View,
    Text
} from 'react-native';
export default () => {
    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 40,
                color: '#333',
                fontWeight: 'bold'
            }}>页面A</Text>
        </ View>
    );
}