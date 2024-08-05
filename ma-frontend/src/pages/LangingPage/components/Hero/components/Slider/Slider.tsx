import styles from "./Slider.module.less"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css';
import "./Slider.css" // Set the navigation button styles
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import FamilyBusiness from "@/assets/jpgs/family-run-factory.jpg"
import ShanghaiSkyline from "@/assets/jpgs/shanghai-skylines.jpeg"
import GreatWall from "@/assets/webps/great-wall-china.webp"
import NextArrow from "@/assets/svgs/right_arrow_icon.svg"
import BackArrow from "@/assets/svgs/back_arrow_icon.svg"

const slides = [
    FamilyBusiness,
    ShanghaiSkyline,
    GreatWall,
  ];

function Slider () {

    return (
        <>
        <Swiper
            spaceBetween={30}
            pagination={{
                dynamicBullets: true,
              }}
            navigation={{
                nextEl: ".swiper-button-next" ,
                prevEl: ".swiper-button-prev"
            }}
            
            modules={[Pagination, Navigation]}
            slidesPerView={'auto'}
            className={styles.container}
            loop={true}
            >
                {slides.map((elem, index) => (
                    <SwiperSlide className={styles.slideContainer} key={elem + index}>
                        <div className={styles.slideMask}></div>
                        <img src={elem} className={styles.slideImg} ></img>
                    </SwiperSlide>
                ))}   
        </Swiper>
        
        <div className="swiper-button-next" >
            <img src={NextArrow} className="swiper-button-img"></img>
        </div>
        <div className="swiper-button-prev">
            <img src={BackArrow} className="swiper-button-img"></img>
        </div>
        </>
    )
}

export default Slider;