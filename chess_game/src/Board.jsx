import Cell from './Cell'
import './Board.css';
import { useEffect, useState } from 'react';
import Piece from './Piece';

export default function Board() {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    let grid = [];

    let [color1, color2] = ['White', 'Black'];
    if (Math.random() > .5)
      [color1, color2] = [color2, color1];

    let isCellEven = true;
    let cellKey = 0;

    function appendToGrid(piece) {
      grid.push(<Cell
        isWhite={isCellEven}
        piece={piece}
        key={cellKey}
      />);

      if (cellKey % 8 !== 7)
        isCellEven = !isCellEven;

      cellKey++;
    }

    ["Rook", "Knight", "Bishop", "Queen", "King", "Bishop", "Knight", "Rook",]
      .forEach(type => appendToGrid(<Piece type={type} color={color1} />));

    for (let i = 0; i < 8; i++)
      appendToGrid(<Piece type="Pawn" color={color1} />);

    for (let i = 0; i < 8 * 4; i++)
      appendToGrid();

    for (let i = 0; i < 8; i++)
      appendToGrid(<Piece type="Pawn" color={color2} />);


    ["Rook", "Knight", "Bishop", "Queen", "King", "Bishop", "Knight", "Rook",]
      .forEach(type => appendToGrid(<Piece type={type} color={color2} />));


    setGrid(grid);
  }, []);

  return (
    <div className='board'>
      {grid}
    </div>
  )
}
