import React, { useState, useEffect } from 'react';

const Test = () => {
  const [reaction, setReaction] = useState(null);
  const [memory, setMemory] = useState(null);
  const [verbal, setVerbal] = useState(null);
  const [visual, setVisual] = useState(null);

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        // Filter the desired object based on a condition
        const reaction = data.find(item => item.category === 'Reaction');
        setReaction(reaction);
        const memory = data.find(item => item.category === 'Memory');
        setMemory(memory);
        const verbal = data.find(item => item.category === 'Verbal');
        setVerbal(verbal);
        const visual = data.find(item => item.category === 'visual');
        setVisual(visual);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {reaction ? (
        <div>
          <h2>{reaction.category}</h2>
          <p>Score: {reaction.score}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Test;
