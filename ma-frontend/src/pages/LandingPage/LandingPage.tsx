import ClientSupport from "./components/ClientSupport/ClientSupport";
import Explore from "./components/Explore/Explore";
// import NavigateBar from "./components/Header/components/NavigateBar/NavigateBar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import WorkFlow from "./components/WorkFlow/WorkFlow";
import styles from "./LandingPage.module.less"
import AIMatching from "./components/AIMathcing/AIMatching";
// import DragButton from "@/commons/components/buttons/DragButton/DragButton";
// import Ws from "@/services/wsServices/ws";
import ServeIndustry from "./components/ServeIndustry/ServeIndustry";
import ManagementTeam from "./components/ManagementTeam/ManagementTeam";
import { selectGlobalState } from "@/store/slice/globalSlice/globalSlice";
import { useSelector } from "react-redux";
import LazyLoad from "@/commons/components/optimization/LazyLoad";

import BackgroundImage from "@/assets/svgs/mobile_hero_background.svg"



function LandingPage() {


    const { pageStatus } = useSelector(selectGlobalState);
    console.log(pageStatus)

    return (
        <div className={styles.container} id="content-box">
            <LazyLoad>
                <div className={styles.heroContainer}>
                    <Hero></Hero>
                    <div className={styles.backgroundImage}>
                        <img className={styles.img} src={BackgroundImage}>
                        </img>
                    </div>
                    <div className={styles.backgroundImageDesktop}>
                    </div>
                </div>
            </LazyLoad>
            <LazyLoad>
                <div className={styles.exploreContainer}>
                    <Explore></Explore>
                </div>
            </LazyLoad>
            <LazyLoad>
                <div className={styles.clientContainer}>
                    <ClientSupport></ClientSupport>
                    <div className={styles.backgroundImage}>
                    </div>
                </div>
            </LazyLoad>
            <LazyLoad>
                <div className={styles.projectContainer}>
                    <Projects></Projects>
                </div>
            </LazyLoad>
            <LazyLoad>
                <div className={styles.industryContainer}>
                    <ServeIndustry></ServeIndustry>
                    <div className={styles.backgroundImage}></div>
                </div>
            </LazyLoad>
            <LazyLoad>
                <div className={styles.teamContainer}>
                    <ManagementTeam></ManagementTeam></div>
            </LazyLoad>
            <LazyLoad>
                <div className={styles.workContainer}>
                    <WorkFlow></WorkFlow>
                    <div className={styles.backgroundImage}></div>
                </div>
            </LazyLoad>
            <LazyLoad>
                <div className={styles.techContainer}>
                    <AIMatching></AIMatching></div>
            </LazyLoad>
        </div>
    )
}


export default LandingPage;