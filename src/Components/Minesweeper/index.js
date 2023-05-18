import React, { useState, useEffect } from 'react';
import './index.css';


const BOARD_SIZE = 10;
const NUM_MINES = 10;





const CellState = {
  Hidden: 'hidden',
  Revealed: 'revealed',
  Flagged: 'flagged',
};

const GameStatus = {
  InProgress: 'inProgress',
  Won: 'won',
  Lost: 'lost',
};

const Cell = ({ cell, onClick, onRightClick }) => {
  const handleClick = () => {
    onClick(cell);
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    onRightClick(cell);
  };

  let cellContent = '';
  if (cell.state === CellState.Revealed) {
    if (cell.hasMine) {
      cellContent = '💣';
    } else if (cell.minesAround > 0) {
      cellContent = cell.minesAround;
    }
  } else if (cell.state === CellState.Flagged) {
    cellContent = '🚩';
  }

  return (
    <div
      className={`cell ${cell.state}`}
      onClick={handleClick}
      onContextMenu={handleRightClick}
    >
      {cellContent}
    </div>
  );
};

const Minesweeper = () => {

const [isClicked, setIsClicked] = useState(true);

  const handleClose = () => {
    setIsClicked(!isClicked);

  };

  const [board, setBoard] = useState([]);
  const [gameStatus, setGameStatus] = useState(GameStatus.InProgress);

  useEffect(() => {
    initializeBoard();
  }, []);

  const initializeBoard = () => {
    const newBoard = Array(BOARD_SIZE)
      .fill()
      .map(() =>
        Array(BOARD_SIZE).fill().map(() => ({
          state: CellState.Hidden,
          hasMine: false,
          minesAround: 0,
        }))
      );

    let minesPlaced = 0;
    while (minesPlaced < NUM_MINES) {
      const row = Math.floor(Math.random() * BOARD_SIZE);
      const col = Math.floor(Math.random() * BOARD_SIZE);

      if (!newBoard[row][col].hasMine) {
        newBoard[row][col].hasMine = true;
        minesPlaced++;
      }
    }

    setBoard(newBoard);
    setGameStatus(GameStatus.InProgress);
  };

  const revealCell = (row, col) => {
    const updatedBoard = [...board];
    const cell = updatedBoard[row][col];

    if (cell.state !== CellState.Hidden) {
      return;
    }

    if (cell.hasMine) {
      handleLoss();
      return;
    }

    cell.state = CellState.Revealed;

    if (cell.minesAround === 0) {
      revealNeighbors(row, col, updatedBoard);
    }

    setBoard(updatedBoard);

    if (checkWin()) {
      handleWin();
    }
  };

  const handleLoss = () => {
    setGameStatus(GameStatus.Lost);
  };

  const handleWin = () => {
    setGameStatus(GameStatus.Won);
  };

  const checkWin = () => {
    for (let row = 0; row < BOARD_SIZE; row++) {
      for (let col = 0; col < BOARD_SIZE; col++) {
        const cell = board[row][col];
        if (cell.state !== CellState.Revealed && !cell.hasMine) {
          return false;
        }
      }
    }
    return true;
  };

  const revealNeighbors = (row, col, updatedBoard) => {
    const neighbors = getNeighborCoordinates(row, col);
  
    for (const [neighborRow, neighborCol] of neighbors) {
      const neighborCell = updatedBoard[neighborRow][neighborCol];
  
      if (neighborCell.state === CellState.Hidden) {
        neighborCell.state = CellState.Revealed;
  
        if (neighborCell.minesAround === 0) {
          revealNeighbors(neighborRow, neighborCol, updatedBoard);
        }
      }
    }
  
    setBoard(updatedBoard);
  
    if (checkWin()) {
      handleWin();
    }
  };
  
      
        const getNeighborCoordinates = (row, col) => {
          const coordinates = [];
      
          for (let i = row - 1; i <= row + 1; i++) {
            for (let j = col - 1; j <= col + 1; j++) {
              if (i >= 0 && i < BOARD_SIZE && j >= 0 && j < BOARD_SIZE && (i !== row || j !== col)) {
                coordinates.push([i, j]);
              }
            }
          }
      
          return coordinates;
        };
      
        const handleCellClick = (cell) => {
          if (gameStatus !== GameStatus.InProgress) {
            return;
          }
      
          if (cell.state === CellState.Hidden) {
            revealCell(cell.row, cell.col);
          }
        };
      
        const handleCellRightClick = (cell) => {
          if (gameStatus !== GameStatus.InProgress) {
            return;
          }
      
          if (cell.state === CellState.Hidden) {
            const updatedBoard = [...board];
            updatedBoard[cell.row][cell.col].state = CellState.Flagged;
            setBoard(updatedBoard);
          } else if (cell.state === CellState.Flagged) {
            const updatedBoard = [...board];
            updatedBoard[cell.row][cell.col].state = CellState.Hidden;
            setBoard(updatedBoard);
          }
        };
      
        const renderBoard = () => {
          return board.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, colIndex) => (
                <Cell
                  key={colIndex}
                  cell={cell}
                  onClick={handleCellClick}
                  onRightClick={handleCellRightClick}
                />
              ))}
            </div>
          ));
        };
      
        const renderGameStatus = () => {
          if (gameStatus === GameStatus.InProgress) {
            return <div className="status">Game in progress</div>;
          } else if (gameStatus === GameStatus.Won) {
            return <div className="status won">Congratulations! You won!</div>;
          } else if (gameStatus === GameStatus.Lost) {
            return <div className="status lost">Game over! You lost!</div>;
          }
        };
      
        return (
            <>
            {isClicked &&
          <div className="minesweeper">
            <button className='exitbutton' onClick={() => handleClose()}>X</button>
            <h1>Minesweeper</h1>
            {renderGameStatus()}
            <div className="board">{renderBoard()}</div>
            <button className="reset-button" onClick={initializeBoard}>Reset</button>
          </div>
            }
            </>
        );
      };
      
      export default Minesweeper;
      