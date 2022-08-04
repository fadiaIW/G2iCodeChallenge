import React from "react";
import { StyleSheet, Button, Text, TouchableOpacity } from "react-native"
import theme from "./theme";

interface ButtonProps {
  label: string;
  onPress?: () => void;
  style?:{}
}

const QuizButton = ({ label, onPress, style}: ButtonProps) => {

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
    paddingVertical:18,
    backgroundColor:'#fff',
    alignSelf:'center',
    width: '80%',
    alignItems: "center",
    marginBottom: 15,
 
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
});