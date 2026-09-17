import React, { useState } from 'react'
export const Learn_ConditionalRendering = () => {

    // 1.conditional statements

    let n = 7;
    let result;
    if(n%2 == 0){
        result = <h2>Number is Even</h2>
    }
    else{
        result = <h2>Number is Odd</h2>
    }

    // Ternary
    // scope variable = (Condition)?expression1:expression2;

    let num = -2;
    let value = (num > 0)?<h1>Positive Number</h1>:<h1>Negative Number</h1>;

    // Short-Circuit Method
    // scope variable = (Condition) && expression1;
    let m = 20;
    n = 11;
    const data = (m>n) && <h1>m is grather than n</h1>;



    // useState
    const [digit,setDigit] = useState(0);
    const [rs,setRs] = useState("")
    function FormHandeler(event){
        event.preventDefault();

        var form_data = digit;
        
        if(form_data%2 == 0){
            // rs = <h2>Number is Even</h2>
            // console.log("Number is Even")
            setRs(digit+" Number is Even");
        }
        else{
            // rs = <h2>Number is Odd</h2>
            // console.log("Number is Odd")
            setRs(digit+" Number is Odd");
        }
    }



  return (
    <div>
        <hr />
        <h1>Conditional Rendering</h1>
        {result}
        {value}
        {data}

        <hr />

        <h1>{rs}</h1>
        <form onSubmit={(event) => FormHandeler(event)}>
            <label htmlFor="Number" className='form-label fs-4'>Enter Numeric Value : </label>
            <input type="number" className='form-control w-25' value={digit} onChange={(event) => {setDigit(event.target.value)}} />
            <button type='submit' className='btn bg-warning text-light mt-3'>Submit</button>
        </form>
    </div>
  )
}
