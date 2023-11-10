import styles from "./Mod.module.css"

export default function Mod(props: ModComponent) {
    const mod = props.mod

    return (
        <div className={styles.mod}>
            <input type="checkbox" />
            <span className={styles.title}>{mod.title}</span>
            <span className={styles.version}>{mod.version}</span>
            <span className={styles.author}>{mod.author}</span>
        </div>
    );
}