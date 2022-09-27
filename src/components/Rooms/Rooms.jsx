import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

import './Rooms.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper';

import { FaWhatsapp } from 'react-icons/fa'

import roomsJson from '../../roomsJson';



const Rooms = () => {
  return (<>
  
  <div className="container__title-rooms">
        <h1 className="title__rooms">Nuestras habitaciones</h1>

    </div>
    <section id="rooms" className="rooms__container">
      
      

      <div className="rooms" >


        {
          roomsJson.map((item) => {
            return (
              <article key={item.id} className="rooms__contain-article" >

                <div className="rooms__contain">



                  <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    effect={"fade"}
                    pagination={{
                      clickable: true,
                    }}

                    

                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: true
                  }}
                    modules={[Autoplay, Pagination, EffectFade]}
                    className="rooms__swiper">

                    <p className="rooms__img-title">{item.imgTitle}</p>

                    <SwiperSlide>
                      <img src={item.img1} alt={item.id} />
                    </SwiperSlide>

                    <SwiperSlide>
                      <img src={item.img2} alt={item.id} />
                    </SwiperSlide >

                    <SwiperSlide>
                      <img src={item.img3} alt={item.id} />
                    </SwiperSlide>

                    <SwiperSlide>
                      <img src={item.img4} alt={item.id} />
                    </SwiperSlide>

                    <SwiperSlide>
                      <img src={item.img5} alt={item.id} />
                    </SwiperSlide>


                  </Swiper>
                  <div className="rooms__container-description">

                    <h1 className="rooms__name">{item.name}</h1>
                    <div className="linear"></div>

                    <div className="rooms__container-icons">
                      <span><img src="../assets/IconsCards/Icon.png" alt="" /> <p>{item.personas}</p></span>
                      <span><img src="../assets/IconsCards/calefaccion.png" alt="" /><p>{item.calefaccion}</p></span>
                      <span><img src="../assets/IconsCards/baño.png" alt="" /><p>{item.baño}</p></span>
                      <span><img src="../assets/IconsCards/ducha.png" alt="" /><p>{item.ducha}</p></span>
                      <span><img src="../assets/IconsCards/ropablanco.png" alt="" /><p>{item.ropa}</p></span>
                      <span><img src="../assets/IconsCards/secador.png" alt="" /><p>{item.secador}</p></span>
                    </div>

                  

                    <a className="button__consultar" href={item.wpp} target="_blank" rel="noopener noreferrer"> <FaWhatsapp /> Consultar</a>
                  </div>

                </div>

              </article>

            )
          })
        }

      </div>

    </section>

  </>
  )
}

export default Rooms