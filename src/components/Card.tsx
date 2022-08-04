import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native"
import theme from "./theme";

interface CardProps {
    question: string,
    style? : {}
}


const Card = ({ question, style }: CardProps) => {
    const { height, width } = useWindowDimensions();
    const styles = StyleSheet.create({
        card: {
            backgroundColor: '#fff',
            borderRadius: 10,
            height: height * 0.4,
            padding:15,
            justifyContent:'center'
        },
    });

    return (
        <View style={[styles.card,style]}>
            <Text style={theme.textVariants.cardText}>{question}</Text>
        </View>


    );
};

``
export default Card;

