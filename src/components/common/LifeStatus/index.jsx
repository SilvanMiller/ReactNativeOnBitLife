import React from 'react';
import { View, StyleSheet } from 'react-native';

import LottieView from 'lottie-react-native';

/*Status: 
100 = Máximo,
50 = Médio,
25 = baixo, 
00 - curto(Acabou o game) 
No robó, nós temos primeiro felicidade e depois saúde xx-xx*/

export default function LiveStatus(){
    return(
        <View style={styles.container}>
            <LottieView source={require("../../../assets/education/education-100.json")}
                autoPlay loop style={styles.educacaoAnimacao}/>

            <LottieView source={require("../../../assets/money/money-100.json")}
                autoPlay loop style={styles.financasAnimacao}/>

            <LottieView source={require("../../../assets/robot/robot-100-100.json")}
                autoPlay loop style={styles.roboAnimacao}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 230,
    },
    educacaoAnimacao: {
        width: 100,
        marginTop: 50,
        marginLeft: 5,
        position: "absolute",
    },
    financasAnimacao: {
        width: 100,
        position: "absolute",
        marginTop: 50,
        marginLeft: 95,
    },
    roboAnimacao: {
        width: 190,
        marginTop: 30,
        marginLeft: 25,
    },
});