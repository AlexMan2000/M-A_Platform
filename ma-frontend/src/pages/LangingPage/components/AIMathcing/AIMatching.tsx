import ImageBox from "@/commons/components/medias/ImageBox";
import styles from "./AIMatching.module.less"
import ShanghaiPhoto from "@/assets/jpgs/bangkok-hotel.jpg"
import List from "@/commons/components/displayLayouts/Listing/List";
import TickImage from "@/assets/pngs/bullet_point.png"
import HighTechImage from "@/assets/jpgs/high-tech.jpg"
import AIBrain from "@/assets/webps/ai-brain.webp"
import AITech from "@/assets/jpgs/ai-tech.jpg"
import AITechBusiness from "@/assets/jpgs/ai-tech-trading.jpg"
import PenDrawGreenSvg from "@/assets/svgs/pen-draw-green-circle.svg"
import PenDrawGreenWebp from "@/assets/webps/pen-draw-green-circle.webp"
import { encodeToBase64 } from "@/commons/utils/encoderHandler";
import AITechBackgound from "@/assets/pngs/AI_tech_background.png"

const AIMatching = () => {


    const ListData = [
        "Faster Onboarding",
        "Faster Matching",
        "Faster Closing"
    ]

    const MiddleDesc =`Using sophisticated models(Transformers), 
    AI systems analyze a variety of factors such as financial metrics, 
    market conditions, and business synergies. 
    This analysis identifies the most promising matches 
    between buyers and sellers, ensuring a higher probability of successful transactions.
    AI aids in managing the integration of operations, cultures, and systems by automating administrative tasks and providing decision support. AI-driven project management tools track progress, identify potential bottlenecks, and suggest corrective actions. `
    return (
        <div className={styles.container}>
            <ImageBox src={AITechBackgound} 
                style={{width: "100%", height: "800px"}}
                masked={true}
                maskAttr={{backgroundColor: "rgba(0,0,0,0.68)"}}
                className={styles.backgroundImage}
            ></ImageBox>
            <div className={styles.floatingContainer}>
                <div className={styles.title}>
                    Proprietary M&A Technology
                </div>
                
                <div className={styles.desc}>
                    {MiddleDesc}
                </div>
                <List orientation="horizontal"
                    listGap="180px"
                >
                    {ListData.map((elem, index) => {
                        return (
                            <List.Item
                            key={encodeToBase64(elem) + index}
                                // itemGap={"120px"}
                                bulletImage={TickImage}
                                backgroundImage={PenDrawGreenWebp}
                                imageAttr={{width: "25px",height:"25px"}}
                                textFontAttr={{fontSize: "30px", color: "white"}}
                            > {elem}</List.Item>
                        )
                    })}
                </List>
            </div>
          
        </div>
    )
}


export default AIMatching;