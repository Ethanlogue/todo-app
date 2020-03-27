import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>
                Ethan's To Do APP
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header:{
        height: 100,
        width: 350,
        paddingTop: 70,
    },
    title:{
        color:"white",
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold"
    }
});