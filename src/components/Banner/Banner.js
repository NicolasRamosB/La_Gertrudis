import { Button } from "@mui/material"
import './Banner.css'
const Banner = () =>{
    return(
        <div className="bannerContainer">
            <div className="bannerImage">
                <div className="bannerContent"> 
                    <span className="bannerTitle">¿Ya hiciste tu reserva?</span>
                    <span className="bannerSubtitle">Veni a descansar a nuestra casa de campo</span>
                    <div className="bannerButtons">
                        <Button variant="outlined" className="bannerHabitaciones">Ver habitaciones</Button>
                        <Button variant="contained" className="bannerReservar">Reservar</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;