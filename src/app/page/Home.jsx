import React, { useEffect, useState } from 'react';

import Question from '../components/Question';
import Time from '../components/Time';
import { quizQuestions } from '../utils/quizQuestions';


const Home = () => {
    const [order, setOrder] = useState();
    const [number, setNumber] = useState(0);

    const createArray = () => {
        const max = quizQuestions.length;
        let random = [];
        for(let i = 0;i<max ; i++){
            const temp = Math.floor(Math.random()*max);
            if (random.indexOf(temp) === -1){
                random.push(temp);
            } else {
                i--;
            }
        }
        setOrder(random);
    }

    useEffect(() => {
        createArray();
    }, []);

    return (
        <main>
            <Time />
            {order && <Question number={number} question={quizQuestions[order[number]]}/>}
        </main>
    );
}

export default Home;