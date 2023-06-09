import React from 'react';
import './App.css';
import ResultBox from './components/ResultBox';
import SummaryBox from './components/SummaryBox';

function App() {
  return (
    <div className='App'>
      <div className='Box-container'>
        <ResultBox />
        <SummaryBox />
      </div>
    </div>
  );
}

export default App;
