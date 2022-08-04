import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from './theme';
import {
  useFonts,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';



interface TitleProps {
  titleText: string;
}

const Title = ({titleText}: TitleProps) => {

  let [fontsLoaded] = useFonts({
    Nunito_700Bold,
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={[theme.textVariants.title,{fontFamily: 'Nunito_700Bold'}]}>{titleText}</Text>
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
    fontFamily: 'Nunito_700Bold',
  },
  container: {
    alignSelf: 'center',
  },
});