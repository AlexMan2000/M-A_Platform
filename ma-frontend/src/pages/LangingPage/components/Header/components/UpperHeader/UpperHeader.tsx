import { useIntl } from "react-intl";
import styles from "./UpperHeader.module.less"
import CompanyLogo from "@/assets/imgs/company-logo.jpg"


function UpperHeader() {

    const intl = useIntl();
    


    return (
        <div className={styles.container}>
            <div className={styles.companyLogoWrapper}>
                <img src={CompanyLogo} className={styles.companyLogo}></img>
            </div>
            <div className={styles.utilityWrapper}>
                <div className={styles.searchWrapper}>
                    <input className={styles.search}>
                    </input>
                </div>
                <div className={styles.languageButton}>
                    English
                </div>
            </div>
          
        </div>
    )
}


export default UpperHeader;