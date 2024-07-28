import Image from "next/image";
import styles from "./bell.module.css";
const Bell = () => {
  return (
    <div className={styles.bellContainer}>
        <div className={`${styles.ring} ${styles.ring1}`}></div>
        <div className={`${styles.ring} ${styles.ring2}`}></div>
        <div className={`${styles.ring} ${styles.ring3}`}></div>
        <div className={`${styles.ring} ${styles.ring4}`}></div>
        {/* <img src="../public/bell.png" alt="bell_img"/> */}
        <Image className={styles.bell} src={"/bell.png"} alt="bell icon" width={50} height={50}/>
    </div>
  )
}

export default Bell