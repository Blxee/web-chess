import './Cell.css';
import Piece from './Piece';

export default function Board({ x }) {
  return (
    <div className='cell' style={{ backgroundColor: x % 2 === 0 ? 'crimson' : 'cyan' }}>
      <Piece type='wawa' />
    </div>
  )
}

