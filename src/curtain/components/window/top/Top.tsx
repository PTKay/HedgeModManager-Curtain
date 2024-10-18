import styles from "./Top.module.css"
import icon from "assets/icon.png"

export default function Top() {
    return (
        <div className={styles.topBar}>
           <img draggable={false} src={icon} className={styles.icon}></img>
           <span className={styles.title}>HedgeModManager</span>
        </div>
    );
}