import SwitchTab from "../SwitchTab/SwitchTab";
import styles from "./NavigateBar.module.less"
import ContactImage from "@/assets/imgs/Contact_Us.png"


function NavigateBar() {

  return (
    <div className={styles.container}>
      <SwitchTab></SwitchTab>
      <div className={styles.contactContainer}>
        <div className={styles.contactImageContainer}> 
          <img src={ContactImage} className={styles.contactImage}></img>
        </div>
        <div className={styles.contactButton}>Contact 
          <span className={styles.contactButtonMask}></span>
        </div>
      </div>
    </div>
  )
 
 
}

export default NavigateBar;