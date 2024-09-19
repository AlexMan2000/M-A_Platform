import styles from "./ClientSupport.module.less"
import International from "@/assets/pngs/international.png"
import Transition from "@/assets/svgs/transition_1.svg"
import Expansion from "@/assets/svgs/expansion_1.svg"


const sections = [
  {
    header: "Succession & Transitions",
    description: "Family business succession planning, M&A advisory for smooth ownership changes, Ensuring business continuity through transitions",
    bullets: [
      "Family business succession planning",
      "M&A advisory for smooth ownership changes",
      "Ensuring business continuity through transitions"
    ],
    icon: Transition // Replace with actual icon paths
  },
  {
    header: "Strategic Transformation",
    description: "Regulatory change adaptation support, Consolidation restructuring expertise, Digital transformation consulting",
    bullets: [
      "Regulatory change adaptation support",
      "Consolidation restructuring expertise",
      "Digital transformation consulting"
    ],
    icon: International // Replace with actual icon paths
  },
  {
    header: "Growth Expansion",
    description: "Market entry strategy development, Cross-border M&A facilitation, Fostering local partnership networks",
    bullets: [
      "Market entry strategy development",
      "Cross-border M&A facilitation",
      "Fostering local partnership networks"
    ],
    icon: Expansion// Replace with actual icon paths
  },
  // {
  //   header: "Driving Sustainable Business Growth",
  //   description: "Tailored growth strategy development, Proactive search for acquisition and investment targets, Connecting clients with PE funds, search funds, and partners",
  //   bullets: [
  //     "Tailored growth strategy development",
  //     "Proactive search for acquisition and investment targets",
  //     "Connecting clients with PE funds, search funds, and partners"
  //   ],
  //   icon: Sustainable // Replace with actual icon paths
  // }
];

const ClientSupport = () => (
  <div className={styles.container}>
    <div className={styles.sectionHeader}>How We Support Our Clients</div>
    <div className={styles.sectionDescription}>
    We provide tailored guidance and strategic insights to ensure seamless business transitions that honor your legacy and drive future success.
    </div>
    <div className={styles.grid}>
      {sections.map((section, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.iconWrapper}>
            <img src={section.icon} alt={section.header} className={styles.icon} />
          </div>
         <div className={styles.title}>{section.header}</div>
          <ul className={styles.bulletPoints}>
            {
                section.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                ))
            }
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default ClientSupport;
