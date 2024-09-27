import styles from "./Projects.module.less"


// src/App.tsx
// import { useState } from 'react';
import BusinessImage from "@/assets/jpgs/business-meeting.jpg"
import { priceFormatter, priceParser, priceUnitParser } from "@/commons/utils/priceFormatHandler";
import BangkokHotel from "@/assets/jpgs/bangkok-hotel.jpg"
import IndiaInternet from "@/assets/jpgs/india-internet.jpg"
import KoreaMedical from "@/assets/jpgs/korea-medical.jpg"
import SydneyAustralia from "@/assets/jpgs/sydney-australia.jpg"
import CaliEnergy from "@/assets/pngs/california-energy.png"
import ParisFrance from "@/assets/jpgs/paris-france.jpg"
import ShanghaiECommerce from "@/assets/jpgs/shanghai-ecommerce.jpg"
import VietnamTech from "@/assets/jpgs/vietnam-tech.jpg"
import PhilippinesRetail from "@/assets/jpgs/philippines-manila.jpg"
import CarouselBox from "@/commons/components/displayLayouts/Carousel/CarouselBox";
import { encodeToBase64 } from "@/commons/utils/encoderHandler";
import Card from "./components/Card/Card";
import { useSelector } from "react-redux";
import { selectGlobalState } from "@/store/slice/globalSlice/globalSlice";

const cards = [
  {
    id: '3121',
    date: 'August 04, 2024',
    image: BusinessImage,
    title: '【Business M&A / Surface Yield 11%】3 Buildings in the Metropolitan Area',
    revenue: '¥10,000,000 ~ ¥50,000,000',
    region: 'Tokyo, Japan',
    price: '$1,400,000 (Negotiable)',
    profit: '¥10,000,000 ~ ¥50,000,000'
  },
  {
    id: '3131',
    date: 'August 06, 2024',
    image: BusinessImage,
    title: '【Good Financial and Profitability】North Kanto Area / General Construction Consulting Business',
    revenue: '¥250,000,000 ~ ¥500,000,000',
    region: 'Kanto & Koshinetsu, Japan',
    price: '$3,500,000 ~ $5,250,000',
    profit: '¥50,000,000 ~ ¥100,000,000'
  },
  {
    id: '3130',
    date: 'August 06, 2024',
    image: BusinessImage,
    title: '【Many Qualified Personnel】Metropolitan Area / General Construction Business',
    revenue: '¥500,000,000 ~ ¥1,000,000,000',
    region: 'Osaka, Japan',
    price: '$7,000,000',
    profit: '¥50,000,000 ~ ¥100,000,000'
  },
  {
    id: '3128',
    date: 'August 06, 2024',
    image: BusinessImage,
    title: '【Business Transfer / Management Location】',
    revenue: '¥50,000,000 ~ ¥100,000,000',
    region: 'Shanghai, China',
    price: '$7,000,000',
    profit: '¥50,000,000 ~ ¥100,000,000'
  },
  {
    id: '3129',
    date: 'August 07, 2024',
    image: VietnamTech,
    title: '【High Growth Potential】Tech Startup in Ho Chi Minh City',
    revenue: '₫20,000,000,000 ~ ₫50,000,000,000',
    region: 'Ho Chi Minh City, Vietnam',
    price: '$8,600,000 (Negotiable)',
    profit: '₫10,000,000,000 ~ ₫30,000,000,000'
  },
  {
    id: '3132',
    date: 'August 08, 2024',
    image: PhilippinesRetail,
    title: '【Strategic Location】Retail Business in Manila',
    revenue: '₱50,000,000 ~ ₱100,000,000',
    region: 'Manila, Philippines',
    price: '$9,000,000',
    profit: '₱50,000,000'
  },
  {
    id: '3133',
    date: 'August 09, 2024',
    image: BusinessImage,
    title: '【Established Brand】Restaurant Chain in New York City',
    revenue: '$10,000,000 ~ $20,000,000',
    region: 'New York City, USA',
    price: '$100,000,000 (Negotiable)',
    profit: '$5,000,000 ~ $10,000,000'
  },
  {
    id: '3134',
    date: 'August 10, 2024',
    image: ShanghaiECommerce,
    title: '【Emerging Market】E-commerce Business in Beijing',
    revenue: '¥100,000,000 ~ ¥200,000,000',
    region: 'Beijing, China',
    price: '$30,000,000',
    profit: '¥50,000,000 ~ ¥100,000,000'
  },
  {
    id: '3135',
    date: 'August 11, 2024',
    image: BusinessImage,
    title: '【High-Tech Innovation】Software Development Company in Silicon Valley',
    revenue: '$50,000,000 ~ $100,000,000',
    region: 'Silicon Valley, USA',
    price: '$500,000,000 (Negotiable)',
    profit: '$100,000,000 ~ $150,000,000'
  },
  {
    id: '3136',
    date: 'August 12, 2024',
    image: BangkokHotel,
    title: '【Tourism Hub】Hotel Chain in Bangkok',
    revenue: '฿500,000,000 ~ ฿1,000,000,000',
    region: 'Bangkok, Thailand',
    price: '$87,000,000',
    profit: '฿100,000,000 ~ ฿300,000,000'
  },
  {
    id: '3137',
    date: 'August 13, 2024',
    image: BusinessImage,
    title: '【Robust Infrastructure】Logistics Company in Singapore',
    revenue: 'S$100,000,000 ~ S$200,000,000',
    region: 'Singapore',
    price: '$375,000,000 (Negotiable)',
    profit: 'S$50,000,000 ~ S$100,000,000'
  },
  {
    id: '3138',
    date: 'August 14, 2024',
    image: CaliEnergy,
    title: '【Sustainable Energy】Solar Energy Company in California',
    revenue: '$150,000,000 ~ $300,000,000',
    region: 'California, USA',
    price: '$800,000,000',
    profit: '$200,000,000 ~ $300,000,000'
  },
  {
    id: '3139',
    date: 'August 15, 2024',
    image: KoreaMedical,
    title: '【Healthcare Boom】Medical Equipment Manufacturer in Seoul',
    revenue: '₩200,000,000,000 ~ ₩500,000,000,000',
    region: 'Seoul, South Korea',
    price: '$840,000,000 (Negotiable)',
    profit: '₩300,000,000,000 ~ ₩400,000,000,000'
  },
  {
    id: '3140',
    date: 'August 16, 2024',
    image: IndiaInternet,
    title: '【Tech Giant】Internet Service Provider in Bengaluru',
    revenue: '₹5,000,000,000 ~ ₹10,000,000,000',
    region: 'Bengaluru, India',
    price: '$360,000,000',
    profit: '₹1,000,000,000 ~ ₹2,000,000,000'
  },
  {
    id: '3141',
    date: 'August 17, 2024',
    image: ParisFrance,
    title: '【Luxury Market】Fashion Brand in Paris',
    revenue: '€200,000,000 ~ €400,000,000',
    region: 'Paris, France',
    price: '$1,100,000,000',
    profit: '€200,000,000 ~ €300,000,000'
  },
  {
    id: '3142',
    date: 'August 18, 2024',
    image: SydneyAustralia,
    title: '【Food & Beverage】Organic Food Chain in Sydney',
    revenue: 'A$100,000,000 ~ A$200,000,000',
    region: 'Sydney, Australia',
    price: '$325,000,000 (Negotiable)',
    profit: 'A$50,000,000 ~ A$100,000,000'
  }
];



