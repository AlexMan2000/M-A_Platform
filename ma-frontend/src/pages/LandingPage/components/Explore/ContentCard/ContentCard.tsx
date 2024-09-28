import styles from "./ContentCard.module.less"
// import BulletImage from "@/assets/pngs/bullet_point.png"
import BulletImageGrey from "@/assets/svgs/bullet_point_grey.svg"
import BulletImageRed from "@/assets/svgs/bullet_point_red.svg"

import { IBulletBox } from "../StoryCard/StoryCard"

export interface ContentCardProps {

    index: number;
    title: string;
    intro: string;
    align_type: string;
    floating_image: string;
    button_link: string;
    bullet_points?: IBulletBox[];
}

const ContentCard = (data: ContentCardProps) => {

    const { title, intro, align_type, bullet_points, index } = data;


    return (
        <>
            <div className={`${styles.desktopContainer} ${styles[align_type]}`}>
                <div className={styles.headingContainer}>
                    <div className={styles.headingText}>{title}</div>
                    <div className={styles.bulletPoint}>{"0" + index}</div>
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
                                    <img src={BulletImageGrey} className={styles.bulletImage}>
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
            <div className={styles.mobileContainer}>

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
                                <div className={styles.bulletContainer} key={elem.toString() + index}>
                                    <img src={BulletImageRed} className={styles.bulletImage}>
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

        </>
    )
}


export default ContentCard;