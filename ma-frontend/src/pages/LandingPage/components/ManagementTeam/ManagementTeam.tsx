import Card from "./components/Card";
import styles from "./ManagementTeam.module.less"
import VincentLai from "@/assets/svgs/vincent_lai.svg"

const data = [
  {
      name: "Vincent Lai",
      title: "Managing Partner, APAC Advisory & Coverage",
      image: VincentLai,
      desc: [
          "Specialised in M&A, strategic fundraising and financing transactions",
          "Domain knowledge across technology, media, telecommunications, consumer and financial services",
          "Previously investment banking at CITIC securities / CLSA",
          "Masters in Management at LSE, LLB at University of Warwick"
      ]
  }, 
  {
      name: "Vincent Lai",
      title: "Managing Partner, APAC Advisory & Coverage",
      image: VincentLai,
      desc: [
          "Specialised in M&A, strategic fundraising and financing transactions",
          "Domain knowledge across technology, media, telecommunications, consumer and financial services",
          "Previously investment banking at CITIC securities / CLSA",
          "Masters in Management at LSE, LLB at University of Warwick"
      ]
  }
]


const ManagementTeam = () => {
  return (
    <div className={styles.container} id="Team">
      <div className={styles.heading}>Management Team</div>
      <div className={styles.cards}>
        {data.map((card, index)=> (
          <Card key={card.toString() + index} name={card.name} title={card.title} image={card.image} bullets={card.desc}></Card>
        ))}
      </div>
    </div>
  );
};

export default ManagementTeam;