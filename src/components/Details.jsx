import React from 'react'
import './Details.css'

const Details = ({h,p,a,c}) => {
  return (
    <div className='w-75 bg-secondary h-100'>
        <ul className='d-flex justify-content-evenly align-items-center h-100'>
            <li className='h3'>{h}</li>
            <li className='h3'>{p}</li>
            <li className='h3'>{a}</li>
            <li className='h3'>{c}</li>
        </ul>
    </div>
  )
}

export default Details