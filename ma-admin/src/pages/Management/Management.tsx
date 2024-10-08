import React from 'react';
import styles from "./Management.module.less"
import Card from '@/commons/components/Card/Card';


interface StatsProps {
  title: string
  statistics: number
}


const Cards = [
  {
    title: "Active Projects",
    statistics: 25
  },
  {
    title: "To Do",
    statistics: 12
  },
  {
    title: "Backlogs",
    statistics: 32
  },
  {
    title: "Deal Completed",
    statistics: 16
  }
]



const Management = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topCards}>
        {Cards.map((elem, index) => (
          <Card
            key={elem.toString() + index}
            width={251}
            height={118}
            alignType='start'
          >
            <div className={styles.content}>
              <div className={styles.title}>{elem.title}</div>
              <div className={styles.stats}>{elem.statistics}</div>
            </div>
          </Card>
        ))}
      </div>
      <div className={styles.activeProjs}>
        <div className={styles.title}>
          
        </div>
      </div>
    </div>
  );
};

export default Management;