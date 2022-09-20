import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import Navbar from './app/components/Navbar';
import AppContext from './app/context/AppContext';
import useInitialState from './app/hooks/useInitialState';
import Home from './app/page/Home';

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>

  );
}

export default App;
