import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import rooms from '../../rooms'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { BsPeople } from 'react-icons/bs';
import { MdOutlineWash } from 'react-icons/md';


const Rooms = () => {
  return (<>
    <section>
      <article>

        {
          rooms.map((item) => {
            return (
              <article key={item.id} >
                <div>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={1}
                    navigation={true}
                    pagination={{
                      clickable: true,
                    }}

                    modules={[Pagination, Navigation]} >
                    <p>{item.imgTitle}</p>
                    <SwiperSlide>
                      <img src={item.img1} alt={item.id} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={item.img2} alt={item.id} />
                    </SwiperSlide>
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

                  <div>
                    <h1>{item.title}</h1>
                    <div>
                      <i><img src="" alt="" /> <p>{item.personas}</p></i>
                      <i><img src="" alt="" /><p>{item.baño}</p></i>
                      <i><img src="" alt="" /><p>{item.ropa}</p></i>

                      <i><img src="" alt="" /><p>{item.calefaccion}</p></i>
                      <i><img src="" alt="" /><p>{item.ducha}</p></i>
                      <i><img src="" alt="" /><p>{item.secador}</p></i>
                    </div>
                    <a href={item.wpp}></a>
                  </div>

                </div>

              </article>

            )
          })
        }


      </article>
    </section>

  </>
  )
}

export default Rooms