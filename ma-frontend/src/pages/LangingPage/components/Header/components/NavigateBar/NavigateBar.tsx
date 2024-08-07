import SwitchTab from "../SwitchTab/SwitchTab";
import styles from "./NavigateBar.module.less"


function NavigateBar() {

  return (
    <div className={styles.container}>
      <SwitchTab></SwitchTab>
    </div>
  )
 
 
}

export default NavigateBar;