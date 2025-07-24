import React from "react";

function Child2({name,age = 25}){
    return(
        <div>
            <h2>Child Component</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
}

export default Child2;