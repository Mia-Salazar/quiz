import React, { useState } from 'react';

import Question from '../components/Question';
import Time from '../components/Time';
import { quizQuestions } from '../utils/quizQuestions';


const Home = () => {
    const [number, setNumber] = useState(1);

  return (
    <main>
        <Time />
        <Question number={number} question={quizQuestions[0]}/>
    </main>
  );
}

export default Home;