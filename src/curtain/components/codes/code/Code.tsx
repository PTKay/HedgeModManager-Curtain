import { CodeComponent } from "src/types/Code";
import { Checkbox } from "../../general/Checkbox";
import styles from "./Code.module.css"

export default function Code(props: CodeComponent) {
    const code = props.code

    return (
        <div className={styles.mod}>
            <Checkbox />
            <span className={styles.title}>{code.title}</span>
            <span className={styles.author}>{code.author}</span>
        </div>
    );
}