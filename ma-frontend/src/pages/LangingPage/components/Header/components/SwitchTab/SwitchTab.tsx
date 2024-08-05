
import { useState } from "react";
import styles from "./SwitchTab.module.less"


interface NavItem {
    title: string;
    subItems?: string[];
  }
  
  const navItems: NavItem[] = [
    { title: 'About Us' },
    { title: 'Our Services', subItems: ["subitem 1", "sub item 2", "sub item 3"] },
    { title: 'Project Information', subItems: ["proj 1", "proj 2", "proj 3"] },
  ];


function SwitchTab ()  {

  const [selectedIndex, setSelectedIndex] = useState<number>(-1);


  return (
        <div className={styles.container}>
          <div className={styles.navItemContainer}>
            {navItems.map((elem, index) => {
              return (
                  <div key={styles.navItem + index} className={styles.navItem}>
                      {elem.title}
                  </div>
              )
            })}
          </div>
        <div className={styles.detailPanelContainer}></div>
          
        </div>
    )
}


export default SwitchTab