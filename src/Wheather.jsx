import Searchbox from "./Searchbox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function Weather() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.48,
        temp: 32.05,
        tempMin: 32.05,
        tempMax: 32.05,
        humidity: 25,
        description: "haze"
    });

    let updateInfo=(result)=>{
       setWeatherInfo(result); 
    }

    return (
        <div style={{ textAlign: "center"}}>
            <h1>React-Weather-App</h1>
            <Searchbox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}
