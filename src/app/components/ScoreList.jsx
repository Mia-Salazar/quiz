import React from 'react';

import { quizQuestions } from '../utils/quizQuestions';

const ScoreList = ({score, order}) => {
    return (
        <div className="bs-component">
            <div className="jumbotron">
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Name:
                        <span className="badge badge-primary badge-pill">{score[0].user}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Mistakes:
                        <span className="badge badge-primary badge-pill">{score[0].mistakes}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Success:
                        <span className="badge badge-primary badge-pill">{score[0].success}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Score:
                        <span className="badge badge-pill badge-success">{score[0].score}</span>
                    </li>
                </ul>
                <h1 className="display-3">Questions answered</h1>
                <ul className="list-group">
                    {score[0]?.answers.map((element, index) => (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                            {index + 1}- {quizQuestions[order[index]].title}
                            <span className="badge badge-primary badge-pill">
                                {quizQuestions[order[index]].answers[element] === "" && ""}
                                {quizQuestions[order[index]].answers[element] !== "" && quizQuestions[order[index]].answers[element]}
                            </span>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    );
}

export default ScoreList;