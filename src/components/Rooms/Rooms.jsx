import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import './Rooms.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

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

                    pagination={{
                      clickable: true,
                    }}

                    modules={[Pagination]}
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
                      <i><img src="" alt="" /> <p>{item.personas}</p></i>
                      <i><img src="" alt="" /><p>{item.baño}</p></i>
                      <i><img src="" alt="" /><p>{item.ropa}</p></i>

                      <i><img src="" alt="" /><p>{item.calefaccion}</p></i>
                      <i><img src="" alt="" /><p>{item.ducha}</p></i>
                      <i><img src="" alt="" /><p>{item.secador}</p></i>
                    </div>

                    <a className="button__consultar" href={item.wpp}> <FaWhatsapp /> Consultar</a>
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