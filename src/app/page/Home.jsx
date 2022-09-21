import React, { useEffect, useState } from 'react';

import Name from '../components/Name';
import Question from '../components/Question';
import Time from '../components/Time';
import useCountdown from '../hooks/useCountdown';
import { quizQuestions } from '../utils/quizQuestions';

const Home = () => {
    const [order, setOrder] = useState();
    const [number, setNumber] = useState(0);
    const {second, setSecond} = useCountdown();
    const [data, setData] = useState({});

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
        setData(prevState => ({
            ...prevState,
            order : random,
        }));
    }

    useEffect(() => {
        createArray();
    }, []);

    return (
        <main> 
            {data.user && number < 10 && <Time second={second} setSecond={setSecond}/>}
            {order && number < 10 && data.user 
            && <Question number={number} question={quizQuestions[order[number]]} setData={setData} order={order} data={data} setNumber={setNumber} setSecond={setSecond} second={second} />}
            {!data.user && <Name setData={setData} setSecond={setSecond}/>}
        </main>
    );
}

export default Home;