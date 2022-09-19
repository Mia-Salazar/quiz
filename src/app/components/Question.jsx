import React, { useState } from 'react';

import Container from './Container';
import Radio from './Radio';

const Question = ({number, question, setNumber, setSecond}) => {
    const [input, setInput] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        let newPage = number;
        newPage++;
        setNumber(newPage);
        setSecond(30);
    }
    const handleInputChange = (event) => {
        setInput(event.target.value);
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