// import ImageBox from "@/commons/components/medias/ImageBox";
import styles from "./AIMatching.module.less"
// import List from "@/commons/components/displayLayouts/Listing/List";
// import TickImage from "@/assets/pngs/bullet_point.png"
// import PenDrawGreenWebp from "@/assets/webps/pen-draw-green-circle.webp"
// import { encodeToBase64 } from "@/commons/utils/encoderHandler";
// import AITechBackgound from "@/assets/pngs/AI_tech_background.png"
import Preparation from "@/assets/pngs/Preparation.png"
import Matching from "@/assets/pngs/Matching.png"
import Closing from "@/assets/pngs/Closing.png"
import GreyTick from "@/assets/svgs/tick_grey.svg"

const AIMatching = () => {


    const ListData = [
        {
            image: Preparation,
            desc: "Faster Onboarding"
        },
        {
            image: Matching,
            desc: "Faster Matching"
        }
        ,
        {
            image: Closing,
            desc:  "Faster Closing"
        }
    ]

    const MiddleDesc =`Our proprietary M&A technology leverages digitalization and AI tools to streamline every aspect of the process, from client onboarding to documentation and deal execution. AI enhances the matching of buyers and sellers by analyzing strategic objectives and identifying synergies, significantly improving efficiency and accelerating deal closures compared to traditional financial advisory models.`
    return (
        <div className={styles.container}>
           <div className={styles.topContainer}>
            <div className={styles.heading}>Proprietary M&A Technology</div>
            <div className={styles.desc}>
                    {MiddleDesc}
            </div>
           </div>
       
           <div className={styles.imageContainer}>
                {ListData.map((item, index) => (
                    <div key = {item.toString() + index} className={styles.imageGroup}>
                        <div className={styles.imageBox}>
                            <img className={styles.image} src={item.image}></img>
                        </div>
                        <div className={styles.desc}>
                            <img className={styles.tick} src={GreyTick}></img>
                            {item.desc}
                        </div>
                    </div>
                ))}
           </div>
        </div>
    )
}


export default AIMatching;