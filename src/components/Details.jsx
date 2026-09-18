import React from 'react'
import './Details.css'
import { NavLink } from 'react-router-dom'

const Details = ({h,p,a,c}) => {
  return (
    <div className='w-75 bg-secondary h-100'>
        {/* <ul className='d-flex justify-content-evenly align-items-center h-100'>
            <li className='h3'>{h}</li>
            <li className='h3'>{p}</li>
            <li className='h3'>{a}</li>
            <li className='h3'>{c}</li>
        </ul> */}

        <nav className='bg-secondary h-100'>
          <ul className='d-flex justify-content-evenly align-items-center h-100 fs-3'>
            <li>
                <NavLink to={"/use/effect/"}>{h}</NavLink>
            </li>
            <li>
                <NavLink to={'/object/use/state/'}>{p}</NavLink>
            </li>
            <li>
                <NavLink to={'/array/use/state/'}>{a}</NavLink>
            </li>
            <li>
                <NavLink to={'/form/control/'}>{c}</NavLink>
            </li>
          </ul>
        </nav>

    </div>
  )
}

export default Details