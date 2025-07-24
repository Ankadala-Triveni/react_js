import { useState } from "react";

function NitishBatting(){
    const [score,setScore] = useState(0);//initial scoire is 0
     
    function hitFour(){
        setScore(score+4); //arjun hit 4

    }

    function hitSix(){
        setScore(score+6); //arjun hit 6
    }

    function resetScore(){
        setScore(0);//reset score to 0
    }

    return(
        <div>
            <h2>Nitish's Score:{score}</h2>
            <button onClick={hitFour}>Hit 4</button>
            <button onClick={hitSix}>Hit 6</button>
            <button onClick={resetScore}>ResetScore</button>
        </div>
    );
}
export default NitishBatting