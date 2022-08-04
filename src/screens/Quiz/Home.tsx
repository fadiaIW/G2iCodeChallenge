
import { CompositeNavigationProp } from "@react-navigation/native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme, QuizButton, Title, Container } from "../../components";
import { HEIGHT } from "../../utils/Helper";
// import * as Font from 'expo-font';
// // import {
// //   useFonts,
// //   Nunito_200ExtraLight,
// //   Nunito_200ExtraLight_Italic,
// //   Nunito_300Light,
// //   Nunito_300Light_Italic,
// //   Nunito_400Regular,
// //   Nunito_400Regular_Italic,
// //   Nunito_600SemiBold,
// //   Nunito_600SemiBold_Italic,
// //   Nunito_700Bold,
// //   Nunito_700Bold_Italic,
// //   Nunito_800ExtraBold,
// //   Nunito_800ExtraBold_Italic,
// //   Nunito_900Black,
// //   Nunito_900Black_Italic,
// // } from '@expo-google-fonts/nunito';



const Home = ({ navigation }: { navigation: any }) => {
  // const [fontsLoaded, setFontsLoaded] = useState(true);

  // let customFonts = {
  //   'Nunito-Medium': require('../../../assets/fonts/Nunito-Medium.ttf'),
  //   'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  // };

  // async function loadFontsAsync() {
  //   await Font.loadAsync(customFonts);
  //   setFontsLoaded(true);
  // }
  
//   useEffect(()=>{
//     loadFontsAsync();
//   })

// if(!fontsLoaded) {
//   return null
// }else{
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
            <Text style={[theme.textVariants.body, { paddingBottom: 20 }]}>You will be presented with 10 True or False questions.</Text>
            <Text style={[theme.textVariants.body, { alignSelf: 'center' }]}>Can you score 100%?</Text>
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
// };

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
