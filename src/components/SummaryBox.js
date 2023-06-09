
import React from "react";
import "../styles/SummaryBox.css"
import ReactionIcon from "../images/icon-reaction.svg"
import MemoryIcon from "../images/icon-memory.svg"
import VerbalIcon from "../images/icon-verbal.svg"
import VisualIcon from "../images/icon-visual.svg"
import Button from "./Button";

function SummaryBox() {
    return (
      <div className='Summary-component '>
        <div className='Summary-box'>
          <div className='Summary-header'>Summary</div>
          <div className='Summary-result-container-reaction'>
            <img alt="Reaction Icon" src={ReactionIcon} className="Icon-image" /> 
            <p className='Reaction-text'>Reaction</p>
            <div className="score-recieved-container"><p className="Reaction-score-recieved score-total"> &nbsp; / 100</p><p className="Reaction-score-recieved Score-recieved">80</p></div>
          </div>
          <div className='Summary-result-container-memory'>
            <img alt="Memory Icon" src={MemoryIcon} className="Icon-image" /> 
            <p className='Memory-text'>Memory</p>
            <div className="score-recieved-container"><p className="Memory-score-recieved score-total"> &nbsp; / 100</p><p className="Memory-score-recieved Score-recieved">92</p></div>
          </div>
          <div className='Summary-result-container-verbal'>
            <img alt="Verbal Icon" src={VerbalIcon} className="Icon-image" /> 
            <p className='Verbal-text'>Verbal</p>
            <div className="score-recieved-container"><p className="Verbal-score-recieved score-total"> &nbsp; / 100</p><p className="Verbal-score-recieved Score-recieved">61</p></div>
          </div>
          <div className='Summary-result-container-visual'>
            <img alt="Visual Icon" src={VisualIcon} className="Icon-image" /> 
            <p className='Visual-text'>Visual</p>
            <div className="score-recieved-container"><p className="Visual-score-recieved score-total"> &nbsp; / 100</p><p className="Visual-score-recieved Score-recieved">72</p></div>
          </div>
  
          <Button />
        </div>
      </div>
    );
  };

  export default SummaryBox;