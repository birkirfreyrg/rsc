
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Box-container'>
          <div className='Result-box'>
            <div className='Your-result-header'>Your Result</div>
            <div className='Result-circle'>
              <div className='Result-value'>76</div>
              <div className='Result-total-value'>of 100</div>
            </div>
            <div className='Great-text'>Great</div>
            <div className='Your-score-text'>You scored higher than 65% of the people who have taken these tests.</div>
          </div>
            
          <div className='Summary-box'></div>
        </div>
      </header>
    </div>
  );
}

export default App;
