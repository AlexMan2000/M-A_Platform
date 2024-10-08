import React, { useState } from 'react';
import styles from "./SideBar.module.less"
import { useNavigate } from 'react-router-dom';
import Ellipse from "@/assets/ellipse.svg"
import CompanyLogo from "@/assets/LOGO-3.png"
import { useDispatch } from 'react-redux';
import { setPageStatus } from '@/store/slice/globalSlice/globalSlice';

interface MenuItem {
  menuTitle: string
  menuLocation: string
}

const MENU: MenuItem[] = [
  {
    menuTitle: "Project Management",
    menuLocation: "/management"
  },
  {
    menuTitle: "Project List",
    menuLocation: "/list"
  },
  {
    menuTitle: "Buyer Pipeline",
    menuLocation: "/pipeline"
  },
  {
    menuTitle: "Timeline & Milestone",
    menuLocation: "/milestone"
  },
  {
    menuTitle: "Data Room",
    menuLocation: "/dataroom"
  },
  {
    menuTitle: "Settings",
    menuLocation: "/settings"
  }
]



const SideBar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectIndex, setSelectIndex] = useState<number>(0);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <img className={styles.logoImg} src={CompanyLogo}></img>
        </div>
        <div className={styles.logoText}>Property Bridge M&A</div>
      </div>
      <div className={styles.menuContainer}>
        {MENU.map((elem, index) => {
          return (
          <div 
            key={elem.toString() + index} 
            className={styles.menuItem}
            onClick={()=>{
              navigate(elem.menuLocation);
              dispatch(setPageStatus({pageStatus: elem.menuLocation}));
              setSelectIndex(index);
            }}
            style={{
              backgroundColor: selectIndex === index ? "#FFF":"#FAFBFC"
            }}
            >
              <div className={styles.ellipse}>
                <img 
                  src={Ellipse} 
                  className={styles.ellipseImg}></img>
              </div>
              <div className={styles.title}>{elem.menuTitle}</div>
          </div>)
        })}
      </div>
    </div>
  );
};

export default SideBar;