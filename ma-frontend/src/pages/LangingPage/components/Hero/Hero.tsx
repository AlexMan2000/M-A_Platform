import FloatingHeading from "./components/FloatingHeading/FloatingHeading";
import Slider from "./components/Slider/Slider";
import VideoCard from "./components/VideoCard/VideoCard";
import styles from "./Hero.module.less"

function Hero () {


    return (
        <div className={styles.container}>
            <Slider></Slider>
            <FloatingHeading></FloatingHeading>
        </div>
    )
}

export default Hero;