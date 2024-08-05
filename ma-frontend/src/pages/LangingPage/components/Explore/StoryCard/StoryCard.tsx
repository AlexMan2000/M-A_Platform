import styles from "./StoryCard.module.less"

interface IBulletBox {
    image_url: string;
    text: string;
}

interface IStoryCard {
    title: string;
    intro: string;
    align_direction: string;
    floating_image: string;
    button_link: string;
    bullet_points?: IBulletBox[];
}

const StoryCard = (data: IStoryCard) => {

    const {title, intro, align_direction, floating_image, bullet_points, button_link} = data;

    return (
        <div className={styles.container}>
            <div className={styles.leftBlankContainer}></div>
            <div className={styles.rightGreenContainer}>
                <div className={styles.headingContainer}>
                    <div className={styles.headingText}>{title}</div>
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
                                    <div className={styles.bulletImageContainer}>
                                        <img className={styles.bulletImage}>
                                            {elem.image_url}
                                        </img>
                                    </div>
                                    <div className={styles.bulletText}>
                                        {elem.text}
                                    </div>
                                </div>
                            ))   
                        }
                    </div>
                }
                <div className={styles.button}></div>
            </div>
            {floating_image && 
            <div className={styles.floatingImgContainer}>
                <img src={""}></img>
            </div>}
        </div>
    )
}

export default StoryCard;