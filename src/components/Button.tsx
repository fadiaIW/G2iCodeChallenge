import React from "react";
import { StyleSheet, Button, Text, TouchableOpacity } from "react-native"
import {
  useFonts,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';

interface ButtonProps {
  label: string;
  onPress?: () => void;
  style?:{};
}

const QuizButton = ({ label, onPress, style}: ButtonProps) => {
  let [fontsLoaded] = useFonts({
    Nunito_700Bold,
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};


export default QuizButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    paddingHorizontal:10,
    paddingVertical:16,
    backgroundColor:'#fff',
    alignSelf:'center',
    width: '80%',
    alignItems: "center",
    marginBottom: 15,
  
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
    fontFamily:'Nunito_700Bold'
  },
});