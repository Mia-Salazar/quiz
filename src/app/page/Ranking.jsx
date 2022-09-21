import React, { useContext } from 'react';

import Container from '../components/Container';
import RankingList from '../components/RankingList';
import AppContext from '../context/AppContext';

const Ranking = () => {
    const { state } = useContext(AppContext);
    const orderElements = (a, b) => {
        if ( a.score < b.score ){
            return 1;
        }
        if ( a.score > b.score ){
            return -1;
        }
            return 0;
    }
    const rankingOrdered = state.ranking.sort(orderElements);


    return (
        <Container>
            <div className="page-header">
                <h1 id="containers">Ranking</h1>
            </div>
            {rankingOrdered.length > 0 && 
                <RankingList list={rankingOrdered}/>
            }
            {(!rankingOrdered || rankingOrdered.length === 0) && 
                (
                    <div className="bs-component">
                        <div className="jumbotron">
                            <p>There is no ranking available</p>
                        </div>
                    </div>
                )
            }

        </Container>
    );
}

export default Ranking;