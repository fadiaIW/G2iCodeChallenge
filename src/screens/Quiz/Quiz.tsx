import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme, Card, QuizButton, renderLoader, Container } from '../../components';
import { generateAnswers } from '../../utils/Helper';
import { quizAPI } from '../../utils/Constants';
import {
  useFonts,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';

const Quiz = ({ navigation }: { navigation: any }) => {

  const [questions, setQuestions] = useState<[]>();
  const [ques, setQues] = useState<number>(0);
  const [options, setOptions] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<boolean[]>([]);
  const didMount = React.useRef(false);
  let [fontsLoaded] = useFonts({
    Nunito_700Bold,
  });
  
  

  /* API call to get the quiz */
  const getQuiz = async () => {
    setIsLoading(true);
    try {
      fetch(quizAPI)
        .then((response) => response.json())
        .then((json) => {
          setQuestions(json.results);
          setOptions(generateAnswers(json.results[0]));
        })
        .catch((error) => console.error(error))
        .finally(() => {
          setIsLoading(false);
        }
        );
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    getQuiz();
  }, []);

  /* Incrementing the question counter only after the score has been set and selectedAnswers array is updated*/
    useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    getNextQuestion();
  }, [selectedAnswers])


  /* Score calculation and creating a boolean selected answer array  */
  const handleSelectedOption = (option: string) => {
    const tempArray = [...selectedAnswers];
    if (option === questions[ques].correct_answer) {
      setScore(score + 1);
      tempArray.push(true);
      setSelectedAnswers(tempArray);
    }
    else {
      tempArray.push(false)
      setSelectedAnswers(tempArray);
    }
  }

/* Incrementing the question counter and navigation*/
  const getNextQuestion = () => {
    if (ques !== 9) {
      setQues(ques + 1)
      setOptions(generateAnswers(questions[ques + 1]));
    }
    if (ques === 9) {
      questions?.map((question, i) => {
        question.selectedAnswer = selectedAnswers[i];
      });
      handleShowScore();
    }
  }
  const handleShowScore = () => {
    navigation.navigate('Result', {
      score,
      questions
    })
  }
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Container>
      <>
        {isLoading ?
          renderLoader()
          : questions && (
            <View style={styles.parent}>
              <Text style={[theme.textVariants.category, {fontFamily:'Nunito_700Bold',  marginTop: 25 }]}>{decodeURIComponent(questions[ques].category)}</Text>
              <View style={{ flex: 2 }}>
                <Card question={decodeURIComponent(questions[ques].question)} />
                <Text style={[theme.textVariants.category, { fontFamily:'Nunito_700Bold', fontSize: 22 }]}>{ques + 1} of 10</Text>
              </View>
              <View style={styles.options}>

                {options?.map((opt, i) => {               
                  return (
                    <QuizButton
                      style={{ width: '100%', }}
                      label={decodeURIComponent(opt)}
                      onPress={() => handleSelectedOption(opt)}
                    />)
                })}

              </View>
            </View>
          )}
      </>
    </Container>
  );
};

export default Quiz;

const styles = StyleSheet.create({

  options: {
    marginVertical: 16,
    flex: 1,
  },
  category: {
    fontSize: 34,
    paddingTop: 20,
    color: '#fff',
    alignSelf: 'center',
    flex: 0.5,
  },
  parent: {
    height: '100%',
    flex: 1,
    padding: 10
  },
});