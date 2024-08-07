import { useIntl } from "react-intl";
import styles from "./UpperHeader.module.less"
import CompanyLogo from "@/assets/jpgs/company-logo.jpg"
import SearchInput from "./components/SearchInput/SearchInput";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import ContactImage from "@/assets/pngs/Contact_Us.png"



function UpperHeader() {

    const intl = useIntl();

    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <img src={CompanyLogo} className={styles.companyLogo}></img>
            </div>
            <div className={styles.rightContainer}>
                <SearchInput></SearchInput>
                <LanguageSwitcher></LanguageSwitcher>
                <div className={styles.contactContainer}>
                {/* <div className={styles.contactImageContainer}> 
                    <img src={ContactImage} className={styles.contactImage}></img>
                </div> */}
                <div className={styles.contactButton}>Free Consultation 
                    <span className={styles.contactButtonMask}></span>
                </div>
            </div>
            </div>
            
        </div>
    )
}


export default UpperHeader;