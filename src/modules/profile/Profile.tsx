import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default () => {

    return(
        <View style={styles.root}>
            <Text style={{
                fontSize: 20,
                color: 'black',
                fontWeight: 'bold',
            }}>我的</Text>
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
