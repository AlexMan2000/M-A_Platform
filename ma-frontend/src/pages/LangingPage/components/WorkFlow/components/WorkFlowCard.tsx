import styles from "./WorkFlowCard.module.less"
import List from '@/commons/components/displayLayouts/Listing/List';


const WorkFlowCard = (props) => {

    const {index, step, icon, title, price, description, progress} = props;

    return (
        <div className={styles.container} key={index}>
            <div className={styles.circleContainer}>
                <div className={`${styles.circle} ${styles[`progress${progress}`]}`}>
                </div>
                <span className={styles.stepNumber}>{step}</span>
            </div>
            <div className={styles.titleContainer}>
                <img src= {icon} className={styles.titleImage}></img> 
                <div className={styles.titleText}>{title}</div>
                <div className={styles.titleImageMask}></div>
            </div>
            {
                price == "free" ? <div className={styles.titlePrice}>
                Free of Charge
                </div>: <div className={`${styles.titlePrice} ${styles["success"]}`}>
                Success Fee</div>
            }
            {/* <div className={styles.description}>{item.description}</div> */}
            <List className={styles.listDesc}
                orientation='vertical'
            >
                { 
                description &&
                description.length > 0 &&
                description.map((text, index) => {
                    return (
                    <List.Item 
                        key={text.toString() + index} 
                        className={styles.listItem}
                        // bulletImage={TickImage}
                        itemAlign={"start"}
                        // itemGap={13}
                        textFontAttr={{
                        fontSize: "13px",
                        fontWeight: "400"
                        }}
                        > {text}</List.Item>
                    )
                })
                }
                
            </List>
        </div>
    );
};

export default WorkFlowCard;