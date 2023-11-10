import styles from "./Side.module.css"

export default function Side() {
    return (
        <div className={styles.sidebar}>
            <div>
                <button className={styles.category}>Mods</button>
                <button className={styles.category}>Codes</button>
            </div>
            <div className={styles.bottom}>
                <button className={`${styles.category} ${styles.action}`}>Settings</button>
                <button className={`${styles.category} ${styles.action}`}>Play</button>
            </div>
        </div>
    );
}