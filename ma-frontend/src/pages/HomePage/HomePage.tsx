import { Outlet } from "react-router-dom";
import styles from "./HomePage.module.less"
import UpperHeader from "../LandingPage/components/Header/components/UpperHeader/UpperHeader";
import Footer from "../LandingPage/components/Footer/Footer";
import LazyLoad from "@/commons/components/optimization/LazyLoad";


const HomePage = () => {
  return (
    <div className={styles.container}>
      <UpperHeader></UpperHeader>
      <Outlet></Outlet>
      <LazyLoad>
        <Footer></Footer>
      </LazyLoad>

    </div>
  );
};

export default HomePage;