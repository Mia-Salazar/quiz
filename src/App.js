import './App.scss';
import AppContext from './app/context/AppContext';
import useInitialState from './app/hooks/useInitialState';

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <main className="tui-bg-blue-black main">
      </main>
    </AppContext.Provider>

  );
}

export default App;
