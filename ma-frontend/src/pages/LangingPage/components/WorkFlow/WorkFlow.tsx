import {useRef, useState } from 'react';
import styles from './WorkFlow.module.less'; 
import SimpleWorkFlowCard from './components/SimpleWorkFlowCard';
import CustomerService from "@/assets/pngs/customer-service.png"

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
    icon: CustomerService,
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
    icon: CustomerService,
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
    icon: CustomerService,
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
    icon: CustomerService,
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
    icon: CustomerService,
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
    icon: CustomerService,
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
    icon: CustomerService,
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
    icon: CustomerService,
    price:"success-fee",
    progress: 100,
  },
];




const WorkFlow = () => {


  const [activeGroup, setActiveGroup] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);


  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -1300, behavior: 'smooth' });}
      setActiveGroup(Math.max(0, activeGroup - 1));
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 1250, behavior: 'smooth' });
      setActiveGroup(Math.min(activeGroup + 1, 2));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.workFlowTitle}>Our Working Process</div>
      <div className={styles.projectTimeline}>
        <div className={`${styles.timelineItem} ${activeGroup == 0 ? styles.active:""}`}>
            <span>1st Phase: Preparation (1 Week-1 Month)</span>
        </div>
        <div className={`${styles.timelineItem} ${activeGroup == 1 ? styles.active:""}`}>
            <span>2nd Phase: Matching(1 Week-1 Month)</span>
        </div>
        <div className={`${styles.timelineItem} ${activeGroup >= 2 ? styles.active:""}`}>
            <span>3rd Phase: Closing(1 Month-3 Months)</span>
        </div>
      </div>
      <div className={styles.cardContainer} ref={scrollRef}>
        {steps.map((item, index) => (
          <SimpleWorkFlowCard 
            key={index}
            index={index}
            {...item}
          ></SimpleWorkFlowCard>
        ))}
        
        <button className={styles.navButtonPrev} onClick={scrollLeft}>❮</button>
        <button className={styles.navButtonAfter} onClick={scrollRight}>❯</button>
        
      </div>
      {/* <BouncingTextLine 
      style={{
        padding:"40px"
      }}
      textAttr={{
        fontSize: "35px",
        fontWeight: "500"
        }}>
          No fees until the deal is closed — we handle everything for you!
      </BouncingTextLine> */}
    </div>
  )
};

export default WorkFlow;
