import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native"
import { HEIGHT } from "../utils/Constants";
import theme from "./theme";
import {
    useFonts,
    Nunito_600SemiBold,
} from '@expo-google-fonts/nunito';


interface CardProps {
    question: string,
    style?: {}
}


const Card = ({ question, style }: CardProps) => {
    let [fontsLoaded] = useFonts({
        Nunito_600SemiBold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={[styles.card, style]}>
            <Text style={[theme.textVariants.cardText,{fontFamily:'Nunito_600SemiBold'}]}>{question}</Text>
        </View>


    );
};


export default Card;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        height: HEIGHT * 0.4,
        padding: 15,
        justifyContent: 'center'
    },
});

