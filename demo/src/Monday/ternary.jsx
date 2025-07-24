import React from "react";
const isloggedin = false;  
function Sai(){
     return (
        <div>
            
            {isloggedin ?<h2>welcome back!</h2>:<h2>please login</h2>}
        </div>
    );
}
export default Sai