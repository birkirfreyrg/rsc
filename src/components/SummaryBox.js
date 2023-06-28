
import React, {useState, useEffect} from 'react';
import "../styles/SummaryBox.css"
import ReactionIcon from "../images/icon-reaction.svg"
import MemoryIcon from "../images/icon-memory.svg"
import VerbalIcon from "../images/icon-verbal.svg"
import VisualIcon from "../images/icon-visual.svg"
import Button from "./Button";

function SummaryBox() {

    const [reaction, setReaction] = useState(null);
    const [memory, setMemory] = useState(null);
    const [verbal, setVerbal] = useState(null);
    const [visual, setVisual] = useState(null);

    useEffect(() => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
        const reaction = data.find(item => item.category === 'Reaction');
        setReaction(reaction);
        const memory = data.find(item => item.category === 'Memory');
        setMemory(memory);
        const verbal = data.find(item => item.category === 'Verbal');
        setVerbal(verbal);
        const visual = data.find(item => item.category === 'Visual');
        setVisual(visual);
        })
        .catch(error => {
        console.error('Error fetching data:', error);
        });
    }, []);

    return (
      <div className='Summary-component '>
        <div className='Summary-box'>
          <div className='Summary-header'>Summary</div>
          <div className='Summary-result-container-reaction'>
            <img alt="Reaction Icon" src={ReactionIcon} className="Icon-image" /> 

            {reaction ? (
                <p className='Reaction-text'>{reaction.category}</p>
                ) : (
                <p className='Reaction-text'>Loading...</p>
            )}

            <div className="score-recieved-container">
                <p className="Reaction-score-recieved score-total"> &nbsp; / 100</p>
            
                {reaction ? (
                    <p className='Reaction-score-recieved Score-recieved'>{reaction.score}</p>
                    ) : (
                    <p className='Reaction-score-recieved Score-recieved'>Loading...</p>
                )}
            </div>
          </div>

          <div className='Summary-result-container-memory'>
            <img alt="Memory Icon" src={MemoryIcon} className="Icon-image" /> 

            {memory ? (
                <p className='Memory-text'>{memory.category}</p>
                ) : (
                <p className='Memory-text'>Loading...</p>
            )}

            <div className="score-recieved-container">
                <p className="Memory-score-recieved score-total"> &nbsp; / 100</p>
                {memory ? (
                    <p className='Memory-score-recieved Score-recieved'>{memory.score}</p>
                    ) : (
                    <p className='Memory-score-recieved Score-recieved'>Loading...</p>
                )}
            </div>
          </div>
          
          <div className='Summary-result-container-verbal'>
            <img alt="Verbal Icon" src={VerbalIcon} className="Icon-image" /> 

            {verbal ? (
                <p className='Verbal-text'>{verbal.category}</p>
                ) : (
                <p className='Verbal-text'>Loading...</p>
            )}

            <div className="score-recieved-container">
                <p className="Verbal-score-recieved score-total"> &nbsp; / 100</p>
                {verbal ? (
                    <p className='Verbal-score-recieved Score-recieved'>{verbal.score}</p>
                    ) : (
                    <p className='Verbal-score-recieved Score-recieved'>Loading...</p>
                )}
            </div>
          </div>
          <div className='Summary-result-container-visual'>
            <img alt="Visual Icon" src={VisualIcon} className="Icon-image" /> 
            
            {visual ? (
                <p className='Visual-text'>{visual.category}</p>
                ) : (
                <p className='Visual-text'>Loading...</p>
            )}
            <div className="score-recieved-container">
                <p className="Visual-score-recieved score-total"> &nbsp; / 100</p>
                {visual ? (
                    <p className='Visual-score-recieved Score-recieved'>{visual.score}</p>
                    ) : (
                    <p className='Visual-score-recieved Score-recieved'>Loading...</p>
                )}
            </div>
          </div>
  
          <Button text="Continue">
          </Button>
        </div>
      </div>
    );
  };

  export default SummaryBox;