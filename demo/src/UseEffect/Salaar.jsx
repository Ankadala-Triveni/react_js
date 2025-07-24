import {useEffect, useState } from "react";
function Salaar(){
    const [img,setImage] = useState([]);
    const [isRunning,setIsRunning] = useState(true);

    const stopImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDsJJ9iVbmcwu8dlvSiE-06TAekmbtwlCR3A&s';
    const repeatImg ='https://media1.tenor.com/m/aJRliinjGkEAAAAC/prabhas-rebel-star.gif';

    useEffect(()=>{
        let intervalid
        if(isRunning){
            intervalid = setInterval(()=>{
                setImage(img=>[...img,repeatImg]);
            },1000);
        }
        return()=>{
            clearInterval(intervalid)
        };
    },[isRunning]);
    const handleStop = () => {
        setIsRunning(false);
    };
    return(
        <div>
            <img src={stopImg} onClick={handleStop}/>
            <div>
                {img.map((url,index)=>(
                    <img src={url} key={index}/>
                ))}
            </div>
        </div>
    );
}
export default Salaar;