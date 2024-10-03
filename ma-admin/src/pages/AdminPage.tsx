import React from 'react';
import styles from "./AdminPage.module.less"
import { Outlet } from 'react-router-dom';
import SideBar from '../commons/SideBar/SideBar';
import Header from '@/commons/Header/Header';


const AdminPage = () => {
  return (
    <div className={styles.container}>
      <SideBar></SideBar>
      <div className={styles.content}>
        <Header></Header>
        <div className={styles.body}>
        <Outlet></Outlet>
        </div>
        
      </div>
      
    </div>
  );
};

export default AdminPage;