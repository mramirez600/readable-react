import React from 'react';

const Stats = ({ voteScore, onUpvote, onDownvote }) => (
  <div className='stats'>
    <div className='stats-item score-stat'>
      <span>{voteScore}</span>
    </div>
    <div className='stats-item'>
      <button onClick={onUpvote}>VOTE UP</button>
    </div>
    
    <div className='stats-item'>
      <button onClick={onDownvote}>VOTE DOWN</button>
    </div>
  </div>
)

export default Stats;