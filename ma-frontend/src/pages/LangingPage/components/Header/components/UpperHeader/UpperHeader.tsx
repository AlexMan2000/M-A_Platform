import { useIntl } from "react-intl";
import styles from "./UpperHeader.module.less"
import CompanyLogo from "@/assets/imgs/company-logo.jpg"
import SearchInput from "./components/SearchInput/SearchInput";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";



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
            </div>
            
        </div>
    )
}


export default UpperHeader;