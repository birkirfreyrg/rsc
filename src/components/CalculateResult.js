import React, { useState, useEffect } from "react";
import "../styles/ResultBox.css";

function CalculateResult() {
  const [reaction, setReaction] = useState(null);
  const [memory, setMemory] = useState(null);
  const [verbal, setVerbal] = useState(null);
  const [visual, setVisual] = useState(null);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        const reaction = data.find((item) => item.category === "Reaction");
        setReaction(reaction);
        const memory = data.find((item) => item.category === "Memory");
        setMemory(memory);
        const verbal = data.find((item) => item.category === "Verbal");
        setVerbal(verbal);
        const visual = data.find((item) => item.category === "Visual");
        setVisual(visual);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const result =
    reaction && memory && verbal && visual
      ? (reaction.score + memory.score + verbal.score + visual.score) / 4
      : null;

  return (
    <div>{result !== null ? <p>{parseInt(result)}</p> : <p>Loading...</p>}</div>
  );
}

export default CalculateResult;
