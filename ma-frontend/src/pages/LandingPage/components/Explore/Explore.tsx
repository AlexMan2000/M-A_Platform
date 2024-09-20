import styles from "./Explore.module.less"
import StoryCard from "./StoryCard/StoryCard";
import STORY1 from "@/assets/jpgs/ma_story_1.jpg"
import STORY2 from "@/assets/jpgs/ma_story_2.jpg"
import STORY3 from "@/assets/pngs/ma_story_3.png"
import STORY4 from "@/assets/pngs/ma_story_4.png"

const stories= [
    {
        index: 1,
        title: "Business Succession and M&A expertise",
        intro: "Specializing in mergers and acquisitions for small and medium enterprises across Greater China and Southeast Asia, with a focus on businesses valued between US$500k and US$50m.",
        align_type: "double", 
        floating_image: STORY1,
        button_link:"",
        bullet_points: [
            {"text":"One-Stop M&A Brokerage Service"},
            {"text": "Founder-Led or Family Business Sales"},
            {"text":"Deal Size Between $500K to $50 Million"},
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
            {"text":"Locally Rooted M&A Consultants"},
            {"text":"Deep Understandinf of Business Owners' Needs"},
            {"text":"Global Team with Cross-Border Expertise"},
        ]
    },
    {
        index: 3,
        title: "Extensive Network",
        intro: "Our extensive database connects committed buyers and sellers, ensuring serious engagement in every transaction. This network enhances matching opportunities and provides access to exclusive deals, setting us apart from traditional financial advisors. ",
        align_type: "double", 
        floating_image: STORY3,
        button_link:"",
        bullet_points: [
            {"text":"Vast Database of Committed Buyers and Sellers"},
            {"text": "Enhanced Matching Opportunities"},
            {"text":"Strategic Relationships"},
        ]
    },
    {
        index: 4,
        title: "Technology-Driven Solutions",
        intro: "We leverage cutting-edge digital tools and AI-powered matching to streamline the M&A process, targeting deal closures within 6-8 months—significantly faster than the typical 12 months required by traditional financial advisors.",
        align_type: "plain", 
        floating_image: STORY4,
        button_link:"",
        bullet_points: [
            {"text":"M&A Process Digitalization"},
            {"text": "AI-Powered Buyer-Seller Matching"},
            {"text":"Accelerated Deal Closure"},
        ]
    },
  ];

function Explore () {

    return (
        <div className={styles.container} id="Services">
            {/* <div className={styles.headingContainer}>
                <div className={styles.headingTitle}>
                Leading Business Succession and M&A Solutions for SMEs across Greater China and Southeast Asia
                </div>
           
                <div className={styles.headingIntro}>
                Connecting businesses for successful transitions and growth                </div>
            </div> */}
            {/* <Divider orientation="horizontal" 
                sx={{ width : "50%", 
                bgcolor: "#12837b", 
                height: "1px", 
                transform: "translateX(50%)",
                opacity: "0.4"
                
                }}></Divider> */}
            <div className={styles.subheadingContainer}>
                Why Choose Us
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