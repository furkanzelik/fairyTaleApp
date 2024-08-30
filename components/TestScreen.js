import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const Test = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Hello World</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,  // Occupies the entire screen
        justifyContent: 'center',  // Centers content vertically
        alignItems: 'center',  // Centers content horizontally
        backgroundColor: '#f5f5f5',  // Light gray background color
    },
    text: {
        fontSize: 24,  // Font size for the text
        color: '#333',  // Dark gray color for the text
    },
});

export default Test;