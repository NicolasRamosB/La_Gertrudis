import './Banner.css'
const Banner = () => {
    return (
        <div className="bannerContainer">
            <div className="bannerImage">
                <div className="bannerContent">
                    <span className="bannerTitle">¿Ya hiciste tu reserva?</span>
                    <span className="bannerSubtitle">Veni a descansar a nuestra casa de campo</span>
                    <div className="bannerButtons">

                        <a href="/rooms" className="bannerHabitaciones">Ver habitaciones</a>


                        <a href="#contact" className="bannerReservar">Reservar</a>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;