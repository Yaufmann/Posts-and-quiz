import React from 'react';
import '../styles/App.css'
import {useNavigate} from "react-router-dom";
import { QUIZVIWE_ROUTER} from "../utils/constants";
const Card = ({quiz,setQuizes,}) => {
    const navigate = useNavigate()

    return (
        <div className='card' onClick={()=> navigate(QUIZVIWE_ROUTER + `${quiz.id}`)}>
            <img src={quiz.img} alt=""/>
            <div className='cardText'>
                <h2>{quiz.name}</h2>
                <p>{quiz.questions.length}  questions</p>
            </div>
        </div>
    );
};

export default Card;