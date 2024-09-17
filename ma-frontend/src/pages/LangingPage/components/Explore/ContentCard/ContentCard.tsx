import styles from "./ContentCard.module.less"
// import BulletImage from "@/assets/pngs/bullet_point.png"
import BulletImage from "@/assets/svgs/bullet_point_grey.svg"
import { IStoryCard } from "../StoryCard/StoryCard"


const ContentCard = (data: IStoryCard) => {

    const {title, intro, align_type, bullet_points, button_link, index} = data;



    const handleClick = () => {
        console.log(button_link)
    }

    return (
        <div className={`${styles.container} ${styles[align_type]}`}>
            <div className={styles.headingContainer}>
                <div className={styles.headingText}>{title}</div>
                <div className={styles.bulletPoint}>{index}</div>
            </div>
            <div className={styles.subheadingContainer}>
                <div className={styles.subheadingText}>{intro}</div>
            </div>
            {
                bullet_points 
                && bullet_points.length > 0 
                && 
                <div className={styles.bulletGroupContainer}>
                    {
                        bullet_points.map((elem, index) => (
                            <div className={`${styles["bulletContainer"]} ${styles[align_type]}`} key={elem.toString() + index}>
                                <img src={BulletImage} className={styles.bulletImage}>
                                </img>
                                <div className={styles.bulletText}>
                                    {elem.text}
                                </div>
                            </div>
                        ))   
                    }
                </div>
            }
            {/* <div className={`${styles.button} ${styles[align_type]}`}
            onClick={handleClick}>
                Details
            </div> */}
        </div>
       
    )
}


export default ContentCard;