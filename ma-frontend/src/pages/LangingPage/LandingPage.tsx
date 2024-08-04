import Header from "./components/Header/Header";
import styles from "./LandingPage.module.less"



function LandingPage() {

    return (
        <div className={styles.container}>
            <Header></Header>
        </div>
    )
}


export default LandingPage;