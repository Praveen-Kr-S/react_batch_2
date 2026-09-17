import React from 'react'
import react from "../assets/hitach.jpg"
import vite from "../assets/pic1.jpg"
import hero from "../assets/pic2.jpg"

function Demo_events_child (props) {

    const data = [react,vite,hero];


  return (
    <div>
        
        <button type='submit' onClick={props.n}>Alert</button>
        <br />
    
        {
            props.courses.map((course,index) => 
            <div key={index}>
                {course}
            </div>
                )
        }
        
        {
            data.map((dd,index) => 
            <div key={index}>
                <img src={dd} alt="pic" width="200" height="200" />
            </div>
                )
        }
        
        
    </div>
  )
}

export default Demo_events_child