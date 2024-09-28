import styles from "./SimpleWorkFlowCard.module.less"
// import FreeOfCharge from "@/assets/svgs/free-of-charge.svg"
import FreeOfCharge from "@/assets/pngs/free-of-charge-red.png"
import SuccessFee from "@/assets/pngs/success-fee.png"


const SimpleWorkFlowCard = (props) => {

    const {index, step, icon, title, price, description} = props;


    return (
        <div className={styles.container} key={index}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={icon}></img>
                {price == "free" ? <img className={styles.free} src={FreeOfCharge}></img>:
                <img className={styles.success} src={SuccessFee}></img>}
            </div>
            <div className={styles.titleContainer}>
                <div className={styles.step}>
                    {step}
                </div>
                <div className={styles.title}>
                    {title}
                </div>
            </div>
            <ul className={styles.listDesc}>
                { 
                    description &&
                    description.length > 0 &&
                    description.map((text, index) => {
                    return (
                    <li key={text.toString() + index} >{text}</li>
                    )
                })
                }
            </ul>
        </div>
  );
};

export default SimpleWorkFlowCard;