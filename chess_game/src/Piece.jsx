import './Piece.css';

const PieceTypes = {
  King: { White: '♔', Black: '♚' },
  Queen: { White: '♕', Black: '♛' },
  Bishop: { White: '♗', Black: '♝' },
  Knight: { White: '♘', Black: '♞' },
  Rook: { White: '♖', Black: '♜' },
  Pawn: { White: '♙', Black: '♟' },
}

export default function Piece({ type, color }) {

  return (
    <div className='piece'>{PieceTypes[type][color]}</div>
  );
}
