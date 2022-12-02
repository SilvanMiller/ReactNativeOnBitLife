import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function EditHabit({ habit, frequency, habitArea, checkColor }) {
    const navigation = useNavigation();

    function handleEdit(){
        console.log("Clicado no botão de editar hábito")
    };

    function handleCheck(){
        console.log(`botão clicado da area:${habitArea}`)
    };
    return(
        <TouchableOpacity 
            activeOpacity={0.9}
            style={styles.button}
            onPress={handleEdit}>

            <View style={styles.habitText}>
                <Text style={styles.habitTitle}>{habit}</Text>
                <Text style={styles.habitFrequency}>{frequency}</Text>
            </View>

            <TouchableOpacity 
                style={[styles.check, {borderColor: checkColor}]}
                onPress={handleCheck}/>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create ({
    button: {
        backgroundColor:"#151515",
        borderRadius: 5,
        width: 320,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    // habitText: {
    //     fontSize: 30,
    //     fontWeight: "bold",
    //     color: "white",
    //     textAlign: "center",
    //     marginVertical: 40,
    // },
    habitTitle: {
        color: "white",
        fontWeight: "bold",
    },
    habitFrequency: {
        color: "white",
    },
    check: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 10,
    },
});