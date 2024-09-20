import { Outlet } from "react-router-dom";
import styles from "./HomePage.module.less"
import UpperHeader from "../LandingPage/components/Header/components/UpperHeader/UpperHeader";
import Footer from "../LandingPage/components/Footer/Footer";


const HomePage = () => {
  return (
    <div className={styles.container}>
        <UpperHeader></UpperHeader>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  );
};

export default HomePage;