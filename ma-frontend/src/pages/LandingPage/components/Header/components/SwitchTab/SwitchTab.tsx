import { useEffect, useState } from "react";
import styles from "./SwitchTab.module.less"
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";


export interface NavItem {
  title: string
  value: string
  subItems?: string[]
}

interface SwitchTabProps {
  navItems: NavItem[],
  bgColor?: string,
  isMenuOpen?: boolean
}


function SwitchTab(props: SwitchTabProps) {

  const { navItems, bgColor, isMenuOpen} = props
  const [_, setValue] = useState<string>("AboutUs")
  

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const { pathname, hash } = location

    if (pathname === '/') {
      switch (hash) {
        case '#AboutUs':
          setValue('AboutUs')
          break
        case '#Projects':
          setValue('Projects')
          break
        case '#Services':
          setValue('Services')
          break
        case '#Industry':
          setValue('Industry')
          break
        case '#Team':
          setValue('Team')
          break
        case '#Workflow':
          setValue('Workflow')
          break
        default:
          setValue('AboutUs')
          break
      }
    } else if (pathname === '/user') {
      setValue('')
    } else {
      setValue('')
    }
  }, [location])


  

  const handleScroll = (sectionId: string) => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleChange = (newValue: string) => {
    setValue(newValue)
    navigate('/#' + newValue)
    setTimeout(() => {
      handleScroll('#' + newValue) // Scroll to the specific section
    }, 0) // Delay scroll to ensure navigation is completed
  }


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
              <div
                key={styles.navItem + index}
                className={styles.navItemWrapper}
                onClick={() => { handleChange(elem.value) }}
              >
                <div className={styles.navItem}>
                  {elem.title}
                </div>
              </div>
              :
              <div
                key={styles.navItem + index}
                className={styles.navItemWrapper}
                onClick={() => { handleChange(elem.value) }}
              >
                <div className={styles.navItem}>
                  {elem.title}
                </div>
              </div>
          )
        })}
      </div>
      { isMenuOpen && <div className={styles.dropdownMobile}>
        <List>
          {navItems?.map((elem, index, arr) => {
            return (
              <ListItem
                disablePadding
                key={styles.navItem + index}
                className={styles.navItemWrapper}
                onClick={() => { handleChange(elem.value) }}
              >
                <ListItemButton>
                  <ListItemText primary={elem.title} />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </div>}
    </div>
  )
}


export default SwitchTab