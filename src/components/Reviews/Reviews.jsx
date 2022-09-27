import './Reviews.css'
import ReviewItem from '../ReviewItem/ReviewItem';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewItem2 from '../ReviewItem2/ReviewItem2';
const Reviews = () =>{
    return(
        <div className="reviewContainer">
            
            <h3>Lo que nuestros huéspedes dicen de nosotros</h3>
            <div className="reviewList">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={5}
                    navigation={true}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 16,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    1440: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><ReviewItem image="rvimg1.png" name="Victoria Russian" date="Hace 7 meses" comment="Claudia y Daniel, los dueños, son divinos, siempre con muy buena predisposición y personas de gran calidez. Comida casera hecha por el hijo Ramiro que es chef, un 10/10. Gracias por su hospitalidad y la experiencia de un fin de semana en una casa del 1900. Esteban, Andrea y Victoria."/></SwiperSlide>
                    <SwiperSlide><ReviewItem2 image="rvimg2.png" name="Francisca Ottani" date="Hace 11 meses" comment="Casa maravillosa con una inmejorable atención de sus dueños. El lugar en el que está ubicada la casa es lo más, para conocer las bodegas de la zona, y las vistas a la cordillera un sueño."/></SwiperSlide>
                    <SwiperSlide><ReviewItem image="rvimg3.png" name="Gustavo Cordova" date="Hace 4 meses" comment="Hermoso lugar, muy bien atendido, excelente para relajarse y disfrutar en familia"/></SwiperSlide>
                    <SwiperSlide><ReviewItem2 image="rvimg4.png" name="Ivana Daniela Espinosa flores" date="Hace 2 años" comment="Excelente, volvería y recomiendo! Sus dueños son muy amables, siempre bien predispuestos,dan recomendaciones de lugares y rutas. El desayuno bien caserito. La vista desde el parque invita a relajarse y desconectarse. Ojalá los vea pronto"/></SwiperSlide>
                    <SwiperSlide><ReviewItem image="rvimg5.png" name="Marianela Severino" date="Hace 10 meses" comment="Hermoso lugar para descansar, paisajes bellisimos, paz y mucha calidez de los dueños. El desayuno con vista a la cordillera exquisito... Disfrutamos mucho la experiencia... Un lugar para volver."/></SwiperSlide>
                </Swiper>
            </div>
            
            <div className="reviewButtons">
                <a className="rvBtnCont" href="https://www.google.com/search?gs_ssp=eJzj4tZP1zcsKUo2MzUzNGC0UjWosDQzTzZOMTE2Mkg1M080N7QyqEg0SktNMTA1SU4yNLVISrL0kspJVEhPLSopKk3JLFZITixOVEhJBdK5BfkAgB4X-w&q=la+gertrudis+casa+de+campo&rlz=1C1CHBD_esPE858PE858&oq=la+gertrudis+casa+de+&aqs=chrome.1.69i57j46i19i39i175i199j69i59j0i390l2j69i60l2j69i61.3847j0j4&sourceid=chrome&ie=UTF-8#lrd=0x967c3d4320e67a71:0xa2fed054cb158bb9,3,,," target="_blank" rel="noopener noreferrer"> Escribe un comentario</a>
            </div>
        </div>
    )
}
export default Reviews;

/*<Button variant="text" className="rvBtnText">Ver Más</Button>*/
/*<a className="rvBtnCont" href="https://www.google.com/maps/place/La+Gertrudis+Casa+de+Campo/@-33.7081643,-69.0790534,17z/data=!3m1!4b1!4m6!3m5!1s0x967c3d4320e67a71:0xa2fed054cb158bb9!8m2!3d-33.7081643!4d-69.0768647!16s%2Fg%2F1trc6561" target="_blank">Escribe un comentario</a>*/