import { useState } from "react";

function ArjunBatting(){
    const [score,setScore] = useState(0);//initial scoire is 0
     
    function hitFour(){
        setScore(score+4);
    }

    function hitSix(){
        setScore(score+6); //arjun hit 6
    }
    function hitOne(){
        setScore(score+1); //arjun hit 6
    }
    function hitZero(){
        setScore(score-1); //arjun hit 6
    }

    function resetScore(){
        setScore(0);//reset score to 0
    }

    return(
        <div>
            <h2>Nitish's Score:{score}</h2>
            <button onClick={hitFour}>Hit 4</button>
            <button onClick={hitSix}>Hit 6</button>
            
            <button onClick={hitOne}>+</button>
            <button onClick={hitZero}>-</button>

            <button onClick={resetScore}>ResetScore</button>
        </div>
    );
}
export default ArjunBatting