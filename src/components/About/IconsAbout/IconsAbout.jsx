import React from 'react'
import { useTranslation } from 'react-i18next'


const IconsAbout = () => {

  const [t, i18n] = useTranslation("global");

    const iconsAbout = [


        {
            id: 1,
            img: '/assets/iconos/ropadeblanco.png',
            title: t("about.sheets")
        },

        {
            id: 2,
            img: '/assets/iconos/desayuno.png',
            title: t("about.breakfast")
        },

        {
            id: 3,
            img: '/assets/iconos/calefacción.png',
            title: t("about.heating")
        },

        {
            id: 4,
            img: '/assets/iconos/calefacciónaleña.png',
            title: t("about.fireplace")
        },

        {
            id: 5,
            img: '/assets/iconos/pileta.png',
            title: t("about.swim")
        },

        {
            id: 6,
            img: '/assets/iconos/Frame.png',
            title: "Ping Pong"
        },

        {
            id: 7,
            img: '/assets/iconos/tv.png',
            title: t("about.tv")
        },

        {
            id: 8,
            img: '/assets/iconos/wifi.png',
            title: "WiFi"
        },

        {
            id: 9,
            img: '/assets/iconos/vaca.png',
            title: t("about.farm")
        },
    ];

    return (<>
        <div className='about__container-icons' data-aos="fade-right" >

            {
                iconsAbout.map((item) => {
                    return (
                        <span key={item.id} >
                            <img src={item.img} alt={item.id} />
                            <p>{item.title}</p>
                        </span>

                    )
                })
            }


        </div>
    </>

    )
}

export default IconsAbout