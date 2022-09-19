import React from 'react';

const Question = ({number, question}) => {
    return (
        <section className="row mt-4">
            <div className="col-lg-10 mx-auto">
                <div className="page-header">
                    <h1 id="containers">Question #{number}</h1>
                </div>
                <div className="bs-component">
                    <div className="jumbotron">
                        <h1 className="display-3">{question.title}</h1>
                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            {question.answers.map((element, index) => (
                                <>
                                    <label class="btn btn-primary active" for={index}>
                                        <input type="radio" name={index} id={index} value={index} autocomplete="off" /> {element}
                                    </label>
                                    <hr className="my-4" />
                                </>
                            ))}
                        </div>
                        <p className="lead">
                            <button className="btn btn-primary btn-lg">Next</button>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Question;

//This is a useful comment