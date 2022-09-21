import { useState } from 'react';

import initialState from '../utils/initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addNewScore = payload => {
    setState({
      ...state,
      ranking: [...state.ranking, payload],
    });
  }

  return {
    addNewScore,
    state,
  };
};

export default useInitialState;