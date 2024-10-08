// import { useIntl } from "react-intl";
import styles from "./UpperHeader.module.less"
import Logo3 from "@/assets/pngs/LOGO-3.png"
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import SwitchTab, { NavItem } from "../SwitchTab/SwitchTab";
import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


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

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = (event) => {
        event.stopPropagation();
        setIsMenuOpen((prev) => !prev);
    };


    const handleClickLogo = () => {
        navigate("/")
        setTimeout(()=>{document.querySelector("#AboutUs")!.scrollIntoView({ behavior: 'smooth' })}, 500)
    }


    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <div className={styles.logoGroup} onClick={handleClickLogo}>
                    <img src={Logo3} className={styles.companyLogo}></img>
                    <div className={styles.logoText}>
                        <div className={styles.topLine}>
                            AnBridge M&A
                        </div>
                        <div className={styles.bottomLine}>
                            桥安并购
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <SwitchTab isMenuOpen={isMenuOpen} navItems={navItems} bgColor="white"></SwitchTab>
                <div className={styles.languageButton}>
                    <LanguageSwitcher></LanguageSwitcher>
                </div>
            </div>
            <IconButton className={styles.menuIcon} onClick={toggleMenu}>
                <MenuIcon />
            </IconButton>
            
        </div>
    )
}


export default UpperHeader;