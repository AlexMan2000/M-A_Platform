import styles from "./Footer.module.less"
import Location from "@/assets/svgs/location.svg"
import Contact from "@/assets/svgs/contact.svg"


const Footer = () => {
  

  const data = {
    company: [
      "About Us",
      "Contact Us",
      "Our Technology",
      "Our Service"
    ],
    service: [
      "Transfer",
      "Sale",
      "Business Succession",
      "Acquisition",
      "Consultation"
    ]
  }

  return (
    <div className={styles.container}>
       <div className={styles.talk}>
        <div className={styles.headingGroup}>
          <div className={styles.headingTitle}>Want to talk with Us?</div>
          <div className={styles.headingDesc}>We are always at your service</div>
        </div>
        <div className={styles.contactNumbers}>
          <div className={styles.locationGroup}>
            <img className={styles.locationImage} src={Location}></img>
            <div className={styles.lineGroup}>
              <div className={styles.topLine}>xxx.xxxx</div>
              <div className={styles.bottomLine}>Hongkong</div>
            </div>
          </div>
          <div className={styles.phoneNumber}>
            <img className={styles.phoneImage} src={Contact}></img>
            <div className={styles.lineGroup}>
              <div className={styles.topLine}>(+852) xxxxxxxxxxx</div>
              <div className={styles.bottomLine}>Company@gmail.com</div>
            </div>
          </div>
        </div>
       </div>
       <div className={styles.company}>
        <div className={styles.heading}>Our Company</div>
        <ul className={styles.listDesc}>
          {data["company"].map((item, index)=>(
            <li key={item.toString() + index} className={styles.list}>
              {item}
            </li>
          ))}
        </ul>
       </div>
       <div className={styles.services}>
        <div className={styles.heading}>Our Services</div>
          <ul className={styles.listDesc}>
            {data["service"].map((item, index)=>(
              <li key={item.toString() + index} className={styles.list}>
                {item}
              </li>
            ))}
          </ul>
       </div>
       <div className={styles.contact}>
          <div className={styles.heading}>Contact Us</div>
          <div className={styles.emailInput}>
            <input className={styles.input} placeholder="Email" type="text"></input>
          </div>
          <div className={styles.messageInput}>
            <textarea className={styles.input} placeholder="Messages"></textarea>
          </div>
          <button className={styles.submit}>Submit Now</button>
       </div>
    </div>
  );
};

export default Footer;