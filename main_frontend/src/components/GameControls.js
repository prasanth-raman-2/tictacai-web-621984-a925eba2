import React from 'react';

const GameControls = ({ onNewGame, onToggleMode, isAIMode }) => {
  return (
    <div className="game-controls">
      <button className="btn btn-primary" onClick={onNewGame}>
        New Game
      </button>
      <button className="btn btn-secondary" onClick={onToggleMode}>
        {isAIMode ? 'Play vs Player' : 'Play vs AI'}
      </button>
    </div>
  );
};

export default GameControls;