const Projects = () => {

  const { isMobile } = useSelector(selectGlobalState);

  const formattedCards = cards.map((elem, _) => {

    const priceUnit = priceUnitParser(elem.price),
      [priceLow, priceHigh] = priceParser(elem.price).map((elem) => priceFormatter(elem, 2)),
      revenueUnit = priceUnitParser(elem.revenue),
      [revenueLow, revenueHigh] = priceParser(elem.revenue).map((elem) => priceFormatter(elem, 2)),
      profitUnit = priceUnitParser(elem.profit),
      [profitLow, profitHigh] = priceParser(elem.profit).map((elem) => priceFormatter(elem, 2));

    return {
      ...elem,
      price: `${priceLow}${priceHigh ? `~${priceHigh}` : " (Negotiable)"} ${priceUnit}`,
      revenue: `${revenueLow}${revenueHigh ? `~${revenueHigh}` : " (Negotiable)"} ${revenueUnit}`,
      profit: `${profitLow}${profitHigh ? `~${profitHigh}` : " (Negotiable)"} ${profitUnit}`
    }
  })


  // const filteredCards = formattedCards.filter((elem, index) => {
  //   return region === "" ? true : elem.region === region;
  // })


  return (
    <div className={styles.container} id="Projects">
      <h1 className={styles.title}>Featured Projects</h1>
      <CarouselBox loop={false}
        centerIndex={3}
        scaleMode={"gaussian"}
      >
        {
          formattedCards.map((card, index) =>
            <CarouselBox.Item key={encodeToBase64(card) + index}
              width={300}
              height={480}>
              <Card key={card.id} {...card} />
            </CarouselBox.Item>)
        }
      </CarouselBox>

    </div>
  );
};

export default Projects;
