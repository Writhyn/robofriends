import React from 'react';

const Card = ({clicksy, name, email}) => {
  return (
    <div id={name} className='bg-light-blue dib br3 pa2 ma3 grow bw2 shadow-5' onClick={clicksy}>
      <img src={`https://robohash.org/${name}floop?150x150`} alt='robut' style={{pointerEvents: 'none'}}></img>
      <div className='tc' style={{pointerEvents: 'none'}}>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
      
    </div>
  )
}

export default Card;