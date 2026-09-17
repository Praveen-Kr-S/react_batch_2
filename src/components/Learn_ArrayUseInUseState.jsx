import React,{useState} from 'react'

const Learn_ArrayUseInUseState = () => {
    const [value,setValue]=useState(["Python","React","Express.js","Django"]);

    function addValueHandler(){
        setValue([...value,"MongoDB"])
    }

  return (
    <div>
        <h1>Array Use In useState</h1>
        {value.map((v,ind) => <h2 key={ind}>{v}</h2>)}
        {/* {value} */}

        <button type='submit' onClick={addValueHandler}>Add Value</button>
    </div>
  )
}

export default Learn_ArrayUseInUseState