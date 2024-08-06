import styles from "./Explore.module.less"
import StoryCard from "./StoryCard/StoryCard";
import STORY1 from "@/assets/jpgs/story_1.jpg"
import STORY2 from "@/assets/jpgs/story_2.jpg"
import STORY3 from "@/assets/jpgs/story_3.jpg"
import STORY4 from "@/assets/jpgs/story_4.jpg"
import { useEffect, useRef, useState } from "react";

const stories= [
    {
        title: "SME M&A Expertise",
        intro: "Specializing in mergers and acquisitions for small and medium enterprises across Greater China and Southeast Asia, with a focus on businesses valued between US$500k and US$50m.",
        align_type: "double", 
        floating_image: STORY1,
        button_link:"",
        bullet_points: [
            {"text":"中小企业支援33年"}
        ]
    },
    {
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
        title: "Extensive Network",
        intro: "Access to a vast network of domestic and international buyers and sellers, facilitating connections and enhancing opportunities for successful deal-making.",
        align_type: "double", 
        floating_image: STORY3,
        button_link:""
    },
    {
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
                    M-A Trading Platform
                </div>
           
                <div className={styles.headingIntro}>
                Utilizing advanced AI technology for efficient buyer-seller matching and data-driven insights, streamlining the M&A process for our clients.
                </div>
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