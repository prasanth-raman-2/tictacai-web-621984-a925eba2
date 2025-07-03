import React from 'react';

const Board = ({ squares, onSquareClick }) => {
  return (
    <div className="game-board">
      {squares.map((value, index) => (
        <button
          key={index}
          className="board-square"
          onClick={() => onSquareClick(index)}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default Board;
