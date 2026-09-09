import React from 'react'
import Demo_events_child from './Demo_events_child';

const Demo_events = () => {

    function ss () {
        document.getElementById("dd").innerHTML="Form Submitted.."
        console.log("Form Submitted..")
    }

    function add(a,b){
        var c = a+b;  
        document.getElementById("ad").innerHTML=`Add Value :${c}`;
    }

    function notification(){
        alert("Hello MERN Developers")
    }

    const courses = ["React.js","Angluar","Vue.js"];
  return (
    <div className='text-light'>
        <h1 id='dd'></h1>
        <button type='submit' onClick={ss}>Submit</button>
        <h1 id='ad'></h1>
        <button type='submit' onClick={() => {add(50,30)}}>Submit</button>
        <Demo_events_child n={notification} courses = {courses} />
    </div>
  )
}

export default Demo_events