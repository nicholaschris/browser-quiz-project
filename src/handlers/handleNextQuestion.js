'use strict';

import showCurrentQuestion from "./showCurrentQuestion.js";
import { quizData } from '../data.js';

const handleNextQuestion = () => {
    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

    showCurrentQuestion();
}

export default handleNextQuestion;