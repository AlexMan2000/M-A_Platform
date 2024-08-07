// src/components/Carousel.tsx

import React, { useRef } from 'react';
import styles from './Carousel.module.less';
import Card from '../Card/Card';

interface CarouselProps {
  cards: Array<{
    id: string;
    date: string;
    image: string;
    title: string;
    revenue: string;
    region: string;
    price: string;
    profit: string;
  }>;
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.navButtonPrev} onClick={scrollLeft}>❮</button>
      <div className={styles.cardContainer} ref={scrollRef}>
        {cards.map(card => (
          <Card key={card.id} {...card} />
        ))}
        <div className={styles.edgeMask}></div>
      </div>
      <button className={styles.navButtonAfter} onClick={scrollRight}>❯</button>
      
    </div>
  );
};

export default Carousel;
