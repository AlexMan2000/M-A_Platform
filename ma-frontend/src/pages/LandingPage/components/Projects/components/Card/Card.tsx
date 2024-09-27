// src/components/Card.tsx

import React from 'react';
import styles from './Card.module.less';
import ArrowButton from '@/commons/components/buttons/ThemeButton/ArrowButton';
// import ForwardArrow from "@/assets/svgs/right_arrow_icon.svg"
import ForwardArrow from "@/assets/svgs/right_arrow_icon_grey.svg"

interface CardProps {
  id: string;
  date: string;
  image: string;
  title: string;
  revenue: string;
  region: string;
  price: string;
  profit: string;
}

const Card: React.FC<CardProps> = ({ id, date, image, title, revenue, region, price }) => {
    

  const textStyles = {
    color: '#878787',
    textAlign: 'center',
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: '"Nunito Sans"',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '30px',
    letterSpacing: '0.5px'
  };


  const mobileTextStyles = {
    color: 'white',
    textAlign: 'center',
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: '"Nunito Sans"',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '30px',
    letterSpacing: '0.5px'
  };


  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.detailsList}>
          <div className={styles.listItem}>
            <div className={styles.listLabel}>
              Turnover:
            </div>
            <div className={styles.listDesc}>
              {revenue}
            </div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listLabel}>
              Region:
              </div>
            <div className={styles.listDesc}>
              {region}
            </div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listLabel}>
              Asking Price:
              </div>
            <div className={styles.listDesc}>
              {price}
            </div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listLabel}>
              Operating Profits:
              </div>
            <div className={styles.listDesc}>
              {revenue}
            </div>
          </div>  
        </div>
       
      </div>
      <div className={styles.button}>
        <ArrowButton 
          buttonText={'Show More'} 
          buttonImage={ForwardArrow} 
          style={{
            backgroundColor: "white",
            border: "1px solid grey",
            boxShadow: "none",
            width: "100%",
            height: "100%",
          }}
          textStyle={textStyles}
          
        ></ArrowButton>
      </div>
      <div className={styles.mobileButton}>
        <ArrowButton 
          buttonText={'Show More'} 
          buttonImage={ForwardArrow} 
          style={{
            backgroundColor: "#9C0404",
            border: "1px solid grey",
            boxShadow: "none",
            width: "100%",
            color: "white",
            height: "100%",
          }}
          textStyle={mobileTextStyles}
          
        ></ArrowButton>
      </div>

      
      <div className={styles.idDate}>
        <span className={styles.id}>Project ID:{id}</span>
        <span className={styles.date}>Open Date:{date}</span>
      </div>
      
    </div>
  );
};

export default Card;
