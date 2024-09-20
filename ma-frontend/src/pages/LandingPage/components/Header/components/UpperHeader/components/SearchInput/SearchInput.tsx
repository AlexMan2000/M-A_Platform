
import styles from "./SearchInput.module.less"
import SearchIcon from "@/assets/svgs/search.svg"



export default function SearchInput() {
    return (
      <div className={styles.container}>
        <input className={styles.input} placeholder="Search Key Words"/>
        <div className={styles.searchIconWrapper}>
          <img src={SearchIcon} className={styles.searchIcon}></img>
        </div>
      </div>
    );
  }
  
