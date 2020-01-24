import React from 'react';
import './UserOutput.css';

const userOutput = props => {
  return (
    <div className='UserOutput'>
      <p className='title'>{props.username}</p>
      <p className='message'>{props.message}</p>
    </div>
  );
};

export default userOutput;
