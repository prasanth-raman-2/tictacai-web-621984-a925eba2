import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
import GameControls from './components/GameControls';
import ScoreBoard from './components/ScoreBoard';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [isAIMode, setIsAIMode] = useState(false);
  const [scores, setScores] = useState({ X: 0, O: 0 });

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);

    const winner = calculateWinner(newBoard);
    if (winner) {
      setScores(prev => ({
        ...prev,
        [winner]: prev[winner] + 1
      }));
    } else if (!newBoard.includes(null)) {
      // Draw game
      return;
    }

    setIsXNext(!isXNext);

    // AI move
    if (isAIMode && !isXNext && !winner) {
      setTimeout(() => {
        const emptySquares = newBoard
          .map((square, idx) => square === null ? idx : null)
          .filter(idx => idx !== null);
        
        if (emptySquares.length > 0) {
          const aiMove = emptySquares[Math.floor(Math.random() * emptySquares.length)];
          const aiBoard = [...newBoard];
          aiBoard[aiMove] = 'O';
          setBoard(aiBoard);
          
          const aiWinner = calculateWinner(aiBoard);
          if (aiWinner) {
            setScores(prev => ({
              ...prev,
              [aiWinner]: prev[aiWinner] + 1
            }));
          }
          
          setIsXNext(true);
        }
      }, 500);
    }
  };

  const handleNewGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const handleToggleMode = () => {
    setIsAIMode(!isAIMode);
    handleNewGame();
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : board.every(square => square)
    ? "It's a draw!"
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="app">
      <div className="game-container">
        <h1 className="game-title">Tic Tac Toe</h1>
        
        <ScoreBoard scores={scores} />
        
        <div className="status">{status}</div>
        
        <Board 
          squares={board}
          onSquareClick={handleClick}
        />
        
        <GameControls
          onNewGame={handleNewGame}
          onToggleMode={handleToggleMode}
          isAIMode={isAIMode}
        />
      </div>
    </div>
  );
}

export default App;
