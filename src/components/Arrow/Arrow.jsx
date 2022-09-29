import React from 'react'
import './arrow.css'

import AOS from 'aos';
import 'aos/dist/aos.css';


const Arrow = () => {
AOS.init();

  return (<>
    <div className='arrow__container'  data-aos="fade-up" data-aos-offset="2000">
        <a href="#"><img src="../flotante.png" alt="arrow" /></a>
    </div>
  
  </>

  )
}

export default Arrow