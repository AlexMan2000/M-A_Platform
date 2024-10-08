import { useRef, useState } from 'react';
import styles from './WorkFlow.module.less';
import SimpleWorkFlowCard from './components/SimpleWorkFlowCard';
import CustomerService from "@/assets/pngs/customer-service.png"
import Approval from "@/assets/pngs/approval.png"
import Advisory from "@/assets/pngs/financial-advisor.png"
import Polygon from "@/assets/svgs/polygon_white.svg"
import PrepMaterial from "@/assets/svgs/prep-material.svg"
import PotentialBuyer from "@/assets/pngs/potential-buyer.png"
import Negotiation from "@/assets/pngs/negotiation.png"
import Concluding from "@/assets/svgs/concluding-agreement.svg"

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
    price: "free",
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
    icon: Approval,
    price: "free",
    progress: 28,
  },
  {
    step: "3",
    title: "Sell-side advisory contract",
    description: [
      "Create comprehensive information memorandum",
      "Develop executive summary or teaser",
      "Prepare financial models and projections",
      "Compile due diligence documentation"
    ],
    icon: Advisory,
    price: "free",
    progress: 42,
  },
  {
    step: "4",
    title: "Preparation of materials",
    description: [
      "Identify and qualify potential buyers",
      "Execute targeted marketing campaign",
      "Manage initial inquiries and information requests",
      "Facilitate NDAs with interested parties"
    ],
    icon: PrepMaterial,
    price: "free",
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
    icon: PotentialBuyer,
    price: "free",
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
    icon: Negotiation,
    price: "free",
    progress: 100,
  },
  {
    step: "7",
    title: "Concluding Agreements",
    description: [
      "Facilitate due diligence process",
      "Coordinate with legal teams for final documentation",
      "Ensure all parties agree on terms"
    ],
    icon: Concluding,
    price: "free",
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
    price: "success-fee",
    progress: 100,
  },
  {
    step: "9",
    title: "New Beginnings",
    description: [
      "Immediate cash from sale",
      "Unlock years of profit",
      "Embrace retirement freedom",
      "Explore new personal interests",
      "Drive growth with new partner"
    ],
    icon: CustomerService,
    price: "none",
    progress: 100,
  },
];




const WorkFlow = () => {

  const [activeGroup, setActiveGroup] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (scrollRef, index: number, behavior: ScrollBehavior = "smooth") => {

    if (scrollRef.current) {
      const items = scrollRef.current.children;
      if (items.length > 0) {
        const item = items[index] as HTMLElement;
        const containerRect = scrollRef.current.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        const scrollPosition =
          itemRect.left - containerRect.left + scrollRef.current.scrollLeft + itemRect.width / 2 - containerRect.width / 2;
        scrollRef.current.scrollTo({ left: scrollPosition, behavior: behavior });
      }
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollToIndex(scrollRef, Math.max(0, activeGroup - 1), "smooth")
      setActiveGroup(Math.max(0, activeGroup - 1));
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollToIndex(scrollRef, Math.min(activeGroup + 1, 2), "smooth")
      setActiveGroup(Math.min(activeGroup + 1, 2));
    }
  };

  const partitionArray = (arr, groupSize) => {
    return arr.reduce((result, value, index) => {
      if (index % groupSize === 0) {
        result.push([]);
      }
      result[result.length - 1].push(value);
      return result;
    }, []);
  }

  const workGroup = partitionArray(steps.map((item, index) => (
    <SimpleWorkFlowCard
      key={index}
      index={index}
      {...item}
    ></SimpleWorkFlowCard>
  )), 3)

  return (
    <div className={styles.container} id="Workflow">
      <div className={styles.workFlowTitle}>Our Working Process</div>
      <div className={styles.projectTimeline}>
        <div className={styles.timelineNavPrev} onClick={scrollLeft}>
          <img className={styles.img} src={Polygon}></img>
        </div>
        <div className={`${styles.timelineItem} ${activeGroup == 0 ? styles.active : ""}`} onClick={()=>{setActiveGroup(0);scrollToIndex(scrollRef, 0, "smooth")}}>
          <span>1st Phase: Preparation (1 Week-1 Month)</span>
        </div>
        <div className={`${styles.timelineItem} ${activeGroup == 1 ? styles.active : ""}`} onClick={()=>{setActiveGroup(1);scrollToIndex(scrollRef, 1, "smooth")}}>
          <span>2nd Phase: Matching (1 Week-1 Month)</span>
        </div>
        <div className={`${styles.timelineItem} ${activeGroup >= 2 ? styles.active : ""}`} onClick={()=>{setActiveGroup(2);scrollToIndex(scrollRef, 2, "smooth")}}>
          <span>3rd Phase: Closing (1 Month-3 Months)</span>
        </div>
        <div className={styles.timelineNavNext} onClick={scrollRight}>
          <img className={styles.img} src={Polygon}></img>
        </div>
      </div>
      <div className={styles.cardContainer} ref={scrollRef}>
        {workGroup.map((group, index) => (
          <div className={styles.group} key={group.toString() + index}>
            {group}
          </div>
        ))}

        <button className={styles.navButtonPrev} onClick={scrollLeft}>❮</button>
        <button className={styles.navButtonAfter} onClick={scrollRight}>❯</button>
      </div>
    </div>
  )
}
  ;

export default WorkFlow;
