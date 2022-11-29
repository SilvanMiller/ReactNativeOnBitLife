import React from 'react';
import { Image, View, Text, ScrollView } from 'react-native';


export default function Start(){
    return(
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Image source={require("../../assets/icons/logo3.png")} />
                    <Text>
                        Vamos Transformar sua vida {"\n"}
                        em um jogo, buscando sempre {"\n"}
                        o melhor nivel.
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
};