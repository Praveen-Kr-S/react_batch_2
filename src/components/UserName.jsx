import React from 'react'

const UserName = (props) => {
  return (
    <div className='w-25 text-center bg-warning'>
        <h1 className='text-light'>{props.name}</h1>
    </div>
  )
}

export default UserName