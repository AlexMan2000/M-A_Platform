import ForwardArrow from "@/assets/svgs/right_arrow_icon.svg"
import HeroImage from "@/assets/pngs/heroImage.png"
import HeroImageFull from "@/assets/pngs/heroImageFull.png"
import styles from "./Hero.module.less"
import ArrowButton from "@/commons/components/buttons/ThemeButton/ArrowButton";


function Hero () {


    return (
        <div className={styles.container}>
            
            {/* <Slider></Slider>
            <FloatingHeading></FloatingHeading> */}
            <div className={styles.leftContainer}>
                <div className={styles.topText}>
                    <div className={styles.titleDesc}>
                        Legacy, Propsperity, Vision
                    </div>
                    <div className={styles.titleHeading}>
                        Business Succession {"\n"} and M&A
                    </div>
                    <div className={styles.titleText}>
                    Leading Business Succession and M&A Solutions for SMEs across Greater China and Southeast Asia, connecting businesses for successful growth.          
                    </div>
                </div>
               
                <div className={styles.buttonGroup}>
                    <ArrowButton 
                        buttonText={"Transfer, Sale and \n  Business Succession"} 
                        buttonImage={ForwardArrow}>
                    </ArrowButton>
                    <ArrowButton 
                        buttonText={"Acquisition Needs (Domestic/Cross-border)"} 
                        buttonImage={ForwardArrow}>    
                    </ArrowButton>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <img className={styles.img} src={HeroImageFull}>
                </img>
                <img className={styles.imgFill} src={HeroImage}>
                </img>
               
            </div>
            <div className={styles.bottomButton}>
                <ArrowButton buttonText={"Free Consultation"} style={{width: "100%"}}></ArrowButton>
            </div>
        </div>
    )
}

export default Hero;