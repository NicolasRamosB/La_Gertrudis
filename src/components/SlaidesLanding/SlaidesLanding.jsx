import React from 'react'

import './slaidesLanding.css'

import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const SlaidesLanding = () => {
    return (
        <>

            <div className="swiper__content">
                <Swiper
                    modules={[Autoplay]}

                    breakpoints={{
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },

                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    }}

                    loop
                    speed={2000}
                    grabCursor
                    freeMode
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: false
                    }} >

                    <SwiperSlide>
                        <img src="/assets/camamatrimonial.jpg" alt="cama1" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/assets/hogar.jpg" alt="hogar" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/assets/camas.jpg" alt="camas" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/assets/baño.jpg" alt="baño" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/assets/pool.jpg" alt="pool" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/assets/merienda.jpg" alt="merienda" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/assets/desayuno.jpg" alt="desayuno" />
                    </SwiperSlide>
                </Swiper>
            </div>

        </>
    )
}

export default SlaidesLanding