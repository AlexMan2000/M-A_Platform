// import React from 'react';
import styles from "./Card.module.less"





const Card = (props) => {

    const {name, title, image,  bullets} = props;
    return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <img className={styles.image} src={image}></img>
        </div>
        <div className={styles.headingContainer}>
            <div className={styles.name}>{name}</div>
            <div className={styles.title}>{title}</div>
            
        </div>
        <ul className={styles.bullets}>
            {
                bullets.map((bullet:string, idx:number) => (
                    <li key={idx}>{bullet}</li>
                ))
            }
        </ul>
        <div className={styles.button}>
            Consult with Vincent
        </div>
    </div>
  );
};

export default Card;