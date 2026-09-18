import React, { useState } from 'react'

const Object_UseState = () => {

    const [studentData,setStudentData] = useState({"name":"","dept":""})

  return (
    <div>
        <h1>Object_UseState</h1>
        <h3>{JSON.stringify(studentData)}</h3>
        <button type="submit" className='m-4' onClick={() => {setStudentData({...studentData,name:"Praveen"})}}>Add Name</button>
        <button type="submit" className='m-4' onClick={() => {setStudentData({...studentData,"dept":"Mechanical"})}}>Add Dept</button>
    </div>
  )
}


export default Object_UseState    