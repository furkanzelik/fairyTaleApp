import React from 'react';
import {SafeAreaView, Text, StyleSheet, View, TouchableOpacity, Button} from 'react-native';

const Subject = () => {  // Component name matches import
    return (
        <View style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>Create a fairy tale</Text>

            {/* Navigation Bar */}
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.navButtonActive} />
                <TouchableOpacity style={styles.navButton} />
                <TouchableOpacity style={styles.navButton} />
                <TouchableOpacity style={styles.navButton} />
            </View>

            {/* Subject Selection */}
            <Text style={styles.subtitle}>Choose Subject</Text>
            <Text style={styles.instruction}>Please select the subject of the tale</Text>

            {/* Subject Buttons */}
            <View style={styles.grid}>
                <View style={styles.subjectButton} />
                <View style={styles.subjectButton} />
                <View style={styles.subjectButton} />
                <View style={styles.subjectButton} />
                <View style={styles.subjectButton} />
                <View style={styles.subjectButton} />
            </View>

            <Button style={styles.next} title={'Next'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    navButton: {
        width: 50,
        height: 20,
        marginRight: 10,
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
    },
    navButtonActive: {
        width: 100,
        height: 20,
        marginRight: 10,
        backgroundColor: 'green',
        borderRadius: 10,
    },
    subtitle: {
        fontSize: 20,
        textAlign: 'left',
        marginBottom: 10,
    },
    instruction: {
        fontSize: 16,
        textAlign: 'left',
        color: '#707070',
        marginBottom: 20,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    subjectButton: {
        width: 80,
        height: 50,
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
        marginBottom: 10,
    },
    next: {
        width: 50,
        height: 20,
        backgroundColor: 'green',
        borderRadius: 10,
    },
});

export default Subject;