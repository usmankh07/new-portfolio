import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import heapware from "../../assets/images/Heapware_Learn.png";
import yoga from "../../assets/images/Yoga_Website.png";
import weather from "../../assets/images/Mosam_Website.png";
import studio from "../../assets/images/Studio_Website.png";
import todo from "../../assets/images/Todo_Website.png";
import calculator from "../../assets/images/Calculator_Website.png";
import "./slider.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SimpleSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      Autoplay
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="heapware-slide">
        <a href="https://heapware-learn.netlify.app" target="_blank" rel="noreferrer">
          <img src={heapware} alt="" />
          <h4 className="heapware" id="heapware">
            Heapware E-Learning Website
          </h4>
        </a>
      </SwiperSlide>
      <SwiperSlide className="yoga-slide">
        <a href="https://yogatemplate.netlify.app" target="_blank" rel="noreferrer">
          <img src={yoga} alt="" />
          <h4 className="yoga">Yoga Trainers Website</h4>
        </a>
      </SwiperSlide>

      <SwiperSlide className="weather-slide">
        <a href="https://mosum.netlify.app" target="_blank" rel="noreferrer">
          <img src={weather} alt="" />
          <h4 className="weather">Realtime Weather App</h4>
        </a>
      </SwiperSlide>
      <SwiperSlide className="studio-slide">
      <a href="https://psdtowebsite.netlify.app" target="_blank" rel="noreferrer">

        <img src={studio} alt="" />
        <h4 className="studio">Music Studio Website</h4>
      </a>
      </SwiperSlide>
      <SwiperSlide className="todo-slide">
    <a href="https://usmantodo.netlify.app" target="_blank" rel="noreferrer">
        <img src={todo} alt="" />
        <h4 className="todo">Todo App</h4>
    </a>
      </SwiperSlide>
      <SwiperSlide className="calculator-slide">
      <a href="https://zarb.netlify.app" target="_blank" rel="noreferrer">
        <img src={calculator} alt="" />
        <h4 className="calculator">Calculator</h4>
      </a>
      </SwiperSlide>
    </Swiper>
  );
};
export default SimpleSlider;
