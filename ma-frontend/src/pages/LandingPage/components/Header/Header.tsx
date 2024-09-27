import styles from "./Header.module.less"
// import NavigateBar from "./components/NavigateBar/NavigateBar";
import UpperHeader from "./components/UpperHeader/UpperHeader";
function Header() {

    return  (
        <div className={styles.container}>
            <UpperHeader></UpperHeader>
        </div>
    )
}


export default Header;
