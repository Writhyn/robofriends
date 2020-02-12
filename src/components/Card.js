import React from 'react';

const Card = ({clicksy, name, email}) => {
  return (
    <div className='bg-light-green dib br3 pa2 ma3 grow bw2 shadow-5' onClick={clicksy}>
      <img src={`https://robohash.org/${name}?150x150`} alt=''></img>
      <div className='tc'>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
      
    </div>
  )
}

export default Card;