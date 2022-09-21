import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from './Container';
import Radio from './Radio';
import AppContext from '../context/AppContext';
import { quizQuestions } from '../utils/quizQuestions';

const Question = ({number, question, setNumber, setSecond, second, setData, data, order }) => {
    const navigate = useNavigate();
    const { addNewScore } = useContext(AppContext);
    const [input, setInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        getNextStep();
    }
    const handleInputChange = (event) => {
        setInput(Number(event.target.value));
    }
    const getNextStep = () => {
        let newScoreUpdate = quizQuestions[order[number]].correct === input ? data.score + second : data.score;
        let newMistakes = quizQuestions[order[number]].correct !== input ? ++data.mistakes : data.mistakes;
        let newSuccess = quizQuestions[order[number]].correct === input ? ++data.success : data.success;
        setData(prevState => ({
            ...prevState,
            mistakes: newMistakes,
            success: newSuccess,
            score: newScoreUpdate,
            answers: [...data.answers, input]
        }));
        setNumber(++number);
        setSecond(30);
        if(number >= 10) {
            addNewScore(data);
            navigate(`/score/${data.id}`);
        }
        //console.log(number, data, 'useffect')
    }

    return (
        <>
            <Container>
                <div className="page-header">
                    <h1 id="containers">Question #{number + 1}</h1>
                </div>
                <form className="bs-component" onSubmit={(event) => handleSubmit(event)}>
                    <div className="jumbotron">
                        <h1 className="display-3">{question.title}</h1>
                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            {question.answers.map((element, index) => (
                                <Radio element={element} index={index} key={index} number={number} handleInputChange={handleInputChange}/>
                            ))}
                        </div>
                        <button className="btn btn-primary btn-lg" type="submit">Next</button>
                    </div>
                </form>
            </Container>
        </>
    );
}

export default Question;