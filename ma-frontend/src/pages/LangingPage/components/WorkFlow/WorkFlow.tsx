import React, { useEffect, useRef, useState } from 'react';
import styles from './WorkFlow.module.less'; 
import Building from "@/assets/svgs/buildings.svg"
import BusinessMeeting from "@/assets/jpgs/business-meeting.jpg"
import BusinessMan from "@/assets/jpgs/businessman.jpg"
import List from '@/commons/components/displayLayouts/Listing/List';
import TickImage from "@/assets/pngs/bullet_point.png"
import BouncingTextLine from '@/commons/components/animated/bouncing/BouncingTextLine';
import { fontWeight } from '@mui/system';

const steps = [
  {
    step: "1",
    title: "Pre-consultation",
    description: [
      "Initial meeting with potential client",
      "Understand client's goals and objectives",
      "Assess business readiness for sale",
      "Provide preliminary valuation insights"
    ],
    icon: BusinessMeeting,
    price:"free",
    progress: 14,
  },
  {
    step: "2",
    title: "Preliminary strategy proposal",
    description: [
      "Develop tailored M&A strategy",
      "Outline potential buyer profiles",
      "Propose timeline and process overview",
      "Present initial valuation range"
    ],
    icon: BusinessMeeting,
    price:"free",
    progress: 28,
  },
  {
    step: "3",
    title: "Sell-side advisory contract",
    description:  [
      "Create comprehensive information memorandum",
      "Develop executive summary or teaser",
      "Prepare financial models and projections",
      "Compile due diligence documentation"
    ],
    icon: BusinessMeeting,
    price:"free",
    progress: 42,
  },
  {
    step: "4",
    title: "Preparation of materials",
    description:[
      "Identify and qualify potential buyers",
      "Execute targeted marketing campaign",
      "Manage initial inquiries and information requests",
      "Facilitate NDAs with interested parties"
    ],
    icon: BusinessMeeting,
    price:"free",
    progress: 56,
  },
  {
    step: "5",
    title: "Potential buyers outreach",
    description: [
      "Coordinate management presentations and site visits",
      "Assist in evaluating and comparing offers",
      "Support negotiations on price and terms"
    ],
    icon: BusinessMeeting,
    price:"free",
    progress: 70,
  },
  {
    step: "6",
    title: "Negotiation",
    description: [
      "Coordinate management presentations and site visits",
      "Assist in evaluating and comparing offers",
      "Support negotiations on price and terms"
    ],
    icon: BusinessMeeting,
    price:"free",
    progress: 100,
  },
  {
    step: "7",
    title: "Concluding Agreements",
    description:[
      "Facilitate due diligence process",
      "Coordinate with legal teams for final documentation",
      "Ensure all parties agree on terms"
    ],
    icon: BusinessMeeting,
    price:"free",
    progress: 84,
  },
  {
    step: "8",
    title: "Closing",
    description: [
      "Manage the final transaction process",
      "Oversee the transfer of ownership",
      "Ensure compliance with all legal requirements"
    ],
    icon: BusinessMeeting,
    price:"",
    progress: 100,
  },
];

const WorkFlow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.workFlowTitle}>How does M&A Work</div>
      <div className={styles.projectTimeline}>
        <div className={styles.timelineItem}>
            <span>1 week to 1 month</span>
        </div>
        <div className={styles.timelineItem}>
            <span>1 week to 1 month</span>
        </div>
        <div className={styles.timelineItem}>
            <span>1 to 3 months</span>
        </div>
      </div>
      <div className={styles.cardContainer}>
        {steps.map((item, index) => (
          <div className={styles.workflowCard} key={index}>
            <div className={styles.circleContainer}>
              <div className={`${styles.circle} ${styles[`progress${item.progress}`]}`}>
              </div>
              <span className={styles.stepNumber}>{item.step}</span>
            </div>
            <div className={styles.titleContainer}>
              <img src= {item.icon} className={styles.titleImage}></img> 
              <div className={styles.titleText}>{item.title}</div>
              <div className={styles.titleImageMask}></div>
            </div>
            {
              item.price == "free" && <div className={styles.titlePrice}>
                Free of Charge
              </div>
            }
            {/* <div className={styles.description}>{item.description}</div> */}
            <List className={styles.listDesc}>
              { 
               item.description &&
               item.description.length > 0 &&
               item.description.map((text, index) => {
                  return (
                    <List.Item 
                      key={text.toString() + index} 
                      className={styles.listItem}
                      bulletImage={TickImage}
                      itemAlign={"start"}
                      itemGap={13}
                      textFontAttr={{
                        fontSize: 13,
                        fontWeight: 400
                      }}
                      > {text}</List.Item>
                  )
               })
               }
              
            </List>
          </div>
        ))}
      </div>
      <BouncingTextLine 
      style={{
        padding:"40px"
      }}
      textAttr={{
        fontSize: "35px",
        fontWeight: "500"
        }}>
          No fees until the deal is closed — we handle everything for you!
      </BouncingTextLine>
    </div>
  )
};

export default WorkFlow;
