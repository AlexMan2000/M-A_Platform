import styles from "./ServeIndustry.module.less"
import IT from "@/assets/pngs/IT.png"
import Retail from "@/assets/pngs/Retail.png"
import Professional from "@/assets/pngs/Professional.png"
import RealEstate from "@/assets/pngs/Real_Estate.png"
import FoodBeverage from "@/assets/pngs/Food_Beverage.png"
import Education from "@/assets/pngs/Education.png"
import ImageBox from "./components/ImageBox"

const imageData = [
    {
        image: IT,
        text: "IT/\nCommunications"
    },
    {
        image: Professional,
        text: "Professional\nServices"
    },
    {
        image: Retail,
        text: "Retail"
    },
    {
        image: RealEstate,
        text: "Real Estate"
    },
    {
        image: FoodBeverage,
        text: "Food& Beverage"
    },
    {
        image: Education,
        text: "Education"
    },
]


const ServeIndustry = () => {


    return (
        <div className={styles.container} id="Industry">
            <div className={styles.heading}>Our M&A Service By Industry</div>
            <div className={styles.cards}>
                {imageData.map((elem, index) => (
                    <ImageBox key={elem.toString() + index} image={elem.image} text={elem.text}></ImageBox>
                ))}
            </div>
            <div className={styles.backgroundImage}></div>
        </div>
    )
}


export default ServeIndustry;