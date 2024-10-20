import { ModComponent } from "src/types/Mod";
import { Checkbox } from "../../general/Checkbox";
import styles from "./Mod.module.css"
import { useState } from "react";

export default function Mod(props: ModComponent) {
    const mod = props.mod
    const [isEnabled, setEnabled] = useState(mod.isActive)

    return (
        <div className={styles.mod} onClick={() => {setEnabled(!isEnabled)}}>
            <Checkbox isChecked={isEnabled} onChange={ (checked) => setEnabled(checked) }/>
            <span className={styles.title}>{mod.title}</span>
            <span className={styles.version}>{mod.version}</span>
            <span className={styles.author}>{mod.author}</span>
        </div>
    );
}