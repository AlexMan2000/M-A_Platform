import styles from "./Explore.module.less"
import StoryCard from "./StoryCard/StoryCard";

const stories = [
    {
        title: "SME M&A Expertise",
        intro: "Specializing in mergers and acquisitions for small and medium enterprises across Greater China and Southeast Asia, with a focus on businesses valued between US$500k and US$50m.",
        align_direction: "left", 
        floating_image: "",
        button_link:""
    },
    {
        title: "Regional Knowledge",
        intro: "Leveraging strong network of local partners and experienced consultants with decades of experience and deep understanding of local markets and industries to navigate the complexities of both domestic and cross-border transactions.",
        align_direction: "right", 
        floating_image: "",
        button_link:""
    },
    {
        title: "Extensive Network",
        intro: "Access to a vast network of domestic and international buyers and sellers, facilitating connections and enhancing opportunities for successful deal-making.",
        align_direction: "left", 
        floating_image: "",
        button_link:""
    },
    {
        title: "Technology-Driven Solutions",
        intro: "Utilizing advanced AI technology for efficient buyer-seller matching and data-driven insights, streamlining the M&A process for our clients.",
        align_direction: "left", 
        floating_image: "",
        button_link:""
    },
  ];

function Explore () {

    return (
        <div className={styles.container}>
            {stories && stories.length > 0 &&
                stories.map((elem, index) => {
                    return (
                        <StoryCard key={elem.toString() + index} {...elem}></StoryCard>
                    )
                })
            }
        </div>
    )
}


export default Explore;