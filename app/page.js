import styles from "./page.module.css";
import bell from "../public/bell.png";
import Bell from "@/components/Bell";

export default function Home() {
    return (
        <main className={styles.main}>
            <p className={styles.titleMsg}>Hola!</p>
            <Bell />
            <div className={styles.notifyBox}>
                <div className={styles.notifyMessage}>
                    <h3>Lorem Ipsum</h3>
                    <p>This is a notification</p>
                </div>
                <button className={styles.notificationBtn}>
                    Send notification
                </button>
            </div>
        </main>
    );
}
