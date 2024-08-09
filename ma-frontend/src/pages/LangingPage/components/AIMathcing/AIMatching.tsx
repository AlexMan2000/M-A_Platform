import ImageBox from "@/commons/components/medias/ImageBox";
import styles from "./AIMatching.module.less"
import ShanghaiPhoto from "@/assets/jpgs/bangkok-hotel.jpg"
import List from "@/commons/components/displayLayouts/Listing/List";
import TickImage from "@/assets/pngs/bullet_point.png"
import HighTechImage from "@/assets/jpgs/high-tech.jpg"
import AIBrain from "@/assets/webps/ai-brain.webp"
import AITech from "@/assets/jpgs/ai-tech.jpg"

const AIMatching = () => {


    const ListData = [
        "Faster Onboarding",
        "Faster Matching",
        "Faster Closing"
    ]

    const MiddleDesc = "Using sophisticated models(Transformers), AI systems analyze a variety of factors such as financial metrics, market conditions, and business synergies. This analysis identifies the most promising matches between buyers and sellers, ensuring a higher probability of successful transactions."

    return (
        <div className={styles.container}>
            <ImageBox src={AITech} 
                style={{width: "100%", height: "800px"}}
                masked={true}
                maskAttr={{backgroundColor: "rgba(0,0,0,0.2)"}}
                className={styles.backgroundImage}
            ></ImageBox>
            <div className={styles.floatingContainer}>
                <div className={styles.title}>
                    Proprietary M&A Technology
                </div>
                <List>
                    {ListData.map((elem, _) => {
                        return (
                            <List.Item
                                bulletImage={TickImage}
                                imageAttr={{"width": "20px","height":"20px"}}
                                textFontAttr={{"font-size": "25px", "color": "white"}}
                            > {elem}</List.Item>
                        )
                    })}
                </List>
                <div className={styles.desc}>
                    {MiddleDesc}
                </div>
            </div>
          
        </div>
    )
}


export default AIMatching;