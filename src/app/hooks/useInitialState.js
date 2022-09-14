import { useState } from 'react';

import initialState from '../utils/initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const changeQuiz = payload => {
    setState({
      ...state,
      state: {...state, payload},
    });
  }

  return {
    changeQuiz,
    state,
  };
};

export default useInitialState;