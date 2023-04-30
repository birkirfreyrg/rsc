import React from 'react';
import './App.css';
import ReactionIcon from "./images/icon-reaction.svg"
import MemoryIcon from "./images/icon-memory.svg"
import VerbalIcon from "./images/icon-verbal.svg"
import VisualIcon from "./images/icon-visual.svg"

const SummaryBox = () => {
  return (
    <div className='Summary-component '>
      <div className='Summary-box'>
        <div className='Summary-header'>Summary</div>
        <div className='Summary-result-container1'>
          <img alt="Reaction Icon image" src={ReactionIcon} className="Icon-image" /> 
          <div className='Reaction-text'>Reaction</div>
        </div>
        <div className='Summary-result-container2'>
          <img alt="Memory Icon image" src={MemoryIcon} className="Icon-image" /> 
          <div className='Reaction-text'>Reaction</div>
        </div>
        <div className='Summary-result-container3'>
          <img alt="Verbal Icon image" src={VerbalIcon} className="Icon-image" /> 
          <div className='Reaction-text'>Reaction</div>
        </div>
        <div className='Summary-result-container4'>
          <img alt="Visual Icon image" src={VisualIcon} className="Icon-image" /> 
          <div className='Reaction-text'>Reaction</div>
        </div>

        <div className='Summary-button-container'>
          <button className='Summary-button' >Continue</button>
        </div>
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
