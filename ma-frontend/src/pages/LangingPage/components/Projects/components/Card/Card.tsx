// src/components/Card.tsx

import React from 'react';
import styles from './Card.module.less';

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

const Card: React.FC<CardProps> = ({ id, date, image, title, revenue, region, price, profit }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <div className={styles.idDate}>
          <span className={styles.id}>Project ID:{id}</span>
          <span className={styles.date}>Open Date:{date}</span>
        </div>
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
      <button className={styles.button}>
        Show More
          
      </button>
    </div>
  );
};

export default Card;
