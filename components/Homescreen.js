import React, {useState} from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity, View,
} from 'react-native';


const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Tales You Have</Text>
            </View>
            <FlatList
                data={[
                    {key: 'Tale 1'},
                    {key: 'Tale 2'},
                    {key: 'Tale 3'},
                    {key: 'Tale 4'},
                    {key: 'Tale 5'},
                    {key: 'Tale 6'},
                    {key: 'Tale 7'},
                    {key: 'Tale 8'},
                    {key: 'Tale 9'},
                    {key: 'Tale 10'},
                ]}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.item}>
                        <Text style={styles.taleList}>{item.key}</Text>
                    </TouchableOpacity>
                )}></FlatList>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    taleList: {
        fontSize: 24,
        margin: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 3,
    },
});

export default App;