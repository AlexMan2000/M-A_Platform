import styles from "./SwitchTab.module.less"

export interface NavItem {
    title: string;
    subItems?: string[];
  }

  interface SwitchTabProps {
    navItems: NavItem[],
    bgColor?: string,
  }
  

function SwitchTab (props: SwitchTabProps)  {

  const {navItems, bgColor} = props;

  return (
        <div className={styles.container}
          style={{
            "backgroundColor": bgColor
          }}
        >
          <div className={styles.navItemContainer}>
            {navItems?.map((elem, index, arr) => {
              return (
                  index == arr.length - 1 ? 
                  <div key={styles.navItem + index} className={styles.navItemWrapper}>
                    <div className={styles.navItem}>
                        {elem.title}
                    </div>
                  </div>
                  : 
                  <div key={styles.navItem + index} className={styles.navItemWrapper}>
                    <div className={styles.navItem}>
                      {elem.title}
                    </div>
                    {/* <Divider key={"navItemContainerDivider"} orientation="vertical" sx={{width: "1px", height: "25px", bgcolor: "#ccc"}}></Divider> */}
                  </div>
              )
            })}
          </div>
        <div className={styles.detailPanelContainer}></div>
          
        </div>
    )
}


export default SwitchTab