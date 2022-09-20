import { useState } from 'react';

import initialState from '../utils/initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const changeQuiz = payload => {
    setState({
      ...state,
      ranking: [...state.ranking, payload],
    });
  }

  return {
    changeQuiz,
    state,
  };
};

export default useInitialState;