import React, { useState } from 'react';

import Container from './Container';
import Radio from './Radio';
import { quizQuestions } from '../utils/quizQuestions';

const Question = ({number, question, setNumber, setSecond, second, setData, data, order }) => {
    const [input, setInput] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        getScoring();
    }
    const handleInputChange = (event) => {
        setInput(Number(event.target.value));
    }
    const getScoring = () => {
        let score = data.score + second;
        let newMistakes = quizQuestions[order[number]].correct !== input ? ++data.mistakes : data.mistakes;
        let newSuccess = quizQuestions[order[number]].correct === input ? ++data.success : data.success;
        console.log(quizQuestions[order[number]].correct, input, 'inpuuuuuuut')
        console.log(data, newMistakes, newSuccess)
        setData(prevState => ({
            ...prevState,
            mistakes: newMistakes,
            success: newSuccess,
            score: score
        }));
        let newPage = number;
        newPage++;
        setNumber(newPage);
        setSecond(30);
    }

    return (
        <>
            <Container>
                <div className="page-header">
                    <h1 id="containers">Question #{number + 1}</h1>
                </div>
                <form className="bs-component" onSubmit={handleSubmit}>
                    <div className="jumbotron">
                        <h1 className="display-3">{question.title}</h1>
                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            {question.answers.map((element, index) => (
                                <Radio element={element} index={index} key={index} handleInputChange={handleInputChange}/>
                            ))}
                        </div>
                        <p className="lead">
                            <button className="btn btn-primary btn-lg" type="submit">Next</button>
                        </p>
                    </div>
                </form>
            </Container>
        </>
    );
}

export default Question;