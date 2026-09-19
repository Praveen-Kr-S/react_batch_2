import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Object_UseState = () => {

    const navigate = useNavigate();

    const [studentData,setStudentData] = useState({"name":"","dept":""})

  return (
    <div>
        <h1>Object_UseState</h1>
        <h3>{JSON.stringify(studentData)}</h3>
        <button type="submit" className='m-4' onClick={() => {setStudentData({...studentData,name:"Praveen"})}}>Add Name</button>
        <button type="submit" className='m-4' onClick={() => {setStudentData({...studentData,"dept":"Mechanical"})}}>Add Dept</button>
        <br /><br />
        <button className='btn btn-p-5 bg-warning mx-4' type='submit' onClick={() => navigate("/array/use/state/")}>Array State</button>
        <button className='btn btn-p-5 bg-warning' type='submit' onClick={() => navigate("/form/control/")}>Form Control</button>
    </div>
  )
}


export default Object_UseState    