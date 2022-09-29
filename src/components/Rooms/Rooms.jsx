import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

import './Rooms.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper';

import { FaWhatsapp } from 'react-icons/fa'

import { useTranslation } from 'react-i18next'


import AOS from 'aos';
import 'aos/dist/aos.css';


const Rooms = () => {
  AOS.init();
  
  const [t, i18n] = useTranslation("global");

  const roomsJson = [
    {
        id:1,

        name: t("rooms.titleRooms.magnolia"),
        imgTitle: t("rooms.roomsSubTitle.matri") ,

        img1:'../assets/Magnolia/_JAP2452.jpg',
        img2:'../assets/Magnolia/_JAP2454.jpg',
        img3:'../assets/Magnolia/_JAP2455.jpg',
        img4:'../assets/Magnolia/_JAP2457.jpg',
        img5:'../assets/Magnolia/_JAP2460.jpg',

        personas:t("rooms.person"),
        baño:t("rooms.bath.private"),
        ropa:t("rooms.towels"),

        calefaccion:t("rooms.heating"),
        ducha:t("rooms.shower.simple"),
        secador:t("rooms.dryer"),

        wpp:'https://wa.me/5492622576877?text=Hola!%20Quisiera%20consultar%20Precio%20y%20Disponibilidad%20sobre%20la%20Habitación%20Magnolia'
    },



    {
        id:2,
        name: t("rooms.titleRooms.laurel"),
        imgTitle:t("rooms.roomsSubTitle.quad"),

        img1:'../assets/Laurel/_JAP2434.jpg',
        img2:'../assets/Laurel/_JAP2438.jpg',
        img3:'../assets/Laurel/_JAP2439.jpg',
        img4:'../assets/Laurel/_JAP2461.jpg',
        img5:'../assets/Laurel/_JAP2462.jpg',
        
        personas:t("rooms.person4"),
        baño:t("rooms.bath.shared"),
        ropa:t("rooms.towels"),

        calefaccion:t("rooms.heating"),
        ducha:t("rooms.shower.simple"),
        secador:t("rooms.dryer"),

        wpp:'https://wa.me/5492622576877?text=Hola!%20Quisiera%20consultar%20Precio%20y%20Disponibilidad%20sobre%20la%20Habitación%20Laurel'

    },



    {
        id:3,

        name: t("rooms.titleRooms.tilo"),
        imgTitle:t("rooms.roomsSubTitle.matri"),

        img1:'../assets/Tilo/_JAP2441.jpg',
        img3:'../assets/Tilo/_JAP2445.jpg',
        img2:'../assets/Tilo/_JAP2446.jpg',
        img4:'../assets/Tilo/_JAP2448.jpg',
        img5:'../assets/Tilo/_JAP2462.jpg',
        
        personas:t("rooms.person"),
        baño:t("rooms.bath.shared"),
        ropa:t("rooms.towels"),

        calefaccion:t("rooms.heating"),
        ducha:t("rooms.shower.simple"),
        secador:t("rooms.dryer"),

        wpp:'https://wa.me/5492622576877?text=Hola!%20Quisiera%20consultar%20Precio%20y%20Disponibilidad%20sobre%20la%20Habitación%20Tilo'

    },


    {
        id:4,
        name: t("rooms.titleRooms.glicina"),
        imgTitle:t("rooms.roomsSubTitle.matri"),

        img1:'../assets/Glicia/image1.jpg',
        img2:'../assets/Glicia/image2.jpg',
        img3:'../assets/Glicia/image3.jpg',
        img4:'../assets/Glicia/image4.jpg',
        img5:'../assets/Glicia/image5.jpg',
        
        personas:t("rooms.person"),
        baño:t("rooms.bath.private"),
        ropa:t("rooms.towels"),

        calefaccion:t("rooms.heating"),
        ducha:t("rooms.shower.hydro"),
        secador:t("rooms.dryer"),

        wpp:'https://wa.me/5492622576877?text=Hola!%20Quisiera%20consultar%20Precio%20y%20Disponibilidad%20sobre%20la%20Habitación%20Glicia'

    },



    {
        id:5,
        name: t("rooms.titleRooms.granada"),

        imgTitle:t("rooms.roomsSubTitle.matri"),

        img1:'../assets/Granada/_JAP2481.jpg',
        img2:'../assets/Granada/_JAP2470.jpg',
        img3:'../assets/Granada/_JAP2471.jpg',
        img4:'../assets/Granada/_EGR1744.jpg',
        img5:'../assets/Granada/image37.png',
        
        personas:t("rooms.person"),
        baño:t("rooms.bath.private"),
        ropa:t("rooms.towels"),

        calefaccion:t("rooms.heating"),
        ducha:t("rooms.shower.hydro"),
        secador:t("rooms.dryer"),

        wpp:'https://wa.me/5492622576877?text=Hola!%20Quisiera%20consultar%20Precio%20y%20Disponibilidad%20sobre%20la%20Habitación%20Granada'


    }
    
];

  return (<>
  
  <div className="container__title-rooms" data-aos="fade-right">
        <h1 className="title__rooms">{t("rooms.title")}</h1>

    </div>
    <section id="rooms" className="rooms__container">
      
      

      <div className="rooms" >


        {
          roomsJson.map((item) => {
            return (
              <article key={item.id} className="rooms__contain-article" data-aos="fade-up">

                <div className="rooms__contain" >



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