import React, { ReactElement } from "react";
import { StyleSheet, View } from "react-native"
import theme from "./theme";

interface ContainerProps {
    children: ReactElement
}

const Container = ({ children }: ContainerProps) => {

    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

export default Container;
const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
    }
})