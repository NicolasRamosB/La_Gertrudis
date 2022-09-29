import './Reviews.css'
import ReviewItem from '../ReviewItem/ReviewItem';
import {  Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewItem2 from '../ReviewItem2/ReviewItem2';

import { useTranslation } from 'react-i18next'

const Reviews = () =>{
  const [t, i18n] = useTranslation("global");

    return(
        <div className="reviewContainer">
            
            <h3>{t("reviews.title")}</h3>
            <div className="reviewList">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={5}
                    navigation={true}
                    
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
                    modules={[ Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><ReviewItem image="rvimg1.png" name="Victoria Russian" date={t("reviews.review1.date")} comment={t("reviews.review1.comment")}/></SwiperSlide>
                    <SwiperSlide><ReviewItem2 image="rvimg2.png" name="Francisca Ottani" date={t("reviews.review2.date")} comment={t("reviews.review2.comment")}/></SwiperSlide>
                    <SwiperSlide><ReviewItem image="rvimg3.png" name="Gustavo Cordova" date={t("reviews.review3.date")} comment={t("reviews.review3.comment")}/></SwiperSlide>
                    <SwiperSlide><ReviewItem2 image="rvimg4.png" name="Ivana Daniela Espinosa flores" date={t("reviews.review4.date")} comment={t("reviews.review4.comment")}/></SwiperSlide>
                    <SwiperSlide><ReviewItem image="rvimg5.png" name="Marianela Severino" date={t("reviews.review5.date")} comment={t("reviews.review5.comment")}/></SwiperSlide>
                </Swiper>
            </div>
            
            <div className="reviewButtons">
                <a className="rvBtnCont" href="https://www.google.com/search?gs_ssp=eJzj4tZP1zcsKUo2MzUzNGC0UjWosDQzTzZOMTE2Mkg1M080N7QyqEg0SktNMTA1SU4yNLVISrL0kspJVEhPLSopKk3JLFZITixOVEhJBdK5BfkAgB4X-w&q=la+gertrudis+casa+de+campo&rlz=1C1CHBD_esPE858PE858&oq=la+gertrudis+casa+de+&aqs=chrome.1.69i57j46i19i39i175i199j69i59j0i390l2j69i60l2j69i61.3847j0j4&sourceid=chrome&ie=UTF-8#lrd=0x967c3d4320e67a71:0xa2fed054cb158bb9,3,,," target="_blank" rel="noopener noreferrer"> {t("reviews.btnWrite")}</a>
            </div>
        </div>
    )
}
export default Reviews;

/*<Button variant="text" className="rvBtnText">Ver Más</Button>*/
/*<a className="rvBtnCont" href="https://www.google.com/maps/place/La+Gertrudis+Casa+de+Campo/@-33.7081643,-69.0790534,17z/data=!3m1!4b1!4m6!3m5!1s0x967c3d4320e67a71:0xa2fed054cb158bb9!8m2!3d-33.7081643!4d-69.0768647!16s%2Fg%2F1trc6561" target="_blank">Escribe un comentario</a>*/