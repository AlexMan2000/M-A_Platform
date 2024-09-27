import styles from "./ContentCard.module.less"
// import BulletImage from "@/assets/pngs/bullet_point.png"
import BulletImageGrey from "@/assets/svgs/bullet_point_grey.svg"
import BulletImageRed from "@/assets/svgs/bullet_point_red.svg"

import { IStoryCard } from "../StoryCard/StoryCard"
import { useSelector } from "react-redux";
import { selectGlobalState } from "@/store/slice/globalSlice/globalSlice";


const ContentCard = (data: IStoryCard) => {

    const {title, intro, align_type, bullet_points, index} = data;
    const { isMobile } = useSelector(selectGlobalState);

    return (
        <div className={`${styles.container} ${isMobile ? "":styles[align_type]}`}>
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
                                <img src={isMobile? BulletImageRed: BulletImageGrey} className={styles.bulletImage}>
                                </img>
                                <div className={styles.bulletText}>
                                    {elem.text}
                                </div>
                            </div>
                        ))   
                    }
                </div>
            }
        </div>
       
    )
}


export default ContentCard;