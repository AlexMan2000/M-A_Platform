import ForwardArrow from "@/assets/svgs/right_arrow_icon.svg"
import HeroImage from "@/assets/pngs/heroImage.png"
import HeroImageFull from "@/assets/pngs/heroImageFull.png"
import styles from "./Hero.module.less"
import ArrowButton from "@/commons/components/buttons/ThemeButton/ArrowButton";
import HeadPhone from "@/assets/svgs/headphone.svg"
import { useNavigate } from "react-router-dom";

function Hero () {

    const navigate = useNavigate();

    return (
        <div className={styles.container} id="AboutUs">
            <div className={styles.leftContainer}>
                <div className={styles.topText}>
                    <div className={styles.titleDesc}>
                        Legacy, Propsperity, Vision
                    </div>
                    <div className={styles.titleHeading}>
                        Business Succession {"\n"}and M&A
                    </div>
                    <div className={styles.titleText}>
                    Leading Business Succession and M&A Solutions for SMEs across Greater China and Southeast Asia, connecting businesses for successful growth.          
                    </div>
                </div>
               
                <div className={styles.buttonGroup}>
                    <ArrowButton 
                        buttonText={"Transfer, Sale and \n  Business Succession"} 
                        buttonImage={ForwardArrow}
                        onClick={()=>{navigate("/transfer")}}
                        >
                    </ArrowButton>
                    <ArrowButton 
                        buttonText={"Acquisition Needs (Domestic/Cross-border)"} 
                        buttonImage={ForwardArrow}
                        onClick={()=>{navigate("/acquisition")}}
                        >    
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
                <img className={styles.headPhone} src={HeadPhone}></img>
                <div className={styles.button} onClick={()=>{navigate("/consultation")}}>Get started with free consultation</div>
            </div>
        </div>
    )
}

export default Hero;