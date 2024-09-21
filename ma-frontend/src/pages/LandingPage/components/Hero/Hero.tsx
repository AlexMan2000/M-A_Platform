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
                    Leading AI-powered M&A brokerage platform targeting Greater China and Southeast Asia region. We have an active database with high quality regional SMEs and professional buyers across industries. Through a professional team of consultants and proprietary AI + digitalisation technology, we are able to achieve much faster matching and more efficient M&A process. We provide free consultation and material preparation and only charge a success fee upon deal completion.
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