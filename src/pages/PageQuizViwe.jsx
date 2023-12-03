import React, {useMemo, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import quizes from '../data/quiez.json'
import QuizHeader from "../components/QuizHeader";
import MyButton from "../components/UI/button/MyButton";
import Question from "../components/Question";
import Result from "../components/Result";
import {findAllByDisplayValue} from "@testing-library/react";

const PageQuizViwe = () => {
    const params = useParams();
    const navigate = useNavigate();
    const quizId = parseInt(params.id);
    const quiz = quizes.find(q => q.id === quizId);
    const [curIndex,setCurIndex] = useState(0)
    const [numCorrAnsw,setNumCorrAnsw] = useState(0)
    const [showResults,setShowResults] = useState(false)
    const [bool,setBool] = useState(false)


    const questionStatus = useMemo(() => `${curIndex}/${quiz.questions.length}`,[curIndex,quiz])
    const barPercentage = useMemo(() => `${curIndex/quiz.questions.length * 100}%`,[curIndex,quiz])

    const onOptionSelected = (isCorrect) => {
       if (isCorrect) {
         setNumCorrAnsw(+1)
       }
       if (quiz.questions.length -1 === curIndex) {
         setShowResults(true)
       }
       setCurIndex(curIndex + 1)
    }

    return (
        <div>
            <QuizHeader
                questionStatus={questionStatus}
                barPercentage={barPercentage}
            />
            {!showResults
            ?
            <div>
                <Question
                    question={quiz.questions[curIndex]}
                    isCorrect={onOptionSelected}
                />
            </div>
            :
            <div>
                <Result
                   quizQuestionLength={quiz.questions.length}
                   numberOfCorrectAnswer={numCorrAnsw}
                />
            </div>
            }
        </div>
    );
};

export default PageQuizViwe;