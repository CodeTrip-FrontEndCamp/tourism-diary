import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'flex-start', // Change alignment to start from the top
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 60, // Add font size here
    },
});

export default () => {

    return(
        <View style={[styles.root, { paddingTop: '30%' }]}>
            <Text style={[styles.text, { textAlign: 'center' }]}>
            Welcome {"\n"}to the {"\n"}Tourism Diary!
            </Text>
        </View>
    );
}
