import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Learn_useEffect = () => {

    const [data,setData] = useState(0);
    const [dd,setDd] = useState(10);

    function AddValue(){setData(data+1)}
    function RemoveValue(){setData(data-1)}

    // Act every actions
    useEffect(() => {console.log("Data Changed")})

    // // Act based on dependence
    useEffect(() => {console.log("dd useEffect Performed")},[dd])

    // // Run Only when page is loaded
    useEffect(() => {console.log("Page Realoaded...")},[])


    // useNavigate in react router

    const navigate = useNavigate();

  return (
    <div>
        <h1>Use Effect Hook</h1>
        <div className='d-flex gap-3 m-4'>
            <button type='submit' onClick={AddValue}>+</button>
            <h2>{data}</h2>
            <button type="submit" onClick={RemoveValue}>-</button>
        </div>
        
        <div className='d-flex gap-3 m-4'>
            <button type='submit' onClick={() => {setDd(dd+1)}}>+</button>
            <h2>{dd}</h2>
            <button type="submit" onClick={() => {setDd(dd-1)}}>-</button>
        </div> 


        <div>
            <button className='btn btn-p-5 bg-warning' type='submit' onClick={() => navigate("/form/control/")}>Form Control</button>
        </div> 
    </div>
  )
}

export default Learn_useEffect