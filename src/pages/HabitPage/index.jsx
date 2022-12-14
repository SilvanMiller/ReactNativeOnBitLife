import React, { useState, useEffect, useRef, setFrequencyInput} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, TouchableOpacity, ScrollView, Image, Alert, Text } from 'react-native';

import SelectHabit from '../../components/habitPage/SelectHabit';
import SelectFrequency from '../../components/habitPage/SelectFrequency';
import Notification from '../../components/habitPage/Notification';

export default function HabitPage({ route }) {
    const navigation = useNavigation();
    const [habitInput, setHabitInput] = useState();
    const [frequencyInput, setFrequencyInput] = useState();
    const [notificationToggle, setNotificationToggle] = useState();
    const { create, habit } = route.params

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <TouchableOpacity
                        style={styles.backPageBtn}
                        onPress={() => navigation.goBack()}>
                        <Image
                            source={require("../../assets/icons/arrowBack.png")}
                            style={styles.arrowBack} />
                    </TouchableOpacity>
                    <View style={styles.mainContent}>
                        <Text style={styles.title}>Configurações{"\n"}de hábitos</Text>
                        <Text style={styles.inputText}>Área</Text>

                        <View style={styles.inputContainer}>
                            <Text style={styles.area}>{habit?.habitArea}</Text>
                        </View>

                        <Text style={styles.inputText}>Hábito</Text>
                        <SelectHabit habit={habit} habitInput={setHabitInput} />

                        <Text style={styles.inputText}>Frequência</Text>
                        <SelectFrequency 
                            habitFrequency={habit?.habitFrequency} 
                            frequencyInput={setFrequencyInput} />

                        {/* {frequencyInput === "Mensal" ? null : ( )}; */}
                            <Notification 
                            notificationToggle={notificationToggle}
                            setNotificationToggle={setNotificationToggle} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },
    backPageBtn: {
        width: 40,
        height: 40,
        margin: 25,
    },
    arrowBack: {
        width: 40,
        height: 40,
    },
    mainContent: {
        width: 250,
        alignSelf: "center",
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        fontSize: 30,
    },
    inputText: {
        color: "white",
        fontSize: 16,
        marginTop: 35,
        marginBottom: 10,
        marginLeft: 5,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: "#BBBBBB",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    area: {
        color: "#BBBBBB",
        fontSize: 15,
    },
})