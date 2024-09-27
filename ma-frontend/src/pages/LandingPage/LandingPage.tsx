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

function LandingPage() {


    const { pageStatus } = useSelector(selectGlobalState);
    console.log(pageStatus)

    return (
        <div className={styles.container} id="content-box">
            <LazyLoad>
                <Hero></Hero>
            </LazyLoad>
            <LazyLoad>
                <Explore></Explore>
            </LazyLoad>
            <LazyLoad>
                <ClientSupport></ClientSupport>
            </LazyLoad>
            <LazyLoad>
                <Projects></Projects>
            </LazyLoad>
            <LazyLoad>
                <ServeIndustry></ServeIndustry>
            </LazyLoad>
            <LazyLoad>
                <ManagementTeam></ManagementTeam>
            </LazyLoad>
            <LazyLoad>
                <WorkFlow></WorkFlow>
            </LazyLoad>
            <LazyLoad>
                <AIMatching></AIMatching>
            </LazyLoad>
        </div>
    )
}


export default LandingPage;