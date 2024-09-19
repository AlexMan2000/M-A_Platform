import styles from "./Slider.module.less"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css';
import "./Slider.css" // Set the navigation button styles
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useState } from "react";
import VideoCard from "../VideoCard/VideoCard";


import ShanghaiClip1 from "@/assets/mp4s/Shanghai_clip_1.mp4"

const videos = [
    ShanghaiClip1
    // BeijingGreatWall,
    // ShanghaiClip2,
    // HongkongClip1
]

function Slider () {

    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const handleSlideChange = (swiper: any) => {
      setCurrentSlide(swiper.realIndex);
    };


    console.log()

    return (
        <>
        <Swiper
            spaceBetween={30}
            pagination={{
                dynamicBullets: true,
              }}
            // navigation={{
            //     nextEl: ".swiper-button-next" ,
            //     prevEl: ".swiper-button-prev"
            // }}

            navigation={false}
            
            modules={[Pagination, Navigation]}
            slidesPerView={'auto'}
            className={styles.container}
            loop={true}
            onSlideChange={handleSlideChange}
            >
                {/* {slides.map((elem, index) => (
                    <SwiperSlide className={styles.slideContainer} key={elem + index}>
                        <div className={styles.slideMask}></div>
                        <img src={elem} className={styles.slideImg} ></img>
                    </SwiperSlide>
                ))}    */}
                {videos.map((video, index) => (
                    <SwiperSlide className={styles.slideContainer} key={video.toString() + index}>

                        <VideoCard video={video} playing={currentSlide == index}></VideoCard>
                        <div className={styles.slideMask}></div>
                    </SwiperSlide>
                ))}   
        </Swiper>
        
        {/* <div className="swiper-button-next">
            <img src={NextArrow} className="swiper-button-img"></img>
        </div>
        <div className="swiper-button-prev">
            <img src={BackArrow} className="swiper-button-img"></img>
        </div> */}
        </>
    )
}

export default Slider;