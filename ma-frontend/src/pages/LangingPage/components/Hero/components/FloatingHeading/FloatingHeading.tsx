import { Grid } from "@mui/material";
import styles from "./FloatingHeading.module.less"
import ForwardArrow from "@/assets/svgs/right_arrow_icon.svg"
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
    // ,{
    //     text: "Free Preliminary Valuation Service",
    //     img: ForwardArrow,
    // }
]



function FloatingHeading() {

    return (
        <div className={styles.container}>
            <div className={styles.headingContainer}>
                Legacy, 
                Prosperity, 
                Vision.
            </div>
            {/* <div className={styles.subheadingContainer}>
                Connecting businesses for successful transitions and growth
            </div> */}
            <div className={styles.buttonGroupContainer}>
            <Grid container spacing={2}>
                {buttonInfos.map((elem: buttonInfo, index: number) => (
                    <Grid item xs={6} md={6}>
                        <div className={styles.buttonContainer1} 
                        key={elem.toString() + index}
                        style ={{
                            flexDirection: elem.underline? "column":"row",
                            justifyContent: elem.underline? "center": "center",
                            alignItems: elem.underline? "center": "center"
                        }}
                        >
                            
                            {elem.underline ?
                                (
                                    <>
                                        <div className={styles.buttonText1}>{elem.text}</div>
                                        
                                        <div className={styles.buttonText2}> {elem.underline}</div>
                                    </>
                                )
                                : 
                                (
                                    <>
                                        <div className={styles.buttonText3}>{elem.text}</div>
                                    </>
                                )
                            }
                            <img className={styles.buttonImage} src={elem.img}></img>
                        </div>
                            
                    </Grid>
                ))}
                <Grid item xs={12} md={12}>
                    <div className={styles.buttonContainer2}
                     key={"Prelim Valudation"}
                     >
                            <div className={styles.buttonText3}>Free Preliminary Valuation Service</div>
                            {/* <img className={styles.buttonImage} src={elem.img}></img> */}
                    </div>
                </Grid>
            </Grid>
                

            </div>
        </div>
    )

}


export default FloatingHeading;