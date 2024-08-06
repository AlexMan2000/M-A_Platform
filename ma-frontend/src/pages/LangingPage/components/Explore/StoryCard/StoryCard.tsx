import ContentCard from "../ContentCard/ContentCard";
import styles from "./StoryCard.module.less"



export interface IBulletBox {
    text: string;
}

export interface IStoryCard {

    title: string;
    intro: string;
    align_type: string;
    floating_image: string;
    button_link: string;
    bullet_points?: IBulletBox[];
}

interface StoryCardProps {
    data: IStoryCard;
}

const StoryCard = ({ data}: StoryCardProps) => {

    const {align_type, floating_image} = data;

    return (
        <div className={`${styles.container} ${styles[align_type]}`}>
            <div className={styles.backgroundContainer}>
                {
                    align_type == "double" ? 
                    <>
                        <div className={styles.left}>
                        </div>
                        <div className={styles.right}>
                            <ContentCard {...data}></ContentCard>
                        </div>
                    </> : 
                        <div className={styles.plain}>
                            <ContentCard {...data}></ContentCard>
                        </div>
                }
                
                {floating_image && 
                <div className={`${styles.floatingImageContainer} ${styles[align_type]}`}>
                    <img src={floating_image} className={styles.floatingImg}></img>
                </div>}
            </div>
            
        </div>
    )
}

export default StoryCard;