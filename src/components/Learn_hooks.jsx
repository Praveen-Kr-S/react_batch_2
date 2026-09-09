import React, { useState } from 'react'

const Learn_hooks = () => {

    // let name = "Aarthi"
    // function ch(){
    //     name = "John"
    //     console.log(name)
    // }

    // useState() -> hook
    // const [varible,function] = useState(value of variable);
    const [name,setName] = useState("Hello Kumar");
    const [qty,setQty] = useState(0);

    function nameChanger () {
        setName("Ram Kumar");
    }

    function QtyIncreaseHandler(){
        setQty(qty+1)
        if(qty >= 10){
            setQty(10);
            return 0;
        }
    }

    function QtyDecreaseHandler(){
        if(qty <= 0){
            setQty(0);
            return 0;
        }
        setQty(qty-1)
    }

  return (
    <div className='pb-5'>
        <h1>React Hooks</h1>
        <h2>Use State</h2>

        {/* <h1>{name}</h1>
        <button type='submit' onClick={ch}>Name Change</button> */}

        <h1>{name}</h1>
        <button type='submit' onClick={() => setName("muthees")}>Change Name</button>
        <button type='submit' onClick={nameChanger}>Name Change</button>
<br /><br />

<div className='d-flex gap-3'>
        <button type='submit' onClick={QtyIncreaseHandler}>+</button>
        <h2>{qty}</h2>
        <button type='submit' onClick={QtyDecreaseHandler}>-</button>
</div>
        

    </div>
  )
}

export default Learn_hooks