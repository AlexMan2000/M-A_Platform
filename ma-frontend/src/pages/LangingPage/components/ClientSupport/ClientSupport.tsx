import styles from "./ClientSupport.module.less"
import Building from "@/assets/svgs/buildings.svg"


const sections = [
  {
    header: "Navigating Succession and Ownership Transitions",
    description: "Family business succession planning, M&A advisory for smooth ownership changes, Ensuring business continuity through transitions",
    bullets: [
      "Family business succession planning",
      "M&A advisory for smooth ownership changes",
      "Ensuring business continuity through transitions"
    ],
    icon: Building // Replace with actual icon paths
  },
  {
    header: "Thriving Amidst Industry Disruption",
    description: "Regulatory change adaptation support, Consolidation restructuring expertise, Digital transformation consulting",
    bullets: [
      "Regulatory change adaptation support",
      "Consolidation restructuring expertise",
      "Digital transformation consulting"
    ],
    icon: Building // Replace with actual icon paths
  },
  {
    header: "Accelerating International Expansion",
    description: "Market entry strategy development, Cross-border M&A facilitation, Fostering local partnership networks",
    bullets: [
      "Market entry strategy development",
      "Cross-border M&A facilitation",
      "Fostering local partnership networks"
    ],
    icon: Building// Replace with actual icon paths
  },
  {
    header: "Driving Sustainable Business Growth",
    description: "Tailored growth strategy development, Proactive search for acquisition and investment targets, Connecting clients with PE funds, search funds, and partners",
    bullets: [
      "Tailored growth strategy development",
      "Proactive search for acquisition and investment targets",
      "Connecting clients with PE funds, search funds, and partners"
    ],
    icon: Building // Replace with actual icon paths
  }
];

const ClientSupport = () => (
  <div className={styles.container}>
    <div className={styles.sectionHeader}>Our Services</div>
    <div className={styles.sectionDescription}>
      We work closely with our customers to solve their problems and support the growth of their business.
    </div>
    <div className={styles.grid}>
      {sections.map((section, index) => (
        <div className={styles.card} key={index}>
          <img src={section.icon} alt={section.header} className={styles.icon} />
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
