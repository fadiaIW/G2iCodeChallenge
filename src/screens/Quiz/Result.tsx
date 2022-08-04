import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions, ScrollView, FlatList } from 'react-native';
import Title from '../../components/title';
import { theme, QuizButton, Card, Container } from '../../components';
import { AntDesign } from '@expo/vector-icons';

const Result = ({ navigation, route }: any) => {
  const { score, questions } = route.params;
  const { height } = useWindowDimensions();

  const styles = StyleSheet.create({
    scoreValue: {
      fontSize: 32,
      color: '#fff',
      fontWeight: '600',
      lineHeight: 54,
      textAlign: 'center'
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      height: height * 0.65,
      paddingHorizontal: 15,
      justifyContent: 'center',
      marginVertical: 20
    },
    itemView: {
      flexDirection: 'row',
      paddingVertical: 12,
      paddingHorizontal: 10,
      alignContent: 'center'
    },
    itemText: {
      fontSize: 20,
      color: theme.colors.text,
      flex: 1
    },



  });

  return (
    <Container>
      <>
        <View style={{ marginTop: 20 }}>
          <Title titleText='You Scored' />
          <Text style={styles.scoreValue}>{score}/10</Text>
        </View>
        <View style={styles.card}>
          <FlatList
            data={questions}
            renderItem={({ item }) => {
              return (
                <View style={styles.itemView}>
                  {item.selectedAnswer === true ?
                    <>
                      <View style={{ alignSelf: 'center', paddingRight: 10, flex: 0.15 }}>
                        <AntDesign name="checkcircleo" size={40} color={theme.colors.primary} />
                      </View>
                      <Text style={styles.itemText}>{decodeURIComponent(item.question)}</Text>
                    </>
                    :
                    <>
                      <View style={{ alignSelf: 'center', paddingRight: 10, flex: 0.15 }}>
                        <AntDesign name="closecircleo" size={40} color='#E74C3C' />
                      </View>
                      <Text style={styles.itemText}>{decodeURIComponent(item.question)}</Text>
                    </>
                  }
                </View>
              )
            }}
          />

        </View>
        <QuizButton
          style={{ width: '100%', marginTop: 10 }}
          label='PLAY AGAIN?'
          onPress={() => navigation.navigate('Home')}
        />
      </>

    </Container>
  );
};



export default Result;

