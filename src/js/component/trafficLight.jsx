import React, {useState}from "react";


function TrafficLight (){
    const [glow, setGlow] = useState("red");


    return <div>
        <div className="hanger"></div>
        <div className="lightBox">
            <div className={`red${glow === "red" ? " glow" : ""}`}onClick = {() => setGlow("red")}></div>
            <div className={`yellow${glow === "yellow" ? " glow" : ""}`} onClick = {() => setGlow("yellow")}></div>
            <div className={`green${glow === "green" ? " glow" : ""}`} onClick = {() => setGlow("green")}></div>
        </div>
        
    </div>

};

export default TrafficLight;