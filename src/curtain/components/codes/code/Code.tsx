import { CodeComponent } from "src/types/Code";
import { Checkbox } from "../../general/Checkbox";
import styles from "./Code.module.css"
import { useState } from "react";

export default function Code(props: CodeComponent) {
    const [isEnabled, setEnabled] = useState(false)
    const code = props.code

    return (
        <div className={styles.mod}>
            <Checkbox onChange={(checked) => setEnabled(checked)}/>
            <span className={styles.title}>{code.title}</span>
            <span className={styles.author}>{code.author}</span>
        </div>
    );
}