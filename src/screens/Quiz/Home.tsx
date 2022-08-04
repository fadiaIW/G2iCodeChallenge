
import { CompositeNavigationProp } from "@react-navigation/native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme, QuizButton, Title, Container } from "../../components";
import { HEIGHT } from "../../utils/Constants";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_600SemiBold,
} from '@expo-google-fonts/nunito';



const Home = ({ navigation }: { navigation: any }) => {

let [fontsLoaded] = useFonts({
  Nunito_600SemiBold,
});

if (!fontsLoaded) {
  return null;
}
  return (
    <View>
      <StatusBar backgroundColor={theme.colors.primary} />

      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <Image
            source={require('../../../assets/images/quizHome.jpg')}
            style={styles.banner}
            resizeMode="contain"
          />
        </View>
        <View style={styles.contentStyle}>

          <Title titleText={`Welcome to the\nTrivia Challenge!`} />

          <View style={styles.contentView}>
            <Text style={[theme.textVariants.body, { fontFamily: 'Nunito_600SemiBold',paddingBottom: 20 }]}>You will be presented with 10 True or False questions.</Text>
            <Text style={[theme.textVariants.body, { fontFamily: 'Nunito_600SemiBold', alignSelf: 'center' }]}>Can you score 100%?</Text>
          </View>

          <QuizButton
            label={'Begin!'}
            onPress={() => navigation.navigate('Quiz')}
          />

        </View>

      </View>
    </View>
  );
};

export default Home;


const styles = StyleSheet.create({
  banner: {
    height: 250,
    width: 250,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingBottom: 24
  },
  container: {
    paddingTop: 40,
    height: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  contentView: {
    alignSelf: 'center',
    width: '80%'
  },
  contentStyle: {
    backgroundColor: theme.colors.primary,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    justifyContent: 'space-between',
    paddingVertical: 40,
    alignContent: 'center',
    height: HEIGHT * 0.55
  }


});
