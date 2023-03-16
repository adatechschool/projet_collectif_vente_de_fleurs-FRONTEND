import React from 'react'

function products (props) {
  return (
    <div className='w-3/4 border-2 flex justify-evenly items-center mt-[30px]'>
        <div className='w-1/3 ml-[200px]'><img src={props.img} alt="fleurs" className='w-[300px] h-[200px]' /></div>
        <div className='w-1/2'>
            <h2>{props.name}</h2>
            <b className='text-[#227c20]'>{props.prix}</b>
            <p>{props.quantity}</p>
        </div>
    </div>
  )
}

export default products