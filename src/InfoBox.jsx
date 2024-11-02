import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./Infobox.css";

export default function InfoBox({ info }) {
    const startImage = "https://images.unsplash.com/photo-1519863436079-8436f74be632?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL="https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?s=2048x2048&w=is&k=20&c=imXaczN9FcMjasjmjuZGOZraYMBSUy6ga4hoP084lBg=";
    const COLD_URL="https://images.unsplash.com/photo-1564314966935-6c2f60eb32a7?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1529281528138-fbe93b7d25a4?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="infoBox">
            <div className="card">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp >15 ? HOT_URL : COLD_URL}
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}&nbsp;{info.humidity >80 ?<ThunderstormIcon></ThunderstormIcon> : info.temp >15 ? <WbSunnyIcon></WbSunnyIcon> : <AcUnitIcon></AcUnitIcon>}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
                            <p>Temperature: {info.temp}&deg;C</p>
                            <p>Humidity: {info.humidity}%</p>
                            <p>Min-Temp: {info.tempMin}&deg;C</p>
                            <p>Max-Temp: {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <b>{info.description}</b> and feels like {info.feelslike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
