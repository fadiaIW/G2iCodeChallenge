import React, { Component } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import theme from "./theme";

const renderLoader = () => {
  return (
    <View style={styles.background} >
        <ActivityIndicator animating={true} size='small' color={'#fff'} />
    </View>
  );
};



const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:theme.colors.primary,
    opacity: 1,
    zIndex: 10,
  },
});

export default renderLoader ;
