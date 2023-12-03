import React from 'react';
import {NavLink} from "react-router-dom";
import {ABOUT_ROUTER} from "../utils/constants";

const Result = ({numberOfCorrectAnswer,quizQuestionLength}) => {
    return (
        <div className="results">
            <p>Your Results...</p>
            <h1>
                {numberOfCorrectAnswer}/{quizQuestionLength}
            </h1>
            <NavLink end={true} className="resul" to={ABOUT_ROUTER}>Go Back</NavLink>
        </div>
    );
};

export default Result;