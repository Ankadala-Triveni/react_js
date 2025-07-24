import React from "react";
const hasNotification = true;  
function Shreya(){
     return (
        <div>
            <h2>Dashboard</h2>
            {hasNotification &&<p>you have new Notification</p>}
        </div>
    );
}
export default Shreya