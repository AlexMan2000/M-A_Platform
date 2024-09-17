import ClientSupport from "./components/ClientSupport/ClientSupport";
import Explore from "./components/Explore/Explore";
import NavigateBar from "./components/Header/components/NavigateBar/NavigateBar";
import UpperHeader from "./components/Header/components/UpperHeader/UpperHeader";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import WorkFlow from "./components/WorkFlow/WorkFlow";
import styles from "./LandingPage.module.less"
import AIMatching from "./components/AIMathcing/AIMatching";
import DragButton from "@/commons/components/buttons/DragButton/DragButton";
import Ws from "@/services/wsServices/ws";
import ServeIndustry from "./components/ServeIndustry/ServeIndustry";
import ManagementTeam from "./components/ManagementTeam/ManagementTeam";
import Footer from "./components/Footer/Footer";


function LandingPage() {

    return (
        <div className={styles.container}>
            <UpperHeader></UpperHeader>
            <div className={styles.content}>
                <Hero></Hero>
                <Explore></Explore>
                <ClientSupport></ClientSupport>
                <Projects></Projects>
                <ServeIndustry></ServeIndustry>
                <ManagementTeam></ManagementTeam>
                <WorkFlow></WorkFlow>
                <AIMatching></AIMatching>
                {/* <DragButton 
                    top={1000}
                    right={20}
                    width={100}
                    height={100}
                    draggable={false} 
                    clickCallback={async () => {
                        let ws: Ws;
                        ws = await Ws.create("ws://localhost:8001");
                        if (ws.readyState == WebSocket.OPEN) {
                            console.log(ws)
                            ws.sendMsg("haha");
                        }
                        
                }}> click me send</DragButton> */}
            </div>
            <Footer></Footer>
        </div>
    )
}


export default LandingPage;