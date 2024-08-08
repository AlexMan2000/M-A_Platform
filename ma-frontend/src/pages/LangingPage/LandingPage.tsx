import CarouselBox from "@/commons/components/displayLayouts/Carousel/CarouselBox";
import ClientSupport from "./components/ClientSupport/ClientSupport";
import Explore from "./components/Explore/Explore";
import NavigateBar from "./components/Header/components/NavigateBar/NavigateBar";
import UpperHeader from "./components/Header/components/UpperHeader/UpperHeader";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import WorkFlow from "./components/WorkFlow/WorkFlow";
import styles from "./LandingPage.module.less"
import ShanghaiClip from "@/assets/mp4s/Shanghai_clip_1.mp4"
function LandingPage() {

    return (
        <div className={styles.container}>
            <UpperHeader></UpperHeader>
            <div className={styles.content}>
                <NavigateBar></NavigateBar>
                <Hero></Hero>
                <Explore></Explore>
                <ClientSupport></ClientSupport>
                <Projects></Projects>
                <WorkFlow></WorkFlow>
                {/* <CarouselBox scaleMode={"gaussian"}>
                    <CarouselBox.Item width={200}>
                        <video src={ShanghaiClip}></video>
                    </CarouselBox.Item>
                    <CarouselBox.Item width={200}></CarouselBox.Item>
                    <CarouselBox.Item width={200}></CarouselBox.Item>
                    <CarouselBox.Item width={200}></CarouselBox.Item>
                    <CarouselBox.Item width={200}></CarouselBox.Item>
                    <CarouselBox.Item width={200}></CarouselBox.Item>
                    <CarouselBox.Item width={200}></CarouselBox.Item>
                </CarouselBox> */}
            </div>
        </div>
    )
}


export default LandingPage;