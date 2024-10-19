import styles from "./Header.module.less"
import { selectGlobalState } from '@/store/slice/globalSlice/globalSlice';
import { useSelector } from 'react-redux';
import { location2title } from '@/commons/utils/LocationMap';
import Search from "@/assets/search.svg"
import Notification from "@/assets/notification.svg"
import Avatar from '../Avatar/Avatar';

const ToolBar = () => {

  const {pageStatus}  = useSelector(selectGlobalState)

  return (
    <div className={styles.container}>
      <div className={styles.titleText}>{location2title[pageStatus]}</div>
      <div className={styles.toolBar}>
        <div className={styles.search}>
          <img className={styles.img} src={Search}></img>
        </div>
        <div className={styles.notification}>
          <img className={styles.img} src={Notification}></img>
        </div>
        <div className={styles.avatar}>
          <Avatar></Avatar>
        </div>
      </div>
    </div>
  );
};

export default ToolBar;