import React, { useState } from 'react';

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
            <section className="row mt-4">
                <div className="col-lg-10 mx-auto">
                    <div className="page-header">
                        <h1 id="containers">Question #{number + 1}</h1>
                    </div>
                    <form className="bs-component" onSubmit={handleSubmit}>
                        <div className="jumbotron">
                            <h1 className="display-3">{question.title}</h1>
                            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                {question.answers.map((element, index) => (
                                    <div className="btn btn-primary" key={index}>
                                        <label className="btn btn-primary" htmlFor={index}>
                                            <input type="radio" name="question" id={index} value={index} required onChange={handleInputChange}/> {element}
                                        </label>
                                        <hr className="my-4" />
                                    </div>
                                ))}
                            </div>
                            <p className="lead">
                                <button className="btn btn-primary btn-lg" type="submit">Next</button>
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Question;