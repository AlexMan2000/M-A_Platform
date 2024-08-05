
import styles from "./Carousel.module.less"
import FamilyBusiness from "@/assets/jpgs/family-run-factory.jpg"
import ShanghaiSkyline from "@/assets/jpgs/shanghai-skylines.jpeg"
import GreatWall from "@/assets/webps/great-wall-china.webp"
import React, { useState, useEffect, useRef } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slides = [
    FamilyBusiness,
    ShanghaiSkyline,
    GreatWall,
  ];
  const totalSlides = slides.length;
  const carouselRef = useRef<any>();

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentSlide === 0) {
      setCurrentSlide(totalSlides);
      carouselRef.current.style.transition = 'none';
      carouselRef.current.style.transform = `translateX(-${totalSlides * 100}%)`;
    }
    if (currentSlide === totalSlides + 1) {
      setCurrentSlide(1);
      carouselRef.current.style.transition = 'none';
      carouselRef.current.style.transform = `translateX(-100%)`;
    }
  };

  useEffect(() => {
    if (!isTransitioning) return;
    carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
    carouselRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
  }, [currentSlide, isTransitioning]);

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1);
    setIsTransitioning(true);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.sliderContainer}
        ref={carouselRef}
        onTransitionEnd={handleTransitionEnd}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div className={styles.slideItem} key="clone-start">
          <img src={slides[totalSlides - 1]} alt={`Slide ${totalSlides}`} />
        </div>
        {slides.map((slide, index) => (
          <div className={styles.slideItem} key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} className={styles.slideImg} />
          </div>
        ))}
        <div className={styles.slideItem} key="clone-end" >
          <img src={slides[0]} alt="Slide 1"  className={styles.slideImg} />
        </div>
      </div>
      <button className={styles.slideControl + " prev"} onClick={prevSlide}>
        &lt;
      </button>
      <button className={styles.slideControl + " next"} onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
