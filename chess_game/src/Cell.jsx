import './Cell.css';
import Piece from './Piece';

export default function Cell({ isWhite, piece }) {

  return (
    <div className='cell' style={{ backgroundColor: isWhite ? 'var(--primary-color)' : 'var(--secondary-color)' }}>
      {piece}
    </div>
  )
}

