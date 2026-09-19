import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Learn_ArrayUseInUseState = () => {

    const navigate = useNavigate();

    const [value,setValue]=useState(["Python","React","Express.js","Django"]);

    function addValueHandler(){
        // setValue("MongoDB")
        // setValue(["MongoDB"])
        setValue([...value,"MongoDB"])
    }

  return (
    <div>
        <h1>Array Use In useState</h1>
        {value.map((v,ind) => <h2 key={ind}>{v}</h2>)}
        {/* {value} */}

        <button type='submit' onClick={addValueHandler}>Add Value</button>

      <br /><br />
        <button className='btn btn-p-5 bg-warning' type='submit' onClick={() => navigate("/object/use/state/")}>Object State</button>
    </div>
  )
}

export default Learn_ArrayUseInUseState