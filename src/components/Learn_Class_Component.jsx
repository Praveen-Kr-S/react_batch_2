import React from "react";

class Demo extends React.Component{
    name = "Praveen";
    render(){

        return(
            <div>
                <h1>React Class Based Component....</h1>
                <h2>{this.name}</h2>
            </div>
        )
    }

}

export default Demo;
