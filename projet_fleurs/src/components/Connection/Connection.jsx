import React from 'react'
import { Link } from 'react-router-dom';
const Connection = () => {
  return (
    <div>
        
        <h1>Connection page</h1>
        <Link to="/inscription"><button className='border-2'> clickez pour inscrire :) </button></Link>

    </div>
  )
}

export default Connection;