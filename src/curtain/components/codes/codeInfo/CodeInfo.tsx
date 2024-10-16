import styles from "./CodeInfo.module.css"

export default function CodeInfo() {
    return (
        <div className={styles.codeInfo}>
           <span className={styles.title}>Select a code to view more information about it</span>
        </div>
    );
}