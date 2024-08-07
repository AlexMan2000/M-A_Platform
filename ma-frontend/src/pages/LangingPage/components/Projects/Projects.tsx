import styles from "./Projects.module.less"


// src/App.tsx
import React from 'react';
import Carousel from "./components/Carousel/Carousel";
import BusinessImage from "@/assets/jpgs/business-meeting.jpg"


const cards = [
  {
    id: '3121',
    date: 'August 04, 2024',
    image: BusinessImage,
    title: '【Business M&A / Surface Yield 11%】3 Buildings in the Metropolitan Area',
    revenue: '¥10,000,000 ~ ¥50,000,000',
    region: 'Kanto & Koshinetsu',
    price: '¥200,000,000 (Negotiable)',
    profit: '¥10,000,000 ~ ¥50,000,000'
  },
  {
    id: '3131',
    date: 'August 06, 2024',
    image: BusinessImage,
    title: '【Good Financial and Profitability】North Kanto Area / General Construction Consulting Business',
    revenue: '¥250,000,000 ~ ¥500,000,000',
    region: 'Kanto & Koshinetsu',
    price: '¥500,000,000 ~ ¥750,000,000',
    profit: '¥50,000,000 ~ ¥100,000,000'
  },
  {
    id: '3130',
    date: 'August 06, 2024',
    image: BusinessImage,
    title: '【Many Qualified Personnel】Metropolitan Area / General Construction Business',
    revenue: '¥500,000,000 ~ ¥1,000,000,000',
    region: 'Kanto & Koshinetsu',
    price: 'Up to ¥1,000,000,000',
    profit: 'Operating at a Loss'
  },
  {
    id: '3128',
    date: 'August 06, 2024',
    image: BusinessImage,
    title: '【Business Transfer / Management Location】',
    revenue: 'Revenue',
    region: 'Area',
    price: 'Transfer Desired Price',
    profit: 'Operating Profit'
  },
  {
    id: '312s8',
    date: 'August 06, 2024',
    image: BusinessImage,
    title: '【Business Transfer / Management Location】',
    revenue: 'Revenue',
    region: 'Area',
    price: 'Transfer Desired Price',
    profit: 'Operating Profit'
  },
  {
    id: '312ss8',
    date: 'August 06, 2024',
    image: BusinessImage,
    title: '【Business Transfer / Management Location】',
    revenue: 'Revenue',
    region: 'Area',
    price: 'Transfer Desired Price',
    profit: 'Operating Profit'
  }
];


const Projects = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Featured Projects</h1>
      <Carousel cards={cards} />
    </div>
  );
};

export default Projects;
