import React from "react";
import { Link }  from "react-router-dom";
const students = [
    {id:'1',name:'shreya'},
    {id:'2',name:'chandana'},
    {id:'3',name:'Samatha'},
    {id:'4',name:'Naveen'},

];

function Students() {
    return(
        <div>
            <h2>Student </h2>
            <ul>
                {students.map(student=>(

                    <li key={student.id}>
                        <Link to={`/student/${student.id}`}>{student.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Students;