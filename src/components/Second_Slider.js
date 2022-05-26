
import React, { useEffect } from "react";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow} from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import "./Second_Slider.css";
import first_review from "../assets/images/fredrick.png";
import second_review from "../assets/images/malika_bowling.jpg";
import third_review from "../assets/images/jackie_parry.jpg";
import { motion } from 'framer-motion';
import {Link} from "react-router-dom";

const SecondSlider = () => {
  useEffect(() => {
    document.title = "Team Members"
}, [])
const dropIn = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1
    }
}

const pageTransition = {
    type: "tween",
    transition: "5s all"
}

return (
    <div id='team'>
        <motion.div variants={dropIn} transition={pageTransition} initial="hidden" animate="visible" exit="hidden">
            <h1>Our Awesome Team</h1>
        </motion.div>
            <Swiper className='cardsContainer'
                modules={[Pagination, Autoplay, EffectCoverflow]}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                spaceBetween={40}
                slidesPerView={"auto"}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide className='cards'>
                    <div className='line-1'></div>
                    <div className='line-2'></div>
                    <div className='line-3'></div>
                    <div className='line-4'></div>
                    <img src={first_review} alt="" />
                    <h2>Fredrick</h2>
                    <p>Mern Stack Developer</p>
                    <div className='teamBtn'>
                        <Link to="/About" className='hireBtn'>About Me</Link>
                        <Link to="/Contact" className='aboutBtn'>Hire Me</Link>
                    </div>
                    <div className="animatedHover">
                        <div className="socialIcons">
                            <a href='https://www.linkedin.com/in/umar-maqsood-2b426b162' target="_blank" rel="noreferrer"><i className="fab fa-linkedin icons"></i></a>
                            <a href='https://github.com/UmarMaqsood145' target="_blank" rel="noreferrer"><i className="fab fa-github icons"></i></a>
                            <a href='https://www.facebook.com/umar.maqsood.315428' target="_blank" rel="noreferrer"><i className="fab fa-facebook icons"></i></a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='cards'>
                    <div className='line-1'></div>
                    <div className='line-2'></div>
                    <div className='line-3'></div>
                    <div className='line-4'></div>
                    <img src={second_review} alt="" />
                    <h2>Malika Bowling</h2>
                    <p>Full Stack Developer</p>
                    <div className='teamBtn'>
                        <a href="https://qaisarraza.netlify.app/about" className='hireBtn' target="_blank" rel="noreferrer">About Me</a>
                        <a href='https://qaisarraza.netlify.app/contact' className='aboutBtn' target="_blank" rel="noreferrer">Hire Me</a>
                    </div>
                    <div className="animatedHover">
                        <div className="socialIcons">
                            <a href='https://www.linkedin.com/in/qaisar-raza-b24510220' target="_blank" rel="noreferrer"><i className="fab fa-linkedin icons"></i></a>
                            <a href='https://github.com/QaisarRaza' target="_blank" rel="noreferrer"><i className="fab fa-github icons"></i></a>
                            <a href='https://www.facebook.com/Qaisar.Raza.5686' target="_blank" rel="noreferrer"><i className="fab fa-facebook icons"></i></a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='cards'>
                    <div className='line-1'></div>
                    <div className='line-2'></div>
                    <div className='line-3'></div>
                    <div className='line-4'></div>
                    <img src={third_review} alt="" />
                    <h2>Jackie Perry</h2>
                    <p>Frontend Developer<br />UI/UX Designer</p>
                    <div className='teamBtn'>
                        <a href="/" className='hireBtn' target="_blank" rel="noreferrer">About Me</a>
                        <a href='/' className='aboutBtn' target="_blank" rel="noreferrer">Hire Me</a>
                    </div>
                    <div className="animatedHover">
                        <div className="socialIcons">
                            <a href='https://www.linkedin.com/in/muhammad-usman-a69b01219' target="_blank" rel="noreferrer"><i className="fab fa-linkedin icons"></i></a>
                            <a href='https://github.com/usmankh07' target="_blank" rel="noreferrer"><i className="fab fa-github icons"></i></a>
                            <a href='https://www.facebook.com/usman03777' target="_blank" rel="noreferrer"><i className="fab fa-facebook icons"></i></a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
    </div>
)
};

export default SecondSlider;
