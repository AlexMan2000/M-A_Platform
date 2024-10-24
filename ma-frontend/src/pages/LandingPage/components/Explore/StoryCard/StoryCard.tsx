import ContentCard from "../ContentCard/ContentCard";
import styles from "./StoryCard.module.less"


export interface IBulletBox {
    text: string;
}

export interface IStoryCard {

    index: number;
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


const StoryCard = ({ data }: StoryCardProps) => {

    const { align_type, floating_image, index } = data;



    return (<>
     
        <div className={`${styles.container} story-container ${align_type}`}>
            
                <div className={styles.backgroundContainer}>
                    {
                        align_type == "double" ?
                            <>
                                <div className={styles.leftDouble}>
                                </div>
                                <div className={styles.rightDouble}>
                                    <ContentCard {...data} index={index}></ContentCard>
                                </div>
                            </> :
                            <>
                                <div className={styles.leftPlain}>
                                    <ContentCard {...data}></ContentCard>
                                </div>
                                <div className={styles.rightPlain}>

                                </div>
                            </>
                    }

                    {floating_image &&
                        <div className={`${styles.floatingImageContainer} ${styles[align_type]}`}>
                            <img src={floating_image} className={styles.floatingImg}></img>
                        </div>}
                    {/* <div className={`${styles.floatingIndex} ${styles[align_type]}`}>
                    {`0${index}`}
                </div> */}
                </div> 

        </div>
        <div className={styles.mobileContent}>
            <ContentCard {...data}/>
        </div>
    </>)
        
    
}

export default StoryCard;