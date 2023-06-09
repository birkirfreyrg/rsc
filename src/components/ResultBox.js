import React from "react";
import "../styles/ResultBox.css";
import CalculateResult from "./CalculateResult";

function ResultBox() {
  return (
    <div className="Result-box">
      <div className="Your-result-header">Your Result</div>
      <div className="Result-circle">
        <div className="Result-value">
          <CalculateResult></CalculateResult>
        </div>
        <div className="Result-total-value">of 100</div>
      </div>
      <div className="Great-text">Great</div>
      <div className="Your-score-text">
        You scored higher than 65% of the people who have taken these tests.
      </div>
    </div>
  );
}

export default ResultBox;
