import React from 'react';
import styles from "./Header.module.less"
import { useNavigate } from 'react-router-dom';
import { selectGlobalState } from '@/store/slice/globalSlice/globalSlice';
import { useSelector } from 'react-redux';
import { location2title } from '../LocationMap';

const ToolBar = () => {

  const navigate = useNavigate();

  const {pageStatus}  = useSelector(selectGlobalState)

  return (
    <div className={styles.container}>
      <div className={styles.titleText}>{location2title[pageStatus]}</div>
      <div className={styles.toolBar}>
        <div className={styles.search}>ss</div>
        <div className={styles.notification}>ss</div>
        <div className={styles.avatar}>
          ss
        </div>
      </div>
    </div>
  );
};

export default ToolBar;