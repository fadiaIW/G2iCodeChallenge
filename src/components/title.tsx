import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from './theme';


interface TitleProps {
  titleText: string;
}

const Title = ({titleText}: TitleProps) => {

  return (
    <View style={styles.container}>
      <Text style={theme.textVariants.title}>{titleText}</Text>
    </View>
  );
};


export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    color:'#fff',
    fontWeight: '600',
    lineHeight:54,
    textAlign:'center',
    // fontFamily: 'Nunito_600SemiBold',
  },
  container: {
    // justifyContent: 'center',
    alignSelf: 'center',
  },
});