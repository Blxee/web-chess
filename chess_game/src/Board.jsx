import Cell from './Cell'
import './Board.css';
import { useState } from 'react';

export default function Board() {
  const grid = useState([0]);

  return (
    <div className='board'>
      {
        [...Array(64).keys()]
          .map(x => Math.floor(x / 8) % 2 === 1 ? ++x : x)
          .map(x => <Cell x={x} key={x} />)
      }
    </div>
  )
}
