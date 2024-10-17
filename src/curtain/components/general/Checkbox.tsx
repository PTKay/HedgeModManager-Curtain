import { useState } from "react"
import styles from "./Checkbox.module.css"

export function Checkbox(props : CheckboxProperties) {
    return (
        <label className={styles.container}>
            {props.label}
            <input type="checkbox" checked={props.isChecked} onChange={(e) => {props.onChange(!e.target.checked)}}/>
            <span className={styles.checkmark} />
        </label>
    )
}