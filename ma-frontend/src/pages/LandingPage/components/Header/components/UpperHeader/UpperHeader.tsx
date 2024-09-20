// import { useIntl } from "react-intl";
import styles from "./UpperHeader.module.less"
import Logo1 from "@/assets/pngs/LOGO-1.png"
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import SwitchTab, { NavItem } from "../SwitchTab/SwitchTab";

const navItems: NavItem[] = [
    { title: 'ABOUT US', value: "AboutUs" },
    { title: 'SERVICES', value:"Services", subItems: ["subitem 1", "sub item 2", "sub item 3"] },
    { title: 'PROJECTS', value: "Projects", subItems: ["proj 1", "proj 2", "proj 3"] },
    { title: 'INDUSTRY', value: "Industry", subItems: ["proj 1", "proj 2", "proj 3"] },
    { title: 'TEAM',  value: "Team", subItems: ["proj 1", "proj 2", "proj 3"] },
    { title: 'WORK PROCESS', value: "Workflow", subItems: ["proj 1", "proj 2", "proj 3"] },
    { title: 'CONTACT', value: "Contact", subItems: ["proj 1", "proj 2", "proj 3"] },
  ];


function UpperHeader() {
    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <img src={Logo1} className={styles.companyLogo}></img>
                <div className={styles.logoText}>
                    <div className={styles.topLine}>
                        Propsperity Bridge M&A
                    </div>
                    <div className={styles.bottomLine}>
                        昌盛桥并购
                    </div>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <SwitchTab navItems={navItems} bgColor="white"></SwitchTab>
                <div className={styles.languageButton}>
                    <LanguageSwitcher></LanguageSwitcher>
                </div>
            </div>
            
        </div>
    )
}


export default UpperHeader;