import styles from "./Header.module.less"
import NavigateBar from "./components/NavigateBar/NavigateBar";
import UpperHeader from "./components/UpperHeader/UpperHeader";
import Explore from "../Explore/Explore";

function Header() {

    return  (
        <div className={styles.container}>
            <UpperHeader></UpperHeader>
            <NavigateBar></NavigateBar>
            <Explore></Explore>
        </div>
    )
}


export default Header;
