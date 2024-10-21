import styles from "./SideBar.module.less"
import { useNavigate } from 'react-router-dom';
import Ellipse from "@/assets/ellipse.svg"
import CompanyLogo from "@/assets/LOGO-3.png"
import { useDispatch, useSelector } from 'react-redux';
import { selectGlobalState } from '@/store/slice/globalSlice/globalSlice';
import handleChangeMenu from '@/commons/utils/changePageHandler';
import { location2title } from "@/commons/utils/LocationMap";


const SideBar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {pageIndex} = useSelector(selectGlobalState);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <img className={styles.logoImg} src={CompanyLogo}></img>
        </div>
        <div className={styles.logoText}>Property Bridge M&A</div>
      </div>
      <div className={styles.menuContainer}>
        {Object.entries(location2title).map((elem, index) => {
          return (
          <div 
            key={elem.toString() + index} 
            className={styles.menuItem}
            onClick={()=>{
              handleChangeMenu(navigate, dispatch, elem[0]);
            }}
            style={{
              backgroundColor: pageIndex === index ? "#FFF":"#EEF0F3"
            }}
            >
              <div className={styles.ellipse}>
                <img 
                  src={Ellipse} 
                  className={styles.ellipseImg}></img>
              </div>
              <div className={styles.title}>{elem[1]}</div>
          </div>)
        })}
      </div>
    </div>
  );
};

export default SideBar;