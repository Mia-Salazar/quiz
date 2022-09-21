import React from 'react';

const RankingList = ({list}) => {
    console.log(list)
    return (
        <div className="bs-component">
            <div className="jumbotron">
                <ul className="list-group">
                    {list.map((element, index) => (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                            {element.user}
                            <span className="badge badge-primary badge-pill">{element.score}</span>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    );
}

export default RankingList;