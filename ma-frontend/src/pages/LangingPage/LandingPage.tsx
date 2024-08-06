import ClientSupport from "./components/ClientSupport/ClientSupport";
import Explore from "./components/Explore/Explore";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import WorkFlow from "./components/WorkFlow/WorkFlow";
import styles from "./LandingPage.module.less"


function LandingPage() {

    return (
        <div className={styles.container}>
            <Header></Header>
            <Hero></Hero>
            <Explore></Explore>
            <ClientSupport></ClientSupport>
            <WorkFlow></WorkFlow>
        </div>
    )
}


export default LandingPage;