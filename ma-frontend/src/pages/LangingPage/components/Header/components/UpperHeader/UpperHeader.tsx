import { useIntl } from "react-intl";
import styles from "./UpperHeader.module.less"
import Logo1 from "@/assets/pngs/LOGO-1.png"
import Logo2 from "@/assets/pngs/LOGO-2.png"
import SearchInput from "./components/SearchInput/SearchInput";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import SwitchTab, { NavItem } from "../SwitchTab/SwitchTab";

const navItems: NavItem[] = [
    { title: 'ABOUT US' },
    { title: 'SERVICES', subItems: ["subitem 1", "sub item 2", "sub item 3"] },
    { title: 'PROJECTS', subItems: ["proj 1", "proj 2", "proj 3"] },
    { title: 'INDUSTRY', subItems: ["proj 1", "proj 2", "proj 3"] },
    { title: 'TEAM', subItems: ["proj 1", "proj 2", "proj 3"] },
    { title: 'WORK PROCESS', subItems: ["proj 1", "proj 2", "proj 3"] },
    { title: 'CONTACT', subItems: ["proj 1", "proj 2", "proj 3"] },
    // { title: 'FAQs', subItems: ["proj 1", "proj 2", "proj 3"] },
  ];


function UpperHeader() {

    const intl = useIntl();

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
                {/* <SearchInput></SearchInput>
                
                <div className={styles.contactContainer}>
                <div className={styles.contactButton}>Free Consultation 
                    <span className={styles.contactButtonMask}></span>
                </div> */}
                <SwitchTab navItems={navItems} bgColor="white"></SwitchTab>
                <LanguageSwitcher></LanguageSwitcher>
            </div>
            
        </div>
    )
}


export default UpperHeader;