import styles from "./Explore.module.less"
import StoryCard from "./StoryCard/StoryCard";
import STORY1 from "@/assets/jpgs/ma_story_1.jpg"
import STORY2 from "@/assets/jpgs/ma_story_2.jpg"
import STORY3 from "@/assets/pngs/ma_story_3.png"
import STORY4 from "@/assets/pngs/ma_story_4.png"
import { Divider } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const stories= [
    {
        index: 1,
        title: "Business Succession and M&A expertise",
        intro: "Specializing in mergers and acquisitions for small and medium enterprises across Greater China and Southeast Asia, with a focus on businesses valued between US$500k and US$50m.",
        align_type: "double", 
        floating_image: STORY1,
        button_link:"",
        bullet_points: [
            {"text":"中小企业支援33年"}
        ]
    },
    {
        index: 2,
        title: "Regional Knowledge",
        intro: "Leveraging strong network of local partners and experienced consultants with decades of experience and deep understanding of local markets and industries to navigate the complexities of both domestic and cross-border transactions.",
        align_type: "plain", 
        floating_image: STORY2,
        button_link:"",
        bullet_points: [
            {"text":"中小企业支援333年"},
            {"text":"中业支援333年"},
        ]
    },
    {
        index: 3,
        title: "Extensive Network",
        intro: "Access to a vast network of domestic and international buyers and sellers, facilitating connections and enhancing opportunities for successful deal-making.",
        align_type: "double", 
        floating_image: STORY3,
        button_link:""
    },
    {
        index: 4,
        title: "Technology-Driven Solutions",
        intro: "Utilizing advanced AI technology for efficient buyer-seller matching and data-driven insights, streamlining the M&A process for our clients.",
        align_type: "plain", 
        floating_image: STORY4,
        button_link:""
    },
  ];

function Explore () {

    return (
        <div className={styles.container}>
            <div className={styles.headingContainer}>
                <div className={styles.headingTitle}>
                Leading Business Succession and M&A Solutions for SMEs across Greater China and Southeast Asia
                </div>
           
                <div className={styles.headingIntro}>
                Connecting businesses for successful transitions and growth                </div>
            </div>
            <Divider orientation="horizontal" 
                sx={{ width : "50%", 
                bgcolor: "#12837b", 
                height: "1px", 
                transform: "translateX(50%)",
                opacity: "0.4"
                
                }}></Divider>
            <div className={styles.subheadingContainer}>
                Why Choose LegacyLink M&A?
            </div>
            <div className={styles.storyContainer}>
                {stories && stories.length > 0 &&
                    stories.map((elem, index: number) => {
                        return (
                            <StoryCard 
                                key={elem.toString() + index} 
                                data = {elem}
                                > 
                            </StoryCard>
                        )
                    })
                }
            </div>
            
            
        </div>
    )
}


export default Explore;