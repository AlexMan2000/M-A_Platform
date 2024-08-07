import React, { useEffect, useRef, useState } from 'react';
import styles from './WorkFlow.module.less'; 
import Building from "@/assets/svgs/buildings.svg"
import BusinessMeeting from "@/assets/jpgs/business-meeting.jpg"
import BusinessMan from "@/assets/jpgs/businessman.jpg"

const steps = [
  {
    step: "1",
    title: "Pre-consultation",
    description: "Family business succession planning, M&A advisory for smooth ownership changes, Ensuring business continuity through transitions",
    icon: BusinessMeeting,
    progress: 14,
  },
  {
    step: "2",
    title: "Preliminary strategy proposal",
    description: "Regulatory change adaptation support, Consolidation restructuring expertise, Digital transformation consulting",
    icon: BusinessMeeting,
    progress: 28,
  },
  {
    step: "3",
    title: "Sell-side advisory contract",
    description: "Market entry strategy development, Cross-border M&A facilitation, Fostering local partnership networks",
    icon: BusinessMeeting,
    progress: 42,
  },
  {
    step: "4",
    title: "Preparation of presentation materials",
    description: "Tailored growth strategy development, Proactive search for acquisition and investment targets, Connecting clients with PE funds, search funds, and partners",
    icon: BusinessMeeting,
    progress: 56,
  },
  {
    step: "5",
    title: "Potential buyers outreach",
    description: "Tailored growth strategy development, Proactive search for acquisition and investment targets, Connecting clients with PE funds, search funds, and partners",
    icon: BusinessMeeting,
    progress: 70,
  },
  {
    step: "6",
    title: "Negotiation and conclusion",
    description: "Tailored growth strategy development, Proactive search for acquisition and investment targets, Connecting clients with PE funds, search funds, and partners",
    icon: BusinessMeeting,
    progress: 84,
  },
  {
    step: "7",
    title: "Post-merger integration",
    description: "Tailored growth strategy development, Proactive search for acquisition and investment targets, Connecting clients with PE funds, search funds, and partners",
    icon: BusinessMeeting,
    progress: 100,
  },
];

const WorkFlow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.workFlowTitle}>How does M&A Work</div>
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
            <div className={styles.description}>{item.description}</div>
          </div>
        ))}
      </div>
      <div className={styles.belowLine}>
      No fees until the deal is closed — we handle everything for you!
      </div>
    </div>
  )
};

export default WorkFlow;
