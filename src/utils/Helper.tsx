
export const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  export const generateAnswers = (question: string[]) => {
    const options : any[] = [...question.incorrect_answers]
    options.push(question.correct_answer)
    shuffleArray(options);
    return options
  }