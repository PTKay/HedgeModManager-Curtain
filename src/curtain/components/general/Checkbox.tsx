import styles from "./Checkbox.module.css"

export function Checkbox(props : CheckboxProperties) {
    const startState = props.isChecked == null ? false : props.isChecked

    return (
        <label className={styles.container}>
            {props.label}
            <input type="checkbox" checked={startState} readOnly/>
            <span className={styles.checkmark} />
        </label>
    )
}