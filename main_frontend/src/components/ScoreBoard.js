import React from 'react';

const ScoreBoard = ({ scores }) => {
  return (
    <div className="score-board">
      <div className="score-item">
        <span className="player-label">Player X</span>
        <span className="score-value">{scores.X}</span>
      </div>
      <div className="score-item">
        <span className="player-label">Player O</span>
        <span className="score-value">{scores.O}</span>
      </div>
    </div>
  );
};

export default ScoreBoard;
