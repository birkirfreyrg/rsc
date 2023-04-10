import React from 'react';
import './App.css';

const SummaryBox = () => {
  return (
    <div className='Summary-component '>
      <div className='Summary-box'>
        <div className='Summary-header'>Summary</div>
      </div>
    </div>
  );
};

const ResultBox = () => {
  return (
        <div className='Result-box'>
          <div className='Your-result-header'>Your Result</div>
          <div className='Result-circle'>
            <div className='Result-value'>76</div>
            <div className='Result-total-value'>of 100</div>
          </div>
          <div className='Great-text'>Great</div>
          <div className='Your-score-text'>You scored higher than 65% of the people who have taken these tests.</div>
  </div>
  );
};

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
