import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../components/Container';
import ScoreList from '../components/ScoreList';
import AppContext from '../context/AppContext';

const FinalScore = () => {
    const { state } = useContext(AppContext);
    const { id } = useParams();
    const score = state.ranking.filter(element => element.id === Number(id));
    return (
        <Container>
            <div className="page-header">
                <h1 id="containers">Final score</h1>
            </div>
            {score.length > 0 && 
                <ScoreList score={score} order={state.ranking[id].order} />
            }
            {(!score || score.length === 0) && 
                (
                    <div className="bs-component">
                        <div className="jumbotron">
                            <p>There is not score for this user</p>
                        </div>
                    </div>
                )
            }

        </Container>
    );
}

export default FinalScore;