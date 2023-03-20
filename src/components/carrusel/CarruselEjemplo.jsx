
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper.min.css';


import "../../components/pages/styles.scss";

import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function CarruselEjemplo() {

  return (
    <div className='container'>
      <div className='title_wrapper'>
        <div className='reactLogo'>
          <img src= '../assets/img/tartacumple.jpeg' alt="tarta"/>
        </div>
         <div className='title_'>
          <span>""</span>CURSOS
         </div>
      </div>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth< 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        className = "miSwiper"
        >
          <SwiperSlide>
            <img src='tartacumple3.jpeg' alt='cumple3'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src='tapers.jpg' alt='taper'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src='../assets/img/tartacumpleaños2.jpeg' alt='cumple2'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src='tartanata.jpeg' alt='nata'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src='tartafloresverdes.jpeg' alt='tartaflores'/>
          </SwiperSlide>

      </Swiper>
     
      </div>
  );
}

export default CarruselEjemplo