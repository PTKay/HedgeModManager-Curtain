import styles from "./ModInfo.module.css"

export default function ModInfo() {
    return (
        <div className={styles.modinfo}>
           <span className={styles.title}>Select a mod to view more information about it</span>
        </div>
    );
}