import Header from "./components/Header/Header";
import Slider from "./components/Hero/components/Slider/Slider";
import Hero from "./components/Hero/Hero";
import styles from "./LandingPage.module.less"


function LandingPage() {

    return (
        <div className={styles.container}>
            <Header></Header>
            <Hero></Hero>
        </div>
    )
}


export default LandingPage;