import React from "react";
import Child from "./child";

function App1(){
    return(
        <div>
            <h1>
                Welcome to React!!
            </h1>
            <Child name="shreya" age={17}/>
        </div>
    );
}
export default App1;
