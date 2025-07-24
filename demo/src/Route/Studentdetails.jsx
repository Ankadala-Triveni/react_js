import React from "react";
import { useParams } from "react-router-dom";
const studentData={
    '1':{name:'Shreya',age:17,course:'B.tech'},
    '2':{name:'Chandana',age:18,course:'B.E'},
    '3':{name:'Samatha',age:19,course:'B.T'},
    '4':{name:'Naveen',age:21,course:'Degree'},
};

function Studentdetails(){
    const {id} = useParams();
    const student=studentData[id];

    if(!student){
         return<h2> Student Data Not Found </h2>
    }
     return(
        <div>
            <h2>Student Details </h2>
            <p><strong>{student.name}</strong></p>
            <p><strong>{student.age}</strong></p>
            <p><strong>{student.course}</strong></p>
        </div>
     )
}

export default Studentdetails