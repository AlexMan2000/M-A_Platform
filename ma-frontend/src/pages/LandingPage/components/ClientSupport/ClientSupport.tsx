import styles from "./ClientSupport.module.less"
import International from "@/assets/pngs/international.png"
import Transition from "@/assets/svgs/transition_1.svg"
import Expansion from "@/assets/svgs/expansion_1.svg"
import InternationalRed from "@/assets/svgs/international_red.svg"
import TransitionRed from "@/assets/svgs/transition_red.svg"
import ExpansionRed from "@/assets/svgs/expansion_red.svg"


const ClientSupport = () => {

  const sections = [
    {
      header: "Succession & Transitions",
      description: "Family business succession planning, M&A advisory for smooth ownership changes, Ensuring business continuity through transitions",
      bullets: [
        "Family business succession planning",
        "M&A advisory for smooth ownership changes",
        "Ensuring business continuity through transitions"
      ],
      icon: {
        mobile:TransitionRed,
        desktop: Transition
      } 
    },
    {
      header: "Strategic Transformation",
      description: "Regulatory change adaptation support, Consolidation restructuring expertise, Digital transformation consulting",
      bullets: [
        "Regulatory change adaptation support",
        "Consolidation restructuring expertise",
        "Digital transformation consulting"
      ],
      icon: {
        mobile:InternationalRed,
        desktop: International
      } 
    },
    {
      header: "Growth Expansion",
      description: "Market entry strategy development, Cross-border M&A facilitation, Fostering local partnership networks",
      bullets: [
        "Market entry strategy development",
        "Cross-border M&A facilitation",
        "Fostering local partnership networks"
      ],
      icon: {
        mobile:ExpansionRed,
        desktop: Expansion
      } 
    },
  ];


  return (
    <div className={styles.container}>
      <div className={styles.sectionHeader}>How We Support Our Clients</div>
      <div className={styles.sectionDescription}>
        We provide tailored guidance and strategic insights to ensure seamless business transitions that honor your legacy and drive future success.
      </div>
      <div className={styles.grid}>
        {sections.map((section, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.iconWrapper}>
              <img src={section.icon.mobile} alt={section.header} className={styles.mobileIcon} />
              <img src={section.icon.desktop} alt={section.header} className={styles.desktopIcon} />
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
      <div className={styles.backgroundImage}></div>
    </div>
  )
};

export default ClientSupport;
