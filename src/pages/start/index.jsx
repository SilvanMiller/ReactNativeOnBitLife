import React from 'react';
import { Image, View, Text, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import DefaultButton from '../../components/common/DefaultButton';
import LiveStatus from '../../components/common/LifeStatus';

export default function Start() {
    const navigation = useNavigation();

    const hambleNavAppExplanation = () => {
        navigation.navigate("AppExplanation")
    }
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                <View style={{alignItems: "center"}} >
                    <Image 
                        source={require("../../assets/icons/logo3.png")}
                        style={styles.logo}/>
                    <LiveStatus />
                    <Text style={styles.description}>
                        Vamos Transformar sua vida {"\n"}
                        em um jogo, buscando sempre {"\n"}
                        o melhor nivel.
                    </Text>
                    <DefaultButton
                        buttonText={"Continuar"}
                        handlePress={hambleNavAppExplanation}
                        width={250}
                        height={50}
                    />
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
        
    },
    logo: {
        width: 300,
        height: 60,
        marginTop: 60,
        marginBottom: 20,
    },
    description: {
        color: "#ffffff",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 60,
    },
});