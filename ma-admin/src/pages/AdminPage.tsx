import styles from "./AdminPage.module.less"
import { Outlet } from 'react-router-dom';
import SideBar from '@/commons/components/SideBar/SideBar';
import Header from '@/commons/components/Header/Header';


const AdminPage = () => {
  return (
    <div className={styles.container}>
      <SideBar></SideBar>
      <div className={styles.content}>
        <Header></Header>
        <div className={styles.body}>
        {/*渲染子组件*/}
        <Outlet></Outlet>
        </div>
        
      </div>
      
    </div>
  );
};

export default AdminPage;