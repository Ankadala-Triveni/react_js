import React,{useState,useMemo} from "react";
function Calc(){
    const [number,setNumber]=useState(0);
    const slowSquare =(num)=>{
        console.log(`Calculating square...`);
        let  result = num*num;
        for(let i=0;i<1e8;i++){}
        return result;
    };

    const squared =  useMemo(()=> slowSquare(number),[number]);
    return(
        <div>
            <input
            type="number"
            onChange={(e)=>setNumber(parseInt(e.target.value)||0)}
            placeholder="Enter a number"
            />
            <p>Square:{squared}</p>
        </div>
    );
}
export default Calc