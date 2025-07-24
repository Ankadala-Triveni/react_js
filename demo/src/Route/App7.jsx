import React from "react";
import { Routes,Route } from "react-router-dom";
import Students from "./Students";
import Studentdetails from "./Studentdetails";

function App7(){
    return(
        <div>
            <Routes>
            <Route path='/' element={<Students/>}/>
            <Route path='/student/:id' element={<Studentdetails/>}/>
            </Routes>
        </div>
    )
}
export default App7