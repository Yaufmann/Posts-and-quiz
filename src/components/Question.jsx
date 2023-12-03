import React from 'react';
import MyButton from "./UI/button/MyButton";
import {NavLink} from "react-router-dom";
import {ABOUT_ROUTER} from "../utils/constants";

const Question = ({question,isCorrect}) => {
    return (
     <>
        <div className="questionContainer">
            <h1 className="question">
                {question.text}
            </h1>
        </div>
        <div className="questContainer">
         {question.options.map(option =>
          <div key={option.id} className="option" onClick={()=>isCorrect(option.isCorrect)}>
             <p className="optionLabel">{option.label}</p>
             <div className="optionValue">
                 <p>{option.text}</p>
             </div>
          </div>

         )}
            <NavLink end={true} to={ABOUT_ROUTER} className="buttonBack">&larr; Back on About</NavLink>
        </div>
     </>
    );
};

export default Question;