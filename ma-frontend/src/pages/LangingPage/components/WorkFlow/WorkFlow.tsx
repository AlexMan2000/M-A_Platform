import React, { useEffect, useRef, useState } from 'react';
import styles from './WorkFlow.module.less'; // Adjust the path as needed
import Building from "@/assets/svgs/buildings.svg"

const steps = [
  {
    step: "1",
    title: "Pre-consultation",
    description: "Family business succession planning, M&A advisory for smooth ownership changes, Ensuring business continuity through transitions",
    icon: Building
  },
  {
    step: "2",
    title: "Preliminary strategy proposal",
    description: "Regulatory change adaptation support, Consolidation restructuring expertise, Digital transformation consulting",
    icon: Building
  },
  {
    step: "3",
    title: "Sell-side advisory contract",
    description: "Market entry strategy development, Cross-border M&A facilitation, Fostering local partnership networks",
    icon: Building
  },
  {
    step: "4",
    title: "Preparation of presentation materials",
    description: "Tailored growth strategy development, Proactive search for acquisition and investment targets, Connecting clients with PE funds, search funds, and partners",
    icon: Building
  },
  {
    step: "5",
    title: "Potential buyers outreach",
    description: "Tailored growth strategy development, Proactive search for acquisition and investment targets, Connecting clients with PE funds, search funds, and partners",
    icon: Building
  },
  {
    step: "6",
    title: "Negotiation and conclusion",
    description: "Tailored growth strategy development, Proactive search for acquisition and investment targets, Connecting clients with PE funds, search funds, and partners",
    icon: Building
  },
  {
    step: "7",
    title: "Post-merger integration",
    description: "Tailored growth strategy development, Proactive search for acquisition and investment targets, Connecting clients with PE funds, search funds, and partners",
    icon: Building
  },
];

const WorkFlow = () => {
  return (
    <div className={styles.container}>
      {steps.map((item, index) => (
        <div className={styles.workflowCard} key={index}>
          <div className={styles.iconWrapper}>
            <img src= {item.icon} className={styles.icon}></img> 
          </div>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.description}>{item.description}</div>
        </div>
      ))}
    </div>
  )
};

export default WorkFlow;
