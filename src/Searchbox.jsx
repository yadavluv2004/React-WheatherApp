import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css";
import { useState } from 'react';

export default function Searchbox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const key = "ada1c0e7dcf51b7d93ffdc63efd1699c";

    const getInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${key}&units=metric`);
            if (!response.ok) throw new Error("City not found");

            let jsonres = await response.json();
            let result = {
                city: city,
                temp: jsonres.main.temp,
                tempMin: jsonres.main.temp_min,
                tempMax: jsonres.main.temp_max,
                humidity: jsonres.main.humidity,
                feelslike: jsonres.main.feels_like,
                description: jsonres.weather[0].description,
            };
            setError(false); // Clear error if fetch is successful
            return result;
        } catch (err) {
            console.error(err);
            setError(true); // Set error state if an error occurs
            return null;
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setCity("");
        
        let info = await getInfo();
        if (info) {
            updateInfo(info);
        }
    };

    return (
        <div className="Searchbox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Enter City"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{color:"red"}}>City not found. Please try again.</p>}
            </form>
        </div>
    );
}
