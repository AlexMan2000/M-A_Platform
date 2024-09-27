import ForwardArrow from "@/assets/svgs/right_arrow_icon.svg"
import HeroImage from "@/assets/pngs/heroImage.png"
import HeroImageSingle from "@/assets/pngs/heroImageFullSingle.png"
import styles from "./Hero.module.less"
import ArrowButton from "@/commons/components/buttons/ThemeButton/ArrowButton";
import HeadPhone from "@/assets/svgs/headphone.svg"
import BackgroundImage from "@/assets/svgs/mobile_hero_background.svg"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectGlobalState } from "@/store/slice/globalSlice/globalSlice";

function Hero() {

    const navigate = useNavigate();
    const { isMobile } = useSelector(selectGlobalState);
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
                    <div className={styles.titleTextMobile}>
                        Leading Business Succession and M&A Solutions for SMEs across Greater China and Southeast Asia, connecting businesses for successful growth.
                    </div>
                </div>

                <div className={styles.buttonGroup}>
                    <ArrowButton
                        className={styles.arrowButton}
                        buttonText={"Transfer, Sale and \n  Business Succession"}
                        buttonImage={ForwardArrow}
                        onClick={() => { navigate("/transfer") }}
                    >
                    </ArrowButton>
                    <ArrowButton
                        className={styles.arrowButton}
                        buttonText={"Acquisition Needs (Domestic/Cross-border)"}
                        buttonImage={ForwardArrow}
                        onClick={() => { navigate("/acquisition") }}
                    >
                    </ArrowButton>
                </div>
                <div className={styles.backgroundImage}>
                    <img className={styles.img} src={BackgroundImage}>
                    </img>
                </div>
            </div>

            <div className={styles.rightContainer}>
                <img className={styles.img} src={HeroImageSingle}>
                </img>
                <img className={styles.imgFill} src={HeroImage}>
                </img>
                <div className={styles.bottomButton} onClick={() => { navigate("/consultation") }}>
                    <img className={styles.headPhone} src={HeadPhone}></img>
                    <div className={styles.button} >Get started with free consultation</div>
                </div>
            </div>
        </div>
    )
}

export default Hero;