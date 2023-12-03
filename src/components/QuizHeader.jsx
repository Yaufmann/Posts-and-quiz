import React from 'react';

const QuizHeader = ({questionStatus,barPercentage}) => {
    return (
        <header className="headers">
            <h4>Question: {questionStatus}</h4>
            <div className="bar">
                <div className="completion" style={{width: barPercentage}}></div>
            </div>
        </header>
    );
};

export default QuizHeader;