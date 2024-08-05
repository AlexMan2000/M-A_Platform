import styles from "./FloatingHeading.module.less"
import ForwardArrow from "@/assets/svgs/right_arrow_icon.svg"
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import ClickableButton from "@/commons/components/ClickableButton/ClickableButton";

interface buttonInfo {
    text: string;
    img: string;
    underline?: string;
}

const buttonInfos: buttonInfo[] = [
    {
        text: "Transfer, sale and business succession",
        img: ForwardArrow,
        underline: "Get a Free Consultation"
    },
    {
        text: "Acquisition Need",
        img: ForwardArrow,
        underline: "Get a Free Consultation"
    }
    ,{
        text: "Free Preliminary Valuation Service",
        img: ForwardArrow,
    }
]


function FloatingHeading() {

    return (
        <div className={styles.container}>
            <div className={styles.headingContainer}>
                Leading SME M&A Solutions in Greater China and Southeast Asia
            </div>
            <div className={styles.subheadingContainer}>
                Connecting businesses for successful transitions and growth
            </div>
            <div className={styles.buttonGroupContainer}>
                {buttonInfos.map((elem: buttonInfo, index: number) => (
                    <div className={styles.buttonContainer} key={elem.toString() + index}>
                        <div className={styles.upperContainer}>
                            <div className={styles.buttonText}>{elem.text}</div>
                            <img className={styles.buttonImage} src={elem.img}></img>
                        </div>
                        {elem.underline&&<div className={styles.underContainer}>
                            <div className={styles.buttonText}> {elem.underline}</div>
                        </div>
                        }
                    </div>
            ))}

            </div>
        </div>
    )

}


export default FloatingHeading;